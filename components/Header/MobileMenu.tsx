import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Laptop,Users,BarChart3,FileText,BookOpen,MessageSquare,LayoutGrid,CreditCard,Star,LogIn,ChevronRight } from "lucide-react"

export default function MobileMenu({isMenuOpen,setIsMenuOpen}:{isMenuOpen:boolean;setIsMenuOpen:(v:boolean)=>void}) {
  if(!isMenuOpen) return null
  return (
    <>
      <div className="md:hidden fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={()=>setIsMenuOpen(false)}/>
      <div className="md:hidden fixed top-16 left-0 right-0 z-50 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
        <div className="mx-3 mt-2 rounded-xl border border-gray-200 bg-white shadow-lg">
          <nav className="flex flex-col p-3">
            <div className="mb-3 pb-3 border-b border-gray-200">
              <div className="flex items-center mb-2 px-1"><div className="w-1 h-4 bg-[#1A73E8] rounded-full mr-2"/><h3 className="font-semibold text-[#212121] text-base">Products</h3></div>
              <div className="space-y-0.5">
                <Link href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <Laptop className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><div><div className="font-medium text-sm text-[#212121]">Dashboard</div><div className="text-xs text-[#757575] group-hover:text-[#212121]">Complete overview</div></div><ChevronRight className="ml-auto h-3 w-3 text-[#757575] group-hover:text-[#212121]"/>
                </Link>
                <Link href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <Users className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><div><div className="font-medium text-sm text-[#212121]">Team Management</div><div className="text-xs text-[#757575] group-hover:text-[#212121]">Manage your team</div></div><ChevronRight className="ml-auto h-3 w-3 text-[#757575] group-hover:text-[#212121]"/>
                </Link>
                <Link href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <BarChart3 className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><div><div className="font-medium text-sm text-[#212121]">Analytics</div><div className="text-xs text-[#757575] group-hover:text-[#212121]">Data visualization</div></div><ChevronRight className="ml-auto h-3 w-3 text-[#757575] group-hover:text-[#212121]"/>
                </Link>
              </div>
            </div>
            <div className="mb-3 pb-3 border-b border-gray-200">
              <div className="flex items-center mb-2 px-1"><div className="w-1 h-4 bg-[#1A73E8] rounded-full mr-2"/><h3 className="font-semibold text-[#212121] text-base">Resources</h3></div>
              <div className="space-y-0.5">
                <Link href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <FileText className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><div><div className="font-medium text-sm text-[#212121]">Documentation</div><div className="text-xs text-[#757575] group-hover:text-[#212121]">Guides and references</div></div><ChevronRight className="ml-auto h-3 w-3 text-[#757575] group-hover:text-[#212121]"/>
                </Link>
                <Link href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <BookOpen className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><div><div className="font-medium text-sm text-[#212121]">Tutorials</div><div className="text-xs text-[#757575] group-hover:text-[#212121]">Step-by-step guides</div></div><ChevronRight className="ml-auto h-3 w-3 text-[#757575] group-hover:text-[#212121]"/>
                </Link>
                <Link href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <MessageSquare className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><div><div className="font-medium text-sm text-[#212121]">Blog</div><div className="text-xs text-[#757575] group-hover:text-[#212121]">Latest news and tips</div></div><ChevronRight className="ml-auto h-3 w-3 text-[#757575] group-hover:text-[#212121]"/>
                </Link>
              </div>
            </div>
            <div className="mb-3 pb-3 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-1">
                <Link href="#features" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <LayoutGrid className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><span className="font-medium text-sm text-[#212121]">Features</span>
                </Link>
                <Link href="#pricing" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <CreditCard className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><span className="font-medium text-sm text-[#212121]">Pricing</span>
                </Link>
                <Link href="#testimonials" className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group" onClick={()=>setIsMenuOpen(false)}>
                  <Star className="h-4 w-4 text-[#1A73E8] mr-2 group-hover:text-[#0F5CCF]"/><span className="font-medium text-sm text-[#212121]">Testimonials</span>
                </Link>
                <div className="flex items-center py-2 px-3 rounded-lg hover:bg-[#E3F2FD] transition-all duration-200 group cursor-pointer" onClick={()=>setIsMenuOpen(false)}>
                  <LogIn className="h-4 w-4 text-[#757575] mr-2 group-hover:text-[#212121]"/><span className="font-medium text-sm text-[#212121]">Log in</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-3 my-1 bg-[#1A73E8] text-white text-sm hover:bg-[#0F5CCF] shadow-lg shadow-[#1A73E8]/25 transition-all duration-200 flex items-center justify-center gap-2 font-medium" onClick={()=>setIsMenuOpen(false)}>
              Get Started<ChevronRight className="h-3 w-3"/>
            </Button>
          </nav>
        </div>
      </div>
    </>
  )
}
