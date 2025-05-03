
import Head from "next/head";

export default function HomePage() {
  const launchDate = new Date("2025-05-18T20:00:00Z").getTime();
  const now = new Date().getTime();
  const diff = launchDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <>
      <Head>
        <title>Karmafy - Where Karma Becomes Token</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <main
        className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white font-[Playfair_Display] p-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/karmafy_texture.png')",
          backgroundSize: "100px",
          backgroundRepeat: "repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-3xl mx-auto text-center mt-20">
          <h1 className="text-6xl font-bold text-yellow-400 drop-shadow-lg mb-4">KARMAFY</h1>
          <p className="text-2xl italic text-gray-300 mb-10">Karma hits different when it’s decentralized.</p>

          <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 shadow-inner border border-gray-600 mb-10">
            <h2 className="text-xl font-semibold mb-2">Presale Countdown</h2>
            <div className="text-4xl font-bold mb-6 text-yellow-300">
              {days}d {hours}h {minutes}m {seconds}s
            </div>
            <p className="text-gray-400">Get ready. The presale is coming.</p>
          </div>

          <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 shadow-inner border border-gray-600 mb-10">
            <h2 className="text-xl font-semibold mb-2">Whitepaper</h2>
            <p className="text-gray-400">Coming soon…</p>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <a href="https://t.me/+8heglNWHBM8yOGI0" className="bg-blue-600 px-5 py-3 rounded-xl text-white text-lg font-semibold">Join Telegram</a>
            <a href="https://x.com/KarmafyToken" className="bg-black px-5 py-3 border border-yellow-400 rounded-xl text-yellow-300 text-lg font-semibold">Follow on X</a>
          </div>
        </div>
      </main>
    </>
  );
}
