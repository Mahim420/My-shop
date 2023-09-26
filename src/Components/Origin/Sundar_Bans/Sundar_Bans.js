import React from "react";
import Home_Article from "../../Home/Home_Article";
import { Link } from "react-router-dom";

const Sundar_Bans = () => {
  return (
    <section className="flex justify-around items-center p-[40px]">
      <Home_Article></Home_Article>
      <div>
      <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body">
            <h2 className="card-title">Origin</h2>
            <div className="border rounded">
              <input
                type="option"
                placeholder="From"
                className="input bg-transparent w-full text-white input-bordered"
              />
            </div>
            <h2 className="card-title">Destination</h2>
            <div className="border rounded">
              <form>
                <select className="w-full p-2 bg-neutral">
                  <option>Sundarban's</option>
                  <option>Shreemangal</option>
                  <option>Sajek</option>
                  <option>Cox'Bajar</option>
                </select>
              </form>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="card-title">From</h1>
                <p className="border rounded">
                  <input className="bg-neutral p-2" type="date" name="" id="" />
                </p>
              </div>
              <div>
                <h1 className="ml-2 card-title">To</h1>
                <p className="ml-3 border rounded">
                  <input className="bg-neutral p-2" type="date" name="" id="" />
                </p>
              </div>
            </div>
            <div className="card-actions">
              <Link className="w-full mt-3" to='/blog'>
              <button className="btn w-full btn-warning">Start Booking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sundar_Bans;
