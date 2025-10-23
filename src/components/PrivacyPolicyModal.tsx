import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <p className="text-sm text-muted-foreground">Last Updated: October 23, 2025</p>
        </DialogHeader>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h3 className="text-lg font-semibold text-foreground">1. Introduction</h3>
            <p className="text-muted-foreground">
              Welcome to Snappense ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered expense tracking service.
            </p>
            <p className="text-muted-foreground">
              <strong>Company Name:</strong> [Your Company Legal Name]<br />
              <strong>Contact:</strong> support@snappense.com<br />
              <strong>Address:</strong> [Your Business Address]
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">2. Information We Collect</h3>
            
            <h4 className="text-base font-semibold text-foreground mt-4">Personal Information</h4>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Name and email address (when you create an account)</li>
              <li>Payment information (processed securely by our payment processor)</li>
              <li>Phone number (optional, for account recovery)</li>
            </ul>

            <h4 className="text-base font-semibold text-foreground mt-4">Expense Data</h4>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Receipt images and scanned documents</li>
              <li>Expense details (amounts, dates, vendors, categories)</li>
              <li>Voice recordings (for voice entry feature)</li>
              <li>Mileage and location data (for mileage tracking)</li>
            </ul>

            <h4 className="text-base font-semibold text-foreground mt-4">Technical Data</h4>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>IP address, browser type, and device information</li>
              <li>Usage data (features used, time spent, interaction patterns)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Service Provision:</strong> Process your expense reports, scan receipts using AI/OCR, and provide mileage tracking</li>
              <li><strong>AI Processing:</strong> Analyze receipts and voice inputs to extract expense data</li>
              <li><strong>Account Management:</strong> Create and maintain your user account</li>
              <li><strong>Payment Processing:</strong> Handle billing and subscription management</li>
              <li><strong>Communication:</strong> Send service updates, support messages, and marketing communications (with consent)</li>
              <li><strong>Service Improvement:</strong> Analyze usage patterns to improve our AI accuracy and user experience</li>
              <li><strong>Legal Compliance:</strong> Meet tax, accounting, and legal obligations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">4. Legal Basis for Processing (GDPR)</h3>
            <p className="text-muted-foreground">For users in the European Economic Area (EEA), we process your data based on:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Contract Performance:</strong> Processing necessary to provide our service</li>
              <li><strong>Legitimate Interest:</strong> Improving our service and fraud prevention</li>
              <li><strong>Consent:</strong> Marketing communications and optional features</li>
              <li><strong>Legal Obligation:</strong> Compliance with tax and financial regulations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">5. Data Sharing and Third Parties</h3>
            <p className="text-muted-foreground">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Payment Processors:</strong> Stripe or similar services for secure payment handling</li>
              <li><strong>AI Service Providers:</strong> Cloud-based AI/OCR services to process receipts and voice data</li>
              <li><strong>Cloud Infrastructure:</strong> AWS, Google Cloud, or similar hosting providers</li>
              <li><strong>Analytics Services:</strong> Google Analytics or similar for usage insights</li>
              <li><strong>Email Services:</strong> For transactional and marketing emails</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              We do NOT sell your personal information to third parties. All third-party providers are contractually obligated to protect your data and use it only for specified purposes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">6. Data Retention</h3>
            <p className="text-muted-foreground">
              We retain your data for as long as your account is active or as needed to provide services. After account deletion:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Personal data is deleted within 30 days</li>
              <li>Financial records may be retained for 7 years for tax compliance</li>
              <li>Anonymized usage data may be retained indefinitely for analytics</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">7. Data Security</h3>
            <p className="text-muted-foreground">We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and employee training</li>
              <li>Secure cloud infrastructure with redundancy and backups</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">8. Your Privacy Rights</h3>
            <p className="text-muted-foreground">Depending on your location, you may have the following rights:</p>
            
            <h4 className="text-base font-semibold text-foreground mt-4">For All Users:</h4>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
            </ul>

            <h4 className="text-base font-semibold text-foreground mt-4">Additional Rights (GDPR/EEA Users):</h4>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing or optional features</li>
            </ul>

            <p className="text-muted-foreground mt-2">
              To exercise these rights, contact us at support@snappense.com. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">9. Cookies and Tracking</h3>
            <p className="text-muted-foreground">We use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for login and core functionality</li>
              <li><strong>Analytics Cookies:</strong> Understanding usage patterns and improving our service</li>
              <li><strong>Preference Cookies:</strong> Remembering your settings and preferences</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              You can control cookies through your browser settings. Note that disabling cookies may affect service functionality.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">10. International Data Transfers</h3>
            <p className="text-muted-foreground">
              Your data may be transferred to and processed in countries outside your country of residence, including the United States. We ensure appropriate safeguards are in place through:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Data processing agreements with all third-party providers</li>
              <li>Compliance with applicable data protection laws</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">11. Children's Privacy</h3>
            <p className="text-muted-foreground">
              Our service is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">12. Changes to This Privacy Policy</h3>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of material changes by email or through a prominent notice in our application. Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">13. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have questions or concerns about this privacy policy or our data practices, please contact us:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> support@snappense.com<br />
              <strong>Address:</strong> [Your Business Address]
            </p>
            <p className="text-muted-foreground mt-2">
              For GDPR-related inquiries, you also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
