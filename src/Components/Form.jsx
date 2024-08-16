import React, { useState } from "react";
import bgImg from "../assets/bg.png";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  console.log(email);
  console.log(password);
  const handleSubmit = (e) => {
    e.preventDefault();
    email.trim() === "" ? setEmailError(true) : setEmailError(false);
    password.trim() === "" ? setPasswordError(true) : setPasswordError(false);
  };
  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-[430px] h-[530px] bg-white rounded-[10px] pt-[38px]  pb-[29px]  px-[50px]   "
        >
          <h3 className="mb-[45px] font-DMsans font-bold text-[42px] leadign-[52px]  text-[#1E0E62] text-center ">
            Sign Up Now
          </h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="text-orange-600 outline-none font-bold font-DMsans text-[15px] pl-[24px] w-full h-[50px] rounded-[100px]  border-[2px] border-[#EBEAED] placeholder:font-DMsans placeholder:font-medium placeholder:text-[18px] placeholder:leading-[26px]  placeholder:text-[rgba(21,20,57,0.4)]"
          />
          <p
            className={`font-DMsans font-normal text-[10px]  mt-[10px] text-red-600 mb-[10px] transition:opcity duration-300 ${
              mailError ? "opacity-100" : "opacity-0"
            } `}
          >
            Invalid emil address.
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id=""
            placeholder="Your password"
            className="text-orange-600 outline-none font-bold font-DMsans text-[15px] pl-[24px] w-full h-[50px] rounded-[100px] border-[2px] border-[#EBEAED]  placeholder:font-DMsans placeholder:font-medium placeholder:text-[18px] placeholder:leading-[26px]  placeholder:text-[rgba(21,20,57,0.4)] "
          />
          <p
            className={`font-DMsans font-normal text-[10px]  mt-[10px] text-red-600 mb-[10px] transition:opcity duration-300 ${
              passwordError ? "opacity-100" : "opacity-0"
            }  `}
          >
            Invalid password.
          </p>
          <div className="flex gap-[10px]   ">
            <input type="checkbox" name="" id="" />
            <p className="font-DMsans font-normal text-[16px] leading-[26px] text-[rgba(21,20,57,0.4)] ">
              I agree to the Terms of Service.
            </p>
          </div>
          <button
            type="submit"
            className="mt-[24px] mb-[50px] w-full  h-[50px] rounded-[100px] bg-[#25DAC5] text-white font-DMsans font-medium text-[18px] ledaing-[26px]  "
          >
            Create an Account
          </button>
          <div className="flex  justify-center text-center">
            <div className="flex gap-[10px]">
              <a
                href="#"
                className="font-DMsans font-medium text-[18px] leading-[28px] text-[rgba(21,20,57,0.4)] "
              >
                Do you have an Account?
              </a>
              <a
                href="#"
                className="font-DMsans font-medium text-[18px] leading-[28px] text-[#25DAC5] "
              >
                Sign In
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
