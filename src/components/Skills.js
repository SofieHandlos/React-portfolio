import React, { useState, useEffect } from "react";
import Skill from "./Skill";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://react-api.sofieht.dk/wp-json/wp/v2/skills?_embed&v=9999"
      );
      const data = await response.json();
      setSkills(data);
    }
    getData();
  }, []);

  return (
    <>
      <h3>Overunderskrifter i denne farve</h3>
      <section className="soft-skills-grid-container">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </section>
    </>
  );
}
