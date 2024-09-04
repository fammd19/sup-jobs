from config import db, bcrypt
from flask import make_response, request, session
from flask_restful import Resource
from datetime import datetime, date
from models import Job, Company
from sqlalchemy import and_, or_, desc


class CreateJob (Resource):
    def post(self):
        
        if 'company_id' not in session:
            return make_response ({"error":"Unauthorised. No company logged in."}, 401)
        
        existing_jobs = Job.query.filter(Job.company_id == session['company_id']).all()
        
        for job in existing_jobs:
            if job.title.lower()==request.json.get('title').lower() and job.salary==request.json.get('salary') and job.location==request.json.get('location'):
                return make_response({"error": "A job with the same title & salary already exists in this location."}, 400)

        closing_date_str = request.json.get('closing_date')
        if closing_date_str:
            closing_date = datetime.strptime(closing_date_str, '%Y-%m-%d')
        else:
            closing_date = None

        try:
            title = request.json.get('title')
            salary = request.json.get('salary')
            salary_comments = request.json.get('salary_comments')
            department = request.json.get('department').lower()
            role_description = request.json.get('role_description')
            application_link = request.json.get('application_link')
            location = request.json.get('location')
            postcode = request.json.get('postcode')
            essential_experience = request.json.get('essential_experience')
            optional_experience = request.json.get('optional_experience')
            key_responsibility_1 = request.json.get('key_responsibility_1')
            key_responsibility_2 = request.json.get('key_responsibility_2')
            key_responsibility_3 = request.json.get('key_responsibility_3')
            key_responsibility_4 = request.json.get('key_responsibility_4')
            key_responsibility_5 = request.json.get('key_responsibility_5')
            job_type = request.json.get('job_type')
            closing_date = closing_date
            date_posted = date.today()
            company_id = session['company_id']
            archived_job = request.json.get('archived_job') 
            
            if salary is None:
                raise ValueError("Salary is required")
            try:
                salary = int(salary)
            except ValueError:
                raise ValueError("Salary must be an integer")
            if salary < 0:
                raise ValueError("Salary cannot be negative")



            job = Job(
                title = title,
                salary = salary,
                salary_comments = salary_comments,
                department = department,
                role_description = role_description,
                application_link = application_link,
                location = location,
                postcode = postcode,
                essential_experience = essential_experience,
                optional_experience = optional_experience,
                key_responsibility_1 = key_responsibility_1,
                key_responsibility_2 = key_responsibility_2,
                key_responsibility_3 = key_responsibility_3,
                key_responsibility_4 = key_responsibility_4,
                key_responsibility_5 = key_responsibility_5,
                job_type = job_type,
                closing_date = closing_date,
                date_posted = date_posted,
                company_id = company_id,
                archived_job = archived_job
            )

            db.session.add(job)
            db.session.commit()

        
            if job.id:
                return make_response(job.to_dict(), 201)

        except ValueError as e:
            return make_response({"error": str(e)}, 400)

        except Exception as e:
            return make_response({"error": "An unexpected error occurred: " + str(e)}, 500)



class AllJobs(Resource):

    def get(self):
        jobs = Job.query.order_by(desc(Job.date_posted)).all()

        if len(jobs) > 0:
            jobs_dict = [job.to_dict() for job in jobs]
            return make_response(jobs_dict, 200)
        else:
            return make_response({"message": "No jobs available"}, 200)
            

class LiveJobs(Resource):

    def get(self):
        jobs = Job.query.filter(and_(Job.archived_job == False, Job.closing_date >= date.today())).order_by(desc(Job.date_posted)).all()

        if len(jobs) > 0:
            jobs_dict = [job.to_dict() for job in jobs]
            return make_response(jobs_dict, 200)
        else:
            return make_response({"message": "No jobs available"}, 200)
            

class JobsByCompany(Resource):

    def get(self, id):
        try:
            jobs = Job.query.filter(Job.company_id == id).all()

            if jobs:
                jobs_dict = [job.to_dict() for job in jobs]
                return make_response(jobs_dict, 200)
            else:
                return make_response({"message": "No jobs posted for this company"}, 404)

        except Exception as e:
            return make_response({"message": "An error occurred: " + str(e)}, 500)


