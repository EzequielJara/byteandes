import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function HeaderActions({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (v: boolean) => void
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:block text-sm font-medium text-[#1f2937] hover:text-[#20418d] px-2 py-1 rounded hover:bg-[#f2efe5] transition">
        Log in
      </div>
      <Button className="bg-gradient-to-r from-[#4f46e5] to-[#7f38e8] text-white hover:from-[#20418d] hover:to-[#4f46e5] shadow-md">
        Get Started
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-[#1f2937] hover:text-[#20418d]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </div>
  )
}
