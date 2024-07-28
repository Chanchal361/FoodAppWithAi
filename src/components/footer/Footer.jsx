
import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import "../footer/footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <footer id="contact-us">
        <div className="footer_content">
          <div className="footer_left">
            <h2>Food.com</h2>
            <p>
              
Healthy food provides essential nutrients, boosts energy, and supports overall well-being. It includes fruits, vegetables, whole grains, and lean proteins.
            </p>
            <div className="footer_social">
             <Link to="https://github.com/Chanchal36"> <FaGithub/></Link>
              <Link to= "https://leetcode.com/u/chanchalraja/"><FaLinkedinIn/></Link>
              <Link to= "" ><ImProfile/></Link>
            </div>
          </div>
          <div className="footer_center">
            <h2>company</h2>
            <ul>
              <Link><li>Home</li></Link>
              <Link><li>About us</li></Link>
              <Link><li>Delivery</li></Link>
             <Link> <li>Privacy policy</li></Link>
            </ul>
          </div>
          <div className="footer_right">
            <h2>Get in touch</h2>
            <ul>
              <li>+91 9117954848</li>
              <li>chanchalr252@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer_copy-right">Copyright 2024 © || Chanchal Raja - All Right Reserved.</p>
        </footer>
    </>
  );
}

export default Footer;