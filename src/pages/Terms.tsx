import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";

export default function Terms() {
  const sections = [
    {
      title: "INTRODUCTION",
      content:
        "Welcome! These Terms and Conditions (\"T&C\") explain the agreement between ATP Service Inc (the Provider, contact: help@atpregistry.com) and you (the Customer) when you use or purchase our Prepaid Service. By using our service, you agree to these terms. If you'd like a printable copy, just ask us.",
    },
    {
      title: "DEFINITIONS",
      content:
        "2.1 Database: Our proprietary system that gathers data from various trademark registers, including national, EU, and international sources.</br>2.2 Prepaid Service: Paid access to secure sections of our Database on atpregistry.com for three years, starting once we receive your payment.</br>2.3 Service Fee: The upfront cost for accessing the Prepaid Service, as listed in our current offer.</br>2.4 Agreement: The contract between you and us, activated when we receive your Service Fee.",
    },
    {
      title: "SERVICE DESCRIPTION",
      content: `3.1 Scope: </br><p style="padding-left: 10px;">• You get access to premium content in our Database. </p><p style="padding-left: 10px;">• Service lasts for three years after payment. </p>3.2 Exclusivity: <p style="padding-left: 10px;">• Only these T&C apply to our agreement. </p><p style="padding-left: 10px;">• Other terms from you or third parties don't apply. </p>3.3 Modifications: <p style="padding-left: 10px;">• We may update these T&C, but we'll notify you in writing first. </p><p style="padding-left: 10px;">• Changes take effect once we've let you know and you acknowledge them.</p> `,
    },
    {
      title: "PAYMENT CONDITIONS",
      content:
        "4.1 You'll get access to the service only after you've paid the Service Fee in full.</br>4.2 Please pay by bank transfer or check to our specified account. Your access starts once we receive your payment.",
    },
    {
      title: "RIGHT OF WITHDRAWAL",
      content: `5.1 Contract Formation: </br><p style="padding-left: 10px;">• The agreement is binding once you pay the Service Fee in response to our offer. </p>5.2 Withdrawal Period: <p style="padding-left: 10px;">• You can cancel within seven days of payment, no questions asked. </p><p style="padding-left: 10px;">• The agreement starts as soon as you pay. </p>`,
    },
    {
      title: "LIABILITY AND DISCLAIMERS",
      content: `6.1 Data Integrity: </br><p style="padding-left: 10px;">• Our Database is compiled from third-party sources and provided "as is." We can't guarantee it's always accurate or complete. </p>6.2 Limitation of Liability: </br><p style="padding-left: 10px;">• We're not responsible for any direct or indirect damages, lost revenue, missed opportunities, or service interruptions. </p><p style="padding-left: 10px;">• This applies even if we knew about possible issues. </p>`,
    },
    {
      title: "ARTICLE PUBLICATION SERVICE",
      content: `7.1 Overview: </br><p style="padding-left: 10px;">• After payment, we may offer to publish an article highlighting your brand's achievements. </p>7.2 Purpose: </br><p style="padding-left: 10px;">• This helps showcase and strengthen your brand's reputation. </p>7.3 Editorial Rights: </br><p style="padding-left: 10px;">• We may edit submitted content for clarity and consistency, but won't change the facts. </p>7.4 Disclaimer: </br><p style="padding-left: 10px;">• We're not liable for any damages related to this optional service. </p>`,
    },
    {
      title: "DURATION AND TERMINATION",
      content: `8.1 Contract Period: </br><p style="padding-left: 10px;">• The agreement ends automatically after one year and can't be terminated early for ordinary reasons. </p>8.2 Termination for Cause: </br><p style="padding-left: 10px;">• Either party can end the agreement immediately if there's a serious breach. </p><p style="padding-left: 10px;">• The breaching party should be given a chance to fix issues within a reasonable time. </p><p style="padding-left: 10px;">• If it's unreasonable to continue, immediate termination is allowed. </p>`,
    },
    {
      title: "REFUND POLICY",
      content:
        "9.1 If you're not satisfied, you can request a refund within 30 days of payment. Email help@atpregistry.com with your order details and reason. Refunds follow these T&C and any additional policies. This policy applies only to the services described here.",
    },
    {
      title: "GOVERNING LAW AND DISPUTE SETTLEMENT",
      content: `10.1 Jurisdiction: </br><p style="padding-left: 10px;">• Our agreement and these T&C are governed by United States law. </p>10.2 Dispute Resolution: </br><p style="padding-left: 10px;">• We'll try to resolve any issues amicably. </p><p style="padding-left: 10px;">• If that doesn't work, legal action can be taken in a competent court. </p>`,
    },
    {
      title: "DATA PRIVACY",
      content: `11.1 Data Handling: </br><p style="padding-left: 10px;">• Details about how we handle your personal data are in our Privacy Policy. </p>11.2 Policy Access:</br><p style="padding-left: 10px;">• You'll find a link to our Privacy Policy on atpregistry.com. Please review it to learn how your data is used. </p>`,
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
          policies. We’ve outlined them clearly so you know your rights and
          obligations.
        </p>
      </header>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-6 pb-16">
        {/* Sidebar */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-28 bg-white/70 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-md p-6">
            <h2 className="text-blue-900 font-semibold text-lg mb-4">
              Quick Navigation
            </h2>
            <ul className="space-y-2">
              {sections.map((section, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleClick(section.title)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                      activeSection.title === section.title
                        ? "bg-blue-600 text-white shadow"
                        : "text-blue-700 hover:bg-blue-100"
                    }`}>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="md:col-span-8 lg:col-span-9 space-y-5">
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
