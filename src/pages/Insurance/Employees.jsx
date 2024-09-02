import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import audiCar from "../../assets/images/audicar.png";
// import crossIcon from "../../assets/images/Frame1410115282.png";
import crossIcon from "../../assets/images/crossIcon.png"

function Employees({ onClose }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [dialog, setDialog] = useState(true);
  function handleClick() {
    setDialog(false);
  }

  useEffect(() => {}, []);

  return (
    <div>
      {dialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl bg-white rounded-lg p-5">
            <img
              src={crossIcon}
              onClick={onClose}
              className="absolute top-28 left-[45%] cursor-pointer"
              alt="Close"
            />
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <div className="px-5">
                    <h1 className="text-2xl md:text-3xl font-bold font-inter text-gray-800">
                      Insurance Request
                    </h1>
                  </div>
                  <div className="my-4">
                    <div className="card py-4">
                      <div className="card1 p-4 md:p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img
                            src={audiCar}
                            alt="Car"
                            className="w-24 h-24 md:w-32 md:h-32"
                          />
                          <div>
                            <h1 className="text-base md:text-lg font-semibold font-inter text-gray-800">
                              Mercedes-Benz E 220 d
                            </h1>
                            <p className="text-sm md:text-base font-medium font-worksans text-gray-500">
                              12th July 2024 11:00 - 12:00 PM
                            </p>
                            <p className="text-sm md:text-base font-medium font-worksans text-gray-500">
                              Winner Name: Sean Wills
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      className="w-full md:w-[218px] h-[52px] px-4 py-3 border border-gray-300 font-medium text-lg font-worksans rounded-xl flex items-center justify-center"
                    >
                      Ask for Reschedule
                    </button>
                    <button
                      type="button"
                      className="w-full md:w-[218px] h-[52px] px-4 py-3 bg-custom-blue font-medium text-lg font-worksans rounded-xl text-white flex items-center justify-center"
                    >
                      Approve Request
                    </button>
                  </div>
                </>
              )}
              {/* Additional steps can be added here similar to step 1 */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;
