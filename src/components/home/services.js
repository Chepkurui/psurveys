import React from "react";

export default function AboutView(props) {
  return (
    <section
      id="about"
      className="parallax section"
      style={{
        backgroundImage:
          'url("http://localhost:3000/assets/img/ls.jpg")',
      }}
    >
      <div className="wrapsection">
        <div
          className="parallax-overlay"
          style={{backgroundColor: "#01b0d1; opacity: 0.9"}}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Title */}
              <div className="maintitle">
                <h3 className="section-title">
                  <strong>
                  Service Catalog <span class="lighter"></span>
                  </strong>{" "}
                  
                </h3>
                <p className="lead">
                  Please check out our range of services
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="service-box wow zoomIn"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {/* <img
                  src="http://themepush.com/demo/runcharity/assets/img/dummy.jpg"
                  alt=""
                /> */}
                <h3>
                Boundary surveys {/*<br />*/}
                </h3>
                <div className="text-left">
                  {/* <p>
                    I will place all the necessary content for this event here,
                    including where they can register, join, attend &amp; so on.
                  </p> */}
                  <p>
                  Boundary surveys to property development, our team is fully experienced in all the procedures involved
for a residential land survey. The diverse backgrounds of our team members provide an integrated
approach in performing land evaluation, determining land-use entitlements, and performing building
surveys of residential property, developing a final design, and starting the construction of the project.
                  </p>
                  {/* <p>Yap. Really looking goody awesome!</p> */}
                  <p class="text-center">
                    <button type="button" class="btn btn-info btn-md">
                      <a href="#">Learn More</a>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="service-box wow flipInY"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                <span className="glyphicon glyphicon-stats"></span>
                <h3>Subdivision Development</h3>
                <p>
                In order to maximize our client’s investments, our team strategically finds the most effective and
economically practical solutions for each project
                </p>
                <button type="button" class="btn btn-info btn-md">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="service-box wow flipInY"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span className="glyphicon glyphicon-tree-deciduous"></span>
                <h3>Individual Land Owners</h3>
                <p>
                Our team is available to serve the public with any professional services requested and guarantee to provide high-quality services to our clients.  We provide services for individual land owners, small firms, and some of the top firms in Uganda
                </p>
                <button type="button" class="btn btn-info btn-md">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="service-box wow flipInY"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <span className="glyphicon glyphicon-heart"></span>
                <h3>ENGINEERING SURVEYS</h3>
                <p>
                We have been recognized by our clients for the quality of the work we do and are committed to delivering sustainable engineering and design. We have very competent staff with vast experience in the following fields
                </p>
                <button type="button" class="btn btn-info btn-md">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="service-box wow flipInY"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <span className="glyphicon glyphicon-usd"></span>
                <h3> REAL ESTATE</h3>
                <p>
                Our service and offering combines exclusive and top quality real estate with a personal and customer focused sales strategy. Process surveys is your one stop for genuine commercial, residential and agricultural farm land in Uganda at very pocket friendly prices
                </p>
                <button type="button" class="btn btn-info btn-md">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
