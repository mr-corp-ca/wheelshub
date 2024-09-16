import React from "react";
import IMAGES from "../../assets/IMAGES";
import { OutlineButton } from "../../components/OutlineButton";
import { Input } from "../../components/Input";
import documentfile from "../../assets/images/document.png"
import gallery from "../../assets/images/gallery.png"
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
function UploadDocuments() {
   const navigate = useNavigate()
  return (
    <>
    <Layout active={'Dashboard'}>
    <div className=" flex px-10 py-5">
    <div className="w-full lg:w-[80%]  border p-5 py-16 rounded-xl">
      <div className=" ">
        <div className=" flex items-center justify-center flex-col gap-6">
          <h1 className="lg:text-[28px] font-bold font-inter text-gray-1">
          Upload documents
          </h1>
        </div>
      </div>
      <div className="pt-3 w-[80%] mx-auto">
        <form className="space-y-8">
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
              <div className="w-full relative">
                <Input label={"Identity proof"} placeholder={"Full name"} className={"relative"}/>
                <img src={documentfile} className=" absolute top-10 right-2" alt="" />
              </div>
              <div className="w-full relative">
                <Input label={"SIN number"} placeholder={"Last name"} />
                <img src={documentfile} className=" absolute top-10 right-2" alt="" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full relative">
                <Input
                  type={"number"}
                  label={"Recent education certificate"}
                  placeholder={"+1"}
                />
                <img src={documentfile} className=" absolute top-10 right-2" alt="" />
              </div>
              <div className="w-full relative">
                <Input label={"Experience letter"} placeholder={"Email id"} />
                <img src={documentfile} className=" absolute top-10 right-2" alt="" />
              </div>
            </div>
           
          </div>

          <div className="w-full text-center flex items-center justify-center">
            <button
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
