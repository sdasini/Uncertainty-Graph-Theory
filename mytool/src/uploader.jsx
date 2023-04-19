import React from "react";
import bgimg from "./images/graph.jpeg";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    //logic if required
    console.log("grsgsrg");
    navigate("/Graph");
  };
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h1 className="flex-col">Graph Visualization Tool</h1>
          <form onSubmit={handlesubmit} id="form" className="flex flex-col">

            <input type="file" />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

        <div className="col-2">
          <img src={bgimg} alt="" />
        </div>
      </div>
    </section>
  );
}