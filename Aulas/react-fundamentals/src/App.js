import React, {useState} from 'react';

import { Post } from './Post';
import { Header } from './Header';

export default function App(){
  const [posts, setPosts] = useState([
    {id: Math.random(), title: 'Title#01', subTitle: 'Sub#01', likes: 20},
    {id: Math.random(), title: 'Title#02', subTitle: 'Sub#02', likes: 10},
    {id: Math.random(), title: 'Title#03', subTitle: 'Sub#03', likes: 5},
  ]);
  
  function handleRefresh(){
    setPosts((prevState) => [
        ...prevState,
        {id: Math.random(), title: `Title#0${posts.length + 1}`, subTitle: `Sub#0${posts.length + 1}`, likes: 30}
    ]);
    console.log(posts);
  }

  function handleRemovePost(postId){
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header title='Meu title do header'>
        <span>My Header</span>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      {
        posts.map((post, index) => (
          <Post 
            likes={post.likes}
            post={{
              id: post.id,
              title: post.title,
              subTitle: post.subTitle
            }}
            key={post.id}
            onRemove={handleRemovePost}
          />
        ))
      }
    </>
  );
}