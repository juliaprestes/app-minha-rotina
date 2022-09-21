import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { busca } from "../../api/api";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams;

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
