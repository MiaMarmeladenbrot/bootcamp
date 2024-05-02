import Hero from "../components/Hero";
import Nav from "../components/Nav";
import RenderBlogPosts from "../components/RenderBlogPosts";

const HomePage = () => {
  return (
    <section>
      <Nav />
      <Hero />
      <RenderBlogPosts />
    </section>
  );
};

export default HomePage;
