"use client"

import { ResizableNavbar } from "@/components/ui/resizable-navbar"
import { 
  IconHome,
  IconInfoCircle,
  IconPhone,
  IconMail,
  IconSettings,
  IconUser,
  IconShield,
  IconTools
} from "@tabler/icons-react"

// Define navigation items with SkyGuard-specific content
const navigationItems = [
  {
    label: "Home",
    href: "#home",
    icon: <IconHome className="h-4 w-4" />
  },
  {
    label: "Services",
    href: "#services",
    icon: <IconShield className="h-4 w-4" />,
    children: [
      {
        label: "Roof Inspection",
        href: "#roof-inspection",
        icon: <IconTools className="h-4 w-4" />
      },
      {
        label: "Roof Repair",
        href: "#roof-repair", 
        icon: <IconTools className="h-4 w-4" />
      },
      {
        label: "Roof Replacement",
        href: "#roof-replacement",
        icon: <IconTools className="h-4 w-4" />
      },
      {
        label: "Emergency Services",
        href: "#emergency",
        icon: <IconShield className="h-4 w-4" />
      }
    ]
  },
  {
    label: "About",
    href: "#about",
    icon: <IconInfoCircle className="h-4 w-4" />
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <IconPhone className="h-4 w-4" />
  }
]

// SkyGuard Logo Component
const SkyGuardLogo = () => (
  <div className="flex items-center space-x-2">
    <img 
      src="/src/assets/skyguard-logo.png" 
      alt="SkyGuard Logo" 
      className="h-8 w-8"
    />
    <span className="text-xl font-bold text-gray-900">SkyGuard</span>
  </div>
)

export function ResizableNavbarDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResizableNavbar 
        items={navigationItems}
        logo={<SkyGuardLogo />}
        className="z-50"
      />
      
      {/* Demo content with proper spacing for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to SkyGuard
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional roofing services with a modern, responsive navigation experience
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive roofing solutions for your home and business
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About SkyGuard
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Years of experience in providing reliable roofing solutions
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch for your roofing needs
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ResizableNavbarDemo