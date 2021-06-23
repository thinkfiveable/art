import Card from "../components/Card";

import Meta from "../components/Meta";
import Link from "next/link";
import Modal from "../components/Modal";
import { useState } from "react";
import Masonry from "react-masonry-css";

export default function Home() {
  const [modal, setModal] = useState(false);
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
          {/** Dual button */}
          <div className="flex cursor-pointer text-white rounded-2xl overflow-hidden w-max">
            <div className="px-5 py-1 bg-black" onClick={() => setModal(true)}>
              <a>Learn more</a>
            </div>
            <div className="px-5 py-1 bg-orange">
              <a>Submit</a>
            </div>
          </div>
          {/** Modal */}
          {modal ? <Modal /> : null}
        </section>
        <section className="mx-8 md:mx-24 lg:mx-44">
          <Masonry
            breakpointCols={{
              default: 3,
              1024: 3,
              640: 2,
              480: 1,
            }}
            className="flex w-auto"
            columnClassName=""
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Masonry>
        </section>
      </main>
    </div>
  );
}
