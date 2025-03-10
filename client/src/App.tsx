import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout/Layout";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Premium from "@/pages/Premium";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Commands from "@/pages/Commands";
import Support from "@/pages/Support";
import Roadmap from "@/pages/Roadmap";
import Invite from "@/pages/Invite";
import TermsOfService from "@/pages/legal/TermsOfService";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import CookiePolicy from "@/pages/legal/CookiePolicy";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/premium" component={Premium} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/commands" component={Commands} />
        <Route path="/support" component={Support} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/invite" component={Invite} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/cookies" component={CookiePolicy} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;