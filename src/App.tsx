import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/lib/motion-variants";
import { AnimationProvider } from "@/lib/animation-context";
import { useLenis } from "@/hooks/useLenis";
import Preloader from "@/components/ui/preloader";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Animated wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <Index />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="*" 
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <NotFound />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

// Main app content with preloader
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize Lenis smooth scroll
  useLenis();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" onComplete={handlePreloaderComplete} />
          ) : (
            <BrowserRouter key="main-app">
              <AnimatedRoutes />
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </AnimationProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContent />
  </QueryClientProvider>
);

export default App;
