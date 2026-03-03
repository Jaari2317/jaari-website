export default function Home() {
  return (
    <main className="bg-[#0B0F1A] text-gray-200 min-h-screen">

      <section className="text-center py-28 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Industrial Intelligence for Mission-Critical Assets
        </h1>

        <p className="text-2xl text-blue-500 mb-6">
          Predict | Prevent | Perform
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mb-8">
          JAARI is a deep industrial technology platform transforming SCADA,
          vibration and process data into predictive reliability intelligence
          for wind and heavy industries.
        </p>

        <div className="space-x-4">
          <button className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700">
            Request Demo
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-md hover:bg-gray-800">
            Download Brief
          </button>
        </div>
      </section>

    </main>
  );
}