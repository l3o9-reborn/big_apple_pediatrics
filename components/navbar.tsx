"use client"

import React, { useState } from "react"
import Image from "next/image"
import { navItems } from "@/lib/data"
import { ModeToggle } from "./ui/themeToggle"
import Link from "next/link"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full h-16 bg-muted/50">
      <div className="max-w-[1400px]  h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <a
            href="#"
            className="relative z-20 mr-4 flex flex-col items-center px-2 py-1 text-sm font-normal text-foreground/90 group"
          >
            <Image
              src="/logo_bap.jpg"
              alt="logo"
              width={128}
              height={128}
              className="rounded-full ring ring-amber-600 w-12 h-12"
            />
            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-amber-700/80 text-foreground/90 px-2 py-1 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
              Big Apple Pediatrics
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:block">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="inline-block  text-foreground/80 hover:bg-amber-700/50 hover:rounded-lg px-4 py-2 cursor-pointer transition-all duration-300"
              >
                <Link className="text-foreground" href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 px-5">
          <ModeToggle />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden rotate-90 text-2xl p-2 text-foreground/80 rounded-md"
          >
            |||
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0  z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`absolute top-16 left-0 w-[96%] mx-[2%] mt-1 h-85 bg-muted  z-40  rounded-md text-center xl:hidden   ${
          isOpen ? "translate-y-0" : "-translate-y-200"
        }`}
      >
        <div className="flex flex-col mt-5 space-y-4 px-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-foreground px-4 rounded-md hover:bg-amber-700/50 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
