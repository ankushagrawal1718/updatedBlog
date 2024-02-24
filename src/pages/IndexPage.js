import React, { useEffect, useState } from "react";
import Post from "../Post";
import useFetch from "../hooks/useFetch";
import { Card } from "../components/Card";
import Loading from "../components/Loading";
import { ContactPageTwo } from "../components/Contact";
import { CardSkeleton } from "../components/CardSkeleton";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //   fetch(BASE_URL+'/post').then(response=>{
  //     response.json().then(posts=>{
  //       // console.log(posts);
  //       setPosts(posts);
  //     });
  //   });
  // },[])

  const { data, loading, error } = useFetch("/post", "GET");
  console.log(data);
  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  if (error) {
    return "Something went wrong";
  }

  return (
    <>
      {loading ? (
        <div className="max-w-5xl justify-center mx-auto grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="max-w-5xl justify-center mx-auto grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts?.length > 0 &&
            posts.map((post) => <Card key={post._id} {...post} />)}
        </div>
      )}

      <ContactPageTwo />
    </>
  );
}
