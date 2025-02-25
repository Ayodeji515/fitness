import { json, Link } from 'react-router-dom';
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfSkinCareBeauty</h4>
          <h1>Join The Lengends Of The Beauty World</h1>
          <p>
            CoilSkin is an e-commerce platform focused 
            on transforming the beauty industry by offering 
            authentic, affordable, and accessible skincare 
            and haircare products.
          </p>
          <Link to="/plans" className="btn lg" >Get Started</Link>

        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader