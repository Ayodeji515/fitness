import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Voluptates cumque perferendis aliquam quod dolores odio 
    nesciunt sapiente debitis est rem?
    </Header>

    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:ayodejiemmanuel515@gmail.com" target="_blank" rel="noreferrer noopener"> <MdEmail/> </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"> <FaFacebookF/> </a>
          <a href="https://wa.me/+2348148672181" target="_blank" rel="noreferrer noopener"> <IoLogoWhatsapp/> </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact