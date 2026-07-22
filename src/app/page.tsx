import Image from "next/image";
import LandingImage from "@/app/_assets/landing-image.png";
import LandingImageMobile from "@/app/_assets/landing-image-mobile.png";

export default function Home() {
  return (
    <div className="relative w-full">
      <Image
        src={LandingImage}
        alt="LandingImage"
        className="w-full h-auto md:block xl:block sm:block hidden pt-12 bg-linear-to-r from-gray-300 via-white to-gray-200"
        priority
      />

      <Image
        src={LandingImageMobile}
        alt="LandingImageMobile"
        className="w-auto min-w-full h-auto min-h-75 md:hidden xl:hidden sm:hidden pt-12 bg-linear-to-r from-gray-300 via-white to-gray-200"
        priority
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center ">
        <div className="ml-8 max-w-lg">
          <h1 className="text-4xl sm:justify-center md:text-6xl font-bold text-primary/95 [-webkit-text-stroke:0.01px_white]">
            Passkey
          </h1>

          <p className="mt-4 sm:max-w-64 md:max-w-300 xl:w-100 text-lg md:text-xl text-primary/80 [-webkit-text-stroke:0.01px_white]">
            Secure authentication without passwords.
            Fast, simple, and protected by modern cryptography.
          </p>
        </div>
      </div>
    </div>
  );
}