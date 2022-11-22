import React from "react";

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