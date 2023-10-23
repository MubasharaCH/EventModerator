import React from "react";
import closet from "../img/closet.jpg";
import { GiTargetArrows } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
const Dashboard = () => {
  return (
    <div className="container mb-4">
      <div className=" text-center mb-4 ">
        <button className="btn btn-dark btn-lg text-center mt-5 ">
          Get start free
        </button>
        <h1 className="mt-4 "> Event Mederator Top Picture </h1>
        <div className="row">
          <div className="col-2"></div>
        </div>
      </div>
      <div class="container mb-4  ">
        <div class="row">
          <div class="col">
            {" "}
            <div className="container d-flex">
              <img
                src={closet}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h3 className="text-warning">Closet London</h3>
                <h5 className="m-3">
                  {" "}
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                </h5>
                <div className="d-flex">
                  <button className="btn btn-md btn-dark d-flex me-2">
                    Inquire Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div className="container d-flex">
              <img
                src={closet}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h3 className="text-warning">Closet London</h3>
                <h5 className="m-3">
                  {" "}
                  <span className="me-1 bg-yellow-light rounded-lg">
                    New York
                  </span>
                  <span className=" bg-yellow-light">$</span>
                </h5>
                <div className="d-flex">
                  <button className="btn btn-md btn-dark d-flex me-2">
                    Inquire Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-100 "></div>
          <div class="col mt-4">
            {" "}
            <div className="container d-flex">
              <img
                src={closet}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h3 className="text-warning">Closet London</h3>
                <h5 className="m-3">
                  {" "}
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light t">$</span>
                </h5>
                <div className="d-flex">
                  <button className="btn btn-md btn-dark d-flex me-2">
                    Inquire Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            {" "}
            <div className="container d-flex">
              <img
                src={closet}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h3 className="text-warning">Closet London</h3>
                <h5 className="m-3">
                  {" "}
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                </h5>
                <div className="d-flex">
                  <button className="btn btn-md btn-dark d-flex me-2">
                    Inquire Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
