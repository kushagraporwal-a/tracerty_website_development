import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

import { THEME } from "@/data/theme";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What happens if we miss the 2028 deadline?",
    answer: "Failure to comply can result in administrative actions, including mandatory recalls, public warnings, and the potential suspension of food facility registration.",
  },
  {
    question: "How is Tracerty different from my existing ERP?",
    answer: "ERPs are \"Systems of Record\" that require manual entry. Tracerty is a \"System of Action\" using AI agents to digitize data at the source and automate flow into your existing systems.",
  },
  {
    question: "Does \"Zero-Typing\" AI work in the field?",
    answer: "Yes. We use proprietary vision and voice agents to capture data from bin tags and handwritten logs via simple mobile interaction.",
  },
  {
    question: "How do you handle remote connectivity?",
    answer: "Our agents are \"Offline-First,\" syncing data automatically once a connection is re-established.",
  },
  {
    question: "Is this only for large enterprises?",
    answer: "No. It is designed to help smaller growers maintain market access by making digital compliance frictionless for their enterprise buyers.",
  },
  {
    question: "Does this replace our food safety team?",
    answer: "No. It automates the \"Manual Document Taxation,\" allowing your team to focus on actual safety governance rather than clerical re-keying.",
  },
  {
    question: "What is the commitment for a Design Partner?",
    answer: "We require periodic feedback sessions and early-stage pilot participation to ensure our UI meets real-world field conditions.",
  },
  {
    question: "Can I use this for EUDR compliance as well?",
    answer: "While our current focus is FSMA 204, the \"Golden Record\" architecture is being designed to support global standards like the EU Deforestation Regulation (EUDR).",
  },
];

type ResourcesFaqSectionProps = {
  sectionId?: string;
};

export default function ResourcesFaqSection({ sectionId = "frequently-asked-questions" }: ResourcesFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={sectionId} className="mb-16 flex scroll-mt-28 flex-col items-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
        <h2 className="text-4xl font-bold" style={{ color: "#0E1117" }}>
          Frequently Asked Questions
        </h2>
        <span className="h-px w-10" style={{ backgroundColor: THEME.colors.secondaryBlue }} />
      </div>

      <p className="mb-6 text-center text-base font-normal" style={{ color: "#0B1F33" }}>
        Everything you need to know about FSMA 204 compliance and Tracerty
      </p>

      <div className="flex w-full flex-col items-center gap-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full rounded-xl bg-white p-4 text-left lg:w-1/2"
              style={{ boxShadow: isOpen ? "0px 4px 8px 0px #00000026" : "none" }}
              aria-expanded={isOpen}
            >
              <div className="grid grid-cols-[1fr_auto] items-start gap-3">
                <div>
                  <p className="text-lg font-bold" style={{ color: "#101828" }}>
                    {`${index + 1}. ${item.question}`}
                  </p>

                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base font-normal" style={{ color: "#4A5565" }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-0.5">
                  {isOpen ? (
                    <MinusCircle size={22} style={{ color: THEME.colors.secondaryBlue }} />
                  ) : (
                    <PlusCircle size={22} style={{ color: THEME.colors.secondaryBlue }} />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
