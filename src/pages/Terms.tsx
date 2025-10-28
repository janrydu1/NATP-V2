import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";

export default function Terms() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Welcome to <b>ATP Service Inc. DBA ATP.</b> </br>These Terms and Conditions (“Terms”) govern the agreement between <b>ATP</b> (“we,” “us,” or “the Provider”) and <b>you</b> (“the Customer” or “you”). </br>By using our services or purchasing any paid access (the “Service”), you acknowledge and agree to these Terms. </br>For questions, contact us at <b>help@atpregistry.com.</b>",
    },
    {
      title: "Definitions",
      content:
        "<b>2.1 Database:</b> Our proprietary system that compiles trademark data from national and international public sources.</br><b>2.2 Filing Fee:</b> The upfront payment required to access the Service, as specified in our current offer.</br><b>2.3 Agreement:</b> The legally binding contract between you and ATP, effective once payment is received.",
    },
    {
      title: "Service Description",
      content: `<b>3.1 Scope:</b> </br><p style="padding-left: 10px;">•	You gain access to premium content and trademark publication tools in our Database. </p><p style="padding-left: 10px;">•	Access remains valid for the duration specified in your service plan (typically three years).</p><b>3.2 Exclusivity:</b> <p style="padding-left: 10px;">•	Only these Terms apply to our agreement. </p><p style="padding-left: 10px;">•	Terms from your side or third parties are not binding unless accepted by us in writing. </p><b>3.3 Modifications: </b><p style="padding-left: 10px;">•	We may update or adjust these Terms periodically, but we’ll always notify you in advance.</p><p style="padding-left: 10px;">•	Changes take effect once communicated and acknowledged.</p>`,
    },
    {
      title: "Payment Conditions",
      content:
        "4.1 Access to the Service is granted only after full payment of the Service Fee.</br>4.2 Payments may be made via wire transfer, check, or other accepted methods. Your access becomes active once your payment is confirmed.",
    },
    {
      title: "Right of Withdrawal",
      content: `<b>5.1 Contract Formation: </b></br><p style="padding-left: 10px;">The agreement becomes binding once you accept our offer and pay the Service Fee. </p><b>5.2 Withdrawal Period:</b> <p style="padding-left: 10px;">• You may cancel your purchase within <b>seven (7) days</b> of payment for a full refund, no questions asked.
 </p><p style="padding-left: 10px;">• After this period, the contract remains valid for the agreed term. </p>`,
    },
    {
      title: "Liability and Disclaimers",
      content: `<b>6.1 Data Integrity: </b></br><p style="padding-left: 10px;">Our Database aggregates trademark data from public sources and is provided “as is.”</br>
While we aim for accuracy, we cannot guarantee completeness or real-time precision.
 </p><b>6.2 Limitation of Liability: </b></br><p style="padding-left: 10px;">We are not responsible for indirect damages, loss of profit, or service interruptions.</br>
This limitation applies even if we were aware of potential issues.
 </p>`,
    },
    {
      title: "Article Publication Service",
      content: `<b>7.1 Overview: </b></br><p style="padding-left: 10px;">After payment, you may choose to have a custom article published highlighting your trademark or brand story. </p><b>7.2 Purpose: </b></br><p style="padding-left: 10px;">This optional service is designed to help increase visibility and support your brand reputation.
</p><b>7.3 Editorial Rights: </b></br><p style="padding-left: 10px;">We may edit submitted materials for clarity, accuracy, and consistency but will not alter the meaning or intent.</p><b>7.4 Disclaimer: </b></br><p style="padding-left: 10px;">We are not liable for any damages arising from optional editorial or publication services.</p>`,
    },
    {
      title: "Duration and Termination",
      content: `<b>8.1 Term: </b></br><p style="padding-left: 10px;">The agreement remains in force for the duration defined in your service plan and renews only by mutual agreement. </p><b>8.2 Termination for Cause: </b></br><p>Either party may terminate the contract immediately if: </p><p style="padding-left: 10px;">• A serious breach of terms occurs, or </p><p style="padding-left: 10px;">• Continuation becomes commercially unreasonable. The breaching party will be given reasonable notice and opportunity to remedy the issue where possible.
 </p>`,
    },
    {
      title: "Refund Policy",
      content:
        "9.1 If you are not satisfied, you may request a refund within <b>30 days</b> of payment by contacting <b>help@atpregistry.com.</b></br>9.2 Refunds apply solely to eligible prepaid services and follow the conditions stated in these Terms.",
    },
    {
      title: "Governing Law and Dispute Resolution",
      content: `10.1 This Agreement and these Terms are governed by the laws of the <b>United States.</b></br>10.2 We aim to resolve disputes amicably. </br>If a resolution cannot be reached, either party may pursue legal action in a competent U.S. court.
`,
    },
    {
      title: "Data Privacy",
      content: `<b>11.1 Data Handling: </b></br><p style="padding-left: 10px;">Information you provide is handled according to our Privacy Policy. </p><b>11.2 Policy Access:</b></br><p style="padding-left: 10px;">You can review our Privacy Policy at any time to understand how your data is collected, stored and used. </p>`,
    },
  ];

  const [activeSection, setActiveSection] = useState<{
    title: string;
    content: string;
  }>({
    title: sections[0].title,
    content: sections[0].content,
  });

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection({
              title: entry.target.getAttribute("data-section")!,
              content:
                sections.find(
                  (sec) =>
                    sec.title === entry.target.getAttribute("data-section")
                )?.content || "",
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = sectionRefs.current[section.title];
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = sectionRefs.current[section.title];
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleClick = (sectionTitle: string) => {
    const element = sectionRefs.current[sectionTitle];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <Navbar />

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black leading-relaxed">
          Review the terms that guide your use of our services, payments, and
          policies. We’ve outlined them clearly so you understand your rights
          and obligations.
        </p>
      </header>

      {/* Main layout */}
      <div className="max-w-5xl mx-auto gap-10 px-6 pb-16">
        {/* Content */}
        <main className="space-y-5">
          {sections.map((section, idx) => (
            <section
              key={idx}
              id={section.title.replace(/\s+/g, "-").toLowerCase()}
              data-section={section.title}
              ref={(el) => (sectionRefs.current[section.title] = el)}
              className="scroll-mt-32 bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-3">
                {idx + 1}. {section.title}
              </h2>
              <div
                className="text-black text-base leading-7"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}
