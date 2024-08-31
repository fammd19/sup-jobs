from config import db, bcrypt
from flask import make_response, request, session
from flask_restful import Resource
from models import Company

class CompanySignUp (Resource):

    # def post(self):

        # if 'candidate_id' in session or 'company_id' in session:
        #     return make_response ({"error":"Unauthorised. User already logged in."}, 401)

        # company = Company(
        #         name = request.json.get('name'),
        #         abn = request.json.get('abn'),
        #         size = request.json.get('size'),
        #         industry = request.json.get('industry').lower(),
        #         mission_statement = request.json.get('mission_statement'),
        #         about = request.json.get('about'),
        #         website_link = request.json.get('website_link'),
        #         facebook_link = request.json.get('facebook_link'),
        #         instagram_link = request.json.get('instagram_link'),
        #         linkedin_link = request.json.get('linkedin_link'),
        #         logo = request.json.get('logo'),
        #         admin_email = request.json.get('admin_email'),
        #         hashed_password = request.json.get('password')
        #     )

        # db.session.add(company)
        # db.session.commit()

        # if company.id:
        #         session['company_id'] = company.id
        #         return make_response(company.to_dict(), 201)

        # else:            
        #     return make_response({"error": "Bad request. Unable to create company"}, 400)

    def post(self):
        if 'candidate_id' in session or 'company_id' in session:
            return make_response({"error": "Unauthorised. User already logged in."}, 401)

        try:
            name = request.json.get('name')
            abn = request.json.get('abn')
            industry = request.json.get('industry').lower()  # Convert to lowercase for consistency
            mission_statement = request.json.get('mission_statement')
            about = request.json.get('about')
            size = request.json.get('size')

            if size is None:
                raise ValueError("Size is required")
            try:
                size = int(size)
            except ValueError:
                raise ValueError("Size must be an integer")

            if size <= 0 or size > 200:
                raise ValueError("Size must be between 1 and 200")

            website_link = request.json.get('website_link')
            facebook_link = request.json.get('facebook_link')
            instagram_link = request.json.get('instagram_link')
            linkedin_link = request.json.get('linkedin_link')
            logo = request.json.get('logo')
            admin_email = request.json.get('admin_email')
            hashed_password = request.json.get('password')

            if not name:
                raise ValueError("Name cannot be blank")
            if Company.query.filter(Company.name == name).first():
                raise ValueError("Name registered to an existing company")

            if Company.query.filter(Company.abn == abn).first():
                raise ValueError("ABN registered to an existing company")

            company = Company(
                name=name,
                abn=abn,
                size=size,
                industry=industry,
                mission_statement=mission_statement,
                about=about,
                website_link=website_link,
                facebook_link=facebook_link,
                instagram_link=instagram_link,
                linkedin_link=linkedin_link,
                logo=logo,
                admin_email=admin_email,
                hashed_password=hashed_password
            )

            db.session.add(company)
            db.session.commit()

            if company.id:
                session['company_id'] = company.id
                return make_response(company.to_dict(), 201)

        except ValueError as e:
            return make_response({"error": str(e)}, 400)

        # except IntegrityError as e:
        #     db.session.rollback()
        #     return make_response({"error": "Integrity error: " + str(e)}, 400)

        except Exception as e:
            return make_response({"error": "An unexpected error occurred: " + str(e)}, 500)

class CompanyLogin(Resource):
    
    def post(self):

        if 'company_id' in session or 'candidate_id' in session:
            return make_response ({"error":"Unauthorised. User already logged in."}, 401)

        admin_email = request.json.get('admin_email')
        password = request.json.get('password')

        if admin_email and password:
            company = Company.query.filter(Company.admin_email == admin_email).first()

            if company and company.authenticate(password):
                session['company_id'] = company.id
                return make_response(company.to_dict(), 200)

            else:
                return make_response({"error":"Unauthorised. Email or password incorrect."}, 401)

        else:
            return make_response({"error":"Bad request. Email and password are required for login"}, 400)



class CompanyLogout(Resource):
    def delete(self):

        if 'company_id' not in session:
            return make_response ({"error":"Unauthorised. No company logged in."}, 401)

        session.pop('company_id', None)
        return make_response({"message":"Logout successful"}, 204)


class CompanyAccount(Resource):

    def get(self):
        if 'company_id' not in session:
            return make_response ({"error":"Unauthorised. No company logged in."}, 401)

        company = Company.query.filter(Company.id == session['company_id']).first()

        if company:
            return make_response(company.to_dict(), 200)
        
        else: 
            return make_response({"message":"No company found."}, 404)



    def patch(self):
        if 'company_id' not in session:
            return make_response({"error":"Unauthorised. No company logged in."}, 401)
        
        company = Company.query.filter(Company.id == session['company_id']).first()

        if company:
            try:
                for attr in request.json:
                    if attr == 'admin_email' and request.json[attr] == company.admin_email:
                        continue
                    setattr(company, attr, request.json[attr])
                
                db.session.commit()
                return make_response(company.to_dict(), 200)

            except ValueError as e:
                return make_response({"error": str(e)}, 400)
            
            except Exception as e:
                return make_response({"error": "An unexpected error occurred: " + str(e)}, 500)
        
        else:
            return make_response({"error": "Company not found."}, 404)

    # def patch(self):

    #     company = Company.query.filter(Company.id == session['company_id']).first()

    #     if company:
    #         for attr in request.json:
    #             if attr == 'admin_email' and request.json[attr] == company.admin_email:
    #                 continue
    #             setattr(company, attr, request.json[attr])
                
    #         db.session.commit()
    #         return make_response(company.to_dict(), 200)

    #     else:
    #         return make_response({"error": "Company not updated."}, 404)


    # def delete(self):

    #     if 'company_id' not in session:
    #         return make_response ({"error":"Unauthorised. No company logged in."}, 401)

    #     company = Company.query.filter(Company.id == session['company_id']).first()

    #     if company:

    #         db.session.delete(company)
    #         db.session.commit()

    #         session.pop('company_id', None)
    #         return make_response({"message":"Company deleted"}, 204)

    #     else: 
    #         return make_response({"error":"No company account found"}, 404)


class CompanyById(Resource):

    def get(self, id):
        
        company = Company.query.filter(Company.id == id).first()

        if company:
            return make_response(company.to_dict(), 200)
            
        else:
            return make_response({"message": "No company found with this ID"}, 404)


class AllCompanies(Resource):

    def get(self):
        companies = Company.query.all()

        if len(companies) > 0:
            companies_dict = [company.to_dict() for company in companies]
            return make_response(companies_dict, 200)
        else:
            return make_response({"message": "No companies available"}, 200)

