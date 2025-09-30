import React from 'react';
import { ResizableNavbar } from '@/components/ui/resizable-navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import USP from '@/components/sections/USP';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import { 
  IconHome,
  IconInfoCircle,
  IconPhone,
  IconShield,
  IconTools,
  IconStar
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import skyguardLogo from '@/assets/skyguard-logo.png';

// Define navigation items
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
        href: "#services",
        icon: <IconTools className="h-4 w-4" />
      },
      {
        label: "Roof Repair",
        href: "#services", 
        icon: <IconTools className="h-4 w-4" />
      },
      {
        label: "Roof Replacement",
        href: "#services",
        icon: <IconTools className="h-4 w-4" />
      },
      {
        label: "Emergency Services",
        href: "#services",
        icon: <IconShield className="h-4 w-4" />
      }
    ]
  },
  {
    label: "About",
    href: "/about",
    icon: <IconInfoCircle className="h-4 w-4" />,
    external: true
  },
  {
    label: "Reviews",
    href: "#testimonials",
    icon: <IconStar className="h-4 w-4" />
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <IconPhone className="h-4 w-4" />
  }
];

// SkyGuard Logo Component
const SkyGuardLogo = ({ isScrolled }: { isScrolled?: boolean }) => (
  <div className="flex items-center space-x-3">
    <img 
      src={skyguardLogo} 
      alt="SkyGuard Roofing Solutions" 
      className="h-12 w-auto"
    />
    <span className={`text-xl font-bold hidden sm:block transition-colors duration-200 ${
      isScrolled ? "text-blue-600" : "text-white"
    }`}>
      SkyGuard
    </span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar 
        items={navigationItems}
        logo={<SkyGuardLogo />}
        className="z-50"
        showQuoteButton={true}
        showCallButton={true}
      />
      <Hero />
      <Services />
      <USP />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
