import React, { Component } from 'react';
import Link from 'next/link';

class CtaArea extends Component {
    render() {
        return (
            <div className="cta-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="cta-content">
                                <h3>Schedule your free trial with <b>BBFS</b></h3>
                                <span>Our aims to provide a platform to nurture talent within grassroots & youth football to players and coaches through in-house training & development Programs</span>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-right">
                            <Link href="#contact">
                                <a className="btn btn-primary">Register Here</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaArea;