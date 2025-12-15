import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/theme-context";
import FloatingContactWidget from "@/components/ui/floating-contact-widget";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Division from "@/pages/division";
import ServiceDetail from "@/pages/service-detail";
import OurClients from "@/pages/our-clients";
import Gallery from "@/pages/gallery";
import About from "@/pages/about";
import Leadership from "@/pages/leadership";
import Contact from "@/pages/contact";
import Quote from "@/pages/quote";
import Sitemap from "@/pages/sitemap";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:divisionId" component={Division} />
      <Route path="/services/:divisionId/:serviceId" component={ServiceDetail} />
      <Route path="/clients" component={OurClients} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/leadership" component={Leadership} />
      <Route path="/contact" component={Contact} />
      <Route path="/quote" component={Quote} />
      <Route path="/sitemap" component={Sitemap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="dls-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <FloatingContactWidget />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
