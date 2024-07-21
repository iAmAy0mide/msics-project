import Image from "next/image";
import Mush from "/public/mushroom.svg";

export default function Home() {
  return (
    <main className="">
      <section className="grid sm:grid-cols-2 place-items-center pt-24">
        <div className="">
          <p className="">Psilocybin pioneers</p>
          <h1 className="">Developing & providing innovative naturally sourced GMP psilocybin.</h1>
        </div>
        <div className="max-w-[640px] w-[640px]">
          <Image 
            className="w-full"
            src={Mush}
            width={100}
            height={100}
            alt=""
          />
        </div>
      </section>
      
    </main>
  );
}
