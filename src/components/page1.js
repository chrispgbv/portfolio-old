import "./page1.scss";

function Page1() {
  return (
    <div className="box">
      <header>
        <div class="container">
          <h1 class="logo"></h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="main-one">
        <div>
          <h1>Hi, I'm Chritsine</h1>
          <p> and welcome to my portfolio </p>
        </div>
        <section id="section05" class="demo">
          <a href="#section06">
            <span></span>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Page1;
