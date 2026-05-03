import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] flex items-center justify-center p-8">
      <div className="max-w-[500px] w-full text-center">
        <h1 className="font-display text-[5rem] font-bold text-[#1B6B3A] leading-tight">
          404
        </h1>
        <h2 className="font-display text-[1.8rem] font-bold text-[#1A1A1A] mt-2 mb-4">
          Page Not Found
        </h2>
        <p className="text-[0.95rem] text-[#6B6B6B] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-[#1B6B3A] text-white px-8 py-3 rounded-xl text-[0.95rem] font-semibold hover:bg-[#0F4020] transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
