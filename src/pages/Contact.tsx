import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import '../styles/About-ShowModel.css'
import Navbar from '../components/common/Navbar/Navbar';
import '../components/common/Navbar/Navbar.css';

const Contact: React.FC = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col m-0 p-0">
        <div className='ml-10 mr-10'>
          <Navbar />
        </div>
        <header className="flex w-full justify-center items-center space-x-4">
          <div>
            <h1 className="text-9xl font-bodoni-moda">S2</h1>
          </div>
          <div>
            <div className='text-left'>
              <h1 className="text-5xl font-bodoni-moda">TALENTS & EVENTS</h1>
              <h2 className="text-5xl font-bold text-red-500 font-inria-serif ">CONTACT</h2>
              <hr className="border-red-500 ml-2 w-52" style={{ borderTopWidth: '3px' }} />
            </div>
          </div>
        </header>
        <section className="relative flex justify-center my-5 min-h-20 p-20 mt-10">
          <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-30 min-h-20" style={{ backgroundImage: "url('src/assets/images/Frame 111.png')" }}></div>
          <div className="relative p-5" style={{ minHeight: "501px" }}>
            <h1 className="text-7xl font-bold text-red-600 font-inria-serif mb-10">About us</h1>
            <p className="text-2xl mt-4 font-poppins m-10">
              The 2023 show will have lots to see and do, for all ages. We hope to provide a wide range of interesting hobbies and activities for you to discover new ways to entertain yourselves and your families. Hobbies bring a sense of fun and freedom to life that can help us with today’s stressful lifestyles. The Big Model and Hobby Show 2023 is more than just a model railway show.
            </p>
            <p className="text-2xl mt-4 font-poppins m-10">
              The 2023 show will have lots to see and do, for all ages. We hope to provide a wide range of interesting hobbies and activities for you to discover new ways to entertain yourselves and your families. Hobbies bring a sense of fun and freedom to life that can help us with today’s stressful lifestyles. The Big Model and Hobby Show 2023 is more than just a model railway show.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center my-5">
          <div className="my-2 flex justify-center flex-col items-center">
            <h4 className="text-lg">Enquiries / Collaborations / Availability</h4>
            <hr className="border-red-500 w-96 mb-5" />
            <p>+91 XXXXXXXXXX / +91 XXXXXXXXXX</p>
          </div>
          <div className="my-2 flex justify-center flex-col items-center">
            <h4 className="text-lg mt-10">For Booking</h4>
            <hr className="border-red-500 w-28 mb-5" />
            <p>xyzbook@gmail.com / bxyzbook@gmail.com</p>
          </div>
          <div className="my-2 flex justify-center flex-col items-center">
            <h4 className="text-lg mt-10">Business Address</h4>
            <hr className="border-red-500 w-40 mb-5" />
            <address className="text-left flex justify-center gap-3">
              <div className='flex flex-col items-end'>
                <p className='font-medium'>Building No. / Flat No.</p>
                <p className='font-medium'>Road / Street</p>
                <p className='font-medium'>City / Town </p>
                <p className='font-medium'>District </p>
                <p className='font-medium'>State </p>
                <p className='font-medium'>Pin Code </p>
              </div>
              <div className='flex flex-col items-start'>
                <p><span className='mr-1'>:</span> House in K No. 253 c/g</p>
                <p><span className='mr-1'>:</span> Westernstnd Marg</p>
                <p><span className='mr-1'>:</span> New Delhi</p>
                <p><span className='mr-1'>:</span> South Delhi</p>
                <p><span className='mr-1'>:</span> Delhi</p>
                <p><span className='mr-1'>:</span> 110068</p>
              </div>
            </address>
          </div>
        </section>
        <section className="my-5 flex justify-center flex-col">
          <div className='flex justify-center flex-col items-center'>
            <h4 className="text-lg text-center">Contact</h4>
            <hr className="border-red-500 w-28 mb-5" />
          </div>
          <form className="flex flex-col items-center gap-2">
            <input type="text" placeholder="Enter Your Name" className="border my-2 p-2 w-1/2" />
            <input type="email" placeholder="Enter Your Email" className="border my-2 p-2 w-1/2" />
            <input type="text" placeholder="Subject" className="border my-2 p-2 w-1/2" />
            <textarea placeholder="Details" className="border my-2 p-2 w-1/2 h-32 overflow-hidden resize-none"></textarea>
            <button type="submit" className="bg-black text-white p-2 w-1/2 mt-10">Submit</button>
          </form>
        </section>
        <footer className="text-center my-10">
          <p className='color'>All Rights Reserved©S2modelss.pvt 2024-25</p>
        </footer>
      </div>
    </>
  );
}

export default Contact;
