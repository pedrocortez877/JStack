import React from "react";
import PropTypes from "prop-types";
export function Post({post, likes}){
 return (
  <>
    <article>
      <strong>{post.title}</strong>
      <small>{post.subTitle}</small>
      <small>Likes: {likes}</small>
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