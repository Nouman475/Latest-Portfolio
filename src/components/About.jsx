import "./../styles/about.css";
import meImage from "../assets/me2.jpg";

function About() {
  return (
    <>
      <div id="container" className="bg-black">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1 id="h1">About me</h1>
            </div>
            <div className="par">
              <p className="p">
                I am Nouman, a passionate frontend developer studying in UAF
                pursuing Bachelors in computer science and also doing a
                certification in Web and Mobile apps development from a renowed
                institute SMIT.
              </p>
              <div className="btn-container gap-2 d-flex">
                <a
                  href="https://www.instagram.com/byte__ninja"
                  className="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      fill-rule="evenodd"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a href="https://github.com/Nouman475" className="button">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/muhammad-nouman47" className="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.49 19H5.88V9h2.61v10zm-1.3-11.33c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.91 11.33h-2.61v-5.6c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.97v5.68h-2.61V9h2.5v1.41h.04c.35-.66 1.22-1.36 2.51-1.36 2.68 0 3.17 1.76 3.17 4.06v5.44z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img src={meImage} className="container_img" />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
      <div className="overlay"></div>

      <div className="skill">
        <section className="design-section">
          <h2 className="text-center text-white">Tech Stack</h2>
          <div className="timeline">
            <div className="timeline-empty"></div>

            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-component timeline-content">
              <img
                src="https://cdn-icons-png.freepik.com/512/7531/7531766.png"
                height={60}
              />
              <h3>Frontend Development</h3>
              <p>
                HTML5 | CSS3(SASS,SCSS) | Bootstrap | Tailwind CSS | AntDesign
                UI | JavaScript ES6+ | TypeScript | React.
              </p>
            </div>

            <div className="timeline-component timeline-content">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030134.png"
                height={60}
              />
              <h3>BAAS(Backend as a service)</h3>
              <p>Realtime Firebase developer</p>
            </div>

            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-empty"></div>
            <div className="timeline-empty"></div>

            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-component timeline-content">
              <img
                src="https://cdn-icons-png.freepik.com/512/8682/8682423.png"
                height={60}
              />
              <h3>Version Control</h3>
              <p>Git and GitHub</p>
            </div>
            <div className="timeline-component timeline-content">
              <img
                src="https://cdn-icons-png.freepik.com/512/8099/8099228.png"
                height={60}
              />
              <h3>Currently Working</h3>
              <p>Node JS | Express JS | Mongo DB</p>
            </div>

            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>

            <div className="timeline-empty"></div>
            <div className="timeline-empty"></div>
          </div>
        </section>
        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">My Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9611/9611314.png"
                  height={60}
                />
                <h3>Blogging Sites</h3>
                <p>
                  Professional blogging platforms with modern designs and
                  easy-to-manage content systems.
                </p>
              </div>
              <div className="service-card">
                <img
                  src="https://cdn-icons-png.freepik.com/512/5249/5249225.png"
                  height={60}
                />
                <h3>Landing Pages</h3>
                <p>
                  Stunning, fast-loading landing pages to boost your conversions
                  and grow your business.
                </p>
              </div>
              <div className="service-card">
                <img
                  src="https://cdn-icons-png.freepik.com/512/8682/8682456.png"
                  height={60}
                />
                <h3>Advocates/Lawyer Websites</h3>
                <p>
                  Elegant, user-friendly websites designed specifically for
                  legal professionals.
                </p>
              </div>
              <div className="service-card">
                <img
                  src="https://cdn-icons-png.freepik.com/512/7559/7559353.png"
                  height={60}
                />
                <h3>Real Estate Developer Sites</h3>
                <p>
                  Custom websites for showcasing real estate portfolios and
                  attracting potential buyers.
                </p>
              </div>
              <div className="service-card">
                <img
                  src="https://cdn-icons-png.freepik.com/512/8459/8459313.png"
                  height={60}
                />
                <h3>E-Commerce Websites</h3>
                <p>
                  Secure and scalable e-commerce platforms designed to grow your
                  business online.
                </p>
              </div>
              <div className="service-card">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9338/9338092.png"
                  height={60}
                />
                <h3>Telemedicine</h3>
                <p>
                  Secure and fast telemedicine services platform under the policy of Ministry of National Health services coordinator Pakistan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
