import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor'
import axios from 'axios';
// import { BASE_URL } from '../backendUrl';
// import useFetch from '../hooks/useFetch';
import { fetchDataFromApi } from '../utils/api';


const CreatePost = () => {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState(''); 
    const [files,setFiles] = useState('');
    const [redirect,setRedirect] = useState(false);

    async function createNewPost(ev){
        ev.preventDefault();
        const formData = new FormData();
        formData.set('title',title);
        formData.set('summary',summary);
        formData.set('content',content);
        formData.append('file',files[0]);
        console.log(files);

        try{
          const token = localStorage.getItem("token");
          // console.log(token);
          // const response = await axios.post(BASE_URL+'/post',data,{
          //   headers:{
          //     'Content-Type': 'multipart/form-data',
          //     'Authorization': `Bearer ${token}`,
          //   }
          // })
          console.log(formData);
          const response = await fetchDataFromApi('/post','POST',null,formData,token);
          console.log(response);
            setRedirect(true);
        
        }catch(error){
          console.error('Error creating post:', error);
        }
      }
        

    if(redirect){
       return <Navigate to={'/'}/>
    }

   return (
    <form onSubmit={createNewPost}>
        <input type='title' placeholder= {'Title'} value={title} onChange={ev=>setTitle(ev.target.value)}/>
        <input type='summary' placeholder={'Summary'} value={summary} onChange={ev =>setSummary(ev.target.value)} />
        <input type="file"  onChange={ev =>setFiles(ev.target.files)}/>
        <Editor value= {content} placeholder={'Content'} onChange = {setContent} />
        <button style={{marginTop:'5px' }}>Create Post</button>
    </form>
   )
}

export default CreatePost;