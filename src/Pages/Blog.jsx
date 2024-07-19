import React, { useState, useEffect } from 'react';

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const posts = [
    {
      title: "How to Own Your Audience by Creating an Email List",
      description: "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b",
      image: "path_to_image1.jpg",
    },
    {
      title: "Top 10 Toolkits for Deep Learning in 2022",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
      image: "path_to_image2.jpg",
    },
    {
      title: "Everything You Need to Know About Web Accessibility",
      description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma",
      image: "path_to_image3.jpg",
    },
  ];

  return (
    <div className={`container mx-auto p-4 transition-transform duration-1000 ease-out transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">
          MY <span className="text-yellow-500">BLOG</span>
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={`Image ${index + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
