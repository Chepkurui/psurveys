import React from "react";

export default function GalleryView(props) {
  return (
    <section
      id="gallery"
      className="parallax section"
      style={{
        backgroundImage:
          'url("http://themepush.com/demo/runcharity/assets/img/2.jpg")',
      }}
    >
      <div className="wrapsection">
        <div
          className="parallax-overlay"
          style={{backgroundColor: "#00c1c1; opacity: 0.9"}}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 sol-sm-12">
              <div className="maintitle">
                <h3 className="section-title">Gallery</h3>
                <p className="lead wow flipInX">
                  Have a look at your past events gallery, see how we do what we do best. Connect with us today!
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <a
                href="https://ununsplash.imgix.net/photo-1429277158984-614d155e0017?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"
                title="This is the description"
              >
                <img
                  src="http://localhost:3000/assets/img/111.jpg"
                  alt=""
                  className="image-responsive"
                />
                <div className="description">
                  <span className="caption">
                    This is <b>awesome</b>
                  </span>
                  <span className="camera">
                    <i className="fa fa-camera"></i>
                  </span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://unsplash.imgix.net/uploads/14115408840644deb16b0/2dc933e3?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"
                title="This is the description"
              >
                <img
                  src="http://localhost:3000/assets/img/222.jpg"
                  alt=""
                  className="image-responsive"
                />
                <div className="description">
                  <span className="caption">
                    Caption <b>one</b>
                  </span>
                  <span className="camera">
                    <i className="fa fa-link"></i>
                  </span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://ununsplash.imgix.net/photo-1429277096327-11ee3b761c93?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"
                title="This is the description"
              >
                <img
                  src="http://localhost:3000/assets/img/333.jpg"
                  alt=""
                  className="image-responsive"
                />
                <div className="description">
                  <span className="caption">
                  Caption <b>Two</b>
                  </span>
                  <span className="camera">
                    <i className="fa fa-heart"></i>
                  </span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="unsplash.imgix.net/uploads/141327328038701afeede/eda0fb7c?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"
                title="This is the description"
              >
                <img
                  src="http://localhost:3000/assets/img/444.jpg"
                  alt=""
                  className="image-responsive"
                />
                <div className="description">
                  <span className="caption">
                  Caption <b>three</b>
                  </span>
                  <span className="camera">
                    <i className="fa fa-tachometer"></i>
                  </span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://ununsplash.imgix.net/photo-1418225043143-90858d2301b4?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"
                title="This is the description"
              >
                <img
                  src="http://localhost:3000/assets/img/555.jpg"
                  alt=""
                  className="image-responsive"
                />
                <div className="description">
                  <span className="caption">
                  Caption <b>Four</b>
                  </span>
                  <span className="camera">
                    <i className="fa fa-microphone"></i>
                  </span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://unsplash.imgix.net/photo-1428908799722-0a74e26ce7f6?fit=crop&amp;fm=jpg&amp;h=700&amp;q=75&amp;w=1050"
                title="This is the description"
              >
                <img
                  src="http://localhost:3000/assets/img/111.jpg"
                  alt=""
                  className="image-responsive"
                />
                <div className="description">
                  <span className="caption">
                  Caption <b>Five</b>
                  </span>
                  <span className="camera">
                    <i className="fa fa-coffee"></i>
                  </span>
                  <div className="clearfix"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
