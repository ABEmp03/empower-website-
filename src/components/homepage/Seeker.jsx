'use client'
import Image from 'next/image'
import React from 'react'
import './home.scss'

import img from './assets/rightarrowhite.png'
import imgf from './assets/jobseeker.jpg'
import imgff from './assets/employer.jpg'

import Link from 'next/link'

const Seeker = () => {
  return (
    <>
      <section className='seeker'>
        <div className='max-w-6xl mx-auto'>
          <div className='boxes flex gap-10 max-md:flex-wrap max-md:w-full'>
            <div
              // ref={leftDivRef}
              className='box-one group mb-[36px] bg-[#efefef] pb-[2px] p max-md:w-full servicchomesection '
            >
              <div className='box-img overflow-hidden'>
                <Image
                  src={imgf}
                  alt=''
                  className='group-hover:scale-[1.1] transition-all'
                />
              </div>
              <div className='p-4'>
                <h1 className='text-[20px] font-bold'>Technology Services</h1>
                <p className='-[20px] py-[0] mb-[20px] text-[#000] minh-[65px] text-[14px]'>
                  Product is in our DNA
                </p>
                <div className='button-hero flex max-md:flex-wrap'>
                  {/* <Link
                    href="/job-seeker"
                    className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center hover:text-black gap-2 hover:bg-[transparent] hover:border-[#fff]"
                  >
                    <Image
                      className="align-middle border-none "
                      src={img}
                      alt=""
                    />
                    <span>JOBSEEKER</span>
                  </Link> */}
                  <Link
                    href='/services'
                    className='one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[0px] border-[solid] border[#ffffff] text-center w-[195px] flex justify-start items-center gap-2 hover:underline hoverborder-[#1d83b3]'
                  >
                    <Image
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII='
                      width={22}
                      height={22}
                      alt='k'
                    />
                    <span>FIND OUT MORE</span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              // ref={rightDivRef}
              className='box-one1 group mb-[36px] bg-[#efefef] pb-[2px] max-md:w-full servicchomesection'
            >
              <div className='box-img overflow-hidden'>
                <Image
                  src={imgff}
                  alt=''
                  className='group-hover:scale-[1.1] transition-all'
                />
              </div>
              <div className='p-4'>
                <h1 className='text-[20px] font-bold'>Staff Augmentation</h1>
                <p className='-[20px] py-[0] mb-[20px] text-[#000] minh-[65px] text-[14px]'>
                  High Quality at High Volume
                </p>
                <div className='button-hero flex max-md:flex-wrap'>
                  {/* <Link
                    href="/job-seeker"
                    className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center gap-2 hover:bg-[transparent]  hover:text-black hover:border-[#fff]"
                  >
                    <Image
                      className="align-middle border-none"
                      src={img}
                      alt=""
                    />
                    <span>JOBSEEKER</span>
                  </Link> */}
                  <Link
                    href='/employee'
                    className='one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[0px] border-[solid] border[#ffffff] text-center w-[195px] flex justify-start items-center gap-2 hover:underline hoverborder-[#1d83b3] '
                  >
                    <Image
                      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII='
                      width={22}
                      height={22}
                      alt='k'
                    />
                    <span>FIND OUT MORE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Seeker
