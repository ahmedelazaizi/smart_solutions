import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AccountingSystems = React.lazy(() => import("./pages/services/AccountingSystems"));
const ERPSystems = React.lazy(() => import("./pages/services/ERPSystems"));
const WebDevelopment = React.lazy(() => import("./pages/services/WebDevelopment"));
const MobileApps = React.lazy(() => import("./pages/services/MobileApps"));
const Dashboards = React.lazy(() => import("./pages/services/Dashboards"));
const DigitalMarketing = React.lazy(() => import("./pages/services/DigitalMarketing"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/accounting-systems" element={<AccountingSystems />} />
            <Route path="/services/erp-systems" element={<ERPSystems />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/dashboards" element={<Dashboards />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
