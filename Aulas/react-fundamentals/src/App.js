import React from 'react';

import { Post } from './Post';
import { Header } from './Header';

export default function App(){
  return (
    <>
      <Header title='Meu title do header'>
        <span>My Header</span>
      </Header>

      <Post post={{ title: 'Titulo 1', subTitle: 'Subiítulo da notícia 01' }} likes={20}/>

      <Post post={{ title: 'Titulo 2', subTitle: 'Subiítulo da notícia 02' }} likes={20}/>

      <Post post={{ title: 'Titulo 3', subTitle: 'Subiítulo da notícia 03' }} likes={20}/>

      <Post post={{ title: 'Titulo 4', subTitle: 'Subiítulo da notícia 04' }} likes={20}/>

      <Post post={{ title: 'Titulo 5', subTitle: 'Subiítulo da notícia 05' }}  likes={20}/>

      <Post post={{ title: 'Titulo 6', subTitle: 'Subiítulo da notícia 06' }} likes={20}/>
    </>
  );
}