import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-blue-900 mb-6">
          Services Built for Growth
        </h1>
        <p className="text-blue-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Simple, powerful solutions that help your brand get noticed and stay
          ahead in a crowded market.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto px-6 py-16 space-y-28">
        {/* Service Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
              Trademark Visibility
            </h2>
            <p className="text-blue-700 text-lg leading-relaxed mb-6">
              Put your trademark in the spotlight. We make your brand
              discoverable and trusted by ensuring it’s seen where it matters
              most.
            </p>
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-xl shadow-md">
              <Link to="/services/publication">Explore More</Link>
            </Button>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_vector-1682301631594-eb2572c47bd5?fm=jpg&q=60&w=1600"
              alt="Trademark Publication"
              className="rounded-2xl shadow-md object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/Trademark Publication.svg";
              }}
            />
          </div>
        </div>

        {/* Service Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://plus.unsplash.com/premium_vector-1721256358643-00015e00b18d?fm=jpg&q=60&w=1600"
              alt="Article Creation"
              className="rounded-2xl shadow-md object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/Article Creation.svg";
              }}
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
              Storytelling That Connects
            </h2>
            <p className="text-blue-700 text-lg leading-relaxed mb-6">
              Strong brands have strong voices. We craft articles that highlight
              your values, connect with your audience, and spark recognition.
            </p>
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-xl shadow-md">
              <Link to="/services/article">Explore More</Link>
            </Button>
          </div>
        </div>

        {/* Service Block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
              Smart SEO Strategies
            </h2>
            <p className="text-blue-700 text-lg leading-relaxed mb-6">
              Rise in search rankings and get discovered. Our SEO solutions help
              you appear where your customers are looking.
            </p>
            <Button
              asChild
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-xl shadow-md">
              <Link to="/services/seo">Explore More</Link>
            </Button>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_vector-1682310922955-ea5e6f791471?fm=jpg&q=60&w=1600"
              alt="SEO Solutions"
              className="rounded-2xl shadow-md object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/images/Customized SEO.svg";
              }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-blue-100 rounded-3xl px-8 py-16 text-center space-y-12 shadow-sm">
          <h2 className="text-4xl font-semibold text-blue-900">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Always Fresh
              </h3>
              <p className="text-blue-600">
                Your trademark data stays updated daily for accuracy and trust.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Dedicated Support
              </h3>
              <p className="text-blue-600">
                Our team is here whenever you need help or guidance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-3">
                Continuous Growth
              </h3>
              <p className="text-blue-600">
                We refine strategies and content so your brand keeps improving.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6">
            Let’s Build Something Big
          </h2>
          <p className="text-blue-700 text-lg max-w-2xl mx-auto mb-10">
            Start making your brand more visible, trusted, and unforgettable.
          </p>
          <Button
            asChild
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 rounded-xl shadow-lg">
            <Link to="/apply">Get Started</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
