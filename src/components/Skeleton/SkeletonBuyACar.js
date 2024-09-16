import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function SkeletonBuyACar() {
  return(
    <>
    <div className="flex flex-col border rounded-2xl">
      <div className=" rounded-2xl">
        <Skeleton className=" rounded-2xl" height={212} />
      </div>
      <div className="mt-3 flex flex-col gap-y-5 px-3">
        <Skeleton width={200}/>
        <div className='flex items-center justify-between'>
        <Skeleton width={80} />
        <Skeleton width={80} />
        <Skeleton width={80} />
        </div>
        <Skeleton width={100} />
        <div className='flex items-center justify-between'>
        <Skeleton width={130} />
        <Skeleton width={130} />

        </div>
      </div>
      <div className="flex items-center justify-center rounded-2xl my-5">
        <Skeleton height={52} width={195} />
      </div>
    </div>
  </>
  )
}

export default SkeletonBuyACar