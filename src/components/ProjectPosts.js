import React, { useState, useEffect } from "react";
import ProjectPost from "./ProjectPost";

export default function ProjectPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https:///react-api.sofieht.dk/wp-json/wp/v2/posts?_embed&v=9999"
      );
      const data = await response.json();
      setPosts(data);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="projects-header">My projects</h1>
      <h3>Overunderskrifter i denne farve</h3>
      <section className="grid-container">
        {posts.map((post) => (
          <ProjectPost key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}
