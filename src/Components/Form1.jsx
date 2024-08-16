import React, { useState } from "react";
import bg1 from "../assets/bg1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Form1 = () => {
 const [email, setEmail] = useState("");
 const [error, setError] = useState("");

 const handleChange = (event) => {
   const emailValue = event.target.value;
   setEmail(emailValue);

   // Check if "@" is not present in the email
   if (!emailValue.includes("@")) {
     setError('Email must contain "@" symbol.');
   } else {
     setError(""); // Clear the error if "@" is present
   }
 };
  return (
    <>
      <div className="w-full min-h-screen bg-white flex items-center justify-between ">
        <div>
          <img src={bg1} alt="Image " className="w-[369px]" />
        </div>
        <form action="" className="mr-[215px]">
          <h4 className="font-DMsans font-bold text-[42px] leading-[52px] text-[#1E0E62] pb-[20px]">
            Create an Account
          </h4>
          <p className="font-DMsans font-normal text-[16px] leading-[26px] text-[#A7A1C2] mb-[50px]  ">
            By signing up, you agree to the Terms of Service.
          </p>
          <label
            htmlFor="email"
            className="font-DMsans font-bold text-[14px] leading-[14px] text-[#1E0E62] block mb-[19px]  "
          >
            E-Mail
          </label>
          <input
            onChange={handleChange}
            type="email"
            name=""
            id=""
            placeholder="Your email"
            className="w-[470px] h-[60px] border-[2px] border-[#EBEAED] rounded-[100px] pl-[24px] outline-none text-orange-500 mb-[35px]   "
          />
          <div className="h-[20px]">
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <label
            htmlFor="password"
            className="font-DMsans font-bold text-[14px] leading-[14px] text-[#1E0E62] block mb-[19px]  "
          >
            Password
          </label>
          <div className="flex gap-[20px]">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="w-[220px] h-[60px] border-[2px] border-[#EBEAED] rounded-[100px] pl-[24px] outline-none text-orange-500 mb-[35px]   "
            />
            <input
              type="password"
              placeholder="Repeat"
              className="w-[220px] h-[60px] border-[2px] border-[#EBEAED] rounded-[100px] pl-[24px] outline-none text-orange-500 mb-[35px]   "
            />
          </div>
          <div className="h-[20px]">
            <p></p>
          </div>
          <div className="flex items-center gap-[24px]  ">
            <button className="bg-[#25DAC5] text-white font-DMsans font-medium w-[120px] h-[60px] rounded-[100px]   ">
              Sign Up
            </button>
            <div className="flex gap-[24px] items-center text-[#EBEAED]">
              <p>or</p>
              <a
                href="#"
                className="hover:text-orange-500 transition-all duration-500 "
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-all duration-500 "
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-all duration-500 "
              >
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form1;
