import Image from 'next/image'
import React from 'react'
import './footer.scss'
// import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img from './assets/rig.png'
import logo from './assets/logosmall.png'

import Link from 'next/link'
function Footer () {
  return (
    <div className='flex flex-col justify-between bg-[#000000] text-[#fff] h-full items-center pr[100px] text-[14px]  max-md:h-full  max-md:pr-0'>
      <div className='footerTags  max-md:p-4 flex justify-center  mt-[50px] flex-wrap gap-8 w-[100%]'>
        <div className='ml-[50px] max-md:ml-0'>
          <h5 className='text-blue-400 font-bold'>COMPANY</h5>
          <ul className='grid grid-cols-2 gap-'>
            <Link className='hover:text-[#f82249] relative' href='/'>
              <li className='p-2 px-10 border-[#262c44] border-b-2 w-[100%] right'>
                Home
              </li>
            </Link>
            <Link className='hover:text-[#f82249] relative' href='/About'>
              <li className='p-2  px-10 border-[#262c44] border-b-2 right'>
                About Us
              </li>
            </Link>
            <Link className='hover:text-[#f82249] relative' href='/job-seeker'>
              <li className='p-2  px-10 border-[#262c44] border-b-2 right'>
                Staff Augmentation
              </li>
            </Link>
            <Link
              className='hover:text-[#f82249] relative'
              href='/Staff-Augmentation'
            >
              <li className='p-2 relative px-10 border-[#262c44] border-b-2 right'>
                Employer
              </li>
            </Link>
            <Link className=' relative hover:text-[#f82249]' href='/contactus'>
              <li className='p-2  px-10 border-[#262c44] border-b-2 right'>
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className='flex flex-wrap justify-start items-start w-[50%] gap-8'>
          <div className='pl[150px]  max-md:pl-0 w-[47%]'>
            <h5 className='text-blue-400 font-bold pb-[20px]'>CONTACT INFO</h5>
            <p className='pb-[20px]'>ContactUs@empowerprofessionals.com</p>
            <p className='pb-[20px]'>732-356-8008</p>
            <p className='pb-[20px]'>Mon-Fri: 8:00 AM - 5:00 PM</p>
          </div>

          <div className='pl[100px] mr[50px] max-md:mr-0 max-md:pl-0'>
            <h5 className='text-blue-400 font-bold pb-[20px]'>USA</h5>
            {/* <h5 className='text-[#fff] font-bold pb-[20px]'>USA</h5> */}
            <p className='w-[200px] pb-[20px]'>100 Franklin Square Drive.</p>
            <p className='pb-[20px]'> Suite #104, Somerset,</p>
            <p className='pb-[20px]'>NJ 08873</p>
          </div>
          <div className='pl[100px] mr-[50px] max-md:mr-0 max-md:pl-0'>
            <h5 className='text-blue-400 font-bold pb-[20px]'>INDIA</h5>
            <p className='w-[200px] pb-[20px]'>PU4, 3rd Floor, Sky Space,</p>
            <p className='pb-[20px]'> Behind Malhar Mega Mall,</p>
            <p className='pb-[20px]'>
              Vijay Nagar, Indore, Madhya Pradesh – 452001
            </p>
          </div>
          <div className='pl[100px] mr-[50px] max-md:mr-0 max-md:pl-0'>
            <h5 className='text-blue-400 font-bold pb-[20px]'>INDIA</h5>
            <p className='w-[200px] pb-[20px] leading-[250%]'>
              601/602, 6th Floor, Balaji Business Park, Andheri - Kurla Rd.
              Gamdevi, Marol Naka, Andheri East, Mumbai, Maharashtra - 400059
            </p>
            {/* <p className='w-[200px] pb-[20px]'>
              601/602, 6th Floor, Balaji Business Park, Andheri - Kurla Rd.
              Gamdevi, Marol Naka, Andheri East, Mumbai, Maharashtra - 400059
            </p> */}
          </div>
        </div>
      </div>
      <div className='flex justify-between w-[1024px] h-[100px]  max-md:flex-wrap  max-md:w-full max-md:h-full'>
        <div className='flex items-center p-8 w-[600px]  max-md:w-full'>
          <Image className='mr-3' src={logo} alt='alt' />
          <p>Copyright © 2019 All Rights Reserved by EMPOWER PROFESSIONALS</p>
        </div>
        <div className='followus flex gap-2 justify-center items-center z-[999999]'>
          <Link
            className='w-[40px] flex h-[40px] rounded-full bg-[#222636] justify-center items-center hover:bg-[#13a6d9]'
            href='https://www.linkedin.com/company/empower-professionals-inc'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='20'
              height='20'
              viewBox='0,0,256,256'
            >
              <g
                fill='#ffffff'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
                // style="mix-blend-mode: normal"
              >
                <g transform='scale(5.12,5.12)'>
                  <path d='M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z'></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            className='w-[40px] flex h-[40px] rounded-full bg-[#222636] justify-center items-center hover:bg-[#13a6d9]'
            href='https://www.facebook.com/empowerprofessionals/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='20'
              height='20'
              viewBox='0,0,256,256'
            >
              <g
                fill='#ffffff'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
                // style="mix-blend-mode: normal"
              >
                <g transform='scale(5.12,5.12)'>
                  <path d='M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z'></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            className='w-[40px] flex h-[40px] rounded-full bg-[#222636] justify-center items-center hover:bg-[#13a6d9]'
            href='https://twitter.com/empowerprof'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='20'
              height='20'
              viewBox='0,0,256,256'
            >
              <g
                fill='#ffffff'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
                // style="mix-blend-mode: normal"
              >
                <g transform='scale(8.53333,8.53333)'>
                  <path d='M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z'></path>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
