"use client";
import React, { useState } from 'react';
import '@fontsource/lobster';
import '@fontsource/monomaniac-one';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import emailjs from 'emailjs-com'; // Import EmailJS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const isActive = (link) => {
    return currentPath === link ? 'text-[rgb(0,191,255)]' : 'text-white';
  };

  // Function to send email notification when resume is downloaded
  const sendDownloadNotification = () => {
    const templateParams = {
      name: 'Portfolio',
      email: 'derrickcyubahiroo@gmail.com',
      message: 'A user has downloaded the resume from the website. 👌😁'
    };

    emailjs.send('service_uqztmaj', 'template_3cs4qrm', templateParams, 'NynwdPUsUgbrIajXY')
      .then((response) => {
        console.log('Success!', response.status, response.text);
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };

  return (
    <div>
      <section className={`fixed top-6 z-50 left-8 backdrop-blur-md right-8`}>
        <div className="flex justify-between px-2 rounded-xl items-center z-50 border-2 border-[rgb(0,191,255)] w-full bg-black/50">
          <div className='text-white text-xl font-bold border-2 border-[rgb(0,191,255)] m-4 rounded-md tracking-widest font-lobster py-[10px] px-[15px] bg-black/30 backdrop-blur-md'>
            CD
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-14">
            <button
              onClick={() => router.push('/')}
              className={`${isActive('/')} italic font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              HOME
            </button>
            <button
              onClick={() => router.push('/skills')}
              className={`${isActive('/skills')} italic font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              SKILLS
            </button>
            <button
              onClick={() => router.push('/projects')}
              className={`${isActive('/projects')} italic font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => router.push('/contact')}
              className={`${isActive('/contact')} italic font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              CONTACT
            </button>
          </div>

          <div className='hidden md:flex bg-transparent text-base cursor-pointer hover:bg-[rgb(0,191,255)] text-[rgb(0,191,255)] font-medium hover:text-white py-2 px-4 border-2 border-[rgb(0,191,255)] rounded mr-4'>
            <button className='tracking-widest font-monomaniac'>
              <a
                href="/resume.pdf"
                download="CD_Resume"
                className="w-full h-full"
                onClick={sendDownloadNotification} // Call the function on click
              >
                Get Resume
              </a>
            </button>
          </div>

          <div className="md:hidden text-white p-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="dropdown-menu md:hidden flex flex-col items-center py-4 space-y-4 bg-gradient-to-tr from-[#081b29] to-[#0a0a0a] rounded-lg fixed top-[6rem] left-0 right-0 z-40">
            <button
              onClick={() => router.push('/')}
              className={`${isActive('/')} font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              HOME
            </button>
            <button
              onClick={() => router.push('/skills')}
              className={`${isActive('/skills')}  font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              SKILLS
            </button>
            <button
              onClick={() => router.push('/projects')}
              className={`${isActive('/projects')} font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => router.push('/contact')}
              className={`${isActive('/contact')} font-medium text-base tracking-widest cursor-pointer font-monomaniac`}
            >
              CONTACT
            </button>
            <button className="bg-[rgb(0,191,255)] text-base tracking-widest text-white font-medium py-2 px-12 rounded font-monomaniac">
              <a href="/derrickresume.pdf" download="Derrick_Resume" className="w-full h-full" onClick={sendDownloadNotification}>
                Get Resume
              </a>
            </button>

          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
