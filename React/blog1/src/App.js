import React, { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h1>게시글 정보</h1>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}

export default App;
