import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";

export default function Article() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Heading */}
          <div>
            <h1 className="text-6xl font-extrabold text-blue-900 tracking-tight leading-tight">
              Your Story, <br />
              Our Words
            </h1>
            <p className="mt-6 text-lg text-blue-700 max-w-md">
              We craft content that feels human, sharp, and memorable — turning
              your brand into something people want to follow.
            </p>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center">
            <img
              src="https://img.icons8.com/?size=200&id=ABzO8F09bZGV&format=png&color=1E3A8A"
              alt="Brand Storytelling"
              className="w-64 h-64"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-blue-900 text-center mb-6">
            How We Bring Ideas to Life
          </h2>
          <p className="text-center text-blue-700 max-w-2xl mx-auto mb-16">
            Great content doesn’t happen by chance. Here’s how we make sure your
            brand voice stands out in a noisy digital world.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/?size=100&id=O8RbyUzvztYg&format=png&color=1E3A8A"
                alt="Research"
                className="w-12 h-12 mb-6"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Explore
              </h3>
              <p className="text-blue-700 text-base leading-relaxed">
                We start by understanding your brand, audience, and competitors.
                Every article begins with clarity and purpose.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/?size=100&id=lWmQ8VqjvZlt&format=png&color=1E3A8A"
                alt="Drafting"
                className="w-12 h-12 mb-6"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Create
              </h3>
              <p className="text-blue-700 text-base leading-relaxed">
                Our writers shape stories that connect, inspire, and feel true
                to your brand’s personality.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
              <img
                src="https://img.icons8.com/?size=100&id=3vRcs0eFjHhX&format=png&color=1E3A8A"
                alt="Publishing"
                className="w-12 h-12 mb-6"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Amplify
              </h3>
              <p className="text-blue-700 text-base leading-relaxed">
                Once ready, we make sure your content gets seen by the right
                people — with SEO and strategy built in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-900 mb-6">
            Why Content Matters
          </h2>
          <p className="text-lg text-blue-700 mb-16 max-w-2xl mx-auto">
            Strong content builds trust, attracts attention, and grows your
            influence. It’s not just about words — it’s about creating lasting
            impressions.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="flex gap-4">
              <img src="/images/2.svg" alt="" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-blue-900">
                  Visibility That Counts
                </h4>
                <p className="text-blue-700">
                  Optimized articles put your brand where it matters most:
                  directly in front of your audience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/2.svg" alt="" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-blue-900">
                  Trust Through Value
                </h4>
                <p className="text-blue-700">
                  Sharing useful insights builds credibility and positions you
                  as an industry leader.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/2.svg" alt="" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-blue-900">
                  Stand Out, Naturally
                </h4>
                <p className="text-blue-700">
                  Memorable content helps you rise above the noise and show what
                  makes your brand unique.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/images/2.svg" alt="" className="w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-blue-900">
                  Smarter Growth
                </h4>
                <p className="text-blue-700">
                  We combine creativity with strategy so your articles don’t
                  just exist — they perform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Elevate Your Voice?
          </h2>
          <p className="text-lg mb-8">
            Let’s create content that speaks louder, shines brighter, and
            actually moves people.
          </p>
          <Button
            asChild
            className="bg-white text-blue-700 font-semibold px-8 py-6 rounded-xl shadow-md hover:bg-blue-100 transition">
            <Link to="/apply">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
