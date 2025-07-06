import HeroComponent from "@/components/HeroComponent";
import TitleComponent from "@/components/TitleComponent";
import HomeSection1 from "@/assets/images/home-section-01.jpg";
import HomeSection2 from "@/assets/images/home-section-02.jpg";
import Check from "@/assets/icons/check.svg";
import Logo from "@/assets/icons/logo.svg";
import MNKPRILL from "@/assets/images/mnkprill.png";
import MNKANFO from "@/assets/images/mnkanfo.png";
import MNKDET from "@/assets/images/mnkdet.png";
import MNKPRIMER from "@/assets/images/mnkprimer.png";
import MNKMAX from "@/assets/images/mnkmax.png";
import NEWS1 from "@/assets/images/news-1.jpg";
import NEWS2 from "@/assets/images/news-2.jpg";
import NEWS3 from "@/assets/images/news-3.jpg";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import CardNewsComponent from "@/components/CardNewsComponent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-x-hidden">
      <HeroComponent />

      <section className="p-4 flex flex-col-reverse lg:flex-row flex-wrap w-full gap-10 mt-10">
        <div className="flex flex-col flex-[1_1_0%] gap-3">
          <span className="text-sm text-tertiary font-semibold">About Us</span>

          <TitleComponent title={`PT. Multi Nitrotama Kimia\n(MNK)`} />

          <pre className="text-tertiary text-sm sm:text-base text-wrap">
            PT. Multi Nitrotama Kimia (MNK) is Indonesia’s leading provider of
            mining explosives and blasting services. MNK has over 20 years of
            proven track record in producing Ammonium Nitrate (AN) and has
            recently expanded its production capacity to 150,000 tons per annum.
            MNK is the market leader in Indonesia with strong relationship with
            most of the leading players in Indonesia’s mining industries. MNK
            employs more than 500 people, with production facilities and
            operational sites throughout Indonesia, including an extensive
            supply chain network to ensure timely deliveries. MNK is committed
            to providing reliable quality delivery and service with continuous
            focus on safety, people development and upholding of MNK values.
          </pre>

          <ButtonComponent href="/learn-more" text="Learn More" />
        </div>

        <div className="flex flex-[1_1_0%] items-center justify-center">
          <Image
            src={HomeSection1}
            width={500}
            height={300}
            alt="Home Section 1"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row flex-wrap w-full gap-10 mt-44 lg:mt-10 text-tertiary">
        <div className="h-full w-full flex flex-[1_1_0%] lg:flex-1/4">
          <div className="w-full lg:w-2/3 min-w-48 h-[15rem] lg:h-[25rem] bg-primary relative">
            &nbsp;
            <div className="absolute top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:translate-x-0 -translate-y-36 lg:-translate-y-1/2 w-[15rem] h-[20rem] sm:w-[20rem] lg:w-[15rem] lg:h-[23rem] overflow-y-hidden">
              <Image
                src={HomeSection2}
                width={243}
                height={200}
                className="object-cover w-full h-full object-top lg:object-center"
                alt="Home Section 2"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-[1_1_0%] lg:flex-1/2 flex-col gap-3 px-4 lg:px-0 items-start justify-start lg:items-start lg:justify-center">
          <TitleComponent title="MNK Is A Leading And Established Mining Services Firm" />

          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2 justify-start">
              <Image
                src={Check}
                width={14}
                height={14}
                alt="Check"
                className="mt-2"
              />

              <p className="text-start text-wrap">
                MNK holds a critical and integral part of the mining value chain
                for Indonesia’s largest mining companies
              </p>
            </li>
            <li className="flex items-start gap-2 justify-start">
              <Image
                src={Check}
                width={14}
                height={14}
                alt="Check"
                className="mt-2"
              />

              <p className="text-start text-wrap">
                MNK’s reliability as a producer is unrivalled with 20+ years
                experience, proven technology and long-term feedstock supply
              </p>
            </li>
            <li className="flex items-start gap-2 justify-start">
              <Image
                src={Check}
                width={14}
                height={14}
                alt="Check"
                className="mt-2"
              />

              <p className="text-start text-wrap">
                MNK is the market leader of the Indonesian AN market, servicing
                Indonesia’s leading mining firms
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col w-full gap-10 mt-10 text-tertiary p-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <Image src={Logo} width={30} height={30} alt="MNK Logo" />

            <TitleComponent title="Our Product" />
          </div>

          <p className="text-start">
            MNK is the market leader in Indonesia with strong relationship with
            most of the leading players in Indonesia’s mining industries.
          </p>
        </div>

        <div className="flex flex-row flex-wrap lg:flex-nowrap flex-[1_1_0%] items-center justify-center">
          {[MNKPRILL, MNKANFO, MNKDET, MNKPRIMER, MNKMAX].map((item, index) => (
            <Image
              key={`product-mnk-${index}`}
              src={item}
              width={150}
              height={150}
              className={`border-r-0 ${
                index !== 4 ? "lg:border-r-2 border-gray-300" : ""
              }`}
              alt="Product"
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col w-full gap-10 mt-10 text-tertiary p-4">
        <TitleComponent title="Latest News & Event" isCentered />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <CardNewsComponent
            title={`CSR Inspiratif: PT MNK Gelar Nobar Film “Jumbo” Bersama 375 Siswa/i di
          CGV Cikampek, Jawa Barat`}
            image={NEWS1}
            dateNews="2024-05-20T18:00:00Z"
            commentCount={0}
            createdBy="Admin"
          />

          <CardNewsComponent
            title={`Ramadhan Berbagi: PT Multi Nitrotama Kimia Salurkan Sembako untuk para Jompo & Dhuafa di Wilayah Muara Kembang, Kutai Kartanegara.`}
            image={NEWS2}
            dateNews="2024-05-20T18:00:00Z"
            commentCount={2}
            createdBy="Admin"
          />

          <CardNewsComponent
            title={`PT Multi Nitrotama Kimia berbagi paket sembako ke 200 warga di wilayah Dawuan Tengah, Cikampek`}
            image={NEWS3}
            dateNews="2024-05-20T18:00:00Z"
            commentCount={5}
            createdBy="Admin"
          />
        </div>
      </section>
    </main>
  );
}
