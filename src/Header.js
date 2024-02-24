// import { response } from 'express';
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";
import { BASE_URL } from "./backendUrl";
import axios from "axios";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext);
  const [showMenu,setShowMenu] = useState(false);


  useEffect(()=>{ 
    const fetchProfile = async ()=>{
      try{
        const token = localStorage.getItem("token");
        if (!token) return; // No token available, user not authenticated
        const response = await axios.get(BASE_URL+'/profile',{
          headers:{
            'Authorization':`Bearer ${token}`,
          }
        })
        if (response.status === 200) {
          setUserInfo(response.data);
          console.log(response.data);
        }
      } catch(error){
        console.log("Error fetching user profile:", error)
      }
    }
    fetchProfile();
  },[])



  const logout = async()=>{
    try {
      const token = localStorage.getItem("token");
      localStorage.removeItem("token");
      if (!token) return; // No token available, user not authenticated
      setUserInfo(null);
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle the error, e.g., display a message to the user
    }
  }
  const username = userInfo?.username;
  

  return (
    <header className="max-w-6xl mx-auto px-8 py-3 flex justify-between">
      <Link to="/" className="font-bold text-2xl">
        MyBlog
      </Link>
      <nav className={`web-view border-black border-5 flex gap-5 ${showMenu ? 'show' : ''}`}>
        {username && (
          <>
            <Link to="/create" >Create Post</Link> 
            <Link onClick={(e)=>{logout()}}>Logout ({username})</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <div className="hamburger-icon">
        <IoMenu onClick={()=>setShowMenu(!showMenu)}/>
      </div>
    </header>
  );
};

export default Header;
