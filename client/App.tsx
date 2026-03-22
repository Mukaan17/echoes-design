import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Splash from "./pages/Splash";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CheckIn from "./pages/CheckIn";
import LeadingQuestions from "./pages/LeadingQuestions";
import Walkthrough from "./pages/Walkthrough";
import PromptSelection from "./pages/PromptSelection";
import LetterCompose from "./pages/LetterCompose";
import SentConfirmation from "./pages/SentConfirmation";
import Home from "./pages/Home";
import LettersInbox from "./pages/LettersInbox";
import LetterReading from "./pages/LetterReading";
import Intervention from "./pages/Intervention";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/leading-questions" element={<LeadingQuestions />} />
            <Route path="/walkthrough" element={<Walkthrough />} />
            <Route path="/prompt-selection" element={<PromptSelection />} />
            <Route path="/letter-compose" element={<LetterCompose />} />
            <Route path="/sent-confirmation" element={<SentConfirmation />} />
            <Route path="/home" element={<Home />} />
            <Route path="/letters-inbox" element={<LettersInbox />} />
            <Route path="/letter-reading" element={<LetterReading />} />
            <Route path="/intervention" element={<Intervention />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
