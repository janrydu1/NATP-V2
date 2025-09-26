export default function HomeBento() {
  return (
    <div className="relative container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center space-y-4 pb-6 mx-auto">
        <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
          Solution
        </h2>
        <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
          A four-step process to bring your trademark into public view—and back
          it with content.
        </h3>
      </div>
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-4xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
        {/* Card 1 - Submit Info */}
        <div className="group relative flex flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl transition-all duration-500 ease-out h-[400px]">
          <div className="flex-shrink-0">
            <h3 className="font-semibold mb-2 text-blue-600">
              <span className="font-bold text-xl">1.</span> Submit Info
            </h3>
            <p className="text-foreground mb-4">
              Send us your trademark and brand details.
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/patented-brand-identity-license-product-copyright-concept_53876-122707.jpg?t=st=1758871273~exp=1758874873~hmac=1b930bd28142d4f975e1962ee2362df34b5794adcbff0bc73b887aaa04cd1941&w=1480"
              alt="Service illustration"
              className="w-full h-full object-cover select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 h- w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-800 pointer-events-none" />
          </div>
        </div>

        {/* Card 2 - Proposal & Approval */}
        <div className="group relative flex flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl transition-all duration-500 ease-out h-[400px]">
          <div className="flex-shrink-0">
            <h3 className="font-semibold mb-2 text-blue-600">
              <span className="font-bold text-xl">2.</span> Proposal & Approval
            </h3>
            <p className="text-foreground mb-4">
              We send you a proposal. On approval, we start work.
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/table-consulting-paperwork-professional-invest-executive_1418-63.jpg?t=st=1758871374~exp=1758874974~hmac=7ed9ce77ce8333dfb1a55c8f8b509124cbf353f319ef5c1a2a20858857836631&w=2000"
              alt="Service illustration"
              className="w-full h-full object-cover select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-800 pointer-events-none" />
          </div>
        </div>

        {/* Card 3 - Publish + Content (Tall card) */}
        <div className="group relative flex flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl transition-all duration-500 ease-out md:row-span-2 h-[400px] md:h-[824px]">
          <div className="flex-shrink-0">
            <h3 className="font-semibold mb-2 text-blue-600">
              <span className="font-bold text-xl">3.</span> Publish + Content
            </h3>
            <p className="text-foreground mb-4">
              We publish your trademark and produce branded content.
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/typing-red-retro-typewriter-blank-paper_53876-105923.jpg?t=st=1758871524~exp=1758875124~hmac=085e60e7591ea4371335d6a7b50e130fe00fbae0560a433a391dc84c217f1c07&w=2000"
              alt="Service illustration"
              className="w-full h-full object-cover select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-800 pointer-events-none" />
          </div>
        </div>

        {/* Card 4 - Optimization & Updates (Wide card) */}
        <div className="group relative flex flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl transition-all duration-500 ease-out md:col-span-2 xl:col-span-2 h-[400px]">
          <div className="flex-shrink-0">
            <h3 className="font-semibold mb-2 text-blue-600">
              <span className="font-bold text-xl">4.</span> Optimization &
              Updates
            </h3>
            <p className="text-foreground mb-4">
              Ongoing SEO, edits, and support to keep your brand visible.
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/seo-search-engine-optimization-internet-digital-concept_53876-138498.jpg?t=st=1758871636~exp=1758875236~hmac=951e5cfede5c6bbb6868b81cfe7f1d2d75a816ad24253e8b64109d209d884c74&w=2000"
              alt="Service illustration"
              className="w-full h-full object-cover select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-xl"
            />
            <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-800 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
