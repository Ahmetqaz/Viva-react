import React from "react";
import { phone, instagram, titTok, copy } from "../components/Svg.";
const Footer = ({ strings }) => {
  return (
    <footer className="footer">
      <div className="autoContainer">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__box">
              <div className="logo">Viva La’mour</div>
              <p>{strings.footer.address}</p>
            </div>
            <div className="footer__group">
              <h4>{strings.footer.title1}</h4>
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
              <h4>{strings.footer.title2}</h4>
              <div className="footer__socials">
                <a
                  href="https://www.instagram.com/viva_beauty_ashgabat/?ref=syn_article_sp&hl=tl"
                  className="footer__socials-button"
                >
                  <span className="ico ico--stroke">{instagram}</span>
                  <span className="text">@viva_beauty_ashgabat</span>
                </a>
                <a
                  href="https://www.instagram.com/viva_lamour_wedding/"
                  className="footer__socials-button"
                >
                  <span className="ico ico--stroke">{instagram}</span>
                  <span className="text">@viva_lamour_wedding</span>
                </a>
                <a
                  href="https://www.instagram.com/viva_lamour_production/"
                  className="footer__socials-button"
                >
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
            <span className="text">{strings.footer.copy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
