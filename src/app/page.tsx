import Image from "next/image";
import mushroom from "/public/mushroom.svg";
import ManOnLabBed from "/public/man-on-lab-bed.svg"
import ManinLabd from "/public/man-in-lab.svg";
import Psilocybin from "/public/processed-psilocybin.svg";
import PhialBottle from "/public/phial-bottle.svg";
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
            className="w-full rounded-[2rem]"
            src={mushroom}
            width={100}
            height={100}
            alt="mushroom from which psilocybin was made"
          />
        </div>
      </section>

      <section id="mission" className="w-full my-16 h-[700px] mx-auto rounded-[2rem]" style={{ backgroundImage: `url(${ManOnLabBed.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="w-full place-items-center flex flex-col space-y-6 pt-8 text-[#fff]">
          <p className="font-medium text-md uppercase">A new era of medicine</p>
          <h2 className={` ${livvic.className} font-medium text-[2.5rem] `}>MSICS&apos;s mission</h2>
          <p className="w-[70%] text-pretty text-center">To revolutionize global mental healthcare, we harness the power of naturally sourced psilocybin, creating innovative products to effectively address the world&apos;s health challenges.</p>
        </div>
      </section>

      <section id="product" className="">
        <div className="grid md:grid-cols-2 items-center">
          <div className="">
            <p className="uppercase font-medium text-3xl mb-8">MSICS&apos;S PRODUCTS</p>
            <h2 className={` ${livvic.className}  ${livvic.className} font-medium text-[2.3rem] leading-[3rem] -ml-[0.12rem]`}>MSX-6 - An Innovative Psilocybin Drug</h2>
            <p className="w-[90%] mt-4">MSICS is operating an innovative GMP production facility producing MSX-6 - MSICS&apos;s naturally-sourced Psilocybin-based product used in trials with esteemed hospitals to treat TRD, OCD, anxiety and anorexia.</p>
          </div>
          <div className="flex flex-col w-full gap-12">
            <div className="w-full">
              <Image 
                width={100}
                height={100}
                src={ManinLabd}
                alt="A man in lab testing psilocybin"
                className="w-full rounded-[2.5rem]"
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="w-[45%]">
                <Image 
                  width={100}
                  height={100}
                  src={PhialBottle}
                  alt="A man in lab testing psilocybin"
                  className="w-full rounded-[2rem]"
                />
              </div>
              <div className="w-[45%]">
                <Image 
                  width={100}
                  height={100}
                  src={Psilocybin}
                  alt="A man in lab testing psilocybin"
                  className="w-full rounded-[2.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
