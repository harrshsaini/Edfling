import React from "react";
function Inst(){
    return(
        <div className="py-[70px]">
        <table>
            <tr>
                <td className="px-[100px]">
                    <div className="h-[462.77px] w-[622px]">
                    <img src={require('../src/images/instructors.png')} alt='img1' className='w-[622px] h-[426.77px]' radius='15px'/>
                    </div>
                </td>
                <td>
                    <div className=" w-[600px] h-[297px]">
                              <div className=" w-[526px] h-[55px] ">
                                    <h1 className="font-poppins text-[48px] text-[#45776B] font-semibold">Become an Instructor</h1>
                              </div>
                              <div className=" w-[600px] h-[150px] py-[15px]">
                                  <h1 className="font-poppins opacity-60 text-[18px] text-[#000000]">Instructor from around the world teach millions of students on <br /> Edfling course.We provide the tools and skills to teach what you <br/> love.Instructor from around the world teach millions of students on <br/> Edfling course.We provide the tools and skills to teach what you <br/> love </h1>
                              </div>
                              <table>
                              <tr>
                              <td>
                              <div className="py-[10px]">
                              <button variant="contained" className='text-white bg-[#45776B] font-poppins rounded-[7px] h-[56px] w-[213px] '>Join as a Instructor</button>
                              </div>
                              </td>
                              <td>
                                <div className="py-[10px] px-[30px]">
                                <button variant="text" className='text-[#45776B] font-poppins rounded-[7px] whitespace-nowrap text-[16px] w-[92px] h-[40px]'>Learn more</button>
                                </div>
                              </td>
                              </tr>
                              </table>
                    </div>
                </td>
            </tr>
        </table>

        </div>
    );
}
export default Inst



