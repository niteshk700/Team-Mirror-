"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQsSection() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="faq-1">
        <AccordionTrigger>What is the purpose of this web application?</AccordionTrigger>
        <AccordionContent>
          Our web application is designed to efficiently manage and aggregate feedback from various sources including employee, peer, HR, and organizational reviews.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>Is this application accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern, ensuring that the interface is accessible to all users.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>How do I submit my feedback?</AccordionTrigger>
        <AccordionContent>
          You can submit your feedback by navigating to the appropriate section (Employee or Organization) and filling out the form. Each section is tailored to capture the necessary details based on your role.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>Can I track my performance over time?</AccordionTrigger>
        <AccordionContent>
          Yes. The dashboard includes analytics sections such as score cards and charts which display historical performance trends.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-5">
        <AccordionTrigger>Who can view the feedback?</AccordionTrigger>
        <AccordionContent>
          Access to feedback data depends on your role. Typically, managers, HR, and administrators have broader access, while individual employees can view their own feedback.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
