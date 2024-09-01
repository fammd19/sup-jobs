from config import app, db, bcrypt
from models import Job, Company
from datetime import date, datetime, timedelta

def create_records():
    with app.app_context():

        db.create_all()



        job1 = Job(
            title="Junior Designer",
            salary=80000,
            salary_comments="Base salary with stock options",
            department="design",
            role_description="This role is a great opportunity for an enthusiastic designer to learn and make a difference. Work with our Lead Designer on new features and assets.",
            application_link="https://buildright.com.au/careers/junior-designer",
            location="nsw",
            postcode="2000",
            essential_experience="Passion for user experience above all else",
            optional_experience="Experience in a fast-paced start-up",
            key_responsibility_1="Create best-in-class design for user interfaces.",
            key_responsibility_2="Support cross-functional teams with design requests.",
            key_responsibility_3="Work with our Lead Designer to maintain brand design standards.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=10),
            date_posted=date.today(),
            company_id=3
        )

        job2 = Job(
            title="Software Engineer",
            salary=95000,
            salary_comments="Competitive salary with health benefits",
            department="technology",
            role_description="Develop cutting-edge applications and scalable solutions while collaborating in an agile environment.",
            application_link="https://aussiegrains.com.au/careers/software-engineer",
            location="vic",
            postcode="3000",
            essential_experience="Proficiency in Python and JavaScript.",
            optional_experience="Experience with AWS or Azure.",
            key_responsibility_1="Develop and maintain scalable software solutions.",
            key_responsibility_2="Collaborate in an agile environment.",
            key_responsibility_3="Implement best practices in software development.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=15),
            date_posted=date.today(),
            company_id=2
        )

        job3 = Job(
            title="Marketing Specialist",
            salary=70000,
            salary_comments="Performance-based bonuses available",
            department="marketing",
            role_description="Drive marketing campaigns, develop content strategies, and manage social media to enhance brand visibility and engagement.",
            application_link="info@greenscapebuilders.com.au",
            location="qld",
            postcode="4000",
            essential_experience="Experience in digital marketing.",
            optional_experience="Knowledge of SEO and SEM strategies.",
            key_responsibility_1="Plan and execute digital marketing campaigns.",
            key_responsibility_2="Manage content creation and social media.",
            key_responsibility_3="Analyze marketing metrics and adjust strategies.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=20),
            date_posted=date.today(),
            company_id=28
        )

        job4 = Job(
            title="Operations Manager",
            salary=105000,
            salary_comments="Base salary with annual performance bonus",
            department="operations",
            role_description="Oversee day-to-day operations, streamline processes, and ensure team efficiency to meet business goals.",
            application_link="https://legaleasesolutions.com.au/careers",
            location="nsw",
            postcode="2000",
            essential_experience="Proven experience in operations management.",
            optional_experience="Lean Six Sigma certification.",
            key_responsibility_1="Manage and optimize operational processes.",
            key_responsibility_2="Lead cross-departmental operational initiatives.",
            key_responsibility_3="Ensure alignment with business objectives.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=30),
            date_posted=date.today(),
            company_id=5
        )

        job5 = Job(
            title="Finance Assistant",
            salary=60000,
            salary_comments="Annual bonuses based on performance",
            department="finance",
            role_description="Assist the finance team with budget management, invoice processing, and financial reporting.",
            application_link="https://example.com.au/careers",
            location="vic",
            postcode="3000",
            essential_experience="Experience with accounting software.",
            optional_experience="Knowledge of financial regulations.",
            key_responsibility_1="Assist in budget preparation and monitoring.",
            key_responsibility_2="Process invoices and manage accounts payable.",
            key_responsibility_3="Prepare financial reports for management.",
            job_type="internship",
            closing_date=date.today() + timedelta(days=25),
            date_posted=date.today(),
            company_id=6
        )

        job6 = Job(
            title="Lead Developer",
            salary=120000,
            salary_comments="Generous equity & chance to come on as a co-founder",
            department="technology",
            role_description="Lead technical projects, mentor developers, and ensure high-quality software delivery.",
            application_link="https://example.com.au/careers",
            location="nsw",
            postcode="2000",
            essential_experience="5+ years in software development.",
            optional_experience="Experience leading a team.",
            key_responsibility_1="Lead technical projects and teams.",
            key_responsibility_2="Ensure high-quality software delivery.",
            key_responsibility_3="Mentor junior developers and provide technical guidance.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=40),
            date_posted=date.today(),
            company_id=7
        )

        job7 = Job(
            title="UX Designer",
            salary=85000,
            salary_comments="Base salary with performance bonuses",
            department="design",
            role_description="Design intuitive user experiences for our web and mobile platforms, focusing on usability and user satisfaction.",
            application_link="careers@example.com.au",
            location="qld",
            postcode="4000",
            essential_experience="Strong portfolio demonstrating UX design skills.",
            optional_experience="Experience with user testing.",
            key_responsibility_1="Design and prototype user experiences.",
            key_responsibility_2="Collaborate with product teams to implement designs.",
            key_responsibility_3="Conduct user research and testing.",
            job_type="freelance",
            closing_date=date.today() + timedelta(days=15),
            date_posted=date.today(),
            company_id=8
        )

        job8 = Job(
            title="Operations Coordinator",
            salary=70000,
            salary_comments="Health and dental benefits",
            department="operations",
            role_description="Coordinate operational activities, manage schedules, and support the operations team to ensure smooth and efficient processes.",
            application_link="careers@example.com.au",
            location="nsw",
            postcode="2000",
            essential_experience="Excellent organizational skills.",
            optional_experience="Experience with project management tools.",
            key_responsibility_1="Coordinate day-to-day operational tasks.",
            key_responsibility_2="Manage team schedules and timelines.",
            key_responsibility_3="Assist in process improvement initiatives.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=20),
            date_posted=date.today(),
            company_id=9
        )

        job9 = Job(
            title="Senior Financial Analyst",
            salary=90000,
            salary_comments="Performance bonuses and benefits",
            department="finance",
            role_description="Analyze financial data, create reports, and support strategic decision-making to drive financial performance.",
            application_link="careers@example.com.au",
            location="vic",
            postcode="3000",
            essential_experience="Advanced knowledge of financial modeling and analysis.",
            optional_experience="Experience with financial forecasting.",
            key_responsibility_1="Analyze financial data and trends.",
            key_responsibility_2="Prepare detailed financial reports.",
            key_responsibility_3="Support budgeting and forecasting activities.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=25),
            date_posted=date.today(),
            company_id=10
        )

        job10 = Job(
            title="Frontend Developer",
            salary=85000,
            salary_comments="Base salary with annual bonus",
            department="technology",
            role_description="Develop and maintain user-facing features, ensuring a seamless and responsive experience for web and mobile applications.",
            application_link="careers@example.com.au",
            location="sa",
            postcode="5000",
            essential_experience="Proficiency in HTML, CSS, and JavaScript.",
            optional_experience="Experience with modern frontend frameworks like React or Vue.",
            key_responsibility_1="Build and maintain user-facing features.",
            key_responsibility_2="Ensure responsiveness and performance across devices.",
            key_responsibility_3="Collaborate with designers and backend developers.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=30),
            date_posted=date.today(),
            company_id=11
        )

        job11 = Job(
            title="Digital Marketing Manager",
            salary=85000,
            salary_comments="Performance-based incentives available",
            department="marketing",
            role_description="Lead our digital marketing strategies, enhance online presence, and manage campaigns across various digital channels.",
            application_link="https://indeed.com.au",
            location="act",
            postcode="2600",
            essential_experience="Proven track record in digital marketing.",
            optional_experience="Experience with Google Ads and SEO tools.",
            key_responsibility_1="Develop and execute digital marketing strategies.",
            key_responsibility_2="Manage and optimize online advertising campaigns.",
            key_responsibility_3="Analyze performance metrics and adjust strategies.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=20),
            date_posted=date.today(),
            company_id=12
        )

        job12 = Job(
            title="Senior Backend Developer",
            salary=110000,
            salary_comments="Competitive salary with equity options",
            department="technology",
            role_description="Lead backend development projects, design robust systems, and ensure high performance and scalability of applications.",
            application_link="https://example.com.au",
            location="vic",
            postcode="3000",
            essential_experience="Extensive experience in backend technologies like Node.js or Java.",
            optional_experience="Experience with microservices architecture.",
            key_responsibility_1="Design and implement scalable backend systems.",
            key_responsibility_2="Ensure high performance and reliability.",
            key_responsibility_3="Collaborate with frontend developers and other teams.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=30),
            date_posted=date.today(),
            company_id=13
        )

        job13 = Job(
            title="Graphic Designer",
            salary=75000,
            salary_comments="Base salary with health benefits",
            department="design",
            role_description="Create visual content for digital and print media, contributing to branding and marketing efforts.",
            application_link="careers@example.com.au",
            location="sa",
            postcode="5000",
            essential_experience="Strong portfolio in graphic design.",
            optional_experience="Experience with Adobe Creative Suite.",
            key_responsibility_1="Design visual content for various platforms.",
            key_responsibility_2="Collaborate with marketing and design teams.",
            key_responsibility_3="Ensure consistency with brand guidelines.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=15),
            date_posted=date.today(),
            archived_job=True,
            company_id=14
        )

        job14 = Job(
            title="Junior Marketing Analyst",
            salary=65000,
            salary_comments="Annual performance bonus",
            department="marketing",
            role_description="Assist in analyzing market trends, evaluating campaign performance, and supporting marketing strategies.",
            application_link="https://indeed.com.au",
            location="nsw",
            postcode="2000",
            essential_experience="Basic understanding of marketing analytics.",
            optional_experience="Experience with data visualization tools.",
            key_responsibility_1="Analyze market trends and campaign performance.",
            key_responsibility_2="Support marketing strategy development.",
            key_responsibility_3="Prepare reports and present findings.",
            job_type="part-time",
            closing_date=date.today() + timedelta(days=20),
            date_posted=date.today(),
            company_id=15
        )

        job15 = Job(
            title="Finance Manager",
            salary=95000,
            salary_comments="Includes performance bonuses and benefits",
            department="finance",
            role_description="Manage financial operations, prepare budgets, and oversee financial reporting and compliance.",
            application_link="https://example.com.au",
            location="vic",
            postcode="3000",
            essential_experience="Experience in financial management and budgeting.",
            optional_experience="Knowledge of compliance regulations.",
            key_responsibility_1="Manage financial planning and analysis.",
            key_responsibility_2="Prepare and oversee budgets.",
            key_responsibility_3="Ensure compliance with financial regulations.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=25),
            date_posted=date.today(),
            company_id=16
        )

        job16 = Job(
            title="Lead UX Designer",
            salary=95000,
            salary_comments="Competitive salary with annual bonus",
            department="design",
            role_description="Lead UX design projects, develop user-centered design strategies, and collaborate with product teams to enhance user experiences.",
            application_link="https://indeed.com.au",
            location="wa",
            postcode="6000",
            essential_experience="Proven experience in UX design and user research.",
            optional_experience="Experience with prototyping tools.",
            key_responsibility_1="Lead UX design projects and initiatives.",
            key_responsibility_2="Develop user-centered design strategies.",
            key_responsibility_3="Collaborate with product teams to enhance user experience.",
            job_type="part-time",
            closing_date=date.today() + timedelta(days=30),
            date_posted=date.today(),
            company_id=17
        )

        job17 = Job(
            title="Financial Controller",
            salary=115000,
            salary_comments="Equity options and performance bonuses available",
            department="finance",
            role_description="Oversee financial operations, prepare reports, and ensure accuracy and compliance in financial reporting.",
            application_link="careers@example.com.au",
            location="sa",
            postcode="5000",
            essential_experience="Extensive experience in financial management.",
            optional_experience="Experience with financial software and ERP systems.",
            key_responsibility_1="Oversee financial reporting and compliance.",
            key_responsibility_2="Prepare and manage financial budgets.",
            key_responsibility_3="Ensure accuracy in financial reporting.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=35),
            date_posted=date.today(),
            company_id=18
        )

        job18 = Job(
            title="Content Marketing Specialist",
            salary=70000,
            salary_comments="Base salary plus performance incentives",
            department="marketing",
            role_description="Create and manage content marketing strategies, write engaging content, and analyze content performance.",
            application_link="https://example.com.au",
            location="act",
            postcode="2600",
            essential_experience="Experience in content creation and marketing.",
            optional_experience="Knowledge of content management systems.",
            key_responsibility_1="Develop and implement content marketing strategies.",
            key_responsibility_2="Write and manage engaging content.",
            key_responsibility_3="Analyze and report on content performance.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=15),
            date_posted=date.today(),
            company_id=19
        )

        job19 = Job(
            title="Technical Product Manager",
            salary=110000,
            salary_comments="Includes stock options and annual bonus",
            department="technology",
            role_description="Manage product development lifecycle, work with engineering teams, and ensure alignment with technical and business goals.",
            application_link="https://indeed.com.au",
            location="nsw",
            postcode="2000",
            essential_experience="Experience in product management and technical development.",
            optional_experience="Knowledge of Agile methodologies.",
            key_responsibility_1="Manage the product development lifecycle.",
            key_responsibility_2="Collaborate with engineering teams to align technical goals.",
            key_responsibility_3="Ensure product meets business objectives.",
            job_type="contract",
            closing_date=date.today() + timedelta(days=20),
            date_posted=date.today(),
            archived_job=True,
            company_id=20
        )

        job20 = Job(
            title="Junior Operations Analyst",
            salary=65000,
            salary_comments="Base salary with benefits",
            department="operations",
            role_description="Assist in analyzing operational processes, preparing reports, and supporting process improvement initiatives.",
            application_link="https://example.com.au",
            location="qld",
            postcode="4000",
            essential_experience="Strong analytical skills and attention to detail.",
            optional_experience="Experience with data analysis tools.",
            key_responsibility_1="Analyze operational processes and data.",
            key_responsibility_2="Prepare and present reports on process efficiency.",
            key_responsibility_3="Support process improvement initiatives.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=25),
            date_posted=date.today(),
            company_id=21
        )

        
        job21=Job(
            title = "Junior Designer",
            salary = 80000,
            salary_comments= "Base salary with stock options",
            department = "technology",
            role_description ="This role is an amazing opportnity for an enthusiastic designer to learn from the best & really make a difference. Working with our Lead Designer you'll be responsible for designing new features, building assets and as much or as little else as you'd like to get involved with acrosse the business.",
            application_link = "https://supjobs.com.au/careers",
            location = "Sydney",
            postcode = "2000",
            essential_experience = "Passion for user experience above all else",
            optional_experience = "Experience in a fast-paced start-up",
            key_responsibility_1 = "Create best-in-class design for user interfaces.",
            key_responsibility_2 = "Support cross functional teams with design requests.",
            key_responsibility_3 = "Work with our Lead Designer to maintain brand design standards..",
            job_type = "full-time",
            closing_date = date.today() + timedelta(days=10),
            date_posted = date.today(),
            company_id=33
        )

        job22 = Job(
            title="Senior Software Engineer",
            salary=130000,
            salary_comments="Includes equity options",
            department="technology",
            role_description="Lead the development of our core technology platform, ensuring scalability and performance. Work with a team of talented engineers to drive innovation.",
            application_link="https://techfusion.com.au/careers/senior-software-engineer",
            location="act",
            postcode="2601",
            essential_experience="7+ years in software development, experience with cloud technologies",
            optional_experience="Experience in a leadership role within a tech company",
            key_responsibility_1="Architect and develop scalable software solutions.",
            key_responsibility_2="Mentor junior engineers and foster a collaborative team environment.",
            key_responsibility_3="Work closely with product teams to align technology with business goals.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=30),
            date_posted=date.today(),
            company_id=21
        )

        job23 = Job(
            title="Marketing Coordinator",
            salary=70000,
            salary_comments="Plus performance bonuses",
            department="marketing",
            role_description="Support the marketing team in executing campaigns that drive enrollment and brand awareness. A great role for someone looking to grow in educational marketing.",
            application_link="contact@inspireeducation.com.au",
            location="nsw",
            postcode="2000",
            essential_experience="2+ years in marketing, preferably in the education sector",
            optional_experience="Experience with digital marketing tools and social media management",
            key_responsibility_1="Assist in the planning and execution of marketing campaigns.",
            key_responsibility_2="Manage social media accounts and engage with the community.",
            key_responsibility_3="Analyze campaign performance and report on key metrics.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=25),
            date_posted=date.today(),
            company_id=22
        )

        job24 = Job(
            title="VR Curriculum Developer",
            salary=90000,
            salary_comments="Includes opportunities for professional development",
            department="design",
            role_description="Develop immersive VR-based curricula that enhance student learning experiences. Collaborate with educators and technologists to innovate education.",
            application_link="https://nextgeneducation.com.au/careers/vr-curriculum-developer",
            location="qld",
            postcode="4000",
            essential_experience="Experience in curriculum development and VR technologies",
            optional_experience="Background in educational psychology or instructional design",
            key_responsibility_1="Design and develop VR-based educational modules.",
            key_responsibility_2="Work with subject matter experts to ensure content accuracy.",
            key_responsibility_3="Test and refine VR curricula based on student feedback.",
            job_type="contract",
            closing_date=date.today() + timedelta(days=20),
            date_posted=date.today(),
            company_id=23
        )

        job25 = Job(
            title="Operations Manager",
            salary=110000,
            salary_comments="Includes relocation assistance",
            department="operations",
            role_description="Oversee day-to-day operations at our sustainable farm, ensuring that production meets quality standards and that our practices align with sustainability goals.",
            application_link="https://harvestfreshfarms.com.au/careers/operations-manager",
            location="sa",
            postcode="5000",
            essential_experience="5+ years in operations management, preferably in agriculture",
            optional_experience="Knowledge of sustainable farming practices",
            key_responsibility_1="Manage farm operations and logistics.",
            key_responsibility_2="Ensure compliance with environmental and safety regulations.",
            key_responsibility_3="Optimize resource use and minimize waste.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=18),
            date_posted=date.today(),
            company_id=24
        )

        job26 = Job(
            title="Sustainability Analyst",
            salary=95000,
            salary_comments="Performance-based bonuses",
            department="finance",
            role_description="Analyze and report on the financial impact of our sustainability initiatives. Provide insights to guide our sustainable farming strategies.",
            application_link="info@greenacresagriculture.com.au",
            location="wa",
            postcode="6000",
            essential_experience="3+ years in financial analysis, with a focus on sustainability",
            optional_experience="Experience in the agriculture industry",
            key_responsibility_1="Conduct financial analysis on sustainability projects.",
            key_responsibility_2="Prepare reports and presentations for stakeholders.",
            key_responsibility_3="Collaborate with the operations team to align financial goals with sustainability.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=22),
            date_posted=date.today(),
            company_id=25
        )

        job27 = Job(
            title="Partner",
            salary=0,
            salary_comments="Generous equity options for right partner",
            department="co-founder",
            role_description="We've been proclaimed as one of the most exciting legal start-ups of the decade and we want to live up to that. This role would be a partnership with our founder to drive the business forward. Please get in touch if you'd like more information and to see if you ight be a good fit. Once in a lifetime opportunity.",
            application_link="support@legalease.com.au",
            location="remote",
            essential_experience="Experience navigating the legal sector and strong business acumen",
            optional_experience="Start-up experience, leadership preferred",
            key_responsibility_1="Work with the founder as a partner to make strategic decisions",
            key_responsibility_2="Define our business goals and develop a roadmap to achieve them",
            key_responsibility_3="Contribute new ideas, knowledge and experience.",
            job_type="volunteer",
            closing_date=date.today() + timedelta(days=15),
            date_posted=date.today(),
            company_id=26
        )

        job28 = Job(
            title="Corporate Law Intern",
            salary=30000,
            salary_comments="Internship with potential for full-time offer",
            department="operations",
            role_description="Work closely with our corporate law team, gaining exposure to high-profile cases and learning from seasoned legal professionals.",
            application_link="https://justicepartners.com.au/careers/corporate-law-intern",
            location="nsw",
            postcode="2000",
            essential_experience="Pursuing a law degree, with a focus on corporate law",
            optional_experience="Previous internship experience in a law firm",
            key_responsibility_1="Assist with legal research and case preparation.",
            key_responsibility_2="Draft and review legal documents under supervision.",
            key_responsibility_3="Participate in client meetings and court sessions.",
            job_type="internship",
            closing_date=date.today() + timedelta(days=10),
            date_posted=date.today(),
            company_id=27
        )

        job29 = Job(
            title="Freelance Fashion Designer",
            salary=80000,
            salary_comments="Project-based with potential for long-term collaboration",
            department="design",
            role_description="Create innovative and sustainable fashion designs for our upcoming collections. Work remotely with our design team to bring fresh ideas to life.",
            application_link="info@innovativeclothing.com.au",
            location="remote",
            essential_experience="5+ years in fashion design, with a portfolio showcasing innovative work",
            optional_experience="Experience in sustainable fashion",
            key_responsibility_1="Design unique and sustainable clothing items.",
            key_responsibility_2="Collaborate with the production team to ensure design feasibility.",
            key_responsibility_3="Stay updated on fashion trends and sustainability practices.",
            job_type="freelance",
            closing_date=date.today() + timedelta(days=28),
            date_posted=date.today(),
            company_id=28
        )

        job30 = Job(
            title="Health Services Coordinator",
            salary=70000,
            salary_comments="Includes healthcare benefits",
            department="operations",
            role_description="Coordinate and manage the delivery of health services across multiple locations, ensuring high standards of patient care and efficient operations.",
            application_link="https://spirehealthservices.com.au/careers/health-services-coordinator",
            location="nt",
            postcode="0800",
            essential_experience="3+ years in healthcare management or coordination",
            optional_experience="Experience with patient management systems",
            key_responsibility_1="Coordinate the day-to-day operations of health services.",
            key_responsibility_2="Ensure compliance with healthcare regulations.",
            key_responsibility_3="Manage staff schedules and patient appointments.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=16),
            date_posted=date.today(),
            company_id=29
        )

        job31 = Job(
            title="AI Healthcare Researcher",
            salary=140000,
            salary_comments="Includes research grants",
            department="technology",
            role_description="Lead research projects focused on developing AI-driven healthcare solutions that improve patient outcomes and streamline medical processes.",
            application_link="https://smarthealthinnovations.com.au/careers/ai-healthcare-researcher",
            location="tas",
            postcode="7000",
            essential_experience="PhD in AI or related field, with experience in healthcare applications",
            optional_experience="Experience in leading research teams",
            key_responsibility_1="Conduct cutting-edge research in AI healthcare technologies.",
            key_responsibility_2="Collaborate with healthcare professionals to identify key challenges.",
            key_responsibility_3="Publish research findings in leading journals and conferences.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=14),
            date_posted=date.today(),
            company_id=30
        )

        job32 = Job(
            title="Health Services Coordinator",
            salary=70000,
            salary_comments="Includes healthcare benefits",
            department="operations",
            role_description="Coordinate and manage the delivery of health services across multiple locations, ensuring high standards of patient care and efficient operations.",
            application_link="https://spirehealthservices.com.au/careers/health-services-coordinator",
            location="nt",
            postcode="0800",
            essential_experience="3+ years in healthcare management or coordination",
            optional_experience="Experience with patient management systems",
            key_responsibility_1="Coordinate the day-to-day operations of health services.",
            key_responsibility_2="Ensure compliance with healthcare regulations.",
            key_responsibility_3="Manage staff schedules and patient appointments.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=16),
            date_posted=date.today(),
            company_id=29
        )

        job33 = Job(
            title="AI Healthcare Researcher",
            salary=140000,
            salary_comments="Includes research grants",
            department="technology",
            role_description="Lead research projects focused on developing AI-driven healthcare solutions that improve patient outcomes and streamline medical processes.",
            application_link="https://smarthealthinnovations.com.au/careers/ai-healthcare-researcher",
            location="tas",
            postcode="7000",
            essential_experience="PhD in AI or related field, with experience in healthcare applications",
            optional_experience="Experience in leading research teams",
            key_responsibility_1="Conduct cutting-edge research in AI healthcare technologies.",
            key_responsibility_2="Collaborate with healthcare professionals to identify key challenges.",
            key_responsibility_3="Publish research findings in leading journals and conferences.",
            job_type="full-time",
            closing_date=date.today() + timedelta(days=14),
            date_posted=date.today(),
            company_id=30
        )




        db.session.add_all([job1,job2,job3,job4,job5,job6,job7,job8,job9,job10])
        db.session.add_all([job11,job12,job13,job14,job15,job16,job17,job18,job19,job20])
        db.session.add_all([job21,job22,job23,job24,job25,job26,job27,job28,job29,job30,job31])
        db.session.commit()

        print("Records created successfully!")

if __name__ == "__main__":
    create_records()