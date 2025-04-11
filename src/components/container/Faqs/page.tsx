"use client";

import FaqList, { FaqItem } from "@/components/stateless/faqs/page";

const Faqs = () => {
  const faqData: FaqItem[] = [
    {
      value: "faq-1",
      question: "What is the purpose of this web application?",
      answer:
        "Our web application is designed to efficiently manage and aggregate feedback from various sources including employee, peer, HR, and organizational reviews.",
    },
    {
      value: "faq-2",
      question: "Is this application accessible?",
      answer:
        "Yes. It adheres to the WAI-ARIA design pattern, ensuring that the interface is accessible to all users.",
    },
    {
      value: "faq-3",
      question: "How do I submit my feedback?",
      answer:
        "You can submit your feedback by navigating to the appropriate section (Employee or Organization) and filling out the form. Each section is tailored to capture the necessary details based on your role.",
    },
    {
      value: "faq-4",
      question: "Can I track my performance over time?",
      answer:
        "Yes. The dashboard includes analytics sections such as score cards and charts which display historical performance trends.",
    },
    {
      value: "faq-5",
      question: "Who can view the feedback?",
      answer:
        "Access to feedback data depends on your role. Typically, managers, HR, and administrators have broader access, while individual employees can view their own feedback.",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 w-full px-4 md:px-0">
        <div className="w-full md:w-[60%] m-5">
          <FaqList faqs={faqData} />
        </div>

        <div className="w-full md:w-[40%] m-5">
          <FaqList faqs={faqData} />
        </div>
      </div>
    </>
  );
};

export default Faqs;
