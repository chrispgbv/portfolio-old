import "./page3.scss";

function Page3() {
  return (
    <div className="page-projects">

      <div className ="proj-head">
        <h1> My Projects </h1>

      </div>
      <div className="proj-ex">
        {" "}
        <img
          className="proj"
          src="https://www.flaticon.com/svg/vstatic/svg/3035/3035523.svg?token=exp=1619183210~hmac=2e15313c25c072167b38b681ffe176ad"
          alt="mail"
          width="200px"
        ></img>{" "}
        <div className="proj-text">
          <h2 className ="col-white" > Haart</h2>
          <p className ="col-white">
            {" "}
            Bachelor project, created a library using JavaScript to create heart compressions for Laerdal Medical{" "}
          </p>{" "}
        </div>
      </div>

      <div className="proj-ex">
        {" "}
        <img
          className="proj"
          src="https://www.flaticon.com/svg/vstatic/svg/4589/4589217.svg?token=exp=1619183248~hmac=80ab2d0859eda1662aa2228afff0a734"
          alt="mail"
          width="200px"
        ></img>{" "}
        <div className="proj-text">
          <h2 className ="col-white"> Conexos</h2>
          <p>
            {" "}
            A knitting app to cattagorize you rwork, knitting needls and yarn{" "}
          </p>{" "}
        </div>
      </div>

      <div className="proj-ex">
        {" "}
        <img
          className="proj"
          src="https://www.flaticon.com/svg/vstatic/svg/4394/4394562.svg?token=exp=1619183311~hmac=4cd5084c12d1e7009161e00e690925dd"
          alt="mail"
          width="200px"
        ></img>{" "}
        <div className="proj-text">
          <h2> Foodie</h2>
          <p>
            {" "}
            A web app for fidning out what you can have for dinner{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Page3;
