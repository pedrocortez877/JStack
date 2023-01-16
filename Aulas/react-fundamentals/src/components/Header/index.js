import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../Contexts/ThemeContext";

import Title from "../Title";

export function Header({title, children}){
  const {onToggleTheme} = useContext(ThemeContext);
 return (
  <>
    <article>
      <Title>{title}</Title>
      {children}
      <button className="title" onClick={onToggleTheme}>Mudar tema</button>
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