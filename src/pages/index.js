import React from "react";
import Helmet from "react-helmet";

import Logo from "../images/darkterritory.png";
import "../css/main.scss";

class Index extends React.Component {

  render() {
    return (
      <div className="logo-wrapper">
        <Helmet>
          <title>Dark Territory</title>
        </Helmet>
        <img src={Logo} />
      </div>
    );
  }
}

export default Index;