class LiveJobsByCompany(Resource):

    def get(self, id):
        try:
            jobs = Job.query.filter(
                and_(Job.company_id == id, Job.archived_job == False, Job.closing_date >= date.today())
            ).order_by(Job.date_posted).all()

            if jobs:
                jobs_dict = [job.to_dict() for job in jobs]
                return make_response(jobs_dict, 200)
            else:
                return make_response({"message": "No live jobs posted for this company"}, 404)

        except Exception as e:
            return make_response({"message": "An error occurred: " + str(e)}, 500)



class JobById (Resource):

    def get(self, id):
        
        job = Job.query.filter(Job.id == id).first()

        if job:
            return make_response(job.to_dict(), 200)
            
        else:
            return make_response({"message": "No job found with this ID"}, 404)

    def patch(self, id):

        if 'company_id' not in session:
            return make_response({"error": "Unauthorized. No company logged in."}, 401)

        job = Job.query.filter(Job.id == id).first()

        existing_jobs = Job.query.filter(Job.company_id == session['company_id']).all()
        
        for existing_job in existing_jobs:
            if existing_job.id == job.id:
                continue
            if existing_job.title.lower()==request.json.get('title') and existing_job.salary==request.json.get('salary') and existing_job.location==request.json.get('location'):
                return make_response({"error": "A job with the same title & salary already exists in this location."}, 400)
        

        if job is None:
            return make_response({"error": "Job not found."}, 404)

        if job.company_id != session['company_id']:
            return make_response({"error": "Unauthorized. This job does not belong to the logged-in company."}, 403)

        if job:
            try:
                if 'closing_date' in request.json:
                    try:
                        request.json['closing_date'] = datetime.strptime(request.json['closing_date'], '%Y-%m-%d').date()
                    except ValueError:
                        return make_response({"error": "Invalid date format. Use YYYY-MM-DD."}, 400)

                for attr in request.json:
                    setattr(job, attr, request.json[attr])

                db.session.commit()
                return make_response(job.to_dict(), 203)
            
            except ValueError as e:
                return make_response({"error": str(e)}, 400)
            
            except Exception as e:
                return make_response({"error": "An unexpected error occurred: " + str(e)}, 500)



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
        industry = request.args.get('industry')
        salary = request.args.get('salary')
        department = request.args.get('department')
        location = request.args.get('location')
        company_id = request.args.get('company_id')

        if salary:
            salary=int(salary)
        else:
            salary = 0

        jobs = Job.query

        jobs = jobs.filter(and_(Job.archived_job == False, Job.closing_date >= date.today()))

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
                Job.salary >= salary
            )
        )

        filtered_jobs = jobs.all()

        if len(filtered_jobs)>0:
            jobs_dict = [ job.to_dict() for job in filtered_jobs ]
            return make_response(jobs_dict, 200)
            
        else:
            return make_response({"message": "No jobs available for this filter"}, 404)



class ArchivedJobs(Resource):

    def get(self):
        archived_jobs = Job.query.filter(Job.archived_job == True).all()

        if len(archived_jobs) > 0:
            jobs_dict = [job.to_dict() for job in archived_jobs]
            return make_response(jobs_dict, 200)
        else:
            return make_response({"message": "No archived jobs"}, 200)



class ArchivedJobsByCompany(Resource):

    def get(self, id):
        # archived_jobs = Job.query.filter(and_(Job.archived_job == True), Job.company_id==id).all()

        archived_jobs = Job.query.filter(
            and_(
                or_(
                    Job.archived_job == True,
                    Job.closing_date < date.today()
                ),
                Job.company_id == id
            )
        ).all()
        
        if len(archived_jobs) > 0:
            jobs_dict = [job.to_dict() for job in archived_jobs]
            return make_response(jobs_dict, 200)
        else:
            return make_response({"message": "No archived jobs"}, 200)

