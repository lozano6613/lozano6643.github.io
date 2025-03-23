import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Star, XIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="border-b border-gray-800 px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="white" />
            <path
              d="M7 12H17M17 12L13 8M17 12L13 16"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <XIcon className="h-4 w-4 mr-2" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Link href="/signin" className="text-sm text-gray-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-950/50 px-3 py-1.5 rounded-full text-sm mb-6">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
              <span className="h-2 w-2 rounded-full bg-blue-200"></span>
            </span>
            New! Introducing Figma to Bolt
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">What do you want to build?</h1>
          <p className="text-lg text-gray-400">
            Prompt, run, edit, and deploy full-stack <span className="text-white">web</span> and{" "}
            <span className="text-white">mobile</span> apps.
          </p>

          <div className="mt-8 w-full">
            <div className="relative w-full max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="How can Bolt help you today?"
                className="w-full bg-gray-900 border-gray-800 rounded-md py-6 pl-4 pr-12 text-white placeholder:text-gray-500"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-gray-500" />
                <Star className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800 rounded-full"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 mr-2">
                <span className="h-2 w-2 rounded-full bg-blue-200"></span>
              </span>
              Import from Figma
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800 rounded-full"
            >
              Build a mobile app with Expo
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800 rounded-full"
            >
              Start a blog with Astro
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800 rounded-full"
            >
              Create a docs site with Vitepress
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800 rounded-full"
            >
              Scaffold UI with shadcn
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-300 hover:bg-gray-800 rounded-full"
            >
              Draft a presentation with Slidev
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">or start a blank app with your favorite stack</p>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-md mx-auto mt-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
                  {getFrameworkIcon(i)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 px-6 py-4 text-sm text-gray-500">
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
          <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            We're hiring
            <span className="flex h-2 w-2 items-center justify-center rounded-full bg-blue-500"></span>
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Help Center
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
      </footer>
    </div>
  )
}

function getFrameworkIcon(index: number) {
  const icons = [
    // Row 1
    <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>,
    <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12L12 2L22 12L12 22L2 12Z" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" />
      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <path d="M12 16V12M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    // Row 2
    <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>,
    <svg key="6" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8H22M2 16H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    <svg key="7" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" stroke="white" strokeWidth="2" />
    </svg>,
    <svg key="8" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
    </svg>,
  ]

  // Repeat icons if needed
  return icons[index % icons.length]
}

