import React, { useState } from 'react'
import Post from './Post';

export default function Feed() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Post
      number={1}
      count={42}
      title={"Title Castata"}
      image={"Image"}
      />

    </div>
  )
}
