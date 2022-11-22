import React from 'react';

import { Post } from './Post';
import { Header } from './Header';

const posts = [
  {title: 'Title#01', subTitle: 'Sub#01', likes: 20},
  {title: 'Title#02', subTitle: 'Sub#02', likes: 10},
  {title: 'Title#03', subTitle: 'Sub#03', likes: 5},
]

export default function App(){
  return (
    <>
      <Header title='Meu title do header'>
        <span>My Header</span>
      </Header>

      {
        posts.map((post, index) => (
          <Post 
            likes={post.likes}
            post={{
              title: post.title,
              subTitle: post.subTitle
            }}
            key={index}
          />
        ))
      }
    </>
  );
}