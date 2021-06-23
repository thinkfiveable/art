import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="bg-white shadow-lg rounded-md my-6 mx-2">
      <div className="w-full overflow-hidden">
        <Image
          src="/rainbow.jpg"
          alt="Project cover image"
          className="object-fit"
          height={500}
          width={500}
        />
      </div>
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl">Project Name</h4>
        <p className="font-light">by Student name</p>
        <div className="border w-20 rounded-xl text-center mt-3">
          <Link href="/">
            <a>More &rarr;</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
