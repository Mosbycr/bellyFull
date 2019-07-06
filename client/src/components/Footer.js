import React from "react";

function Footer(){
    return (
      <div className="container-flex" id="footer">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="icons">
              <a href="#">
                <i class="fab fa-facebook fa-3x pr-5" />
              </a>
              <a href="#">
                <i className="fab fa-instagram fa-3x" />
              </a>
              <a href="#">
                <i className="fab fa-github fa-3x pl-5" />
              </a>
            </div>
            <p className="copyright">
              copyright &copy; 2019 BellyFull, Inc.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer