"use client";

import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import { useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">Gallery</h1>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
            }}
            onClick={() => setSelectedImage(image)}
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
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50  animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full h-full p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full -center">
              <div className="relative max-w-full max-h-full animate-scale-in">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width || 2400}
                  height={selectedImage.height || 1800}
                  className="rounded-lg shadow-2xl object-contain w-auto h-auto max-w-full max-h-full"
                  quality={100}
                  priority
                />
              </div>
              <button
                className="absolute top-0 right-0 w-10 h-10  text-white text-3xl bg-black/60 rounded-full hover:bg-black/80 transition-all duration-300 shadow-lg"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Optional CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </PageContainer>
  );
}