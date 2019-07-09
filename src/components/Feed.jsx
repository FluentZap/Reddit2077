import React, { useState } from 'react'
import Post from './Post';
import { v4 } from 'uuid';

export default function Feed() {

  let [posts, setPost] = useState([{
    number: 1,
    count: 1,
    title: "This is my first post on Reddit. Please be gentle.",
    image: '',
    id: v4()
  },
  {
    number: 2,
    count: 1,
    title: "Feeling cute rn, might delete later. idk.",
    image: '',
    id: v4()
  },
  {
    number: 3,
    count: 1,
    title: "DAE ever breath air? TIL",
    image: '',
    id: v4()
  }]
  );  
  

  return (
    <div>
      {posts.map((newPost, index) =>
        <div>
          <button onClick={() => setPost(prevState => {   
            let newState = [...prevState];
            newState[index].count++;
            return newState;
          })}>
            Upvote
          </button>

          <button onClick={() => setPost(prevState => {   
            let newState = [...prevState];
            newState[index].count--;
            return newState;
          })}>
            Downvote
          </button>

          <Post
            number={newPost.number}
            count={newPost.count}
            title={newPost.title}
            image={newPost.image}
            key={newPost.id}
          />
        </div>
      )};
    </div>
  )
}
