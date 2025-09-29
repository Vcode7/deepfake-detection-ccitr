export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} DeepSafe AI. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a className="text-gray-600 hover:text-gray-900" href="#">Privacy</a>
          <a className="text-gray-600 hover:text-gray-900" href="#">Terms</a>
          <a className="text-gray-600 hover:text-gray-900" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}


