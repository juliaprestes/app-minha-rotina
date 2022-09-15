import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { busca } from "../api/api";

const ListaPost = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts);
  }, []);

  return (
    <section>
      {posts.map((post) => (
        <Link className="{}">
          <article key={post.id}>
            <h3 className="">{post.title}</h3>
            <p className="">{post.body}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaPost;
