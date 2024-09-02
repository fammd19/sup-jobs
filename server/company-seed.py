from config import app, db, bcrypt
from models import Candidate, Company

def create_records():
    with app.app_context():

        db.create_all()


        company1=Company(
            name="HarvestHub",
            abn=12345678920,
            size=85,
            industry="agriculture",
            logo="https://picsum.photos/201",
            about="At HarvestHub, we focus on providing innovative agricultural solutions to boost productivity and sustainability. Our technology enhances crop yields and streamlines farm management, making it easier for farmers to thrive in a competitive market.",
            mission_statement="Empowering farmers with cutting-edge technology to optimize productivity and sustainability.",
            website_link="https://harvesthub.com.au",
            linkedin_link="https://linkedin.com/harvesthub",
            instagram_link="https://instagram.com/harvesthub",
            facebook_link="https://facebook.com/harvesthub",
            admin_email="info@harvesthub.com.au",
            hashed_password="abcd1234"
        )

        company2=Company(
            name="Aussie Grains",
            abn=12345678921,
            size=150,
            industry="agriculture",
            logo="https://picsum.photos/202",
            about="Aussie Grains is dedicated to producing and supplying high-quality grains to both domestic and international markets. Our commitment to excellence ensures that every batch meets the highest standards, supporting Australian farmers and businesses alike.",
            mission_statement="Delivering premium grains to the world while supporting Australian agriculture.",
            website_link="https://aussiegrains.com.au",
            linkedin_link="https://linkedin.com/aussie-grains",
            instagram_link="https://instagram.com/aussiegrains",
            facebook_link="https://facebook.com/aussiegrains",
            admin_email="contact@aussiegrains.com.au",
            hashed_password="efgh5678"
        )

        company3=Company(
            name="BuildRight",
            abn=12345678922,
            size=60,
            industry="construction",
            logo="https://picsum.photos/203",
            about="BuildRight specializes in delivering high-quality construction projects on time and within budget. From residential buildings to commercial structures, our team of experts ensures that every project meets industry standards and client expectations.",
            mission_statement="Constructing superior buildings with precision and integrity.",
            website_link="https://buildright.com.au",
            linkedin_link="https://linkedin.com/buildright",
            instagram_link="https://instagram.com/buildright",
            facebook_link="https://facebook.com/buildright",
            admin_email="support@buildright.com.au",
            hashed_password="ijkl9012"
        )

        company4=Company(
            name="GreenScape Builders",
            abn=12345678923,
            size=8,
            industry="construction",
            logo="https://picsum.photos/204",
            about="GreenScape Builders is a forward-thinking construction company focused on sustainable and eco-friendly building practices. Our projects range from residential homes to commercial spaces, all designed with environmental impact in mind. We take a tech first approach to our materials development and designs, using extensive data to ensure that we have the most robust and environmentally friendly solutions for our customers. We do not aspire to be the cheapest, simply the best.",
            mission_statement="Building a greener future with sustainable, technology-driven construction practices.",
            website_link="https://greenscapebuilders.com.au",
            linkedin_link="https://linkedin.com/greenscape-builders",
            instagram_link="https://instagram.com/greenscapebuilders",
            facebook_link="https://facebook.com/greenscapebuilders",
            admin_email="info@greenscapebuilders.com.au",
            hashed_password="mnop3456"
        )

        company5=Company(
            name="LegalEase Solutions",
            abn=12345678924,
            size=40,
            industry="legal",
            logo="https://picsum.photos/205",
            about="LegalEase Solutions offers comprehensive legal services tailored to meet the needs of businesses and individuals. Our experienced team provides expert advice and representation in various areas of law, ensuring our clients receive the best possible outcomes.",
            mission_statement="Providing expert legal services with a focus on client success and satisfaction.",
            website_link="https://legaleasesolutions.com.au",
            linkedin_link="https://linkedin.com/legal-ease-solutions",
            instagram_link="https://instagram.com/legal_ease_solutions",
            facebook_link="https://facebook.com/legal-ease-solutions",
            admin_email="contact@legaleasesolutions.com.au",
            hashed_password="qrst6789"
        )

        company6=Company(
            name="Aussie Justice",
            abn=12345678925,
            size=60,
            industry="legal",
            logo="https://picsum.photos/206",
            about="Aussie Justice is committed to providing high-quality legal services across Australia. We offer expertise in various fields, including family law, criminal defense, and corporate law, ensuring that every client receives personalized and effective legal support.",
            mission_statement="Delivering top-notch legal services with a commitment to justice and client care.",
            website_link="https://aussiejustice.com.au",
            linkedin_link="https://linkedin.com/aussie-justice",
            instagram_link="https://instagram.com/aussiejustice",
            facebook_link="https://facebook.com/aussiejustice",
            admin_email="info@aussiejustice.com.au",
            hashed_password="uvwx9012"
        )

        company7=Company(
            name="MedTech Innovations",
            abn=12345678926,
            size=100,
            industry="health",
            logo="https://picsum.photos/207",
            about="MedTech Innovations is at the forefront of healthcare technology, developing advanced medical devices and solutions that improve patient care and streamline medical procedures. Our goal is to enhance the quality of healthcare through innovation and reliability.",
            mission_statement="Revolutionizing healthcare with cutting-edge technology for better patient outcomes.",
            website_link="https://medtechinnovations.com.au",
            linkedin_link="https://linkedin.com/medtech-innovations",
            instagram_link="https://instagram.com/medtechinnovations",
            facebook_link="https://facebook.com/medtechinnovations",
            admin_email="support@medtechinnovations.com.au",
            hashed_password="yzab1234"
        )

        company8=Company(
            name="HealthFirst Australia",
            abn=12345678927,
            size=85,
            industry="health",
            logo="https://picsum.photos/208",
            about="HealthFirst Australia is dedicated to improving public health through innovative solutions and services. From cutting-edge medical equipment to patient care programs, we are committed to enhancing the quality and accessibility of healthcare across the nation.",
            mission_statement="Enhancing public health with innovative solutions and dedicated services.",
            website_link="https://healthfirstaustralia.com.au",
            linkedin_link="https://linkedin.com/healthfirst-australia",
            instagram_link="https://instagram.com/healthfirstaustralia",
            facebook_link="https://facebook.com/healthfirstaustralia",
            admin_email="info@healthfirstaustralia.com.au",
            hashed_password="cdef5678"
        )

        company9=Company(
            name="EduTech Labs",
            abn=12345678928,
            size=120,
            industry="education",
            logo="https://picsum.photos/209",
            about="EduTech Labs focuses on integrating technology into education to create interactive and engaging learning experiences. Our products and services aim to enhance educational outcomes and support educators in delivering high-quality instruction.",
            mission_statement="Transforming education through technology for enriched learning experiences.",
            website_link="https://edutechlabs.com.au",
            linkedin_link="https://linkedin.com/edutech-labs",
            instagram_link="https://instagram.com/edutechlabs",
            facebook_link="https://facebook.com/edutechlabs",
            admin_email="contact@edutechlabs.com.au",
            hashed_password="ghij7890"
        )

        company10=Company(
            name="BrightFuture Learning",
            abn=12345678929,
            size=15,
            industry="education",
            logo="https://picsum.photos/210",
            about="BrightFuture Learning offers a range of educational resources and programs designed to support students and educators. Our goal is to foster a love of learning through innovative materials and personalized support, ensuring academic success for all.",
            mission_statement="Fostering a love of learning with innovative educational resources and support.",
            website_link="https://brightfuturelearning.com.au",
            linkedin_link="https://linkedin.com/brightfuture-learning",
            instagram_link="https://instagram.com/brightfuturelearning",
            facebook_link="https://facebook.com/brightfuturelearning",
            admin_email="info@brightfuturelearning.com.au",
            hashed_password="klmn1234"
        )

        company11=Company(
            name="TechGen Solutions",
            abn=12345678930,
            size=90,
            industry="technology",
            logo="https://picsum.photos/211",
            about="TechGen Solutions provides a wide range of technology services, including software development, IT consulting, and system integration. Our team of experts is dedicated to delivering high-quality solutions that drive innovation and support business growth.",
            mission_statement="Delivering innovative technology solutions to drive business success.",
            website_link="https://techgensolutions.com.au",
            linkedin_link="https://linkedin.com/techgen-solutions",
            instagram_link="https://instagram.com/techgensolutions",
            facebook_link="https://facebook.com/techgensolutions",
            admin_email="contact@techgensolutions.com.au",
            hashed_password="opqr5678"
        )

        company12=Company(
            name="UrbanBites",
            abn=12345678943,
            size=120,
            industry="hospitality",
            logo="https://picsum.photos/224",
            about="UrbanBites is a trendy restaurant chain that offers a fusion of urban cuisine, blending traditional flavors with modern culinary techniques. We focus on providing an unforgettable dining experience in a vibrant and welcoming atmosphere.",
            mission_statement="Delivering unforgettable dining experiences with innovative urban cuisine.",
            website_link="https://urbanbites.com.au",
            linkedin_link="https://linkedin.com/urbanbites",
            instagram_link="https://instagram.com/urbanbites",
            facebook_link="https://facebook.com/urbanbites",
            admin_email="contact@urbanbites.com.au",
            hashed_password="ijkl5678"
        )

        company13=Company(
            name="MediaVision",
            abn=12345678944,
            size=65,
            industry="media",
            logo="https://picsum.photos/225",
            about="MediaVision is a full-service media company that specializes in content creation, advertising, and digital marketing. We help brands connect with their audience through innovative campaigns and cutting-edge media solutions.",
            mission_statement="Connecting brands with their audience through innovative media solutions.",
            website_link="https://mediavision.com.au",
            linkedin_link="https://linkedin.com/mediavision",
            instagram_link="https://instagram.com/mediavision",
            facebook_link="https://facebook.com/mediavision",
            admin_email="info@mediavision.com.au",
            hashed_password="mnop9012"
        )

        company14=Company(
            name="Streamline Productions",
            abn=12345678945,
            size=90,
            industry="media",
            logo="https://picsum.photos/226",
            about="Streamline Productions offers top-tier video production services, from concept to completion. Our team of professionals creates compelling visual content for commercials, documentaries, and online platforms, helping brands tell their stories effectively.",
            mission_statement="Creating compelling visual content that helps brands tell their stories.",
            website_link="https://streamlineproductions.com.au",
            linkedin_link="https://linkedin.com/streamline-productions",
            instagram_link="https://instagram.com/streamlineproductions",
            facebook_link="https://facebook.com/streamlineproductions",
            admin_email="support@streamlineproductions.com.au",
            hashed_password="qrst3456"
        )

        company15=Company(
            name="GreenTech Solutions",
            abn=12345678946,
            size=150,
            industry="technology",
            logo="https://picsum.photos/227",
            about="GreenTech Solutions focuses on developing environmentally friendly technology solutions that reduce carbon footprints and promote sustainability. Our products and services are designed to help businesses and individuals embrace a greener future.",
            mission_statement="Promoting sustainability through innovative, eco-friendly technology solutions.",
            website_link="https://greentechsolutions.com.au",
            linkedin_link="https://linkedin.com/green-tech-solutions",
            instagram_link="https://instagram.com/greentechsolutions",
            facebook_link="https://facebook.com/greentechsolutions",
            admin_email="info@greentechsolutions.com.au",
            hashed_password="uvwx5678"
        )

        company16=Company(
            name="AgriTech Innovations",
            abn=12345678947,
            size=80,
            industry="agriculture",
            logo="https://picsum.photos/228",
            about="AgriTech Innovations is a leader in agricultural technology, providing tools and systems that enhance farming efficiency and crop yields. Our mission is to support farmers with the latest advancements in agri-tech, ensuring sustainable and profitable farming.",
            mission_statement="Supporting sustainable farming through advanced agricultural technology.",
            website_link="https://agritechinnovations.com.au",
            linkedin_link="https://linkedin.com/agritech-innovations",
            instagram_link="https://instagram.com/agritechinnovations",
            facebook_link="https://facebook.com/agritechinnovations",
            admin_email="contact@agritechinnovations.com.au",
            hashed_password="yzab9012"
        )

        company17=Company(
            name="BuildMaster",
            abn=12345678948,
            size=130,
            industry="cgs",
            logo="https://picsum.photos/229",
            about="BuildMaster is a trusted name in the supply of ready made home offices, known for delivering high-quality units that are ideal for WFH. Our commitment to excellence and client satisfaction sets us apart.",
            mission_statement="Building excellence and delivering quality in every office.",
            website_link="https://buildmaster.com.au",
            linkedin_link="https://linkedin.com/buildmaster",
            instagram_link="https://instagram.com/buildmaster",
            facebook_link="https://facebook.com/buildmaster",
            admin_email="info@buildmaster.com.au",
            hashed_password="cdef3456"
        )

        company18=Company(
            name="Legal Insights",
            abn=12345678949,
            size=40,
            industry="legal",
            logo="https://picsum.photos/230",
            about="Legal Insights offers specialized legal services in corporate law, intellectual property, and litigation. Our team of experienced lawyers provides strategic legal advice and representation, ensuring that our clients are well-protected and informed.",
            mission_statement="Providing strategic legal advice and representation with expertise and care.",
            website_link="https://legalinsights.com.au",
            linkedin_link="https://linkedin.com/legal-insights",
            instagram_link="https://instagram.com/legalinsights",
            facebook_link="https://facebook.com/legalinsights",
            admin_email="contact@legalinsights.com.au",
            hashed_password="ghij5678"
        )

        company19=Company(
            name="WellCare Health Services",
            abn=12345678950,
            size=95,
            industry="health",
            logo="https://picsum.photos/231",
            about="WellCare Health Services provides comprehensive healthcare solutions, including home care, nursing, and rehabilitation services. Our mission is to deliver high-quality, compassionate care that improves the health and well-being of our clients.",
            mission_statement="Delivering compassionate and high-quality healthcare services to improve well-being.",
            website_link="https://wellcarehealthservices.com.au",
            linkedin_link="https://linkedin.com/wellcare-health-services",
            instagram_link="https://instagram.com/wellcarehealthservices",
            facebook_link="https://facebook.com/wellcarehealthservices",
            admin_email="info@wellcarehealthservices.com.au",
            hashed_password="ijkl9012"
        )

        company20=Company(
            name="NextGen Media",
            abn=12345678951,
            size=70,
            industry="media",
            logo="https://picsum.photos/232",
            about="NextGen Media is an innovative media company that produces original content for television, film, and digital platforms. We focus on creating engaging stories that resonate with audiences and drive cultural conversations.",
            mission_statement="Creating original content that resonates and drives cultural conversations.",
            website_link="https://nextgenmedia.com.au",
            linkedin_link="https://linkedin.com/nextgen-media",
            instagram_link="https://instagram.com/nextgenmedia",
            facebook_link="https://facebook.com/nextgenmedia",
            admin_email="contact@nextgenmedia.com.au",
            hashed_password="mnop3456"
        )

        company21=Company(
            name="TechFusion",
            abn=12345678952,
            size=100,
            industry="technology",
            logo="https://picsum.photos/233",
            about="TechFusion specializes in providing integrated technology solutions for businesses of all sizes. From IT infrastructure to software development, we help companies leverage technology to improve efficiency and drive growth.",
            mission_statement="Integrating technology solutions to drive business growth and efficiency.",
            website_link="https://techfusion.com.au",
            linkedin_link="https://linkedin.com/techfusion",
            instagram_link="https://instagram.com/techfusion",
            facebook_link="https://facebook.com/techfusion",
            admin_email="info@techfusion.com.au",
            hashed_password="qrst7890"
        )

        company22=Company(
            name="Inspire Education",
            abn=12345678953,
            size=85,
            industry="education",
            logo="https://picsum.photos/234",
            about="Inspire Education offers online and in-person learning programs designed to help individuals achieve their educational goals. From professional development courses to academic tutoring, we provide resources that support lifelong learning and success.",
            mission_statement="Empowering individuals through education to achieve their goals.",
            website_link="https://inspireeducation.com.au",
            linkedin_link="https://linkedin.com/inspire-education",
            instagram_link="https://instagram.com/inspireeducation",
            facebook_link="https://facebook.com/inspireeducation",
            admin_email="contact@inspireeducation.com.au",
            hashed_password="uvwx1234"
        )

        company23=Company(
            name="NextGen Education",
            abn=12345678954,
            size=150,
            industry="education",
            logo="https://picsum.photos/229",
            about="NextGen Education is committed to revolutionizing the education system by integrating advanced technologies like AI and VR into the learning experience. Our goal is to provide students with cutting-edge tools and resources that enhance their understanding and prepare them for the future.",
            mission_statement="Revolutionizing education through advanced technology and innovative learning experiences.",
            website_link="https://nextgeneducation.com.au",
            linkedin_link="https://linkedin.com/nextgen-education",
            instagram_link="https://instagram.com/nextgeneducation",
            facebook_link="https://facebook.com/nextgeneducation",
            admin_email="info@nextgeneducation.com.au",
            hashed_password="abcd3456"
        )

        company24=Company(
            name="HarvestFresh Farms",
            abn=12345678955,
            size=80,
            industry="agriculture",
            logo="https://picsum.photos/230",
            about="HarvestFresh Farms is a leader in sustainable farming practices, producing fresh, organic produce for local and international markets. Our commitment to sustainability and innovation ensures that our farming methods protect the environment while delivering high-quality products.",
            mission_statement="Cultivating fresh, organic produce with a commitment to sustainability and innovation.",
            website_link="https://harvestfreshfarms.com.au",
            linkedin_link="https://linkedin.com/harvestfresh-farms",
            instagram_link="https://instagram.com/harvestfreshfarms",
            facebook_link="https://facebook.com/harvestfreshfarms",
            admin_email="contact@harvestfreshfarms.com.au",
            hashed_password="efgh5678"
        )

        company25=Company(
            name="Green Acres Agriculture",
            abn=12345678956,
            size=130,
            industry="agriculture",
            logo="https://picsum.photos/231",
            about="Green Acres Agriculture specializes in the production and distribution of high-quality grains and cereals. Our focus is on sustainable farming practices that ensure the long-term health of the land and the consistent quality of our products.",
            mission_statement="Growing high-quality grains and cereals with sustainable farming practices.",
            website_link="https://greenacresagriculture.com.au",
            linkedin_link="https://linkedin.com/greenacres-agriculture",
            instagram_link="https://instagram.com/greenacresagriculture",
            facebook_link="https://facebook.com/greenacresagriculture",
            admin_email="info@greenacresagriculture.com.au",
            hashed_password="ijkl9012"
        )

        company26=Company(
            name="LegalEase",
            abn=12345678957,
            size=60,
            industry="legal",
            logo="https://picsum.photos/232",
            about="LegalEase provides accessible and affordable legal services to individuals and small businesses. Our team of experienced lawyers is dedicated to simplifying the legal process, ensuring that our clients understand their rights and receive the representation they deserve.",
            mission_statement="Making legal services accessible and affordable for all.",
            website_link="https://legalease.com.au",
            linkedin_link="https://linkedin.com/legalease",
            instagram_link="https://instagram.com/legalease",
            facebook_link="https://facebook.com/legalease",
            admin_email="support@legalease.com.au",
            hashed_password="mnop3456"
        )

        company27=Company(
            name="Justice Partners",
            abn=12345678958,
            size=90,
            industry="legal",
            logo="https://picsum.photos/233",
            about="Justice Partners is a leading law firm specializing in corporate and commercial law. Our team of legal experts provides strategic advice and representation to businesses of all sizes, helping them navigate complex legal challenges with confidence.",
            mission_statement="Providing expert legal services to help businesses navigate complex challenges.",
            website_link="https://justicepartners.com.au",
            linkedin_link="https://linkedin.com/justice-partners",
            instagram_link="https://instagram.com/justicepartners",
            facebook_link="https://facebook.com/justicepartners",
            admin_email="contact@justicepartners.com.au",
            hashed_password="qrst5678"
        )

        company28=Company(
            name="Innovative Clothing",
            abn=12345678959,
            size=175,
            industry="cgs",
            logo="https://picsum.photos/234",
            about="Innovative Clothing is commited to redfining the boundaries of clothing in a sustainable way. If you have a clothing challenge, we're here for that",
            mission_statement="Building sustainable, modern clothing with innovative designs and materials.",
            website_link="https://innovativeclothing.com.au",
            linkedin_link="https://linkedin.com/innovativeclothing",
            instagram_link="https://instagram.com/innovativeclothing",
            facebook_link="https://facebook.com/innovativeclothing",
            admin_email="info@innovativeclothing.com.au",
            hashed_password="uvwx7890"
        )

        
        company29=Company(
            name="Spire Health Services",
            abn=12345678960,
            size=85,
            industry="health",
            logo="https://picsum.photos/235",
            about="Spire Health Services is dedicated to providing high-quality healthcare services with a focus on patient-centered care. We offer a range of medical and wellness services designed to promote health and well-being in the communities we serve.",
            mission_statement="Providing patient-centered healthcare services that promote overall well-being.",
            website_link="https://wellcarehealth.com.au",
            linkedin_link="https://linkedin.com/wellcare-health-services",
            instagram_link="https://instagram.com/wellcarehealthservices",
            facebook_link="https://facebook.com/wellcarehealthservices",
            admin_email="support@wellcarehealth.com.au",
            hashed_password="yzab1234"
        )

        company30=Company(
            name="SmartHealth Innovations",
            abn=12345678961,
            size=160,
            industry="health",
            logo="https://picsum.photos/236",
            about="SmartHealth Innovations is at the forefront of developing advanced healthcare technologies that improve patient outcomes and streamline healthcare processes. Our products include smart medical devices, health monitoring systems, and AI-driven diagnostic tools.",
            mission_statement="Transforming healthcare with advanced technology and innovative solutions.",
            website_link="https://smarthealthinnovations.com.au",
            linkedin_link="https://linkedin.com/smarthealth-innovations",
            instagram_link="https://instagram.com/smarthealthinnovations",
            facebook_link="https://facebook.com/smarthealthinnovations",
            admin_email="info@smarthealthinnovations.com.au",
            hashed_password="abcd7890"
        )

        company31= Company(
            name="The Plant Exchange",
            abn=11111111112,
            size=2,
            industry="technology",
            logo="https://picsum.photos/200",
            mission_statement="Helping every plant find a home, and every home find a plant.",
            about="Ever wanted some simple pants but didnt want to play crazy money for it? The plant exchange is here. Our platform is solely for plants and you can find and sell cuttings, as well as 'second-hand' whole plants near you.",
            website_link="https://plantex.com.au",
            admin_email="alison@plantex.com.au",
            hashed_password="1234abcd"
        )

        company32=Company(
            name="Docs Online",
            abn=11111111113,
            size=120,
            industry="health",
            logo="https://picsum.photos/201",
            about="Our first line triage service is like having a home call from a doctor, all online. Our Docs can answer your questions, give advice and, where possible, save a trip to the surgery.",
            mission_statement="To make sure everyone is seen & heard, and to save in-person Doctor's appointments for those who truly need it",
            website_link="https://docsonline.com.au",
            linkedin_link="https://linkedin.com/docsonline",
            admin_email="john@docsonline.com.au",
            hashed_password="1234abcd"
        )

        company33=Company(
            name="S'Up Jobs",
            abn=11111111114,
            size=120,
            industry="technology",
            logo="https://picsum.photos/202",
            about="We're passionate about start-ups and small businesses which is why you'll only find companies with less than 200 employees on our site. This is the job board for candidates who love getting their hands dirty and for companies searching for talent to take their business to the next level.",
            mission_statement="Connecting start-ups & small companies with talented candidates who want to help growing businesses achieve big things.",
            website_link="https://supjobs.com.au",
            linkedin_link="https://linkedin.com/sup-jobs",
            instagram_link="https://instagram.com/sup-jobs",
            facebook_link="https://facebook.com/sup-jobs",
            admin_email="hi@supjobs.com.au",
            hashed_password="1234abcd"
        )

        db.session.add_all([company1, company2, company3, company4, company5, company6, company7, company8, company9, company10,company11, company12, company13, company14, company15, company16, company17, company18, company19, company20,company21, company22, company23, company24, company25, company26, company27, company28, company29, company30, company31, company32, company33])
        db.session.commit()

        print("Records created successfully!")

if __name__ == "__main__":
    create_records()
