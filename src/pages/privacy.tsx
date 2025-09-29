// import { Navbar } from "@/components/Navbar";
// import { useEffect, useRef, useState } from "react";
// import { Footer } from "@/components/Footer";

// export default function Privacy() {
//   const sections = [
//     {
//       title: "INTRODUCTION",
//       content:
//         "Welcome! These Terms and Conditions (“T&C”) explain the agreement between NATP (the Provider, contact: info@natp-trademark.com) and you (the Customer) when you use or purchase our Prepaid Service. By using our service, you agree to these terms. If you’d like a printable copy, just ask us.",
//     },
//     {
//       title: "DEFINITIONS",
//       content:
//         "1.1 Database: Our private system that brings together data from trademark registers around the world.</br>1.2 Prepaid Service: Paid access to special parts of our Database for three years, starting when we receive your payment.</br>1.3 Service Fee: The upfront cost you pay for access, based on our current offer.</br>1.4 Agreement: The contract starts once we receive your payment.</br>",
//     },
//     {
//       title: "SERVICE DESCRIPTION",
//       content:
//         "2.1 Scope: </br>You get access to premium content in our Database for three years after payment.</br>2.2 Exclusivity: </br>Only these T&C apply to our agreement. Other terms from you or third parties don’t apply.</br>2.3 Modifications: </br>We may update these terms, but we’ll let you know in writing first. Changes only take effect after we notify you and you acknowledge them.</br>",
//     },
//     {
//       title: "PAYMENT CONDITIONS",
//       content:
//         "3.1 You’ll get access to the service only after we receive your full payment.</br>3.2 Please pay by bank transfer or check to our specified account. Your access starts once we’ve received the full amount.</br>",
//     },
//     {
//       title: "RIGHT OF WITHDRAWAL",
//       content:
//         "4.1 Contract Formation: </br>The agreement is binding once you pay in response to our offer.</br>4.2 Withdrawal Period: </br>You can cancel within seven days of payment, no questions asked. The agreement starts as soon as you pay.</br>",
//     },
//     {
//       title: "LIABILITY AND DISCLAIMERS",
//       content:
//         "5.1 Data Integrity: </br>Our Database uses third-party sources and is provided as-is. We can’t guarantee everything is 100% accurate or complete.</br>5.2 Limitation of Liability: </br>We’re not responsible for any direct or indirect damages, lost revenue, missed opportunities, or service interruptions from using or not using natp-trademark.com, even if we knew about possible issues.</br>",
//     },
//     {
//       title: "ARTICLE PUBLICATION SERVICE",
//       content:
//         "6.1 Overview: </br>After payment, we may offer to publish an article about your brand’s achievements.</br>6.2 Purpose: </br>This helps showcase and strengthen your brand’s reputation.</br>6.3 Editorial Rights: </br>We may edit your submitted content for clarity and consistency, but won’t change the facts.</br>6.4 Disclaimer: </br>We’re not liable for any damages related to this optional service.</br>",
//     },
//     {
//       title: "DURATION AND TERMINATION",
//       content:
//         "7.1 Contract Period: </br>The agreement ends automatically after one year and can’t be cancelled during that time.</br>7.2 Termination for Cause: </br>If there’s a serious breach, either side can end the agreement immediately. The breaching party gets a chance to fix issues first. If continuing isn’t reasonable, immediate termination is allowed.</br>",
//     },
//     {
//       title: "REFUND POLICY",
//       content:
//         "8.1 If you’re not satisfied, you can request a refund within thirty days of payment. Email info@natp-trademark.com with your order details and reason. Refunds follow these T&C and any extra policies. This policy only covers the services described here.",
//     },
//     {
//       title: "GOVERNING LAW AND DISPUTE SETTLEMENT",
//       content:
//         "9.1 Jurisdiction: </br>This agreement follows United States law.</br>9.2 Dispute Resolution: </br>If there’s a disagreement, we’ll try to resolve it together first. If that doesn’t work, legal action can be taken in a competent court.</br>",
//     },
//     {
//       title: "DATA PRIVACY",
//       content:
//         "10.1 Data Handling: </br>Details about how we handle your personal data are in our Privacy Policy.</br>10.2 Policy Access: </br>You’ll find a link to our Privacy Policy on natp-trademark.com. Please review it to learn how we use your data.</br>",
//     },
//   ];

//   const [activeSection, setActiveSection] = useState<{
//     title: string;
//     content: string;
//   }>({
//     title: sections[0].title,
//     content: sections[0].content,
//   });
//   const sectionRefs = useRef({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection({
//               title: entry.target.getAttribute("data-section")!,
//               content:
//                 sections.find(
//                   (sec) =>
//                     sec.title === entry.target.getAttribute("data-section")
//                 )?.content || "",
//             });
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px 0px -60% 0px",
//         threshold: 0.1,
//       }
//     );

//     sections.forEach((section) => {
//       const element = sectionRefs.current[section.title];
//       if (element) observer.observe(element);
//     });

//     return () => {
//       sections.forEach((section) => {
//         const element = sectionRefs.current[section.title];
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, []);

//   const handleClick = (sectionTitle) => {
//     const element = sectionRefs.current[sectionTitle];
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="max-w-5xl mx-auto min-h-screen py-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-[#333747]">
//               Terms & Conditions
//             </h2>
//             <p className="text-base sm:text-lg font-semibold text-[#333747]">
//               Read our terms and conditions and privacy policy to understand
//               your rights and responsibilities.
//             </p>
//           </div>
//         <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 px-6 mt-32">
//           {/* Sidebar */}
//           <div className="col-span-12 md:col-span-4 lg:col-span-4">
//             <div className="sticky top-24 space-y-4">
//               <h2 className="text-text-[#333747] font-semibold text-[22px] mb-4">
//                 Contents Overview
//               </h2>
//               <ul className="space-y-1">
//                 {sections.map((section, idx) => (
//                   <li key={idx}>
//                     <button
//                       onClick={() => handleClick(section.title)}
//                       className={`w-full text-left p-2 rounded-md text-[16px] transition-all duration-300 font-medium ${
//                         activeSection.title === section.title
//                           ? "bg-[#005ea2] text-white"
//                           : "text-gray-800 hover:bg-gray-100"
//                       }`}>
//                       {section.title}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="col-span-12 md:col-span-8 lg:col-span-8 space-y-6">
//             {sections.map((section, idx) => (
//               <div
//                 key={idx}
//                 id={section.title.replace(/\s+/g, "-").toLowerCase()}
//                 data-section={section.title}
//                 ref={(el) => (sectionRefs.current[section.title] = el)}
//                 className="scroll-mt-32">
//                 <h2 className="text-[28px] font-semibold text-[#333747] mb-4 font-sans">
//                   {section.title === "INTRODUCTION"
//                     ? section.title
//                     : `${idx}. ${section.title}`}
//                 </h2>
//                 <div
//                   className="text-[#333747] text-[15px] leading-7 font-semibold"
//                   dangerouslySetInnerHTML={{ __html: section.content }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
