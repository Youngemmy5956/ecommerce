import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import Logo from '../images/logo-5866753e.svg'
import Arrow from '../images/arrow_outward-6a83a9d5.svg'
import Hero from '../images/hero-0e1d81b6.svg'
import Map from '../images/mappedUsers-8c4d447b.svg'
import Drop from '../images/dropbox-d7692600.svg'
import Mon from '../images/monday-24c35f7f (1).svg'
import Sla from '../images/slack-11024e07.svg'
import Str from '../images/stripe-5009e4c8.svg'
import Zoom from '../images/zoom-ba3b3c3d.svg'
import Frame1 from '../images/frame1-2382226c.svg'
import Frame2 from '../images/frame2-e3588df0.svg'
import Frame3 from '../images/frame3-59065990.svg'
import Frame4 from '../images/frame4-4afbedb5.svg'
import Frame from '../images/users2-956dd543.svg'
import Hero2 from '../images/heroImg-276445fd.svg'
import Frame5 from '../images/frame5-5588f1c3.svg'
import Frame6 from '../images/frame6-153bfa1f.svg'
import Frame7 from '../images/frame7-67e0906c.svg'
import Frame8 from '../images/frame8-4c14efff.svg'
import Hero3 from '../images/dest.svg'
import Cat1 from '../images/catImg1-401503ac.svg'
import Cat2 from '../images/catImg2-3d7c338b.svg'
import Cat3 from '../images/catImg3-29ebb534.svg'
import Cat4 from '../images/catImg4-3d3e19ed.svg'
import Cat5 from '../images/catImg5-7b454d53.svg'
import Cat6 from '../images/catImg6-44517fe2.svg'
import Cat7 from '../images/carouselImg2-f8c43f71.svg'
import Com from '../images/community-2dc5b38e.svg'
import Add from '../images/add-d5d75fa0.svg'
import Fb from '../images/facebook-4e592cb2.svg'
import Tw from '../images/twitter-4de28e62.svg'
import You from '../images/youtube-069fe375.svg'
import Inta from '../images/instagram-2f9fd7a8.svg'
import Dis from '../images/discord-dc6ef389.svg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {AiOutlineStar} from 'react-icons/ai'

