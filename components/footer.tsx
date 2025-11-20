import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#111111] bg-[#030712] py-12">
      <div className="container px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#4f46e5] text-white">S</div>
              <span className="bg-gradient-to-r from-[#4f46e5] to-[#7f38e8] bg-clip-text text-transparent">
                Andes Gestión
              </span>
            </Link>
            <p className="mt-4 text-[#6b7280]">Empowering businesses with powerful software solutions since 2023.</p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-[#1f2937]">Product</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-[#1f2937]">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-[#1f2937]">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#4f46e5]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#e5e7eb] pt-8 text-center text-[#6b7280]">
          <p>© 2025 Andes Gestion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}