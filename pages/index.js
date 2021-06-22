import Meta from "../components/Meta";

export default function Home() {
  return (
    <div className="bg-gray min-h-screen">
      <Meta />
      <main>
        <section className="mx-8 md:mx-48 pt-24">
          <h1 className="text-7xl font-rubik font-bold">Fiveable</h1>
          <h2 className="font-palmer text-6xl">Art Collective</h2>
          <p className="font-rubik text-xl font-light">
            For creatives and artists to make and break.
          </p>
        </section>
      </main>
    </div>
  );
}