export default function Home() {
  let links = [
    {name:'Home', link: '/'},
    {name:'About us', link: '/'},
    {name:'Courses', link: '/'},
    {name:'Testimonial', link: '/'},
    {name:'Community', link: '/'},
  ]
  return (
<div className='shadow-md  w-full left-0 bg-[#004DB3]' >

        <div className='md:px-10 py-4 px-7 flex justify-between items-center sticky top-0 bg-[#004DB3] z-50'>
           <img src={Logo} alt="" className='mx-36' />

           <nav className='sticky top-0 py-2 z-50 '> 
              <ul className='md:flex pl-9 md:pl-0 flex gap-6'>
                {links.map(link =>
                <li className='font-semibold my-7 md:my-0 md:ml'>
                  <a href="/">{link.name}</a>
                  </li>
                  )}

                  <button className='btn bg-white  my-0 py-2 px-3 md:ml-8 rounded md-static mx-36'>Enroll Now</button>
                </ul> 
           </nav>
        </div>


        <main class=" bg-[#004DB3]">

          <div class="flex lg:flex-row flex-col container px-6 mx-auto lg:pt-20 pt-4 justify-between">

            
               <div class="lg:w-1/2 w-full lg:p-0 px-4 flex flex-col justify-center lg:text-left text-center">

                <p className='lg:text-[64px] text-[32px] text-white font-bold lg:leading-[82px] leading-[45.78px] lg:mt-0 mt-2'>Grow your skills to advance your career path</p>

                <p className='text-[#E7E7E7] font-medium lg:w-[533px] capitalize lg:text-base text-[8px] mt-4'>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>

                <span class="flex items-center gap-4 mt-8 mb-6 capitalize lg:justify-start justify-center">

                  <button className='lg:px-6 lg:py-4 px-4 py-2  bg-transparent border border-[#DDDDDD] capitalize text-white flex items-center lg:text-sm text-[8px] leading-snug rounded-md justify-center hoverBtn'>get started now <img src={Arrow} alt="" />
                  </button>

                  <button className='bg-white text-[#004DB3] rounded-[4px] lg:px-6 lg:py-4 px-4 py-3 font-bold lg:text-base text-[8px]'>
                  Enroll Now
                  </button>
                </span>

                <div className='flex items-center gap-2 lg:mx-0 mx-auto'>
                  <img src={Map} alt="" className='' />  

                  <p className='font-bold text-white flex flex-col lg:text-2xl text-[13.4px]'>255k</p>   <span className='font-medium text-white lg:text-base text-[8px]'>Previews</span>
                 
                </div>

              </div>



              <div className=''>

                  <img src={Hero} alt="" className='' /> 

                </div>

          </div>



        </main>


             <div className='flex gap-20 place-content-center lg:flex  h-[9.88rem] bg-[#CCDBF0] items-center justify-center  '>
                    <img src={Zoom} alt="" />  <img src={Str} alt="" /> <img src={Mon} alt="" /> <img src={Drop} alt="" /> <img src={Sla} alt="" /> 
                   </div>


                   <main className='bg-[#f8f9fc]'>

                    <section>

                      <div className='lg:flex items-center justify-between px-6 container mx-auto pb-12 pt-24'>
                        <div className='lg:w-1/2 lg:block flex flex-col items-center'>
                          <h1 className='text-[#000F24] font-bold lg:leading-[70px] lg:text-[56px] text-2xl mb-4 lg:text-left text-center'>High quality video, audio &amp; live classes</h1>

                          <p className='text-[#A1A1A1] capitalize font-medium mb-8 lg:w-[37.75rem] lg:text-base text-[8px]'>high-definition video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

                          <button className='text-white bg-[#004DB3] capitalize rounded-[4px] px-8 py-4 mb-6 font-bold'>View Courses</button>

                          <div className='flex lg:w-3/4 gap-6 capitalize'>
                            <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                              <img src={Frame1} alt="" />
                            <p className='font-bold text-[#000F24]'>audio classes</p>
                            </span>

                            <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                              <img src={Frame2} alt="" />
                              <p className='font-bold text-[#000F24]'> Live Classes</p>
                            </span>
                          </div>

                          <div className='flex lg:w-3/4 gap-6 mt-6 mb-6 capitalize'>
                            <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                              <img src={Frame3} alt="" />
                              <p className='font-bold text-[#000F24]'> recorded classes</p>
                            </span>

                            <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                              <img src={Frame4} alt="" />
                              <p className='font-bold text-[#000F24]'>50+ notes</p>

                            </span>

                          </div>
                          
                        </div>

                        <div className='lg:w-1/2 flex justify-end relative'>
                          <img src={Frame} alt="" />
                          <img src={Hero2} alt="" />
                        </div>

                      </div>

                    </section>


                    <section className='container px-6 mx-auto pb-16 lg:flex items-center justify-between gap-16"><div class="lg:flex items-center justify-between gap-16'>

                      <div className='lg:w-1/2 lg:mb-0 mb-8'>

                        <h1 className='text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4 lg:text-left text-center'>this is why we are best from others</h1>

                        <p className='text-[#A1A1A1] font-medium lg:w-[38rem] lg:leading-[26px] mb-8 capitalize lg:text-base text-[8px] lg:text-left text-center'>high-definition video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

                        <img src={Hero3} alt="" />

                      </div>

                      <div className='lg:w-1/2 grid grid-cols-2 gap-6 capitalize'>

                        <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>

                          <img src={Frame5} alt="" className='lg:w-auto w-[15%]'/>

                          <h1 className='capitalize mt-6 text-black font-bold lg:text-base text-xs'>experienced mentors</h1>
                          
                          <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>

                        </div>

                        <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>

                          <img src={Frame6} alt="" className='lg:w-auto w-[15%]' />

                          <h1 className='capitalize mt-6 text-black font-bold lg:text-base text-xs'>one-on-one meetings</h1>

                          <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p> 

                        </div>

                        <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>

                          <img src={Frame7} alt="" className='lg:w-auto w-[15%]' />

                          <h1 className='capitalize mt-6 text-black font-bold lg:text-base text-xs'>one-on-one meetings</h1>

                          <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p> 

                        </div>

                        <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>

                          <img src={Frame8} alt="" className='lg:w-auto w-[15%]' />

                          <h1 className='capitalize mt-6 text-black font-bold lg:text-base text-xs'>one-on-one meetings</h1>

                          <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p> 

                        </div>

                      </div>

                    </section>

                    <section className='container px-6 mx-auto pb-16'>

                      <div className='flex flex-col items-center capitalize'>

                        <h1 className='text-[#000F24] font-bold lg:text-[56px] lg:leading-[70px] text-2xl capitalize mb-4'>browse our popular courses</h1>

                        <p className='text-[#A1A1A1] font-medium lg:text-xs lg:leading-[26px] text-[8px] text-center lg:w-2/5 w-3/4 mb-16'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>

                        <div>
                          <div>
                            <ul className='flex sticky top-40 h-12 items-center z-40 capitalize lg:gap-8 role="tablist"'>

                              <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none  react-tabs__tab--selected '>All Categories</li>

                              <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none  react-tabs__tab--selected '>Design</li>

                              <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none  react-tabs__tab--selected '>Development</li>

                              <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0 focus-visible:outline-none  react-tabs__tab--selected '>Marketing</li>

                            </ul>
                          </div>
                        </div>

                      </div>

                      <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-2 mt-16'>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                          <img src={Cat1} alt="" />

                          <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>

                            <p className='font-bold text-[#A1A1A1] lg:text-xs text-[4px] flex items-center'>4.7k  <AiOutlineStar />  (32.7k)</p>

                          </span>

                          <h1 className='capitalize text-[#000F24] font-bold lg:text-2xl text-[8px] my-2'>introduction to user research in ux design</h1>

                          <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'> <AiOutlineClockCircle /> 23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'> <FiBookOpen /> lessons</p>
                          </span>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[60%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>

                              <p className='text-[#004DB3] font-semibold lg:text-xl text-[8px]'>$15.00</p>
                            </span>
                          </span>

                        </div>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                          <img src={Cat2} alt="" />

                          <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>

                            <p className='font-bold text-[#A1A1A1] lg:text-xs text-[4px] flex items-center'>4.7k  <AiOutlineStar />  (32.7k)</p>

                          </span>

                          <h1 className='capitalize text-[#000F24] font-bold lg:text-2xl text-[8px] my-2'>introduction to user research in ux design</h1>

                          <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'><AiOutlineClockCircle /> 23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'> <FiBookOpen /> lessons</p>
                          </span>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[60%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>

                              <p className='text-[#004DB3] font-semibold lg:text-xl text-[8px]'>$15.00</p>
                            </span>
                          </span>

                        </div>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                          <img src={Cat3} alt="" />

                          <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>

                            <p className='font-bold text-[#A1A1A1] lg:text-xs text-[4px] flex items-center'>4.7k  <AiOutlineStar /> (32.7k)</p>

                          </span>

                          <h1 className='capitalize text-[#000F24] font-bold lg:text-2xl text-[8px] my-2'>introduction to user research in ux design</h1>

                          <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'><AiOutlineClockCircle /> 23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'><FiBookOpen /> lessons</p>
                          </span>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[60%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>

                              <p className='text-[#004DB3] font-semibold lg:text-xl text-[8px]'>$15.00</p>
                            </span>
                          </span>

                        </div>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                          <img src={Cat4} alt="" />

                          <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>

                            <p className='font-bold text-[#A1A1A1] lg:text-xs text-[4px] flex items-center'>4.7k   <AiOutlineStar /> (32.7k)</p>
                          </span>

                          <h1 className='capitalize text-[#000F24] font-bold lg:text-2xl text-[8px] my-2'>introduction to user research in ux design</h1>

                          <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'><AiOutlineClockCircle /> 23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'> <FiBookOpen /> lessons</p>
                          </span>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[60%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>

                              <p className='text-[#004DB3] font-semibold lg:text-xl text-[8px]'>$15.00</p>
                            </span>
                          </span>

                        </div>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                          <img src={Cat5} alt="" />

                          <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>

                            <p className='font-bold text-[#A1A1A1] lg:text-xs text-[4px] flex items-center'>4.7k <AiOutlineStar />   (32.7k)</p>

                          </span>

                          <h1 className='capitalize text-[#000F24] font-bold lg:text-2xl text-[8px] my-2'>introduction to user research in ux design</h1>

                          <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'><AiOutlineClockCircle /> 23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'> <FiBookOpen /> lessons</p>
                          </span>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[60%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>

                              <p className='text-[#004DB3] font-semibold lg:text-xl text-[8px]'>$15.00</p>
                            </span>
                          </span>

                        </div>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                          <img src={Cat6} alt="" />

                          <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design </button>

                            <p className='font-bold text-[#A1A1A1] lg:text-xs text-[4px] flex items-center'>4.7k <AiOutlineStar />   (32.7k)</p>

                          </span>

                          <h1 className='capitalize text-[#000F24] font-bold lg:text-2xl text-[8px] my-2'>introduction to user research in ux design</h1>

                          <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'> <AiOutlineClockCircle /> 23hrs  50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4px]'> <FiBookOpen /> lessons</p>
                          </span>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[60%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>

                              <p className='text-[#004DB3] font-semibold lg:text-xl text-[8px]'>$15.00</p>
                            </span>
                          </span>

                        </div>

                        <button className='lg:block hidden text-white bg-white capitalize rounded-[4px] ml-72 py-4 mt-6 mb-6 font-bold'>
                                   explore all courses         
                        </button>

                        <button className='text-white ml-60  bg-[#004DB3] rounded-[4px] lg:px-8 px-6 lg:py-4 py-3 lg:text-base text-[8px] mt-4 lg:mb-24 mb-12 font-bold capitalize'>explore all courses</button>

                      </div>
                       
                    </section>

                    <section className=' pb-6'>

                      
                        <div class="flex flex-col items-center capitalize">
                          
                          <h1 class="text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4">what our clients are saying</h1>
                          
                          <p class="text-[#A1A1A1] font-medium lg:text-xs text-[8px] lg:leading-[26px] text-center lg:w-2/5 mb-16">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                        
                        </div>






                             <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-2 mt-12'>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                        <p className='text-[#A1A1A1] lg:text-sm text-[10px] font-medium'>
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                                </p>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[40%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>
                              <p>Product Designer</p>
                            </span>
                          </span>

                        </div>


                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                        <p className='text-[#A1A1A1] lg:text-sm text-[10px] font-medium'>
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                                </p>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[40%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>
                              <p>Product Designer</p>
                            </span>
                          </span>

                        </div>


                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>


                               <p className='text-[#A1A1A1] lg:text-sm text-[10px] font-medium'>
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                                </p>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src={Cat7} alt="" className='class="lg:w-auto w-[40%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>
                              <p>Product Designer</p>

                              
                            </span>
                          </span>

                        </div>

                        </div>

                        <section className='bg-[#004DB3]'>
                          
                          <div className='container mx-auto px-6 capitalize lg:w-3/4 text-center lg:pt-[88px] pt-8'>
                            <p className='font-medium text-white lg:text-base text-[8px]'>Join Our Community</p>

                            <h1 className='text-white font-bold lg:text-[56px] text-2xl lg:leading-[68.8px]'>are you ready to connect with the future talent of the tech world
                            </h1>

                            <p className='text-white font-medium mt-4 lg:text-base text-[8px]'>meet up with other techstars and grow together</p>

                            <img src={Com} alt="" />


                            <button className='bg-white text-[#004DB3] rounded-[4px] lg:px-8 px-6 lg:py-4 py-3 lg:text-base text-[8px] mt-4 lg:mb-24 mb-12 font-bold capitalize'>join our community</button>
                          </div>

                        </section>


                        <section>

                        <div className='lg:w-3/4 lg:mt-32 my-12 lg:mb-40 lg:px-6 px-4 container mx-auto'> 

                        <div className='flex flex-col items-center capitalize'>

                      <h1 className='text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4 lg:text-left text-center'>frequently asked questions</h1>

                      <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] lg:leading-[26px] text-center lg:w-1/2 w-3/4 mb-16'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                        </div>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                          <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                            <span className='items-center capitalize lg:text-2xl text-[14px]  false'>is there a free trial available?</span> <img className='lg:w-auto w-4' src={Add} alt="" />

                          </p>

                        </article>

                         <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                          <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                            <span className='items-center capitalize lg:text-2xl text-[14px]  false'>is there a free trial available?</span> <img className='lg:w-auto w-4' src={Add} alt="" />

                          </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Can I Change My Plan Later?</span> <img className='lg:w-auto w-4' src={Add} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Are The Courses Lifetime?</span> <img src={Add} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Do I Get Certified After Taking Courses?</span> <img className='lg:w-auto w-4' src={Add} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>How Do I Reach Out To Mentors?</span> <img className='lg:w-auto w-4' src={Add} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Do We Get Job Ready After Taking Courses?</span> <img className='lg:w-auto w-4' src={Add} alt="" />

                                  </p>

                        </article>
                        
                        </div>
                        
                        </section>

                        <section className='bg-[#000F24]'>
                          <div className='container mx-auto px-6 lg:flex items-start justify-between lg:pt-40 pt-16 lg:pb-80 pb-24'>
                            <div className='lg:w-1/4'>
                              <img src={Logo} alt="" />
                              <p className='text-white capitalize lg:w-72 my-6'>reach out to us on any of our social media networks</p>

                              <span className='flex items-center gap-7'>
                                <img src={Fb} alt="" />
                                <img src={Tw} alt="" />
                                <img src={You} alt="" />
                                <img src={Inta} alt="" />
                                <img src={Dis} alt="" />
                              </span>

                            </div>

                            <div className='capitalize text-white lg:w-1/4 lg:mt-0 mt-20'>
                            <h1 className="font-semibold text-[32px] mb-8 lg:mt-0 mt-20">useful links</h1>
                              <ul>
                                <li className='cursor-pointer'>home</li>
                                <li className='cursor-pointer'>about us</li>
                                <li className='cursor-pointer'>our courses</li>
                                <li className='cursor-pointer'>testimonial</li>
                                <li className='cursor-pointer'>our community</li>
                              </ul>
                            </div>

                            <div className='class="capitalize text-white w-1/4"'>

                              <h1 className='font-semibold text-[32px] mb-8 lg:mt-0 mt-10'>community</h1>
                              <ul>
                                <li className='cursor-pointer'>help centers</li>
                                <li className='cursor-pointer'>partners</li>
                                <li className='cursor-pointer'>suggestion</li>
                                <li className='cursor-pointer'>blog</li>
                                <li className='cursor-pointer'>newsletter</li>
                              </ul>

                            </div>

                            <div className='capitalize text-white lg:w-1/4 lg:mt-0 mt-10'>

                            <h1 className="font-semibold text-[32px] mb-8">subscribe us</h1>

                            <span className="flex items-center"><input type="text" placeholder="nft123@gmail.com" class="h-12 px-4 bg-[#2A2A2B] outline-none lg:w-auto w-[60%]"/>

                            <button class="bg-[#054FB3] text-white text-sm font-medium h-12 whitespace-pre px-4 capitalize">send message</button>
                            </span>

                            </div>

                          </div>
                        </section>
                      

                    </section>

                   </main>

    </div>
  )
}