import "./page1.scss";

function Page1() {
  return (
    <div className="box">
      <nav class="nav">
        <div class="nav__title"></div>
        <ul class="nav__list">
          <li class="nav__item"><a href="#about">About</a></li>
          <li class="nav__item"><a href="#projects">Projects</a></li>
          <li class="nav__item"><a href="contact.asp">Contact</a></li>
        </ul>
      </nav>
      <div className="blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            fill-opacity="0.5"
            d="M39.8,-49.6C53.3,-36.1,67.3,-25.2,63,-16C58.7,-6.9,36.3,0.5,26.4,12.8C16.4,25.1,19,42.3,11.3,55.9C3.6,69.4,-14.4,79.3,-26.3,74.2C-38.2,69.1,-43.9,48.9,-50.9,31.8C-57.9,14.7,-66.1,0.8,-61.6,-8.5C-57.2,-17.9,-40.2,-22.7,-27.8,-36.4C-15.4,-50.1,-7.7,-72.6,2.7,-75.9C13.1,-79.1,26.3,-63,39.8,-49.6Z"
            transform="translate(70 80)"
          />
        </svg>
      </div>
      <div className="name-wrapper">
        <div className="myname">
          <h1> Welcome to my Portfolio</h1>
        </div>
      </div>
      <div className="waves">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#fff"
            fill-opacity="0.3"
            d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,106.7C960,128,1056,160,1152,192C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Page1;
