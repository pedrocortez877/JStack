import React from "react";
import PropTypes from "prop-types";

export function Header({title, children}){
 return (
  <>
    <article>
      <strong>{title}</strong>
      {children}
    </article>
    <br />
  </>
 ); 
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

Header.defaultProps = {
  title: `JStack's blog`
}