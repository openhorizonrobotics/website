import React from "react";
import styles from "./contactus.module.css";

function ContactUs() {
  return (
    <div className={`${styles.alltext} flex justify-center`}>
      <div className="mb-6">
        <div className="flex flex-col justify-center w-full">
          <div
            className={`${styles.heading} text-orange-600 text-4xl font-semibold my-4`}
          >
            Contact Us!
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
              fill="#718096"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className={`${styles.search} bg-white rounded-2xl py-2 px-12 text-black w-full`}
            />
          </div>
          <div className="w-full border-b-2 border-gray-400 my-8"></div>
        </div>
        <div className={`${styles.horizontal} flex gap-8`}>
          <div className="bg-blue-600 p-2 rounded-md">
            <div className="text-2xl font-semibold">Contact Info</div>
            <div className="text-orange-500">hit us up anytime uwu!</div>
            <div className="mt-8">
              <div className="my-4">1234567890</div>
              <div className="my-4">ohrmitblr@gmail.com</div>
              <div className="my-4">AB4, MITB, Yelahanka, Bangalore, India</div>
              <div></div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <div className={`${styles.horizontal} flex gap-4`}>
              <div>
                <div className="text-sm text-orange-600">First Name</div>
                <div className="border-b border-gray-400">
                  <input
                    type="text"
                    style={{
                      background: "inherit",
                      border: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                    className="px-2 py-1"
                  />
                </div>
                <div className="text-sm text-orange-600 mt-6">Last Name</div>
                <div className="border-b border-gray-400">
                  <input
                    type="text"
                    style={{
                      background: "inherit",
                      border: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                    className="px-2 py-1"
                  />
                </div>
              </div>
              <div>
                <div className="text-sm text-orange-600">Email</div>
                <div className="border-b border-gray-400">
                  <input
                    type="text"
                    style={{
                      background: "inherit",
                      border: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                    className="px-2 py-1"
                  />
                </div>
                <div className="text-sm text-orange-600 mt-6">Phone Number</div>
                <div className="border-b border-gray-400">
                  <input
                    type="text"
                    style={{
                      background: "inherit",
                      border: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                    className="px-2 py-1"
                  />
                </div>
              </div>
            </div>
            <div className="text-orange-600 mt-10">
              <div>
                Select Subject?
                <form className="flex gap-2">
                  <div className={`${styles.radios} flex gap-2`}>
                    <div className="flex gap-1">
                      <input
                        type="radio"
                        id="option1"
                        name="subject"
                        value="option1"
                      />
                      <label htmlFor="option1">joining issue</label>
                      <br />
                    </div>
                    <div className="flex gap-1">
                      <input
                        type="radio"
                        id="option2"
                        name="subject"
                        value="option2"
                      />
                      <label htmlFor="option2">sign up</label>
                      <br />
                    </div>
                  </div>

                  <div className={`${styles.radios} flex gap-2`}>
                    <div className="flex gap-1">
                      <input
                        type="radio"
                        id="option3"
                        name="subject"
                        value="option3"
                      />
                      <label htmlFor="option3">member query</label>
                      <br />
                    </div>
                    <div className="flex gap-1">
                      <input
                        type="radio"
                        id="option4"
                        name="subject"
                        value="option4"
                      />
                      <label htmlFor="option3">general inquiry</label>
                      <br />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full">
              <div className="mt-10 text-sm">Message</div>
              <div className="border-b-2 border-gray-400">
                <input
                  type="text"
                  placeholder="Write your message..."
                  style={{
                    background: "inherit",
                    border: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                  className="px-2 py-2"
                />
              </div>
            </div>
            <div
              className="px-4 py-3 text-center font-semibold bg-orange-600 mt-6 text-sm rounded-lg cursor-pointer hover:bg-orange-800"
              style={{ maxWidth: "200px" }}
            >
              Send Message
            </div>
          </div>
        </div>
        <div className="bg-blue-500 mt-10 rounded-md p-4">Join newsletter</div>
      </div>
    </div>
  );
}

export default ContactUs;
