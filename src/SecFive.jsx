import React from 'react';

export const SecFive = () => {
  return (
    <div>
      <footer className="bg-[#19376D] opacity-[65%] text-white p-10 font-poppins">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services Section */}
          <div>
            <h3 className="font-medium text-[24px] mb-4">Services</h3>
            <ul className="space-y-2 text-[16px] text-[#B3B3B3]">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Mobile Apps Development</li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-medium text-[24px] mb-4">About</h3>
            <ul className="space-y-2 text-[#B3B3B3]">
              <li>My History</li>
              <li>Blogs</li>
              <li>Hobbies & Interest</li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="font-medium text-[24px] mb-4">Information</h3>
            <ul className="space-y-2 text-[#B3B3B3]">
              <li>FAQs</li>
              <li>Certifications</li>
              <li>Skills Overview</li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="font-medium text-[24px] mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-[#B3B3B3]">
              <li>Contact Form</li>
              <li>
                <a href="mailto:akuakmal45@gmail.com" className="hover:text-gray-300">
                  akuakmal45@gmail.com
                </a>
              </li>
              <li>Social Profiles</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
