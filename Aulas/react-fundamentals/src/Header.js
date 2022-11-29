import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "./ThemeContext";

export function Header({title, children}){
  const {onToggleTheme} = useContext(ThemeContext);
 return (
  <>
    <article>
      <strong>{title}</strong>
      {children}
      <button onClick={onToggleTheme}>Mudar tema</button>
    </article>
    <br />
  </>
 ); 
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's blog`
}