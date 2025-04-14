import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
