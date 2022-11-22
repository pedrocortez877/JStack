import React from "react";
import PropTypes from "prop-types";
export function Post({post}){
 return (
  <>
    <article>
      <strong>{post.title}</strong>
      <small>{post.subTitle}</small>
    </article>
    <br />
  </>
 ); 
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
  }).isRequired
}