from config import app, db, bcrypt
from models import Candidate

def create_records():
    with app.app_context():

        db.create_all()

        candidate1 = Candidate(
            email="janesmith@gmail.com",
            first_name="Jane",
            last_name="Smith",
            preferred_industry="cgs",
            preferred_department="technology",
            _hashed_password=bcrypt.generate_password_hash("1234abcde").decode('utf-8') 
        )

        candidate2=Candidate(
            email="marymc@gmail.com",
            hashed_password="Password1!",
            first_name="Mary",
            last_name="McTavish",
            preferred_industry="health",
            preferred_department="technology"
        )

        candidate3=Candidate(
            email="jamesallen@outlook.com",
            hashed_password="a1b2c3d4e5",
            first_name="James",
            last_name="Allen",
            preferred_industry="hospitality",
            preferred_department="finance"
        )


        # Add records to the session and commit
        db.session.add_all([candidate1, candidate2, candidate3])
        db.session.commit()

        print("Records created successfully!")

if __name__ == "__main__":
    create_records()
