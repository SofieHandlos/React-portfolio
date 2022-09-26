import parse from "html-react-parser";
import { motion } from "framer-motion";

export default function ProjectPost({ post }) {
  return (
    <motion.article whileHover={{ scale: 1.1 }} transition={{ duration: 0 }}>
      <img src={post.acf.img && post.acf.img.url} alt={post.title} />
      <h2 className="project-cards-title">{parse(post.title.rendered)}</h2>
      {parse(post.content.rendered)}
    </motion.article>
  );
}
