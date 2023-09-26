import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../images/Sajek.png";
import img2 from "../../images/Sreemongol.png";
import img3 from "../../images/sundorbon.png";


const Home_Card = () => {
    return (
        <article className="flex">
      <div className="card w-96 ml-5 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img1} alt="Shoes" />
        </figure>
        <div className="card-body w-64">
          <div className="card-actions mt-64 justify-center">
            <Link to='/sajek'>
              <button className="text-3xl font-semibold">SAJEK</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card w-96 ml-3 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img2} alt="Shoes" />
        </figure>
        <div className="card-body w-64">
          <div className="card-actions mt-64 justify-center">
            <Link to="/shree">
              <button className="text-3xl font-semibold">SREEMANGAL</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card w-96 ml-3 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img3} alt="Shoes" />
        </figure>
        <div className="card-body w-64">
          <div className="card-actions mt-64 justify-center">
            <Link to="/sundor">
              <button className="text-3xl font-semibold">SUNDARBAN'S</button>
            </Link>
          </div>
        </div>
      </div>
    </article>
    );
};

export default Home_Card;