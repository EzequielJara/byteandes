import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-primary rounded-md">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary text-white shadow-md">S</div>
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AndesGestión</span>
    </Link>
  )
}
