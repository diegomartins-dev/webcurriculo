import React from "react";
import PropTypes from "prop-types";

import "./Title.css";

const Title = props => {
  const Component = props.tag;
  return <Component className="c__title" style={props.style}>{props.children}</Component>;
};

Title.propTypes = {
  tag: PropTypes.string,
  style: PropTypes.object
};

export default Title;
