import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p><Link to="/profile">Go to Profile</Link></p>
      <p><Link to="/blog/123">Go to Blog Post 123</Link></p>
    </div>
  );
};

export default Home;
