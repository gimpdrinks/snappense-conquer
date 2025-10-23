import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TermsOfServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfServiceModal = ({ open, onOpenChange }: TermsOfServiceModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <p className="text-sm text-muted-foreground">Last Updated: October 23, 2025</p>
        </DialogHeader>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h3 className="text-lg font-semibold text-foreground">1. Agreement to Terms</h3>
            <p className="text-muted-foreground">
              By accessing or using Snappense ("Service"), provided by [Your Company Legal Name] ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
            </p>
            <p className="text-muted-foreground">
              These Terms constitute a legally binding agreement between you and [Your Company Legal Name].
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">2. Description of Service</h3>
            <p className="text-muted-foreground">
              Snappense is an AI-powered expense tracking and management platform that enables users to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Scan and digitize receipts using optical character recognition (OCR)</li>
              <li>Log expenses via voice entry</li>
              <li>Track mileage automatically</li>
              <li>Generate expense reports in IRS-compliant formats</li>
              <li>Export data to CSV, PDF, and Excel formats</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">3. Eligibility</h3>
            <p className="text-muted-foreground">
              You must be at least 18 years old and capable of forming a binding contract to use this Service. By using the Service, you represent and warrant that you meet these requirements.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">4. User Accounts</h3>
            
            <h4 className="text-base font-semibold text-foreground mt-4">Account Creation</h4>
            <p className="text-muted-foreground">
              To use certain features, you must create an account with accurate and complete information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>

            <h4 className="text-base font-semibold text-foreground mt-4">Account Security</h4>
            <p className="text-muted-foreground">
              You agree not to share your account credentials with others. We reserve the right to suspend or terminate accounts that violate these Terms or show signs of fraudulent activity.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">5. Subscription and Billing</h3>
            
            <h4 className="text-base font-semibold text-foreground mt-4">Trial Period</h4>
            <p className="text-muted-foreground">
              We offer a 14-day trial period for $1. The trial includes all premium features. At the end of the trial period, your subscription will automatically convert to a paid monthly subscription unless you cancel before the trial ends.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">Subscription Fees</h4>
            <p className="text-muted-foreground">
              After the trial period, the subscription fee is $12 per month, billed monthly. Fees are subject to change with 30 days' notice. Continued use after a price change constitutes acceptance of the new pricing.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">Payment Terms</h4>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>You authorize us to charge your payment method on a recurring basis</li>
              <li>Payments are non-refundable except as required by law</li>
              <li>Failed payments may result in service suspension or termination</li>
              <li>You are responsible for all taxes associated with your subscription</li>
            </ul>

            <h4 className="text-base font-semibold text-foreground mt-4">Cancellation and Refunds</h4>
            <p className="text-muted-foreground">
              You may cancel your subscription at any time from your account settings. Cancellations take effect at the end of the current billing period. We do not provide refunds for partial months, except:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>During the trial period, you may cancel and receive a refund of the $1 trial fee</li>
              <li>If you cancel within 7 days of being charged for your first full month</li>
              <li>As required by applicable consumer protection laws</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">6. AI Features and Accuracy</h3>
            <p className="text-muted-foreground">
              Our Service uses artificial intelligence and optical character recognition (OCR) to process receipts and voice inputs. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Accuracy Not Guaranteed:</strong> AI/OCR technology may contain errors. You are responsible for reviewing and verifying all extracted data before submission to tax authorities or employers.</li>
              <li><strong>User Responsibility:</strong> You must ensure the accuracy of expense reports generated using our Service.</li>
              <li><strong>No Financial Advice:</strong> The Service does not provide tax, legal, or financial advice. Consult with qualified professionals for such matters.</li>
              <li><strong>Data Quality:</strong> Accuracy depends on receipt quality, image clarity, and voice recording quality.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">7. Intellectual Property Rights</h3>
            
            <h4 className="text-base font-semibold text-foreground mt-4">Our IP</h4>
            <p className="text-muted-foreground">
              The Service, including all software, designs, text, graphics, and other content, is owned by [Your Company Legal Name] and protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Copy, modify, or distribute our software or content</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Remove or alter any proprietary notices</li>
              <li>Use our trademarks without written permission</li>
            </ul>

            <h4 className="text-base font-semibold text-foreground mt-4">Your Content</h4>
            <p className="text-muted-foreground">
              You retain ownership of all content you submit (receipts, expense data, etc.). By using the Service, you grant us a limited license to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Process and store your content to provide the Service</li>
              <li>Use anonymized, aggregated data to improve our AI models</li>
              <li>Display your content back to you in reports and exports</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              This license terminates when you delete your content or account.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">8. Prohibited Uses</h3>
            <p className="text-muted-foreground">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Use the Service for any illegal purpose or to violate any laws</li>
              <li>Submit false, fraudulent, or misleading expense information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use automated systems (bots, scrapers) without authorization</li>
              <li>Resell or redistribute the Service without permission</li>
              <li>Violate the intellectual property rights of others</li>
              <li>Upload viruses, malware, or harmful code</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">9. Service Availability</h3>
            <p className="text-muted-foreground">
              We strive to provide reliable service but do not guarantee uninterrupted or error-free operation. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Modify or discontinue features with or without notice</li>
              <li>Perform maintenance that may temporarily interrupt service</li>
              <li>Limit usage or impose restrictions as necessary</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              We are not liable for any loss or damage resulting from service downtime or modifications.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">10. Limitation of Liability</h3>
            <p className="text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND</li>
              <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
              <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE PAST 12 MONTHS (MAXIMUM $144)</li>
              <li>WE ARE NOT LIABLE FOR TAX PENALTIES, AUDIT ISSUES, OR REIMBURSEMENT REJECTIONS RESULTING FROM DATA ERRORS</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Some jurisdictions do not allow limitation of implied warranties or liability for incidental damages, so these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">11. Indemnification</h3>
            <p className="text-muted-foreground">
              You agree to indemnify, defend, and hold harmless [Your Company Legal Name], its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Inaccurate expense data you submit to authorities or employers</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">12. Termination</h3>
            
            <h4 className="text-base font-semibold text-foreground mt-4">Your Right to Terminate</h4>
            <p className="text-muted-foreground">
              You may terminate your account at any time by canceling your subscription through account settings. Termination takes effect at the end of your current billing period.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">Our Right to Terminate</h4>
            <p className="text-muted-foreground">
              We may suspend or terminate your access immediately if you:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent activity</li>
              <li>Fail to pay subscription fees</li>
              <li>Use the Service in a way that harms us or other users</li>
            </ul>

            <h4 className="text-base font-semibold text-foreground mt-4">Effect of Termination</h4>
            <p className="text-muted-foreground">
              Upon termination, you lose access to the Service and all data. We recommend exporting your data before cancellation. We may retain data as required by law or our data retention policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">13. Dispute Resolution</h3>
            
            <h4 className="text-base font-semibold text-foreground mt-4">Informal Resolution</h4>
            <p className="text-muted-foreground">
              Before pursuing formal dispute resolution, please contact us at support@snappense.com to attempt an informal resolution. We will work in good faith to resolve disputes amicably.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">Arbitration Agreement</h4>
            <p className="text-muted-foreground">
              Any disputes arising from these Terms or the Service shall be resolved through binding arbitration rather than in court, except where prohibited by law. You waive your right to a jury trial and to participate in class actions.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">Exceptions</h4>
            <p className="text-muted-foreground">
              Either party may seek injunctive relief in court for intellectual property disputes or to enforce arbitration.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">14. Governing Law</h3>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of [Your State/Country], without regard to conflict of law principles. Any legal action must be brought in the courts located in [Your State/Country].
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">15. Changes to Terms</h3>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. Material changes will be communicated via email or in-app notification at least 30 days before taking effect. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">16. General Provisions</h3>
            
            <h4 className="text-base font-semibold text-foreground mt-4">Severability</h4>
            <p className="text-muted-foreground">
              If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in full effect.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">Entire Agreement</h4>
            <p className="text-muted-foreground">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and [Your Company Legal Name] regarding the Service.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">No Waiver</h4>
            <p className="text-muted-foreground">
              Our failure to enforce any right or provision does not constitute a waiver of that right or provision.
            </p>

            <h4 className="text-base font-semibold text-foreground mt-4">Assignment</h4>
            <p className="text-muted-foreground">
              You may not assign or transfer these Terms without our written consent. We may assign our rights without restriction.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground">17. Contact Information</h3>
            <p className="text-muted-foreground">
              For questions or concerns about these Terms, please contact us:
            </p>
            <p className="text-muted-foreground">
              <strong>Company:</strong> [Your Company Legal Name]<br />
              <strong>Email:</strong> support@snappense.com<br />
              <strong>Address:</strong> [Your Business Address]
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;
