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
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/37/37572.svg?token=exp=1618494354~hmac=d8d4d2f308abeb7d5e9957c1c5ef0902"
                alt="mail"
                width="20px"
              ></img>{" "}
              <p> Mail</p>
            </div>

            <div className="sos">
              {" "}
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/1384/1384088.svg?token=exp=1618495550~hmac=e8e5d34384e9f6d695452061278672de"
                alt="linkedIn"
                width="20px"
              ></img>{" "}
              <p> LinkedIn</p>
            </div>

            <div className="sos">
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/87/87390.svg?token=exp=1618495354~hmac=fba94944c7396c6cae38c94e5caf1544"
                alt="instagram"
                width="20px"
              ></img>{" "}
              <p> Instagram</p>
            </div>

            <div className="sos">
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/0/619.svg?token=exp=1618495664~hmac=145e41e4ac859f59e6b3ff020c9bcd57"
                alt="Position"
                width="20px"
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
            Hi, my name is Christine Garcia Benito Valkner. I have a bachelors in computer engineering from Stavanger University and work as adeveloper now for Profitbase. This fall I will be starting myvwenture into a more design orientet development and will be takingUX design part time as a student, while I work.
          </p> 
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
