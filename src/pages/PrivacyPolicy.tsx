import { Navbar } from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Welcome to ATP Servic Inc! Your privacy matters to us. This policy explains how we collect, use, and protect your personal information when you use our services.",
    },
    {
      title: "Information Collection",
      content:
        "2.1 We collect information you provide, like your name, contact details, and payment info.</br>2.2 We also gather technical data, such as your IP address and browsing activity, to improve our services and keep everything secure.",
    },
    {
      title: "How We Use Your Data",
      content:
        "3.1 We use your information to deliver our services, process transactions, support you, and send important updates.</br>3.2 We may also use your data to make your experience better and tailor our content to your interests.",
    },
    {
      title: "Sharing Your Information",
      content:
        "4.1 We don’t sell or rent your personal information to anyone.</br>4.2 Sometimes, we share data with trusted partners (like payment processors or IT support) who help us run our business, but only under strict confidentiality rules.</br>4.3 We may also share information if required by law or to respond to official requests.",
    },
    {
      title: "Keeping Your Data Safe",
      content:
        "5.1 We use strong security measures to protect your data from unauthorized access or misuse.</br>5.2 Our systems are regularly checked for vulnerabilities and secured with encryption and safe protocols.",
    },
    {
      title: "Your Rights",
      content:
        "6.1 You can ask to see, correct, or delete your personal information by contacting help@atpregistry.com</br>6.2 You also have the right to limit or object to how we use your data, as allowed by U.S. privacy laws.",
    },
    {
      title: "Cookies and Tracking",
      content:
        "7.1 We use cookies and similar tools to keep our site running smoothly, understand how visitors use it, and improve your experience.</br>7.2 You can change your cookie settings in your browser, but some features may not work as well if you do.",
    },
    {
      title: "How Long We Keep Your Data",
      content:
        "8.1 We keep your personal information only as long as needed for our services or as required by law.</br>8.2 When we no longer need it, we securely delete or anonymize your data.",
    },
    {
      title: "Policy Updates",
      content:
        "9.1 We may update this policy from time to time. Changes will be posted here, and we’ll let you know about any major updates.</br>9.2 By continuing to use our services after changes, you accept the updated policy.",
    },
    {
      title: "Children’s Privacy",
      content:
        "10.1 Our services aren’t meant for children under 13, and we don’t knowingly collect information from them.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy, please reach out to us at help@atpregistry.com",
    },
    {
      title: "Effective Date",
      content:
        "This Privacy Policy takes effect on January 1, 2025, and follows U.S. data protection laws.",
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
      </div>

      <Footer />
    </div>
  );
}
