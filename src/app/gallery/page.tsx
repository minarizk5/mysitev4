import Image from 'next/image';
import PageContainer from '@/components/PageContainer';

// This would typically come from a database or CMS
const images = [
  {
    src: '/gallery/image1.jpg',
    alt: 'Gallery Image 1',
    width: 800,
    height: 600
  },
  // Add more images here
];

export default function Gallery() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
