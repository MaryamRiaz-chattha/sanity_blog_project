
import { client } from "@/sanity/lib/client";
import Image from "next/image";

import {urlFor} from "@/sanity/lib/image"

type blogType = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

const getData = async () => {
  
  const result = await client.fetch(`*[_type=="blog"]`);

  return result;
};

export default async function Home() {
  const blogs = await getData();
  return (
    
      
    <div className="flex gap-4 m-6">
    {blogs.map((blog: blogType) => (
      <div key={blog._id} className="flex flex-col   rounded-md shadow-lg p-5">
        <h3 className="text-2xl">{blog.name}</h3>
        <p>{blog.description}</p>
        <Image
          src={urlFor(blog.image).url()}
          height={400}
          width={400}
          alt="img-blog"
        />
      </div>
    ))}
  </div>
  );
}
      
    
