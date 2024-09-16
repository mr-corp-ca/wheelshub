import React from 'react'
import idImage from '../../assets/images/id 1.png'
import { Button } from '../../components/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import { Layout } from '../../components/Layout/DashboardLayout'







function MechanicVerificationPage() {
  const navigate = useNavigate()
  return (
    <>
    <Layout active={'Dashboard'}>
      <div className='w-full h-screen flex items-center justify-center px-4'>
        <div className='verification border rounded-xl px-10 py-4 w-full max-w-2xl flex items-center justify-center flex-col gap-6'>
          <div className='w-full flex justify-center'>
            <img src={idImage} alt="" className='max-w-full h-auto' />
          </div>
          <div className='text-center'>
            <h6 className='text-xl sm:text-2xl font-semibold font-inter'>
              You are not verified yet, verify now to get started.
            </h6>
          </div>
          <div>
            <Button onClick={()=>{navigate('/dashboard/setting')}} title={"Verify now"} className={"font-Work-sans text-base sm:text-lg font-medium shadow-2xl shadow-custom-blue"} />
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default MechanicVerificationPage
