import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import '../styles/Contact-ModelGallery.css';
import Navbar from '../components/common/Navbar/Navbar';
import '../components/common/Navbar/Navbar.css';

const Contact: React.FC = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col m-0 p-0">
        <div className="ml-10 mr-10">
          <Navbar />
        </div>
        <header className="flex w-full justify-center items-center space-x-4">
          <div>
            <h1 className="text-9xl font-bodoni-moda">V2</h1>
          </div>
          <div>
            <div className="text-left">
              <h1 className="text-5xl font-bodoni-moda">VOGUE & VIBE</h1>
              <h2 className="text-5xl font-bold text-red-500 font-inria-serif">CONTACT US</h2>
              <hr className="border-red-500 ml-2 w-52" style={{ borderTopWidth: '3px' }} />
            </div>
          </div>
        </header>
        <section className="relative flex justify-center my-5 min-h-20 lg:p-20 mt-10">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-30 min-h-20"
            style={{ backgroundImage: "url('src/assets/images/Frame 111.png')" }}
          ></div>
          <div className="relative p-5" style={{ minHeight: '501px' }}>
            <h1 className="max-[400]:text-base text-lg sm:text-5xl lg:text-7xl font-bold text-red-600 font-inria-serif mb-10">
              About Us
            </h1>
            <p className="max-[400px]:text-[9px] sm:text-base lg:text-2xl mt-4 font-poppins min-[400px]:m-10 min-[400px]:px-16 font-normal">
              At V2 Vogue & Vibe, we redefine the world of high fashion by curating exclusive fashion events, high-end model bookings, and luxury brand collaborations. Our platform brings together top-tier talent, industry-leading designers, and premium brands to create unforgettable experiences. Whether you're seeking the perfect face for your campaign, a show-stopping runway event, or a strategic collaboration that elevates your brand, our team is dedicated to delivering excellence.
            </p>
            <br/>
            <p className="max-[400px]:text-[9px] sm:text-base lg:text-2xl mt-4 font-poppins min-[400px]:m-10 min-[400px]:px-16 font-normal">
              With a keen eye for innovation and style, we seamlessly connect talent with opportunities, ensuring that every project we undertake exudes sophistication, creativity, and prestige. If you're ready to be part of the ultimate fashion and lifestyle experience, connect with us today and let's shape the future of fashion together.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center my-5">
          <div className="my-2 flex justify-center flex-col items-center">
            <h4 className="text-lg">General Enquiries / Collaborations</h4>
            <hr className="border-red-500 w-96 mb-5" />
            <p>+91 98765XXXXX / +91 91234XXXXX</p>
          </div>
          <div className="my-2 flex justify-center flex-col items-center">
            <h4 className="text-lg mt-10">For Bookings</h4>
            <hr className="border-red-500 w-28 mb-5" />
            <p>bookings@v2voguevibe.com / info@v2voguevibe.com</p>
          </div>
          <div className="my-2 flex justify-center flex-col items-center">
            <h4 className="text-lg mt-10">Business Address</h4>
            <hr className="border-red-500 w-40 mb-5" />
            <address className="flex justify-center gap-3 ml-20">
              <div className="flex flex-col items-end">
                <p className="font-medium">Office No.</p>
                <p className="font-medium">Street</p>
                <p className="font-medium">City</p>
                <p className="font-medium">State</p>
                <p className="font-medium">Country</p>
                <p className="font-medium">Postal Code</p>
              </div>
              <div className="flex flex-col items-start">
                <p>
                  <span className="mr-1">:</span> Suite 27, Tower B
                </p>
                <p>
                  <span className="mr-1">:</span> Fashion Street, MG Road
                </p>
                <p>
                  <span className="mr-1">:</span> Mumbai
                </p>
                <p>
                  <span className="mr-1">:</span> Maharashtra
                </p>
                <p>
                  <span className="mr-1">:</span> India
                </p>
                <p>
                  <span className="mr-1">:</span> 400001
                </p>
              </div>
            </address>
          </div>
        </section>
        <section className="my-5 flex justify-center flex-col">
          <div className="flex justify-center flex-col items-center">
            <h4 className="text-lg text-center">Get In Touch</h4>
            <hr className="border-red-500 w-28 mb-5" />
          </div>
          <form className="flex flex-col items-center gap-2">
            <input type="text" placeholder="Enter Your Name" className="border my-2 p-2 w-1/2" />
            <input type="email" placeholder="Enter Your Email" className="border my-2 p-2 w-1/2" />
            <input type="text" placeholder="Subject" className="border my-2 p-2 w-1/2" />
            <textarea placeholder="Message" className="border my-2 p-2 w-1/2 h-32 overflow-hidden resize-none"></textarea>
            <button type="submit" className="bg-black text-white p-2 w-1/2 mt-10">Send Message</button>
          </form>
        </section>
        <footer className="text-center my-10">
          <p className="color">All Rights Reserved © V2 Vogue & Vibe 2024-25</p>
        </footer>
      </div>
    </>
  );
}

export default Contact;
