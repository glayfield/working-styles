import Image from "next/image";

export default function Nav() {
  return (
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Image className="block h-8 w-auto" src="icons8-strength-100.png" alt="Working Styles" width="35" height="35" />
          </div>
          <div className="sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a href="/" className="text-gray-300 rounded-md px-3 py-2 text-md font-medium hover:underline">Working Styles</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}