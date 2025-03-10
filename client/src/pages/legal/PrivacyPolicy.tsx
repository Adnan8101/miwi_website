import { motion } from "framer-motion";
import { LegalPageLayout } from "@/components/ui/legal-page-layout";
import { Shield, Lock, UserCheck, Bell } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            When you use Miwi Bot, we collect and process the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Discord Server ID and related configurations</li>
            <li>User preferences and customization settings</li>
            <li>Command usage statistics for service improvement</li>
            <li>Payment information (for premium subscriptions)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6" />
            Data Security
          </h2>
          <p className="text-muted-foreground mb-4">
            We implement robust security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>End-to-end encryption of sensitive data</li>
            <li>Regular security audits and updates</li>
            <li>Strict access controls and authentication</li>
            <li>Secure payment processing through trusted providers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <UserCheck className="w-6 h-6" />
            Your Rights
          </h2>
          <p className="text-muted-foreground mb-4">
            As a user, you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Access and download your personal data</li>
            <li>Request corrections to inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of non-essential communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Bell className="w-6 h-6" />
            Updates & Contact
          </h2>
          <p className="text-muted-foreground mb-4">
            We may update this privacy policy periodically. Users will be notified of significant changes through:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Discord bot announcements</li>
            <li>Website notifications</li>
            <li>Email updates (if subscribed)</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            For privacy-related inquiries, please contact us through our support channels.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}