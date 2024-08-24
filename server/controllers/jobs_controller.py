from config import db, bcrypt
from flask import make_response, request, session
from flask_restful import Resource
from datetime import datetime, date
from models import Job, Company
from sqlalchemy import and_


class CreateJob (Resource):

    def post(self):
        
        if 'company_id' not in session:
            return make_response ({"error":"Unauthorised. No company logged in."}, 401)
        
        existing_jobs = Job.query.filter(Job.company_id == session['company_id']).all()
        
        for job in existing_jobs:
            if job.title.lower()==request.json.get('title').lower() and job.salary==request.json.get('salary'):
                return make_response({"error":"A job with the same title & salary exists for this company."}, 403)

        closing_date_str = request.json.get('closing_date')
        if closing_date_str:
            closing_date = datetime.strptime(closing_date_str, '%Y-%m-%d')
        else:
            closing_date = None

        job = Job(
                title = request.json.get('title'),
                salary = request.json.get('salary'),
                salary_comments = request.json.get('salary_comments'),
                department = request.json.get('department').lower(),
                role_description = request.json.get('role_description'),
                application_link = request.json.get('application_link'),
                location = request.json.get('location'),
                essential_experience = request.json.get('essential_experience'),
                optional_experience = request.json.get('optional_experience'),
                key_responsibility_1 = request.json.get('key_responsibility_1'),
                key_responsibility_2 = request.json.get('key_responsibility_2'),
                key_responsibility_3 = request.json.get('key_responsibility_3'),
                key_responsibility_4 = request.json.get('key_responsibility_4'),
                key_responsibility_5 = request.json.get('key_responsibility_5'),
                job_type = request.json.get('job_type'),
                closing_date = closing_date,
                date_posted = date.today(),
                company_id = session['company_id']
            )

        db.session.add(job)
        db.session.commit()

        
        if job.id:
            return make_response(job.to_dict(), 201)

        else:
            return make_response({"error": "Unable to create job"}, 400)


class AllJobs(Resource):

    def get(self):
        jobs = Job.query.all()

        if len(jobs) > 0:
            jobs_dict = [job.to_dict() for job in jobs]
            return make_response(jobs_dict, 200)
        else:
            return make_response({"message": "No jobs available"}, 200)



class JobsByCompany (Resource):

    def get(self, id):
        
        jobs = Job.query.filter(Job.company_id == id).all()

        if len(jobs)>0:
            jobs_dict = [ job.to_dict() for job in jobs ]
            return make_response(jobs_dict, 200)
            
        else:
            return make_response({"message": "No jobs posted for this company"}, 404)


class JobById (Resource):

    def get(self, id):
        
        job = Job.query.filter(Job.id == id).first()

        if job:
            return make_response(job.to_dict(), 200)
            
        else:
            return make_response({"message": "No job found with this ID"}, 404)


    def patch(self, id):

        if 'company_id' not in session:
            return make_response ({"error":"Unauthorised. No company logged in."}, 401)

        job = Job.query.filter(Job.id == id).first()

        if job.company_id == session['company_id']:
            for attr in request.json:
                setattr(job, attr, request.json[attr])
                
            db.session.commit()

            return make_response(job.to_dict(), 203)

        else:
            return make_response({"error":"Unauthorised"}, 403)



    def delete(self, id):
        
        if 'company_id' not in session:
            return make_response ({"error":"Unauthorised. No company logged in."}, 401)

        job = Job.query.filter(Job.id == id).first()

        if job:
            
            if job.company_id == session['company_id']:
                db.session.delete(job)
                db.session.commit()

                return make_response({"message":"Job successfully deleted"}, 204)

            else: 
                return make_response({"error":"Unauthorised"}, 403)
        
        else: 
            return make_response({"error":"No job found"}, 404)


class FilterJobs (Resource):

    def get (self):
        # min_size = request.args.get('min_size')
        # max_size = request.args.get('max_size')
        industry = request.args.get('industry')
        salary = request.args.get('salary')
        department = request.args.get('department')
        location = request.args.get('location')
        company_id = request.args.get('company_id')

        # #convert integers from args & set defaults
        # if min_size:
        #     min_size = int(min_size)
        # else:
        #     min_size = 0
        
        # if max_size:
        #     max_size = int(201)
        # else:
        #     max_size = 0

        if salary:
            salary=int(salary)
        else:
            salary = 0

        jobs = Job.query

        if department:
            if department.lower() == 'null':
                jobs = jobs.filter(Job.department.is_(None))
            else:
                jobs = jobs.filter(Job.department == department)
        
        if industry:
            if industry.lower() == 'null':
                jobs = jobs.join(Job.company).filter(Company.industry.is_(None))
            else:
                jobs = jobs.join(Job.company).filter(Company.industry == industry)

        if location:
            if location.lower() == 'null':
                jobs = jobs.filter(Job.location.is_(None))
            else:
                jobs = jobs.filter(Job.location == location)

        if company_id:
            if company_id == 'null':
                jobs = jobs.filter(Job.company_id.is_(None))
            else:
                jobs = jobs.filter(Job.company_id == company_id)

        jobs = jobs.filter(
            and_(
                # Job.company.size >= min_size,
                # Job.company.size <= max_size,
                Job.salary > salary
            )
        )

        filtered_jobs = jobs.all()

        if len(filtered_jobs)>0:
            jobs_dict = [ job.to_dict() for job in filtered_jobs ]
            return make_response(jobs_dict, 200)
            
        else:
            return make_response({"message": "No jobs available for this filter"}, 404)



