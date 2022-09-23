import parse from "html-react-parser";
import { motion } from "framer-motion";

export default function Skill({ skill }) {
  let image = "https://cederdorff.github.io/img/logo512.webp";

  if (skill._embedded && skill._embedded["wp:featuredmedia"]) {
    // leder efter billede langt inde i en datakilde hvis der er tilføjet et featured image i WP
    image = skill._embedded["wp:featuredmedia"][0].source_url;
  }

  // der er HTML tags i json filen, som React udskriver som tekst, i stedet for skal det tolkes af React som HTML. Dette gælder også for tegn som "&"
  // Derfor installeres npm install html-react-parser i terminalen
  return (
    <motion.article whileHover={{ scale: 1.1 }} transition={{ duration: 0 }}>
      <img src={skill.acf.img && skill.acf.img.url} alt={skill.title} />
      <h2>{parse(skill.title.rendered)}</h2>
      {parse(skill.content.rendered)}
    </motion.article>
  );
}
