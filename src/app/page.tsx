import Image from "next/image";
import mushroom from "/public/mushroom.svg";
import ManOnLabBed from "/public/man-on-lab-bed.svg"
import { Livvic } from "next/font/google";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export default function Home() {
  return (
    <main className="pt-24 mobile px-8 md:px-12 mx-auto">
      <section className="grid sm:grid-cols-2 items-center">
        <div className="">
          <p className="font-medium text-3xl mb-8">Psilocybin pioneers</p>
          <h1 className={`${livvic.className} font-medium text-[50px] leading-[3rem] -ml-1`}>Developing & providing innovative naturally sourced GMP psilocybin.</h1>
        </div>
        <div className="md:max-w-[640px] md:w-[635px]">
          <Image 
            className="w-full rounded-[30px]"
            src={mushroom}
            width={100}
            height={100}
            alt="mushroom from which psilocybin was made"
          />
        </div>
      </section>
      <section className="w-full my-16 h-[700px] mx-auto rounded-[30px]" style={{ backgroundImage: `url(${ManOnLabBed.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="w-full place-items-center flex flex-col space-y-6 pt-8 text-[#fff]">
          <p className="font-medium text-md uppercase">A new era of medicine</p>
          <h2 className={` ${livvic.className} font-medium text-[40px] `}>MSICS&apos;s mission</h2>
          <p className="w-[70%] text-pretty text-center">To revolutionize global mental healthcare, we harness the power of naturally sourced psilocybin, creating innovative products to effectively address the world&apos;s health challenges.</p>
        </div>
      </section>
      
    </main>
  );
}
