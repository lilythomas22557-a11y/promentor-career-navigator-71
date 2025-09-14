import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReferEarn from "./pages/ReferEarn";
import Recruitment from "./pages/services/Recruitment";
import JobPlacement from "./pages/services/JobPlacement";
import CareerGuidance from "./pages/services/CareerGuidance";
import InterviewSupport from "./pages/specialties/InterviewSupport";
import Training from "./pages/specialties/Training";
import Staffing from "./pages/specialties/Staffing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Preloader onComplete={handlePreloaderComplete} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/refer-earn" element={<ReferEarn />} />
                
                {/* Services Routes */}
                <Route path="/services/recruitment" element={<Recruitment />} />
                <Route path="/services/job-placement" element={<JobPlacement />} />
                <Route path="/services/career-guidance" element={<CareerGuidance />} />
                
                {/* Specialties Routes */}
                <Route path="/specialties/interview-support" element={<InterviewSupport />} />
                <Route path="/specialties/training" element={<Training />} />
                <Route path="/specialties/staffing" element={<Staffing />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
