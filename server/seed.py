from config import app, db, bcrypt
from models import Candidate, Company

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

        company1= Company(
            name="The Plant Exchange",
            abn=11111111112,
            size=2,
            industry="Technology & software",
            logo="https://picsum.photos/200",
            about="Ever wanted some simple pants but didnt want to play crazy money for it? The plant exchange is here. Our platform is solely for plants and you can find and sell cuttings, as well as 'second-hand' whole plants near you.",
            website_link="https://plantex.com.au",
            admin_email="alison@plantex.com.au",
            hashed_password="1234abcd"
        )

        company2=Company(
            name="Docs Online",
            abn=11111111113,
            size=120,
            industry="health",
            logo="https://picsum.photos/200",
            about="Our first line triage service is like having a home call from a doctor. Get advie and save a trip to the surgery.",
            website_link="https://docsonline.com.au",
            linkedin_link="https://linkedin.com/docsonline123",
            admin_email="john@docsonline.com.au",
            hashed_password="1234abcd"
        )

        company3=Company(
            name="S'Up Jobs",
            abn=11111111114,
            size=120,
            industry="technology & software",
            logo="https://picsum.photos/200",
            about="We're passionate about start-ups and small businesses which is why you’ll only find companies with less than 200 employees on our site. This is the place for candidates who love getting their hands dirty and want to experience life in a start-up.",
            website_link="https://docsonline.com.au",
            instagram_link="https://instagram.com/sup-jobs",
            facebook_link="https://facebook.com/sup-jobs",
            admin_email="hi@supjobs.com.au",
            hashed_password="1234abcd"
        )

        # Add records to the session and commit
        db.session.add_all([candidate1, candidate2, candidate3, company1, company2, company3])
        db.session.commit()

        print("Records created successfully!")

if __name__ == "__main__":
    create_records()
