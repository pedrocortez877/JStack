import React from "react";
import PropTypes from "prop-types";
export function Post(props){
 return (
  <>
    <article>
      <strong>{props.post.title}</strong>
      <button onClick={() => props.onRemove(props.post.id)}>Remover post</button>
      <small>{props.post.subTitle}</small>
      <small>Likes: {props.likes}</small>
    </article>
    <br />
  </>
 ); 
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired
}