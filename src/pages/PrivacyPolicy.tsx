import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content:
        "At NATP, we prioritize the confidentiality of your personal information. This Privacy Policy explains how we handle, utilize, and secure data collected through the use of our services.",
    },
    {
      title: "Information Collection",
      content:
        "2.1 We collect personal data voluntarily submitted by users, including names, contact details, and payment-related information.</br>2.2 Additional data, such as IP addresses and browsing patterns, may be gathered through automated systems to enhance service performance and ensure system security.",
    },
    {
      title: "Purpose of Data Use",
      content:
        "3.1 Collected information is used to deliver our services, manage transactions, provide support, and relay essential service communications.</br>3.2 We may also use the data to optimize user experience and adapt our content offerings to user interests.",
    },
    {
      title: "Data Sharing and Disclosure",
      content:
        "4.1 NATP does not engage in selling or leasing customer information to external parties.</br>4.2 Selected third-party providers may receive data for operational support (e.g., payment processors, IT support), subject to strict confidentiality agreements and data protection compliance.</br>4.3 Disclosure of information may be required to meet legal duties or respond to legitimate requests from regulatory or governmental authorities.",
    },
    {
      title: "Data Security",
      content:
        "5.1 We apply comprehensive security practices to prevent unauthorized access, misuse, or destruction of your data.</br>5.2 Our infrastructure is routinely assessed for vulnerabilities and protected through encryption and secure protocols.",
    },
    {
      title: "Your Rights",
      content:
        "6.1 You may request access to, correction of, or deletion of your personal information by contacting info@natp-trademark.com.</br>6.2 You may also exercise your right to object to or limit data processing in accordance with applicable privacy regulations in the United States.",
    },
    {
      title: "Cookies and Tracking Technologies",
      content:
        "7.1 NATP utilizes cookies and similar tools to ensure site efficiency, analyze visitor behavior, and enhance user experience.</br>7.2 You may modify cookie settings through your browser; however, doing so may impact certain website functionalities.",
    },
    {
      title: "Data Retention",
      content:
        "8.1 We retain personal data only as long as necessary to fulfill the stated purposes or as required by applicable laws.</br>8.2 Once the data retention period expires, data is securely erased or anonymized.",
    },
    {
      title: "Changes to This Policy",
      content:
        "9.1 We may update this policy from time to time. Modifications will be published on our website, and material changes will be communicated directly to users.</br>9.2 Continued use of our services after such updates implies acceptance of the revised Privacy Policy.",
    },
    {
      title: "Protection of Children's Data",
      content:
        "10.1 Our services are not intended for individuals under 13 years of age, and we do not knowingly collect data from children.",
    },
    {
      title: "Contact",
      content:
        "Questions, concerns, or requests related to this Privacy Policy should be directed to info@natp-trademark.com.",
    },
    {
      title: "Effective Date",
      content:
        "This Privacy Policy is effective as of January 1, 2025, and complies with applicable U.S. data protection laws.",
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
            Learn how we safeguard your personal data and respect your privacy
            across our services.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-28 bg-white/70 backdrop-blur-md border border-blue-200 rounded-2xl shadow-md p-6">
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
          <main className="md:col-span-8 lg:col-span-9 space-y-12">
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
      </div>

      <Footer />
    </div>
  );
}
