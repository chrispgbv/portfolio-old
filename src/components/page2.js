import "./page2.scss";

function Page2() {
  return (
    <div className="page2">
      <div class="row noMargin">
        <div class="one">
          <div className="small-box">
            <h3>My name is</h3>
          </div>
          <h2> Christine Garcia Benito Valkner</h2>

          <div className="socials">

          <div className="sos">
              {" "}
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/566/566056.svg?token=exp=1618923967~hmac=624bb163bbc992089bdff088dba41b1e"
                alt="linkedIn"
                width="30px"
              ></img>{" "}
              <p> Mail</p>
            </div>

            <div className="sos">
              {" "}
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/61/61109.svg?token=exp=1618923900~hmac=9adc7e86e9c8938edc620be4f40207cd"
                alt="linkedIn"
                width="30px"
              ></img>{" "}
              <p> LinkedIn</p>
            </div>

            <div className="sos">
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/61/61164.svg?token=exp=1618923932~hmac=3729b4237e27dd9b81a9f1e334b9998a"
                alt="instagram"
                width="30px"
              ></img>{" "}
              <p> Instagram</p>
            </div>

            <div className="sos">
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/61/61121.svg?token=exp=1618923865~hmac=de07b586ce7a6adc07b8edf05a5a80db"
                alt="Position"
                width="30px"
              ></img>{" "}
              <p> Stavanger, Norge </p>
            </div>
          </div>
        </div>
        <div class="two">
          <div className="pic">
              <img
                src="https://i.pinimg.com/originals/e7/65/9b/e7659b4976b718aaf340b7c9b3685e08.jpg"
                alt="Avatar"
              ></img>
          </div>
        </div>
      </div>
      <div class="row noMargin">
        <div class="three">
          <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79277/girl-working-on-computer-clipart-xl.png" alt ="me-cartoon"></img>
        </div>
        <div class="four">
          <h3> About me</h3>
            <p>
            Hi, my name is Christe and I'm a computer developer currently working at Profitbase in Stavanger. 
            I have a bachelors degree in computer engineering from the University in Stavanger, and will be starting 
            a new degree in Ux design this fall. I love working with front end development and want to expand my knowledge in design. </p> 
        </div>
      </div>
      <div className ="arrow">
      <section id="section05" class="demo">
          <a href="#section06">
            <span></span>
          </a>
        </section>
      </div>

    </div>
  );
}

export default Page2;
