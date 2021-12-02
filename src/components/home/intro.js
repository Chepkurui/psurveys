import React from "react";

export default function IntroView(props) {
  return (
    <section id="hero" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="herotext">
              <h1
                className="wow bounceInDown"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                PROCESS SURVEYS <span class="lighter">(U) LTD</span>
              </h1>
              <p
                className="lead wow zoomIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                To be the leading surveying firm in Uganda and in East Africa
              </p>
              <p>
                <a
                  href="#"
                  class="btn btn-default btn-lg wow fadeInLeft"
                  role="button"
                >
                  {" "}
                  View Gallery{" "}
                </a>{" "}
                &nbsp;{" "}
                <a
                  href="#"
                  class="btn btn-default btn-lg wow fadeInRight"
                  role="button"
                >
                  Find a Cause
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    </section>
  );
}
