import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

import styles from './index.scss'

import { SubTitle, Likes } from "./styles";

export function Post(props){
 return (
  <>
    <article 
      className={
        props.post.removed
          ? styles.postDeleted
          : styles.post
      }
    >
      <PostHeader post={props.post} onRemove={props.onRemove}/>
      <SubTitle>{props.post.subTitle}</SubTitle>
      <Likes>Likes: {props.likes}</Likes>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}