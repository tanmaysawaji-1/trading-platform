import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="dittoLogo.png" style={{width:"200px"}} />
          <p className="text-small text-muted" >Personalized advice on life and health insurance</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="goldenpiLogo.png" style={{width:"200px"}}/>
          <p className="text-small text-muted">Bonds Treading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="sensibullLogo.svg" style={{width:"250px"}}/>
          <p className="text-small text-muted">Option Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="streakLogo.png" style={{width:"250px"}}/>
          <p className="text-small text-muted">Systematic Treading platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="zerodhaFundhouse.png" style={{width:"250px"}}/>
          <p className="text-small text-muted">Asset Management venture</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;