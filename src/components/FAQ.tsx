import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What happens after the $1 trial?",
    answer: "Your card is charged $12/month (or $99/year if you chose yearly). You can cancel anytime with one click.",
  },
  {
    question: "How many AI credits do I get?",
    answer: "15 AI credits per month baseline. The trial includes 50 credits so you can test everything without limits.",
  },
  {
    question: "Will my report pass my manager's review?",
    answer: "Our AI flags missing fields and vague descriptions. 95%+ of Snappense reports are approved on first submission.",
  },
  {
    question: "Do you support PDF, CSV, and Google Sheets?",
    answer: "Yes. PDF exports include a signature line. CSV downloads instantly. Google Sheets syncs in real-time.",
  },
  {
    question: "Can I log mileage at $0.67/mi?",
    answer: "Yes. Enter start/end locations and distance. We auto-calculate the total at the IRS standard rate.",
  },
  {
    question: "Can you build my first report for me?",
    answer: "Absolutely. Our Done-For-You service is included in your trial. Just email us your receipts and we'll handle it.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before you start.
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
