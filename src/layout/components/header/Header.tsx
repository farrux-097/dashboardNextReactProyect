import { memo } from "react"
import { Bell, User } from "lucide-react"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3.5 border-b-2 border-gray-500">
      <div className="text-xl font-bold text-gray-500">
        Dashboard
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-200">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
          <User className="h-8 w-8 rounded-full bg-gray-500 text-white p-1" />
          <span className="hidden sm:block font-medium text-gray-500">
            Farrux
          </span>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
