from config import db, bcrypt
from flask import make_response, request, session
from flask_restful import Resource
from models import Candidate



class CandidateSignUp (Resource):


    def post(self):
        if 'candidate_id' in session or 'company_id' in session:
            return make_response({"error": "Unauthorized. User already logged in."}, 401)

        try:
            first_name = request.json.get('first_name')
            last_name = request.json.get('last_name')
            email = request.json.get('email')
            password = request.json.get('password')
            preferred_department = request.json.get('preferred_department')
            preferred_industry = request.json.get('preferred_industry')

            candidate = Candidate(
                first_name=first_name,
                last_name=last_name,
                email=email,
                hashed_password=password,
                preferred_department=preferred_department,
                preferred_industry=preferred_industry
            )

            db.session.add(candidate)
            db.session.commit()

            if candidate.id:
                session['candidate_id'] = candidate.id
                return make_response(candidate.to_dict(), 201)

        except ValueError as e:
            return make_response({"error": str(e)}, 400)
        
        except Exception as e:
            return make_response({"error": "An unexpected error occurred: " + str(e)}, 500)

class CandidateLogin(Resource):
    
    def post(self):

        if 'company_id' in session or 'candidate_id' in session:
            return make_response ({"error":"Unauthorised. User already logged in."}, 401)

        email = request.json.get('email')
        password = request.json.get('password')

        if email and password:

            candidate = Candidate.query.filter(Candidate.email == email).first()

            if candidate and candidate.authenticate(password):
                session['candidate_id'] = candidate.id
                return make_response(candidate.to_dict(), 200)

            else:
                return make_response({"error":"Unauthorised. Email or password incorrect."}, 401)

        else:
                
            return make_response({"error":"Bad request. Email and password are required for login"}, 400)


class CandidateLogout(Resource):
    def delete(self):

        if 'candidate_id' not in session:
            return make_response ({"error":"Unauthorised. No candidate logged in."}, 401)

        else:
            session.pop('candidate_id', None)
            return make_response({"message":"Logout successful."}, 204)



class CandidateAccount (Resource):

    def get(self):

        if 'candidate_id' not in session:
            return make_response ({"error":"Unauthorised. No candidate logged in."}, 401)

        candidate = Candidate.query.filter(Candidate.id == session['candidate_id']).first()

        if candidate:
            return make_response(candidate.to_dict(), 200)
        
        else: 
            return make_response({"message":"No candidate found."}, 403)

    def patch(self):

        if 'candidate_id' not in session:
            return make_response({"error": "Unauthorised. No candidate logged in."}, 401)

        candidate = Candidate.query.filter(Candidate.id == session['candidate_id']).first()

        if candidate:
            try:
                for attr in request.json:
                    if attr == 'email' and request.json[attr] == candidate.email:
                        continue
                    if attr == 'hashed_password' and request.json[attr] == "":
                        continue
                    setattr(candidate, attr, request.json[attr])
                    
                db.session.commit()
                return make_response(candidate.to_dict(), 200)
        
            except ValueError as e:
                return make_response({"error": str(e)}, 400)
            
            except Exception as e:
                return make_response({"error": "An unexpected error occurred: " + str(e)}, 500)
        
        else:
            return make_response({"error": "Candidate not updated."}, 404)


    def delete(self):

        if 'candidate_id' not in session:
            return make_response ({"error":"Unauthorised. No candidate logged in."}, 401)

        candidate = Candidate.query.filter(Candidate.id == session['candidate_id']).first()

        if candidate:

            db.session.delete(candidate)
            db.session.commit()

            session.pop('candidate_id', None)

            return make_response({"message":"Candidated deleted"}, 204)

        else: 

            return make_response({"message":"No candidate found"}, 404)


