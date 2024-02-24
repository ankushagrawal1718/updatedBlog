import React from 'react';
import { compareAsc, format } from "date-fns";
import { BASE_URL } from '../backendUrl';
import { Link } from "react-router-dom";

export function Card({_id,title, summary, cover, content, createdAt, author }) {
  return (
    <div className="w-[300px] rounded-md border m-3 h-90">
      <Link to={`/post/${_id}`}>
      <img
        src={BASE_URL+"/" + cover}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold h-8 truncate">{title}</h1>
        <p className="mt-2 text-sm text-gray-800 h-8 truncate">
          {summary}
        </p>
        <div className='mt-3 px-2 py-0 flex justify-between'>
          <h4 className='italic text-sm font-medium text-yellow-700'>{author?.username}</h4>
          <time className='text-xs mt-0 text-gray-500'>{format(new Date(createdAt), "dd-MMM-yyyy")}</time>
        </div>
        <button
          type="button"
          className="mt-2 rounded-sm text-base bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
      </Link>
    </div>
  )
}
