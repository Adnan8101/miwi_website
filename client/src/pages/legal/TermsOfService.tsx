import { motion } from "framer-motion";
import { LegalPageLayout } from "@/components/ui/legal-page-layout";
import { Book, Shield, CreditCard, AlertTriangle, Bell } from "lucide-react";

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Book className="w-6 h-6" />
            Acceptance of Terms
          </h2>
          <p className="text-muted-foreground mb-4">
            By inviting Miwi Bot to your Discord server or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Use of Service
          </h2>
          <p className="text-muted-foreground mb-4">
            To use our services, you must:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Be at least 13 years old</li>
            <li>Be a registered Discord user</li>
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to bypass any limitations or restrictions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <CreditCard className="w-6 h-6" />
            Premium Subscription
          </h2>
          <p className="text-muted-foreground mb-4">
            Our premium features are available through paid subscriptions. By purchasing a premium subscription, you acknowledge:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Payments are non-refundable except where required by law</li>
            <li>Subscriptions auto-renew unless cancelled</li>
            <li>Premium features are subject to change</li>
            <li>Billing occurs on a recurring basis until cancelled</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Limitations and Liabilities
          </h2>
          <p className="text-muted-foreground mb-4">
            Important limitations of our service:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>The service is provided "as is" without warranties</li>
            <li>We are not responsible for third-party content</li>
            <li>We may modify or discontinue services at any time</li>
            <li>Users are responsible for content played through our bot</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Bell className="w-6 h-6" />
            Changes & Updates
          </h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. Users will be notified of significant changes through Discord announcements and our website. Continued use of our service after changes constitutes acceptance of the modified terms.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}