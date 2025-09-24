import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";

export default function Publication() {
  const steps = [
    {
      id: 1,
      title: "Fill Out the Quick Form",
      description:
        "Share your trademark details in just a few clicks — it’s fast, simple, and secure.",
      icon: "https://plus.unsplash.com/premium_vector-1682301631594-eb2572c47bd5?fm=jpg&q=60&w=1200",
    },
    {
      id: 2,
      title: "We Verify Your Info",
      description:
        "Our team reviews everything carefully to make sure your details are accurate and ready.",
      icon: "https://plus.unsplash.com/premium_vector-1721256358643-00015e00b18d?fm=jpg&q=60&w=1200",
    },
    {
      id: 3,
      title: "Your Trademark Goes Live",
      description:
        "Once approved, your trademark is published and visible for clients and partners worldwide.",
      icon: "https://plus.unsplash.com/premium_vector-1682310922955-ea5e6f791471?fm=jpg&q=60&w=1200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-blue-900 mb-6">
          Publish Your Trademark with Ease
        </h1>
        <p className="text-blue-700 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Make your brand official, boost visibility, and protect your identity
          with our seamless trademark publication service.
        </p>
      </section>

      {/* Steps Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-6">
            Three Simple Steps
          </h2>
          <p className="text-blue-700 text-lg mb-12 max-w-xl mx-auto font-light">
            We’ve simplified the process so you can publish your trademark
            without any hassle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <img
                  src={step.icon || "/placeholder.svg"}
                  alt={step.title}
                  className="h-[100px] mb-6"
                />
                <h3 className="text-xl md:text-2xl font-medium text-blue-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-blue-600 text-base font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded-xl shadow-md transition">
              <Link to="/apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-snug mb-6">
              Stay Ahead with Accurate, Updated Data
            </h2>
            <p className="text-blue-700 text-lg md:text-xl font-light leading-relaxed">
              We refresh trademark records daily, keeping your brand visible,
              reliable, and competitive in today’s fast-changing marketplace.
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-10 shadow-inner">
            <p className="text-blue-800 font-medium text-lg leading-relaxed">
              “Up-to-date trademark information means your brand is always ready
              to be discovered. We make sure nothing slips through the cracks.”
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
