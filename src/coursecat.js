import React from "react";
import './coursecat.css';

function Coursecat() {
  return (
    <div className="py-[70px]">
      <div className="text-center">
        <h1 className="whitespace-nowrap text-[#45776B] font-poppins text-[48px]">Course Categories</h1>
        <h1 className="whitespace-nowrap text-[#45776B] text-center py-[10px] font-poppins text-[24px] opacity-50">Most Popular Course Categories available for you</h1>
      </div>

      <div className="category-grid">
        {/* Repeat this section for each category */}
        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle1.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">Design</h1>
            </div>
          </a>
        </div>
        {/* Repeat for other categories */}
        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle2.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">Development</h1>
            </div>
          </a>
        </div>

        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle3.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">Marketing</h1>
            </div>
          </a>
        </div>
        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle4.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">IT/Software</h1>
            </div>
          </a>
        </div>
        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle5.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">Personal Development</h1>
            </div>
          </a>
        </div>
        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle6.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">Business</h1>
            </div>
          </a>
        </div>
        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle7.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">Academics</h1>
            </div>
          </a>
        </div>
        <div className="category">
          <a href=" ">
            <img src={require('../src/images/Rectangle8.jpg')} alt="design" />
            <div className="category-name">
              <h1 className="text-[#45776B] text-[24px] font-poppins font-medium">Music</h1>
            </div>
          </a>
        </div>
      </div>

      <div className="text-center py-[40px]">
        <button variant="contained" className='text-white font-poppins px-[70px] py-[7px] bg-[#45776B] rounded-[7px] whitespace-nowrap'>Explore more</button>
      </div>
    </div>
  );
}

export default Coursecat;
