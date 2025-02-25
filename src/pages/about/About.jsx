import Header from '../../components/Header'
import HeaderImage from '../../images/logo2.png'
import StoryImage from '../../images/face1.avif'
import VisionImage from '../../images/face2.jpeg'
import MissionImage from '../../images/face3.jpg'
import './about.css'


const About = () => {
  return (
    <>
    <Header title="About CoilSkin" image={HeaderImage}>
      CoilSkin is an e-commerce platform focused on transforming the beauty industry by offering authentic, affordable, and accessible skincare and haircare products.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            CoilSkin is an innovative e-commerce platform redefining how skincare and hair care products are accessed 
            and experienced. Our mission is to provide authentic, affordable and effective beauty solutions that cater 
            to diverse needs. Designed with simplicity and convenience in mind, CoilSkin makes it easy for customers to 
            discover products tailored to their unique hair and skincare journeys.
          </p>
          <p>
            What sets CoilSkin apart is our commitment to personalization and expertise. We go beyond being a marketplace 
            by offering curated product recommendations and insights from beauty professionals. This ensures that every 
            customer receives trusted guidance to address their individual concerns, empowering them to make informed 
            choices and embrace their natural beauty with confidence.
          </p>
          <p>
            At CoilSkin, we celebrate diversity and inclusivity by creating a platform that values every customer’s unique needs. 
            We are dedicated to making quality beauty products accessible to all, helping you achieve your goals effortlessly while 
            maintaining affordability and authenticity. Your beauty journey is personal and at CoilSkin, we are here to support every step of the way.
          </p>
        </div>
      </div>
    </section>


    <section className="about__vision">
      <div className="container about__vision-container">

        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            At CoilSkin, our vision is to transform the beauty industry by making authentic and personalized 
            skincare and hair care accessible to everyone. We strive to create a world where people feel 
            empowered to embrace their individuality and care for their unique beauty needs with confidence. 
            By combining expertise, inclusivity, and innovation, we aim to redefine beauty as a celebration of diversity and self-expression. 
          </p>
          <p>
            We are committed to building a platform that fosters trust, accessibility, and authenticity, 
            ensuring that every customer feels seen and valued. Through this vision, CoilSkin seeks to 
            inspire a global movement that reshapes the way beauty is experienced—making it more personal, 
            inclusive, and impactful for generations to come.
          </p>
      
        </div>

        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>



    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Our mission is to revolutionize the beauty experience by providing authentic, affordable, 
            and high-quality skincare and hair care solutions that cater to diverse needs. We aim to 
            create a seamless platform where individuals can easily discover products tailored to their 
            unique beauty journeys, making self-care accessible and effortless for everyone.
          </p>
          <p>
            We are committed to empowering our customers through personalized support and expert-driven 
            recommendations. By combining curated product offerings with trusted guidance, we strive to 
            help individuals make informed choices, embrace their natural beauty, and achieve their 
            personal care goals with confidence.
          </p>
          <p>
            At CoilSkin, inclusivity and authenticity are at the heart of everything we do. Our mission is 
            to create a space where everyone feels represented and supported, regardless of their skin type, 
            hair texture, or budget. Through this commitment, we seek to redefine beauty as a journey of 
            self-love and empowerment, accessible to all.
          </p>
        </div>
      </div>
    </section>


    </>
  )
}

export default About