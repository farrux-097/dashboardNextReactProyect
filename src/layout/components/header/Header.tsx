import { memo, useState, useRef, useEffect } from "react"
import { Bell, User, Settings, LogOut } from "lucide-react"

const Header = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="flex items-center justify-between px-6 py-3.5 border-b-2 border-gray-500 relative">
      <div className="text-xl font-bold text-gray-500">
        Dashboard
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-200">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div
          ref={menuRef}
          className="relative"
        >
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80"
          >
            <User className="h-8 w-8 rounded-full bg-gray-500 text-white p-1" />
            <span className="hidden sm:block font-medium text-gray-500">
              Farrux
            </span>
          </div>
          {open && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 animate-fadeIn z-50"
            >
              <button className="flex w-full items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-xl">
                <Settings className="w-4 h-4" /> Settings
              </button>
              <button className="flex w-full items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 rounded-b-xl">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
