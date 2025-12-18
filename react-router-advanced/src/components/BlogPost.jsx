import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // get dynamic parameter
  return <h1>Blog Post ID: {id}</h1>;
};

export default BlogPost;
