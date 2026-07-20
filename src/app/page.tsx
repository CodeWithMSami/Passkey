import Image from "next/image";
import LandingImage from '@/app/_assets/landing-image.png';

export default function Home() {
  return (
    <div className="">
      <Image
        src={LandingImage}
        alt="LandingImage"
        className="min-w-full"
      />
    </div>
  );
}
