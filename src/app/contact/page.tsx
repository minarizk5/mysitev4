import PageContainer from '@/components/PageContainer';

export default function Contact() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full btn-primary"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
          <div className="flex justify-center gap-8">
            <a href="mailto:minarizk8324@outlook.com" className="social-link">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="https://x.com/minarizkoffical" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-x text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
