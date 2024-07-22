import Image from "next/image";
import mushroom from "/public/mushroom.svg";
import ManOnLabBed from "/public/man-on-lab-bed.svg"
import ManinLabd from "/public/man-in-lab.svg";
import Psilocybin from "/public/processed-psilocybin.svg";
import PhialBottle from "/public/phial-bottle.svg";
import Logo from "/public/Logo.svg";
import GrainTexture from "/public/grains-texture.png";
import Email from "/public/email-icon.svg"
import ContactUs from "@/components/ContactUs"; 
import { Livvic } from "next/font/google";
import Link from "next/link";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export default function Home() {
  return (
    <main className="pt-24 ">
      <section className="grid md:grid-cols-2 items-center mobile px-8 md:px-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-xl lg:text-3xl mb-6 ">Psilocybin pioneers</p>
          <h1 className={`${livvic.className} font-medium text-[40px] leading-[2.5rem] lg:text-[50px] lg:leading-[3rem] -ml-1 mb-4 `}>Developing & providing innovative naturally sourced GMP psilocybin.</h1>
        </div>
        <div className="md:max-w-[640px]">
          <Image 
            className="w-full rounded-[2rem]"
            src={mushroom}
            width={100}
            height={100}
            alt="mushroom from which psilocybin was made"
          />
        </div>
      </section>

      <section className="mobile px-8 md:px-12 mx-auto h-[700px] my-16 ">
        <div id="mission" className="w-full h-full  rounded-[2rem]" style={{ backgroundImage: `url(${ManOnLabBed.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="w-full place-items-center flex flex-col space-y-6 pt-8 text-[#fff]">
            <p className="font-medium uppercase">A new era of medicine</p>
            <h2 className={` ${livvic.className} font-medium text-[2.5rem] `}>MSICS&apos;s mission</h2>
            <p className="w-[70%] text-pretty text-center">To revolutionize global mental healthcare, we harness the power of naturally sourced psilocybin, creating innovative products to effectively address the world&apos;s health challenges.</p>
          </div>
        </div>
      </section>

      <section id="product" className="mobile px-8 md:px-12 mx-auto" >
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

      <section id="contact" className="glassy-white my-16 p-10" style={{ backgroundImage: `url(${GrainTexture.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <h2 className={` ${livvic.className} font-medium text-[2.3rem] text-center`}>Our Partners</h2>
        <div className="flex w-full justify-between items-center mt-10">
          <div className="">
            <Image 
              width={100}
              height={100}
              src={Logo}
              alt="Logo for pharma"
              className="w-full"
            />
          </div>
          <div className="">
            <Image 
              width={100}
              height={100}
              src={Logo}
              alt="Logo for pharma"
              className="w-full"
            />
          </div>
          <div className="">
            <Image 
              width={100}
              height={100}
              src={Logo}
              alt="Logo for pharma"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 mobile px-8 md:px-12 mx-auto mb-16">
        <div className="flex flex-col">
          <h2 className={` ${livvic.className} mb-8 font-medium text-[2.3rem]`}>Contact Us</h2>
          <ContactUs fontStyle={livvic} />
        </div>
        <div className="">
          <h3 className={`${livvic.className} font-medium text-[2rem]`}>Investor Contact</h3>
          <div className="flex items-center justify-between w-[45%] mt-12">
            <div className="bg-[#ccc] w-16 rounded-full p-2 flex items-center justify-center">
              <Image 
                  width={100}
                  height={100}
                  src={Email}
                  alt="Email logo"
                  className="w-8"
                />
            </div>
            <Link href="" className="underline hover:no-underline">info@msicspharma.com</Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}
