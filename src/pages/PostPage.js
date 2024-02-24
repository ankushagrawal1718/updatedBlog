import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../userContext";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import { BASE_URL } from "../backendUrl";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const response = await axios.get(`${BASE_URL}/post/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (!response.data) {
  //         throw new Error(`Failed to fetch post data`);
  //       }

  //       setPostInfo(response.data);
  //     } catch (error) {
  //       console.error("Error fetching post data:", error);
  //       // You might want to handle the error, e.g., display a message to the user
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  const {data,loading,error} = useFetch(`/post/${id}`,'GET');
  console.log(data);

  useEffect(()=>{
    console.log(data);
    setPostInfo(data)
  },[data]);

  if(loading){
    return <Loading/>;
  }
  if(error){
    return 'Something went wrong';
  }

  if (!postInfo) return null;
  return (
    <div className="post-page">
      
      <div className="image ">
        <img src={BASE_URL+`/${postInfo.cover}`} alt="post-image" className=" w-full object-cover border-2 border-black mx-auto h-96 rounded-md"/>
      </div>
      <h1 className="text-4xl my-3 font-bold text-start">Title: {postInfo.title}</h1>
      <div className="flex justify-between">
        <div className="author text-left text-yellow-700 font-bold ">Author: {postInfo.author.username}</div>
        <time className="text-gray-400">{format(new Date(postInfo.createdAt), "dd-MMM-yyyy")}</time>
      </div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
        <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        >
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
        </svg>
        Edit Post
        </Link>
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  );
};

export default PostPage;
