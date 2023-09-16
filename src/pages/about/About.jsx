import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptas aperiam nemo dolorum voluptatibus reprehenderit vel? 
      Quaerat quas iure tempora eius!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Provident quae placeat nobis sequi illo? Rerum explicabo natus magnam, 
            temporibus eius ab quis itaque quam dolore, nihil excepturi provident fugit eos!
            Voluptas aperiam nemo dolorum voluptatibus reprehenderit vel? 
            Quaerat quas iure tempora eius!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde nostrum ipsa nihil, 
            provident magnam sint dolore repellat laudantium, sapiente ex quam. Tempore voluptatem suscipit eligendi, 
            libero esse nobis provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim quis pariatur cumque laudantium mollitia tempore, 
            vel omnis tenetur, aliquam modi facere quas alias dolor dolorem, nam quibusdam debitis. Nisi.
          </p>
        </div>
      </div>
    </section>


    <section className="about__vision">
      <div className="container about__vision-container">

        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Provident quae placeat nobis sequi illo? Rerum explicabo natus magnam, 
            temporibus eius ab quis itaque quam dolore, nihil excepturi provident fugit eos!
            Voluptas aperiam nemo dolorum voluptatibus reprehenderit vel? 
            Quaerat quas iure tempora eius!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde nostrum ipsa nihil, 
            provident magnam sint dolore repellat laudantium, sapiente ex quam. Tempore voluptatem suscipit eligendi, 
            libero esse nobis provident.
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Provident quae placeat nobis sequi illo? Rerum explicabo natus magnam, 
            temporibus eius ab quis itaque quam dolore, nihil excepturi provident fugit eos!
            Voluptas aperiam nemo dolorum voluptatibus reprehenderit vel? 
            Quaerat quas iure tempora eius!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde nostrum ipsa nihil, 
            provident magnam sint dolore repellat laudantium, sapiente ex quam. Tempore voluptatem suscipit eligendi, 
            libero esse nobis provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim quis pariatur cumque laudantium mollitia tempore, 
            vel omnis tenetur, aliquam modi facere quas alias dolor dolorem, nam quibusdam debitis. Nisi.
          </p>
        </div>
      </div>
    </section>


    </>
  )
}

export default About