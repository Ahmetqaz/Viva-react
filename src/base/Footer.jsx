import React from "react";
import { phone, instagram, titTok, copy } from "../components/Svg.";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="autoContainer">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__box">
              <div className="logo">Viva La’mour</div>
              <p>Oguzhan street, home 120, Ashgabat, Turkmenistan</p>
            </div>
            <div className="footer__group">
              <h4>Contact us</h4>
              <div className="footer__socials">
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{phone} </span>
                  <span className="text">
                    viva_beauty_ashgabat: 954144 / 559197
                  </span>
                </a>
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{phone} </span>
                  <span className="text">viva_lamour_wedding: 954171</span>
                </a>
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{phone} </span>
                  <span className="text">viva_lamour_wedding: 954171</span>
                </a>
              </div>
            </div>
            <div className="footer__group footer__group--space">
              <h4>Social media accounts</h4>
              <div className="footer__socials">
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{instagram}</span>
                  <span className="text">@viva_beauty_ashgabat</span>
                </a>
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{instagram}</span>
                  <span className="text">@viva_lamour_wedding</span>
                </a>
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{instagram}</span>
                  <span className="text">@viva_lamour_production</span>
                </a>
              </div>
            </div>
            <div className="footer__group">
              <div className="footer__socials">
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{titTok}</span>
                  <span className="text">@viva_beauty_ashgabat</span>
                </a>
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{titTok}</span>
                  <span className="text">@viva_lamour_wedding</span>
                </a>
                <a href="#" className="footer__socials-button">
                  <span className="ico ico--stroke">{titTok}</span>
                  <span className="text">@viva_lamour_production</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__copy">
            <span className="ico">{copy}</span>
            <span className="text">2024, Viva La’mour. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
