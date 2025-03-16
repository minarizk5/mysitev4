"use client";

import React from "react";
import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import { GalleryPage } from "@/components/GalleryPage";


// Sample image data (replace with your own)
const images = [
  {
    src: "/gallery/image1.jpg",
    alt: "Gallery Image 1",
    width: 2400,
    height: 1800,
  },
  // Add more images as needed
];

export default function Gallery() {
  

  const handleImageClick = (index: number) => {
    
  };

  

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">Gallery</h1>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(index)}
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
            }}
            
          >
            <div className="aspect-[4/3] relative group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  View Image
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      

      {/* Full-screen Modal */}
      
    </PageContainer>
  );
}