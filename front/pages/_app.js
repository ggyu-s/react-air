import React from "react";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import wrapper from "../store/cofigureStore";
import withReduxSaga from "next-redux-saga";

const reactAir = ({ Component }) => {
  return <Component />;
};

reactAir.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(reactAir));
