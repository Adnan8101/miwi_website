import { motion } from "framer-motion";
import { LegalPageLayout } from "@/components/ui/legal-page-layout";
import { Cookie, Shield, Settings, Info, Bell } from "lucide-react";

export default function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Cookie className="w-6 h-6" />
            What Are Cookies
          </h2>
          <p className="text-muted-foreground mb-4">
            Cookies are small text files stored on your device when you visit our website. They help us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve website performance</li>
            <li>Provide relevant content and features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Types of Cookies We Use
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground">
                Required for the website to function properly. These enable basic features like page navigation and secure areas access.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Performance Cookies</h3>
              <p className="text-muted-foreground">
                Help us understand how visitors interact with our website by collecting and reporting anonymous information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Functionality Cookies</h3>
              <p className="text-muted-foreground">
                Remember your choices and provide enhanced features for a better experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Managing Cookies
          </h2>
          <p className="text-muted-foreground mb-4">
            You have control over cookies on your device. You can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Delete existing cookies through your browser settings</li>
            <li>Configure your browser to block or allow specific types of cookies</li>
            <li>Choose which features require cookies to function</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Info className="w-6 h-6" />
            Third-Party Cookies
          </h2>
          <p className="text-muted-foreground mb-4">
            Some cookies are placed by third-party services on our pages. These help us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Analyze website traffic and usage patterns</li>
            <li>Process secure payments</li>
            <li>Integrate with social media features</li>
            <li>Provide enhanced functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Bell className="w-6 h-6" />
            Updates & Contact
          </h2>
          <p className="text-muted-foreground">
            This Cookie Policy may be updated periodically. For questions about our cookie practices, please reach out through our support channels.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}