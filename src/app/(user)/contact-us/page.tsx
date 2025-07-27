import MapComponent from "@/components/MapComponent";
import TitleComponent from "@/components/TitleComponent";
import Link from "next/link";
import FacebokOrange from "@/assets/icons/facebook-orange.svg";
import TwitterOrange from "@/assets/icons/twitter-orange.svg";
import WhatsappOrange from "@/assets/icons/whatsapp-orange.svg";
import Image from "next/image";
import { Metadata } from "next";
import FormContactUsComponent from "@/components/FormContactUsComponent";

const containerStyle = {
  width: "100%",
  height: "40vh",
};

const center = {
  lat: -6.225078681443073,
  lng: 106.80849430033473,
};

export const metadata: Metadata = {
  title: "MNK - Contact Us",
  description:
    "Get in touch with PT. Multi Nitrotama Kimia (MNK) for inquiries, support, or feedback. We are here to assist you.",
};

export default function ContactUs() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-x-hidden">
      <section
        id="map"
        className="h-[40vh] w-full flex items-center justify-center"
      >
        <MapComponent center={center} containerStyle={containerStyle} />
      </section>

      <section
        id="contactInfo"
        className="container py-7 px-4 sm:px-7 lg:px-10 flex flex-col lg:flex-row flex-wrap w-full gap-10 mt-10"
      >
        <div className="flex flex-[1_1_0%] flex-col gap-3">
          <TitleComponent title="Get in Touch" />

          <p className="text-tertiary text-sm sm:text-base">
            We&apos;d love to hear from you! Whether you have a question about
            our services, need assistance, or just want to talk, our team is
            ready to help.
          </p>

          <div className="flex flex-row items-center justify-start gap-3 mt-3">
            <Link
              href={"https://wa.me/+6281933195630"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={FacebokOrange}
                width={10}
                height={10}
                alt={`facebook`}
              />
            </Link>

            <Link
              href={"https://wa.me/+6281933195630"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={TwitterOrange}
                width={18}
                height={18}
                alt={`twitter`}
              />
            </Link>

            <Link
              href={"https://wa.me/+6281933195630"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={WhatsappOrange}
                width={15}
                height={15}
                alt={`whatsapp`}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-[1_1_0%]">
          <FormContactUsComponent />
        </div>
      </section>
    </main>
  );
}
