export default function HomeBento() {
    return <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-blue-600 font-mono font-medium tracking-wider uppercase">
                Solution
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                A four-step process to bring your trademark into public view—and back it with content.
            </h3>
        </div>
        <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
            <div
                className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl transition-all duration-500 ease-out"
                style={{ opacity: 1, transform: "none" }}
            >
                <div>
                    <h3 className="font-semibold mb-2 text-blue-600">
                        <span className="font-bold text-xl">1.</span> Submit Info
                    </h3>
                    <p className="text-foreground">
                        Send us your trademark and brand details.
                    </p>
                </div>
                <img
                    src="/public/images/placeholder.svg"
                    alt="Service illustration"
                    className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none" />
            </div>
            <div
                className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl order-3 xl:order-none transition-all duration-500 ease-out"
                style={{ opacity: 1, transform: "none" }}
            >
                <div>
                    <h3 className="font-semibold mb-2 text-blue-600">
                        <span className="font-bold text-xl">2.</span> Proposal & Approval
                    </h3>
                    <p className="text-foreground">
                        We send you a proposal. On approval, we start work.
                    </p>
                </div>
                <img
                    src="/public/images/placeholder.svg"
                    alt="Service illustration"
                    className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none" />
            </div>
            <div
                className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl md:row-span-2  transition-all duration-500 ease-out"
                style={{ opacity: 1, transform: "none" }}
            >
                <div>
                    <h3 className="font-semibold mb-2 text-blue-600">
                        <span className="font-bold text-xl">3.</span>  Publish + Content
                    </h3>
                    <p className="text-foreground">
                        We publish your trademark and produce branded content.
                    </p>
                </div>
                <canvas
                    className="size-full pointer-events-none z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
                    style={{ width: 800, height: 800 }}
                    width={1600}
                    height={1600}
                />
                <img
                    src="/public/images/placeholder.svg"
                    alt="Service illustration"
                    className="mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none" />
            </div>
            <div
                className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl flex-row order-4 md:col-span-2 md:flex-row xl:order-none transition-all duration-500 ease-out"
                style={{ opacity: 1, transform: "none" }}
            >
                <div>
                    <h3 className="font-semibold mb-2 text-blue-600">
                        <span className="font-bold text-xl">4.</span> Optimization & Updates
                    </h3>
                    <p className="text-foreground">
                        Ongoing SEO, edits, and support to keep your brand visible.
                    </p>
                </div>
                <div className="inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] absolute -bottom-full">
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:0]"
                        style={{
                            width: 210,
                            height: 210,
                            opacity: "0.24",
                            animationDelay: "0s",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.05)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:1]"
                        style={{
                            width: 280,
                            height: 280,
                            opacity: "0.21",
                            animationDelay: "0.06s",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.1)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:2]"
                        style={{
                            width: 350,
                            height: 350,
                            opacity: "0.18",
                            animationDelay: "0.12s",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.15)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:3]"
                        style={{
                            width: 420,
                            height: 420,
                            opacity: "0.15",
                            animationDelay: "0.18s",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.2)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:4]"
                        style={{
                            width: 490,
                            height: 490,
                            opacity: "0.12",
                            animationDelay: "0.24s",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.25)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:5]"
                        style={{
                            width: 560,
                            height: 560,
                            opacity: "0.09",
                            animationDelay: "0.3s",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.3)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:6]"
                        style={{
                            width: 630,
                            height: 630,
                            opacity: "0.06",
                            animationDelay: "0.36s",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.35)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                    <div
                        className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:7]"
                        style={{
                            width: 700,
                            height: 700,
                            opacity: "0.03",
                            animationDelay: "0.42s",
                            borderStyle: "dashed",
                            borderWidth: 1,
                            borderColor: "hsl(var(--foreground), 0.4)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)"
                        }}
                    />
                </div>
                <img
                    src="/public/images/placeholder.svg"
                    alt="Service illustration"
                    className="mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 rounded-lg object-cover"
                />
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none" />
            </div>
        </div>
    </div>
}