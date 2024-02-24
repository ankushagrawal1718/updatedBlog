import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';
import { BASE_URL } from '../backendUrl';
import axios from "axios";
import { fetchDataFromApi } from '../utils/api';

const EditPost = () => {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState(''); 
    const [files,setFiles] = useState('');
    // const [cover,setCover] = useState('');
    const [redirect,setRedirect] = useState(false);

    useEffect(()=>{
        axios.get(BASE_URL + '/post/' + id)
        .then(response=>{
                const postInfo = response.data;
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setSummary(postInfo.summary);
            
            console.log(response);
        })
        .catch(error=>{
            console.log('eror fetching post data',error);
        })
    },[])

   async function updatePost(ev){
        ev.preventDefault();
        const data = new FormData()
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('id',id);
        if(files?.[0]){
            data.set('file',files?.[0]);
        }
        
    // const response = await fetch(BASE_URL+'/post',{
    //         method:'PUT',
    //         body:data,
    //         credentials:'include',
    //     });
        try{
            const token = localStorage.getItem('token');
            console.log(data);
            // const response = await axios.put(BASE_URL+'/post',data,{
            //     headers:{
            //         'Content-Type': 'multipart/form-data',
            //         'Authorization': `Bearer ${token}`,
            //     }
            // })
            const response = await fetchDataFromApi('/post','PUT',null,data,token);
            // if(response.status === 200){
                setRedirect(true);
            // }
            // else{
            //     console.error('Failed to update post:', response.statusText);
            // }
        }catch(error){
            console.error('Error updating post:', error);
        }

    }

    if(redirect){
        return <Navigate to={'/post/'+id}/>
     }

    
    return (
        <form onSubmit={updatePost}>
            <input type='title' placeholder= {'Title'} value={title} onChange={ev=>setTitle(ev.target.value)}/>
            <input type='summary' placeholder={'Summary'} value={summary} onChange={ev =>setSummary(ev.target.value)} />
            <input type="file"  onChange={ev =>setFiles(ev.target.files)}/>
            <Editor onChange={setContent} value={content}/>
            <button style={{marginTop:'5px' }}>Update Post</button>
        </form>
      )
}

export default EditPost