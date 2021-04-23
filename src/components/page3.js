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
          src="https://www.flaticon.com/svg/vstatic/svg/3035/3035523.svg?token=exp=1618916334~hmac=81d0bc1faa1efd0e8fb7bea97c95b379"
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
          src="https://www.flaticon.com/svg/vstatic/svg/4498/4498289.svg?token=exp=1618917219~hmac=c527639c4bdb0cd68e5a0aa8b2d40b5b"
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
          src="https://www.flaticon.com/svg/vstatic/svg/4500/4500307.svg?token=exp=1618916855~hmac=f050dae2185c237a0fd6a60da49b0b3c"
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
