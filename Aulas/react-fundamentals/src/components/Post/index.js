import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

import { SubTitle, Likes, Container } from "./styles";

export function Post(props){
 return (
  <>
    <Container removed={props.post.removed}>
      <PostHeader post={props.post} onRemove={props.onRemove}/>
      <SubTitle>{props.post.subTitle}</SubTitle>
      <Likes>Likes: {props.likes}</Likes>
    </Container>
    <br />
  </>
 ); 
}

Post.propTypes = {
  post: PropTypes.shape({
    subTitle: PropTypes.string,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}