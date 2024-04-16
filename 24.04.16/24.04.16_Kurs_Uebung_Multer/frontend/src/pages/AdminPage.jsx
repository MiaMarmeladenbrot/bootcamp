import Nav from "../components/Nav";
import PostNewBlogForm from "../components/PostNewBlogForm";

const AdminPage = () => {
  return (
    <section>
      <Nav />
      <h1>Admin Page</h1>
      <PostNewBlogForm />
    </section>
  );
};

export default AdminPage;
