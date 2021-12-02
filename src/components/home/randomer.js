import React from "react";

export default function RandomerView(props) {
  return (
    <section
      className="whitecolor parallax section"
      style={{
        backgroundImage: 'url("http://themepush.com/demo/runcharity/assets/img/5.jpg")'}}
    >
      <div className="wrapsection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 sol-sm-12">
              <div className="maintitle">
                <h3 className="section-title justtitle">
                  Charity <span className="wow flipInX">&amp; love</span> are the
                  same
                </h3>
                <p className="lead bottom0">
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
