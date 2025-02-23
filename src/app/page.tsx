import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="glass-container p-8 max-w-2xl w-full text-center">
        <div className="relative mx-auto mb-6 w-[150px] h-[150px]">
          <Image
            src="/profile.jpg"
            alt="Mina Soliman"
            fill
            className="profile-img object-cover"
            priority
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Mina Soliman</h1>
        <p className="text-lg mb-6 text-gray-300">
          Software Developer | Tech Enthusiast | Problem Solver
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          
          <Link href="/tweets" className="btn-primary">
            My Tweets
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact Me
          </Link>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/minarizk5" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://x.com/minarizkoffical" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
