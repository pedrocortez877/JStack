import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
export function Post(props){
 return (
  <>
    <article>
      <PostHeader post={props.post} onRemove={props.onRemove}/>
      <small>{props.post.subTitle}</small>
      <small>Likes: {props.likes}</small>
    </article>
    <br />
  </>
 ); 
}

Post.propTypes = {
  post: PropTypes.shape({
    subTitle: PropTypes.string,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}