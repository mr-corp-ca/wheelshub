// import React from 'react'
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";


// function CustomCardSkeleton() {
//   return(
//     <>
//     <div className="flex flex-col border rounded-2xl">
//       <div className=" rounded-2xl">
//         <Skeleton height={171} />
//       </div>
//       <div className="mt-3 flex flex-col gap-y-2 px-3">
//         <Skeleton width={200}/>
//         <div className='flex items-center justify-between'>
//         <Skeleton width={70} />
//         <Skeleton width={70} />
//         <Skeleton width={70} />
//         </div>
//         <Skeleton width={100} />
//         <div className='flex items-center justify-between'>
//         <Skeleton width={130} />
        

//         </div>
//       </div>
//       <div className="flex items-center justify-center rounded-2xl my-3">
//         <Skeleton height={48} width={132} />
//       </div>
//     </div>
//   </>
//   )
// }

// export default CustomCardSkeleton

import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CustomCardSkeleton() {
  return (
    <>
      <div className="flex flex-col border rounded-2xl"> {/* Outer card with padding */}
        <div className="rounded-t-2xl -mt-1 overflow-hidden"> {/* Rounded image container */}
          <Skeleton height={171}  /> {/* Ensure skeleton itself is rounded */}
        </div>
        <div className="mt-3 flex flex-col gap-y-2 px-3">
          <Skeleton width={200} className="rounded-md" /> {/* Rounded text skeleton */}
          <div className="flex items-center justify-between">
            <Skeleton width={70} className="rounded-md" />
            <Skeleton width={70} className="rounded-md" />
            <Skeleton width={70} className="rounded-md" />
          </div>
          <Skeleton width={100} className="rounded-md" />
          <div className="flex items-center justify-between">
            <Skeleton width={130} className="rounded-md" />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-2xl my-3">
          <Skeleton height={48} width={132} className="rounded-full" /> {/* Rounded button skeleton */}
        </div>
      </div>
    </>
  );
}

export default CustomCardSkeleton;
