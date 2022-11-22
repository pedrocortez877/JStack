import React from "react";

export function Post({title}){
 return (
  <>
    <article>
      <strong>{title}</strong>
      <small>Subtítulo da notícia</small>
    </article>
    <br />
  </>
 ); 
}