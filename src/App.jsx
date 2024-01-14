import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [QR, setQR] = useState("");

  const createQR = () => {
    if (!inputValue) {
      return alert("Content is empty. Input something !!");
    }
    setQR(
      `http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=[100]x[100]`
    );
  };

  return (
    <>
      <Navbar />

      {/* main content */}
      <div className="container mx-auto">
        {/* top content */}
        <div>
          {/* QR code title */}
          <h1 className="text-white text-center text-4xl font-bold mt-6 mb-2">
            QR Code Generator
          </h1>

          {/* paragraph */}
          <p className="text-center text-white lg:text-xl md:text-xl text-lg mb-3">
            An instant creation of a QR code with any content.
          </p>
        </div>

        {/* search input & button */}
        <div className="flex justify-center mb-5">
          <div className="input ">
            {/* search input */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Write the content (link or text)"
              className="shadow-md w-64 rounded-l-lg px-2 py-2 text-white outline-none bg-[#2f3542] placeholder-gray-400 lg:w-[30em] border-2 border-gray-600"
            />

            {/* button */}
            <button
              onClick={createQR}
              className="bg-[#222f3e] text-white px-4 py-2 rounded-r-lg shadow-md border-b-2 border-t-2 border-gray-600"
            >
              Create
            </button>
          </div>
        </div>

        {/* Title And QR Code Image */}
        {QR && (
          <div className="qr-container">
            {/* title  */}
            <div className="text-white text-center text-2xl font-semibold mb-5">
              Here is your QR !!
            </div>
            <div className="flex justify-center">
              <img className="qr-image" src={QR} alt="QR code" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
