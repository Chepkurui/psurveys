import React from "react";

export default function AboutView(props) {
  return (
    <section
      id="about"
      className="parallax section"
      style={{
        backgroundImage:
          'url("http://themepush.com/demo/runcharity/assets/img/1.jpg")',
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
                    FIND <span class="lighter">CAUSE</span>
                  </strong>{" "}
                  to support on your run
                </h3>
                <p className="lead">
                  Mentum lectus id turpis suscipit, ut egestas magna volutpat.
                  Donec a purus tellus. Nunc ut dolor eu est gravida auctor quis
                  vitae sapien.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="service-box wow zoomIn"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                <img
                  src="http://themepush.com/demo/runcharity/assets/img/dummy.jpg"
                  alt=""
                />
                <h3>
                  August 7, 2015 <br />
                  Square Garden
                </h3>
                <div className="text-left">
                  <p>
                    I will place all the necessary content for this event here,
                    including where they can register, join, attend &amp; so on.
                  </p>
                  <p>
                    If not enough room, I will link to learn more, a new event
                    page dedicated.
                  </p>
                  <p>Yap. Really looking goody awesome!</p>
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
                <h3>1.386 Participants</h3>
                <p>
                  Nullam posuere, libero id interdum hendrerit, tortor nisl
                  consectetur elit.
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
                <h3>195 Concerts</h3>
                <p>
                  Nullam posuere, libero id interdum hendrerit, tortor nisl
                  consectetur elit.
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
                <h3>268 Sponsors</h3>
                <p>
                  Nullam posuere, libero id interdum hendrerit, tortor nisl
                  consectetur elit.
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
                <h3>$5.647 Donated</h3>
                <p>
                  Nullam posuere, libero id interdum hendrerit, tortor nisl
                  consectetur elit.
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
