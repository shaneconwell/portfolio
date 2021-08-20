import React from "react";
import "../styles/Home.css";
import { GiMoebiusTriangle,GiStripedSun  } from "react-icons/gi";


export default function Home() {
  return (
    <div className="home-body container-lg">
      <div className="row">
        <div>
          <h1>Welcome Home</h1>
          <div >
          {/* <GiMoebiusTriangle className="icon1 rotate-scale-up"/> */}
          <GiStripedSun className="icon2" />
          </div>

{/* <div className='buzzBlock mx-auto'>
  <img >buzz</img>
</div> */}

        </div>
      </div>
    </div>
  );
}
