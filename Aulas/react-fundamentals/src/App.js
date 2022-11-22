import React from 'react';

import { Post } from './Post';
import { Header } from './Header';

export default function App(){
  return (
    <>
      <Header>
        <span>My Header</span>
      </Header>

      <Post title="Título da notícia 01"/>

      <Post title="Título da notícia 02"/>

      <Post title="Título da notícia 03"/>

      <Post title="Título da notícia 04"/>

      <Post title="Título da notícia 05"/>

      <Post title="Título da notícia 06"/>
    </>
  );
}