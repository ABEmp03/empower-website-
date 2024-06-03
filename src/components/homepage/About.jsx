'use client'
import React from 'react'
import img from './assets/rightarrowhite.png'
import Image from 'next/image'
import imgd from './assets/advantageicon.png'
import imgdb from './assets/circleiocn.png'
import Link from 'next/link'

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ScrollMagic from "scrollmagic";
// import { TweenMax } from "gsap";
// import { gsap, Power2 } from "gsap";
// import { useEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // useEffect(() => {
  //   const controller = new ScrollMagic.Controller();

  //   const sections = document.querySelectorAll(".about-top");
  //   sections.forEach((section) => {
  //     new ScrollMagic.Scene({
  //       triggerElement: section,
  //       triggerHook: 1, // Adjust this value to control when the animation starts
  //       reverse: false,
  //     })
  //       .on("enter", () => {
  //         TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "easeOut" });
  //       })
  //       .addTo(controller);
  //   });
  // }, []);
  return (
    <>
      <section className='about-home overflow-hidden pt-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='main justify-center items-center w-[50%] max-md:w-full max-md:text-center max-md:p-4'>
            <h1 className='text-[#000] text-[28px] font-bold max-w-[455px]'>
              About us
            </h1>
            <p className='text-[#000] max-w-[450px] w-full'>
              Founded in 2004, Empower Professionals is an IT services and
              solutions company focused on helping our clients navigate the
              rapidly changing technological landscape and stay ahead of the
              competition. With a globally distributed team, we offer engagement
              models ranging from end-to-end project based work, from
              consulting, design, development, testing, and support, to
              on-demand staff augmentation through delivering top notch onshore
              talent as well as cost-effective but quality offshore talent,
              whether it be a handful of resources or building entire teams from
              the ground up.
            </p>
            <Link
              href='/About'
              className='one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] my-[10px] border[1px] bord] border[#ffffff] text-center w-[195px] flex justify-center items-center gap-2 hover:underline hoverborder-[#1d83b3]'
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
      </section>

      <section className='px-[0] py-[30px] bg[#000] overflow-hidden bg-[#1c9cd2] text-[#FFFFFF] text-[12px]'>
        <div className='max-w-6xl mx-auto'>
          <div className='w-full'>
            <div className=' w[50%] flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-12 max-md:text-center'>
              <div className='w-[20%]'>
                <Image src={imgd} alt='' title='' />
              </div>
              <div className=' w-[80%] about-top'>
                <h3 className=' text-[28px] font-bold text-[#fff]'>
                  The Empower Advantage{' '}
                </h3>
                <p className='cta- text-[24px] mt-4'>
                  Quality, Transparency, Integrity
                </p>
              </div>
              <Link href='/About' className='Emp-Adv- w-[20%]'>
                {/* <a href="about.html"> */}
                <Image src={imgdb} alt='' title='' />
                {/* </a> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
