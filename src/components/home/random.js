import React from "react";

export default function RandomView(props) {
  return (
    <section
      className="parallax section"
      style={{
        backgroundImage:
          'url("http://themepush.com/demo/runcharity/assets/img/3.jpg")',
      }}
    >
      <div className="wrapsection">
        <div className="parallax-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 sol-sm-12">
              <div className="maintitle">
                <h3 className="section-title justtitle">
                  Participation is everything
                </h3>
                <p class="lead bottom0 wow bounceInUp">
                  Fusce fermentum lectus id turpis suscipit, ut egestas magna
                  volutpat. Donec a purus tellus. Nunc ut dolor eu est gravida
                  auctor quis vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
