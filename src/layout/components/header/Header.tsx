import { memo, useState, useRef, useEffect } from "react"
import { Bell, Settings, LogOut, Menu as MenuIcon } from "lucide-react"

interface HeaderProps {
  onMenuToggle?: () => void
  data: {
    fname: string
    role?: string
  }
}

const Header = ({ onMenuToggle, data }: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3
                       bg-white/80 backdrop-blur-md border-b border-gray-200
                       shadow-md sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={onMenuToggle}
        >
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </button>
        <span className="text-xl font-bold text-gray-800 tracking-wide">
          Dashboard
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell className="h-6 w-6 text-gray-700" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div ref={menuRef} className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          >
            <div className="flex items-center text-black gap-3 px-5 mt-2">
              <div className="size-10 bg-gray-300 rounded-full text-gray-900 grid place-items-center font-bold">
                {data?.fname?.slice(0, 1)}
              </div>
              <div className="flex flex-col">
                <b>{data?.fname}</b>
                <small>{data?.role}</small>
              </div>
            </div>
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-44
                            bg-white rounded-xl shadow-xl border border-gray-200 z-50">
              <button className="flex w-full items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-xl transition">
                <Settings className="w-4 h-4" /> Settings
              </button>
              <button className="flex w-full items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 rounded-b-xl transition">
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
