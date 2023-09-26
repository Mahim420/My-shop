import React from "react";
import img1 from "../../images/Rectangle 26.png";
import img2 from "../../images/Rectangle 27.png";
import img3 from "../../images/Rectangle 28.png";
import icon from "../../images/icons/star_1_.png"

const Blog = () => {
  return (
    <section className="bg-white p-3">
      <header className="font-sans">
        <h4 className="text-xl tracking-[-1px]">252 stays Apr 13-17 guests</h4>
        <h2 className="text-[24px] tracking-[-1px] font-semibold">Choose Your Place</h2>
      </header>
      <div className="flex mt-4">
        <article className="w-1/2">
          <div className="card mt-4 card-side bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-[270px] h-[188px]"
                src={img1}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-mono">
                Light, Bright, Airy, Stylish & Safe peaceful stay
              </h2>
              <p className="font-serif">
                4 Guests, 2 Bedrooms 2 Beds 2 Bath wifi air conditions Kitchen...
              <br />  <span className="text-red-600">Cancelation Flexibility unavailable</span>
              </p>
              <div className="card-actions">
                <div className="flex">
                    <p className="flex items-center">
                        <img className="me-2 w-[16px] h-[15px]" src={icon} alt="" />
                        4.9(20)
                    </p>
                    <p className="ml-5">
                        $50/<span className="text-blue-600">Night</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mt-4 card-side bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-[270px] h-[188px]"
                src={img2}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-mono">
                Apartment in Lost Panorama
              </h2>
              <p className="font-serif">
                4 Guests, 2 Bedrooms 2 Beds 2 Bath wifi air conditions Kitchen...
              <br />  <span className="text-green-600">Cancelation Flexibility available</span>
              </p>
              <div className="card-actions">
                <div className="flex">
                    <p className="flex items-center">
                        <img className="me-2 w-[16px] h-[15px]" src={icon} alt="" />
                        4.8(10)
                    </p>
                    <p className="ml-5">
                        $40/<span className="text-blue-600">Night</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mt-4 card-side bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-[270px] h-[188px]"
                src={img3}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-mono">
                AR Lounge & Pool (r&r + b&b)
              </h2>
              <p className="font-serif">
                4 Guests, 2 Bedrooms 2 Beds 2 Bath wifi air conditions Kitchen...
              <br />  <span className="text-green-600">Cancelation Flexibility available</span>
              </p>
              <div className="card-actions">
                <div className="flex">
                    <p className="flex items-center">
                        <img className="me-2 w-[16px] h-[15px]" src={icon} alt="" />
                        4.9(25)
                    </p>
                    <p className="ml-5">
                        $55/<span className="text-blue-600">Night</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
          
        </article>
        <div className="w-1/2">
            <h1 className="text-center font-sans text-2xl font-bold">Google Map Section</h1>
        </div>
      </div>
    </section>
  );
};

export default Blog;
