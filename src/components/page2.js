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
                src="https://www.flaticon.com/svg/vstatic/svg/893/893292.svg?token=exp=1619182581~hmac=bfe345a99252f9e7b30975522c95b3e7"
                alt="linkedIn"
                width="30px"
              ></img>{" "}
              <p> Mail</p>
            </div>

            <div className="sos">
              {" "}
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/1383/1383262.svg?token=exp=1619182622~hmac=0e552310d8d9194838c419a5c7603caf"
                alt="linkedIn"
                width="30px"
              ></img>{" "}
              <p> LinkedIn</p>
            </div>

            <div className="sos">
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/2111/2111421.svg?token=exp=1619182647~hmac=aed55ff4aeba6c70c175a97a836a6ffe"
                alt="instagram"
                width="30px"
              ></img>{" "}
              <p> Instagram</p>
            </div>

            <div className="sos">
              <img
                className="social-comp"
                src="https://www.flaticon.com/svg/vstatic/svg/3529/3529895.svg?token=exp=1619182454~hmac=1ac7c37e0f334910458e80aaeb964323"
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
