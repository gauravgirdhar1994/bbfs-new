import React, { Component } from "react";
import Link from "next/link";

class OurCenters extends Component {
  render() {
    return (
      <section id="services" className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              <b>Training Centers</b> Nearby
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="services-image">
                  <img src="/images/services/service1.jpeg" alt="image" />

                  <div className="icon">
                    <Link href="#contact">
                      <a className="btn btn-primary">Book Free Trial</a>
                    </Link>
                  </div>
                </div>

                <div className="services-content">
                  <h3>BBFS Ansal University Sec 55</h3>
                  <p>
                    Golf Course Road, Huda, Sushant Lok 2, Sector 55, Gurugram,
                    Haryana 122003
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="services-image">
                  <img src="/images/services/service1.jpeg" alt="image" />

                  <div className="icon">
                    <Link href="#contact">
                      <a className="btn btn-primary">Book Free Trial</a>
                    </Link>
                  </div>
                </div>

                <div className="services-content">
                  <h3>BBFS Ansal University Sec 55</h3>
                  <p>
                    Golf Course Road, Huda, Sushant Lok 2, Sector 55, Gurugram,
                    Haryana 122003
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="services-image">
                  <img src="/images/services/service1.jpeg" alt="image" />

                  <div className="icon">
                    <Link href="#contact">
                      <a className="btn btn-primary">Book Free Trial</a>
                    </Link>
                  </div>
                </div>

                <div className="services-content">
                  <h3>BBFS Ansal University Sec 55</h3>
                  <p>
                    Golf Course Road, Huda, Sushant Lok 2, Sector 55, Gurugram,
                    Haryana 122003
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default OurCenters;
