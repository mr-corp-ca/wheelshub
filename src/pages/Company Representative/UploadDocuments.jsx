import React from "react";
import IMAGES from "../../assets/IMAGES";
import { OutlineButton } from "../../components/OutlineButton";
import { Input } from "../../components/Input";
import documentfile from "../../assets/images/document.png"
import gallery from "../../assets/images/gallery.png"
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
import { useNavigateContext } from "../../Context/NavigateContext";
import Svgs from '../../assets/svgs/index.js'

function UploadDocuments() {
   const navigate = useNavigate()

   const { setIsRedirect} = useNavigateContext()

   const handleClick=()=>{
    navigate('/representative/verification-in-progress')
     setIsRedirect(true)
   }
  return (
    <>
    <Layout active={'Dashboard'}>
    <div className=" flex items-center justify-center lg:px-10 py-5">
    <div className="w-full lg:w-[80%]  border p-5 py-16 rounded-xl">
      <div className=" ">
        <div className=" flex items-center justify-center flex-col gap-6">
          <h1 className="lg:text-[28px] font-bold font-inter text-gray-1">
          Upload documents
          </h1>
        </div>
      </div>
      <div className="pt-3 w-full lg:w-[80%] mx-auto">
        <form className="space-y-8">
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
              <div className="w-full relative">
                <Input label={"Identity proof"} placeholder={"Full name"} className={"relative"}/>
                <span className=" absolute top-11 right-3"><Svgs.DocumentUpload/></span>
              </div>
              <div className="w-full relative">
                <Input label={"SIN number"} placeholder={"Last name"} />
                <span className=" absolute top-11 right-3"><Svgs.DocumentUpload/></span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full relative">
                <Input
                  type={"number"}
                  label={"Recent education certificate"}
                  placeholder={"+1"}
                />
                <span className=" absolute top-11 right-3"><Svgs.DocumentUpload/></span>
              </div>
              <div className="w-full relative">
                <Input label={"Experience letter"} placeholder={"Email id"} />
                <span className=" absolute top-11 right-3"><Svgs.DocumentUpload/></span>
              </div>
            </div>
           
          </div>

          <div className="w-full text-center flex items-center justify-center">
            <button
            onClick={handleClick}
              className={
                "text-sm rounded-lg px-2 py-3 font-inter font-semibold self-center items-center bg-custom-blue text-white shadow-2xl shadow-custom-blue"
              }
              title={""}
            >
              Send verification request
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
      </Layout>
    </>
  );
}

export default UploadDocuments;
