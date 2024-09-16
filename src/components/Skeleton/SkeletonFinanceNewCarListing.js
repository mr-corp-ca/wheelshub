import React from 'react'
import Skeleton from 'react-loading-skeleton'

function SkeletonFinanceNewCarListing() {
  return (
    <div className=' rounded-2xl border p-4 flex flex-wrap items-center justify-center md:justify-between gap-y-3'>
      <div className='flex items-center justify-center md:justify-start flex-wrap gap-1'>
      <div>
      <Skeleton height={112} width={160}/>
      </div>
      <div className='flex flex-col items-center md:items-start gap-1'>
        <Skeleton height={26} width={215}/>
        <Skeleton height={21} width={250}/>
        <Skeleton height={21} width={200}/>
      </div>
      </div>
      <div>
        <Skeleton height={44} width={150}/>
      </div>
    </div>
  )
}

export default SkeletonFinanceNewCarListing