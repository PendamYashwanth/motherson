import "./index.css";

const Home = () => {
  return (
    <article id="about" className="container about-container">
      <section>
        <h3>MERN Full-Stack Developer</h3>
        <h1>Hello, my name is Yashwanth Pendam</h1>
        <p>
          With a focus on MongoDB* , along with expertise in Express.js, React,
          and Node.js, I specialize in developing dynamic and responsive
          applications that enhance user engagement.
        </p>
        <section className="buttons-container">
          <a href="#projects" className="btn">
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-pendam/"
            className="btn-outline"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
        </section>
      </section>
    </article>
  );
};

export default Home;
