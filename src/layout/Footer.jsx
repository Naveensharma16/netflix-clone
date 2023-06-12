import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <a href="#">Audio description</a>
              </li>
              <li>
                <a href="#">Investor Relation</a>
              </li>
              <li>
                <a href="#">Legal Motice</a>
              </li>
            </ul>

            <p>
              <a href="#" id="service-code">
                service code
              </a>
            </p>
          </div>
          <div className="col">
            <ul>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie prefrence</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <a href="#">Gift card</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Corporate information</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>© 1997-2023 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
