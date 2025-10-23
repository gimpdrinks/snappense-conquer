import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if I don't like it after the trial? Am I locked in?",
    answer: "Not at all. After your 14-day $1 trial, you can cancel with one click—no phone calls, no hassle. If you continue, you're charged $12/month (or $99/year), but you're never locked in. Cancel anytime and keep your exported reports. This means you can test Snappense risk-free and only pay if it actually saves you time.",
  },
  {
    question: "What if I run out of AI scans before the month ends?",
    answer: "You get 15 AI scans per month (receipt scanning, voice entry, or compliance checks). During your trial, you get 50 scans—enough to handle an entire month's expenses and then some. If you ever need more, you can upgrade or manually enter a few receipts the old-fashioned way. This means you'll never be blocked from submitting your report on time, and most users never hit their limit.",
  },
  {
    question: "Will my manager actually approve my reports, or will I still get rejections?",
    answer: "Rejected reports are frustrating—they mean re-doing work you thought was done. Snappense's AI flags missing receipts, vague descriptions, and policy violations before you submit. 95%+ of Snappense reports are approved on the first try. This means no more back-and-forth emails with accounting, no scrambling to find old receipts, and no delays on your reimbursement.",
  },
  {
    question: "Can I export reports in the format my company requires?",
    answer: "Every company has different requirements—some need PDFs with signatures, others want CSV for QuickBooks, and some use Google Sheets. Snappense supports all three: PDF exports with signature lines, instant CSV downloads, and real-time Google Sheets sync. This means you'll never have to manually reformat your report or copy-paste data into another system.",
  },
  {
    question: "Do I still have to calculate mileage manually and look up the IRS rate?",
    answer: "Manually calculating mileage is tedious—you have to track distances, look up the current IRS rate ($0.67/mi), and multiply everything out. With Snappense, just enter your start and end locations (or let GPS track it), and we auto-calculate the reimbursement at the IRS standard rate. This means you'll never underclaim mileage or waste time with a calculator again.",
  },
  {
    question: "I have a backlog of expenses—will I have to spend hours catching up?",
    answer: "Starting a new expense system with a pile of untracked expenses feels overwhelming—you're worried about spending your entire weekend playing catch-up. Here's the good news: with 50 AI scans in your trial, you can power through that backlog fast. Just snap photos of old receipts or use voice entry to log past expenses in seconds each. What used to take hours now takes minutes. This means you can catch up during a lunch break instead of sacrificing your weekend—and from then on, you'll never fall behind again.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Common Concerns About Switching
          </h2>
          <p className="text-xl text-muted-foreground">
            We've helped thousands escape expense report chaos. Here's what they asked first.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
