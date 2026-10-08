import "../css/AboutMe.css"

function AboutMe() {
  return (
    <div id="about-me-page" className="site-container" >
      <main className="pt-[100px]">
        <h1 id="about-me-title">Maria sá da bandeira</h1>
        <p className="about-me-paragraph">
          I am a designer focused on visual communication, always grounded on
          functionality and strong aesthetics. I'm a Visual Arts and
          Technologies graduate, and this course allowed me to explore multiple
          disciplines simultaneously, including Graphic Design, Product Design,
          and Painting, which has shaped my ability to work within a
          multidisciplinary context.
        </p>
        <p className="about-me-paragraph">
          Throughout my studies, I developed a particular focus on Graphic
          Design, while also discovering a growing interest in Fashion Design. I
          am especially drawn to details such as embroidery, print creation, and
          silhouette development, and I am interested in gaining a deeper
          understanding of the process behind fashion collections, from concept
          to execution.
        </p>
        <p className="about-me-paragraph">
          Currently, I am seeking to begin my professional journey through
          internships or entry-level opportunities, where I can continue to
          learn, grow, and contribute creatively within a dynamic environment.
        </p>
      </main>

      <div className="contact-links my-7">
        <p>
          <a href="mailto:mariaoneillsb@gmail.com">mariaoneillsb@gmail.com</a>
        </p>
        <p>
          <a href="tel:+351960063702">+351 960 063 702</a>
        </p>
      </div>

      <section id="skills">
        <p id="skills-header">Skills</p>
        <div className="md:flex md:justify-between md:gap-x-20">
          <div className="grow">
            <p className="skill-item">Adobe InDesign</p>
            <p className="skill-item">Adobe Illustrator</p>
            <p className="skill-item">Adobe Photoshop</p>
            <p className="skill-item">Adobe Lightroom</p>
            <p className="skill-item">Adobe Premiere</p>
            <p className="skill-item">Figma</p>
            <p className="skill-item">Silhouette Studio</p>
            <p className="skill-item">Prusa Slicer</p>
            <p className="skill-item">Fusion 360</p>
            <p className="skill-item">Notion</p>
            <p className="skill-item">Microsoft Word</p>
            <p className="skill-item">Microsoft Powerpoint</p>
          </div>
          <div className="grow">
            <p className="skill-item">Multidisciplinary Work</p>
            <p className="skill-item">Project Management</p>
            <p className="skill-item">Modeling and Prototyping</p>
            <p className="skill-item">Visual Communication</p>
            <p className="skill-item">Editorial Design</p>
          </div>
        </div>

        <div
          id="cv-download-button"
          className="flex justify-center py-5"
        >
          <button
            className="py-3 px-5"
            href=""
            disabled
          >
            DOWNLOAD CV
          </button>
          {/* <a
            className="py-3 px-5"
            href=""
            download
          >
            DOWNLOAD CV
          </a> */}
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
