import { useState, useEffect } from "react";
import { busca } from "../../api/api";

const Post = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPost);
  }, [id]);

  return (
    <main>
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
