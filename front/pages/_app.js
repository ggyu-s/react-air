import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";

const reactAir = ({ Component }) => {
  return <Component />;
};

reactAir.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default reactAir;
