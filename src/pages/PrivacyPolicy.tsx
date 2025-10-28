import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Welcome to <b>ATP Service Inc.</b> </br>Your privacy is important to us. This policy explains how we collect, use, store and protect your personal information when you use our website, services, or related tools",
    },
    {
      title: "Information Collection",
      content:
        "2.1 We collect personal information that you provide directly to us, such as your name, email address, contact details and business information.</br>2.2 We also gather limited technical data (like your IP address, browser type and interaction data) to maintain service functionality and improve user experience.",
    },
    {
      title: "How We Use Your Data",
      content:
        "3.1 We use your data to operate and improve our services, communicate with you and process inquiries or transactions.</br>3.2 We may also use your information to personalize your experience, share relevant updates and provide content aligned with your interests.",
    },
    {
      title: "Sharing Your Information",
      content:
        "4.1 We do <b>not</b> sell, rent, or trade your personal information.</br>4.2 We may share limited data with <b>trusted service providers</b> (for example, payment processors, email delivery platforms, or technical partners) who help us operate our services; always under strict confidentiality agreements.</br>4.3 We may also disclose information if required by law or to comply with legal obligations.",
    },
    {
      title: "Keeping Your Data Safe",
      content:
        "5.1 We apply strong administrative, technical and physical safeguards to protect your personal information against unauthorized access, alteration, or misuse.</br>5.2 Our systems are regularly reviewed for vulnerabilities and secured using encryption and other industry-standard safety measures.",
    },
    {
      title: "Your Rights",
      content:
        "6.1 You may request access to, correction of, or deletion of your personal data at any time by contacting <b>help@atpregistry.com.</b></br>6.2 You also have the right to restrict or object to how your data is used, in accordance with applicable privacy laws.",
    },
    {
      title: "Cookies and Tracking",
      content:
        "7.1 We use cookies and similar technologies to ensure the proper functioning of our site, analyze performance and enhance usability.</br>7.2 You can manage or disable cookies through your browser settings, but please note that some features may not function as intended if cookies are disabled.",
    },
    {
      title: "How Long We Keep Your Data",
      content:
        "8.1 We retain your personal information only as long as necessary to fulfill the purposes described in this policy or as required by law.</br>8.2 When information is no longer needed, it is securely deleted or anonymized.",
    },
    {
      title: "Policy Updates",
      content:
        "9.1 We may revise this Privacy Policy from time to time. Updates will be posted on this page with a new effective date.</br>9.2 By continuing to use our services after an update, you acknowledge and accept the revised version.",
    },
    {
      title: "Children’s Privacy",
      content:
        "10.1 Our services are not directed toward individuals under the age of 13.</br>10.2 We do not knowingly collect or store personal data from children. If we become aware of such collection, we will promptly delete the data.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions or concerns regarding this Privacy Policy or how we handle your data, please contact us at: <b>📧 help@atpregistry.com</b>",
    },
    {
      title: "Effective Date",
      content:
        "This Privacy Policy is effective as of <b>January 1, 2025</b> and complies with applicable <b>U.S. data protection laws.</b>",
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

      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-black leading-relaxed">
            Learn how we safeguard your personal data and ensure transparency across our services.
          </p>
        </div>

        {/* Layout */}
        <div className="max-w-5xl mx-auto gap-10 px-6 pb-16 mt-20">
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
          <div className="flex justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-4 py-2 shadow-lg transition-colors rounded-[8px]">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
