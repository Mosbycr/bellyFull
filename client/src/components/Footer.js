import React from "react";

function Footer(){
    return (
      <div className="container-flex" id="footer">
        <div className="row">
          <div className="col-md-12 text-center">
            <a href="#">
              <i className="fab fa-github-square fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-github-square fa-2x" />
            </a>
            <p className="copyright">copyright &copy 2019 BellyFull, Inc.</p>
          </div>
        </div>
      </div>
    );
}

export default Footer