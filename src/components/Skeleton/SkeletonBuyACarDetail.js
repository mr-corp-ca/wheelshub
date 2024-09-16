import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";


function SkeletonBuyACarDetail({height}) {
  return (
    <>
    <div className=' rounded-2xl'>
      <Skeleton height={height} className=' rounded-2xl'/>
    </div>
    </>
  )
}

export default SkeletonBuyACarDetail