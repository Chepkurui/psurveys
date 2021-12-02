import React from "react";

export default function StoreView(props) {
  return (
    <section
      id="slider"
      className="parallax section"
      style={{
        backgroundImage: 'url("http://themepush.com/demo/runcharity/assets/img/4.jpg")'}}      
    >
      <div className="wrapsection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="Carousel" class="carousel slide">
                <ol className="carousel-indicators">
                  <li
                    data-target="#Carousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#Carousel" data-slide-to="1"></li>
                  <li data-target="#Carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <blockquote>
                      <p className="lead">
                        You have not lived today until you have done something
                        for someone who can never repay you.
                      </p>
                      <small>John Bunyan, Marathon</small>
                    </blockquote>
                  </div>
                  <div className="item">
                    <blockquote>
                      <p className="lead">
                        The simplest acts of kindness are by far more powerful
                        then a thousand heads bowing in prayer.
                      </p>
                      <small>Mahatma Gandhi</small>
                    </blockquote>
                  </div>
                  <div className="item">
                    <blockquote>
                      <p className="lead">
                        There is no exercise better for the heart than reaching
                        down and lifting people up.
                      </p>
                      <small>John Holmes, Organizer</small>
                    </blockquote>
                  </div>
                </div>
                <a
                  className="left carousel-control"
                  href="#Carousel"
                  data-slide="prev"
                >
                  <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a
                  className="right carousel-control"
                  href="#Carousel"
                  data-slide="next"
                >
                  <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
