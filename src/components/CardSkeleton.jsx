import React from 'react';
import { format } from "date-fns";
import { BASE_URL } from '../backendUrl';
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function CardSkeleton({_id,title, summary, cover, content, createdAt, author }) {
  return (
    <div className="w-[300px] rounded-md border m-3 h-80 overflow-hidden">
        <h1 className='w-full rounded-md object-cover mt-0'><Skeleton height={160}/></h1>
        <div className="p-4">
        <h1 className="text-lg font-semibold "><Skeleton height={40}/></h1>
        <p className="mt-2 text-sm text-gray-800">
        <Skeleton count={4}/>
        </p>
        <button
          type="button"
          className="mt-2 rounded-sm text-base px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm "
        >
         <Skeleton/>
        </button>
      </div>
    </div>
  )
}
