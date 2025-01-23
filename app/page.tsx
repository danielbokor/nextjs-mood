export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto mb-4">
        <h1 className="text-6xl">The best Journal app</h1>
        <p className="text-2xl text-white/60">
          This is the best app for tracking your mood through out your life.
        </p>
        <div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
            get started
          </button>
        </div>
      </div>
    </div>
  );
}
