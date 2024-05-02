import Nav from "../components/Nav";
import PostNewBlogForm from "../components/PostNewBlogForm";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <section className="adminpage">
      <Nav />
      <h1>Admin Area</h1>
      <PostNewBlogForm />
    </section>
  );
};

export default AdminPage;
