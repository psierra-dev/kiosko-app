import { FooterStyle } from "./style";
import mplogo from "@public/mplogo.png";
import fblogo from "@public/fblogo.png";
import twlogo from "@public/twlogo.png";
import iglogo from "@public/iglogo.png";
import inlogo from "@public/inlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="con-footer0">
        <div className="con-footer">
          <small>@ 2022 Derechos reservados</small>

          <div className="con-footer2">
            <Image src={mplogo} alt="mp" />
          </div>

          <div className="con-footer3">
            <div className="footer-logo">
              <Image src={fblogo} alt="fblogo" />
            </div>

            <div className="footer-logo">
              <Image src={twlogo} alt="twlogo" />
            </div>

            <div className="footer-logo">
              <Image src={iglogo} alt="iglogo" />
            </div>

            <div className="footer-logo">
              <Image src={inlogo} alt="inlogo" />
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
