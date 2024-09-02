import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Baca Kisah Kami"
          paragraph="Temukan cerita menarik di blog kami."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          <SingleBlog blog={blogData[blogData.length - 1]} />
          <SingleBlog blog={blogData[blogData.length - 2]} />
          <SingleBlog blog={blogData[blogData.length - 3]} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
