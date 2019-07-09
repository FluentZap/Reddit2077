import React, { useState } from 'react'
import Post from './Post';
import { v4 } from 'uuid';

export default function Feed() {

  const [posts, setPost] = useState({
    number: 1,
    count: 1,
    title: "This is my first post on Reddit. Please be gentle.",
    image: '',
    id: v4()
  },
  // {
  //   number: 2,
  //   count: 1,
  //   title: "Feeling cute rn, might delete late. idk.",
  //   image: '',
  //   id: v4()
  // },
  // {
  //   number: 3,
  //   count: 1,
  //   title: "DAE every breath air? TIL",
  //   image: '',
  //   id: v4()
  // }]
  );

  function upvote(index, newposts) {
    newposts[index].count++;
    setPost(newposts);
  }

  function downvote() {

  }

  return (
    <div>
        <div>
          <button onClick={() => setPost(prevState => {
            return {...prevState, count: prevState.count + 1}
          })}>
            Upvote
          </button>
          {/* <button onClick={() => setPost(posts[index].count - 1)}>
            Downvote
          </button> */}
          <Post
            number={posts.number}
            count={posts.count}
            title={posts.title}
            image={posts.image}
            key={posts.id}
          />
        </div>
      
      {/* {posts.map((newPost, index) =>
        <div>
          <button onClick={() => setPost(prevState => {
            return {...prevState, count: prevState.count + 1}
          })}>
            Upvote
          </button>
          <button onClick={() => setPost(posts[index].count - 1)}>
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
      )}; */}
    </div>
  )
}
