import "./../styles/hero.css";

function Hero() {
  return (
    <>
      <section className="wrapper">
        <div className="hero"></div>
        <div className="content">
          <h1 className="h1--scalingSize" data-text="An awesome title">
            Hello I am Nouman
          </h1>
          <input type="checkbox" id="switch" />
          <label htmlFor="switch">
            <span>
              <span className="icon">→</span>change Mode?
            </span>
          </label>
        </div>
      </section>
    </>
  );
}

export default Hero;
