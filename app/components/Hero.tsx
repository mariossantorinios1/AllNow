export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold animate-pulse">
          EverythingNow Platform
        </h1>

        <p className="mt-4 text-lg md:text-2xl opacity-90">
          All your content • All your links • All your earnings — in one place.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="/services"
            className="bg-white text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore Services
          </a>

          <a
            href="/contact"
            className="bg-transparent border border-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
