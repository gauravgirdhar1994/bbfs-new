import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
              <h5 className="footer-link-heading">Centers in Gurgaon</h5>
              <ul className="footer-link">
                <li>
                  <a href="/foundation-training/gurgaon/ansal-university-sec-55">
                    <a>BBFS Ansal University Sec 55</a>
                  </a>
                </li>
                <li>
                  <a href="/foundation-training/gurgaon/swiss-cottage-school-sec-23">
                    <a>BBFS Swiss Cottage School Sec 23</a>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <h5 className="footer-link-heading">Centers in</h5>
              <div className="row">
                <div className="col-md-6 col-6">
                  <ul className="">
                    <li>
                      <a href="/foundation-training/delhi">
                        <a>Delhi</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/mumbai">
                        <a>Mumbai</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/chandigarh">
                        <a>Chandigarh</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/dehradun">
                        <a>Dehradun</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/bangalore">
                        <a>Bangalore</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/noida">
                        <a>Noida</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/greater-noida">
                        <a>Greater Noida</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/gurgaon">
                        <a>Gurgaon</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/ahmedabad">
                        <a>Ahmedabad</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/kochi">
                        <a>Kochi</a>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-6">
                  <ul>
                    <li>
                      <a href="/foundation-training/faridabad">
                        <a>Faridabad</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/hyderabad">
                        <a>Hyderabad</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/jalandhar">
                        <a>Jalandhar</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/sohna">
                        <a>Sohna</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/chennai">
                        <a>Chennai</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/nashik">
                        <a>Nashik</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/nilambur">
                        <a>Nilambur</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/ghaziabad">
                        <a>Ghaziabad</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/hosur">
                        <a>Hosur</a>
                      </a>
                    </li>
                    <li>
                      <a href="/foundation-training/shillong">
                        <a>Shillong</a>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 imp-links">
              <h5 className="footer-link-heading">Important links</h5>
              <ul className="footer-link">
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/terms-conditions">Terms and conditions</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy policy</a>
                </li>
                <li>
                  <a href="/career">Careers</a>
                </li>
                <li>
                  <a href="/refund-cancellation-policy">
                    Refund/Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bootom-footer">
            <div className="row align-items-end">
              <div className="col-lg-3 col-sm-6">
                <div className="d-flex align-items-end column-1 bhaichunt-footer-responsive">
                  <img
                    className="footer-logo"
                    src="/images/BBFS-Logo-with-text.png"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="d-flex align-items-center column-2 talisman-bottom">
                  <p>A unit of</p>
                  <img
                    className="footer-talisman-img"
                    src="/images/Talisman-New-logo-1.png"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="social-icons d-flex">
                  <ul>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="icofont-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="icofont-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="icofont-instagram"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="icofont-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="icofont-pinterest"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <p className="mb-3">Download the app</p>
                {/* <div className="d-flex download-icons">
				<a className="enjogo-logo mob-r-0" target="_blank" href="https://www.enjogo.com/"><img className="enjogo-img" src="/images/enJogo-logo-1.png" alt="icon-apple"/></a>
				<a target="_blank" className="mob-r-0" href="https://play.google.com/store/apps/details?id=com.bbfs.parent&amp;hl=en">
					<svg className="icon icon-google-play-badge">
						<use xlink:href="/images/icons.svg#icon-google-play-badge"></use>
					</svg>
				</a>
				<a target="_blank" href="https://apps.apple.com/in/app/talisman-bbfs/id1484241127">
					<svg className="icon icon-fapple-badge">
						<use xlink:href="/images/icons.svg#icon-apple-badge"></use>
					</svg>
				</a>
			</div> */}
              </div>
            </div>
          </div>

          {/* <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <p>
                <i className="icofont-copyright"></i>
                {currentYear} BBFS
              </p>
            </div>

            <div className="col-lg-6 col-md-5">
              <ul>
                <li>
                  <Link href="#">
                    <a>
                      <i className="icofont-facebook"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <i className="icofont-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <i className="icofont-instagram"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <i className="icofont-linkedin"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <i className="icofont-pinterest"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
