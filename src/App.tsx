import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import CyberBackground from "@/components/CyberBackground";
import CyberHUD from "@/components/CyberHUD";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        {/* Background Effects */}
        <CyberBackground />
        <CyberHUD />
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <PageTransition />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
