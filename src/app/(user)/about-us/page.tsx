import HeroComponent from "@/components/HeroComponent";
import TitleComponent from "@/components/TitleComponent";
import BarChart from "@/assets/icons/bar-chart.svg";
import LineChart from "@/assets/icons/line-chart.svg";
import Image from "next/image";
import AboutUsSection1 from "@/assets/images/home-section-01.jpg";
import AccordionComponent from "@/components/AccordionComponent";
import { dataAboutUs } from "@/libs/dataAboutUs";

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-x-hidden">
      <HeroComponent />

      <section
        id="introduction"
        className="py-7 px-4 sm:px-7 lg:px-10 flex flex-col-reverse lg:flex-row flex-wrap w-full gap-10 lg:gap-32 mt-10"
      >
        <div className="flex flex-col flex-[1_1_40%] gap-3">
          <span className="text-sm text-tertiary font-semibold">About Us</span>

          <TitleComponent title={`PT. Multi Nitrotama Kimia\n(MNK)`} />

          <pre className="text-tertiary text-sm sm:text-base text-wrap">
            Indonesia’s leading provider of mining explosives and blasting
            services. MNK has over 20 years of proven track record in producing
            Ammonium Nitrate (AN) and has recently expanded its production
            capacity to 150,000 tons per annum. MNK is committed to providing
            reliable quality delivery and service with continuous focus on
            safety, people development and upholding of MNK values.
          </pre>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-tertiary">
            <div className="flex flex-col flex-[1_1_0%] gap-2">
              <div className="flex flex-row items-center justify-start gap-2">
                <Image src={BarChart} width={30} height={30} alt="Multiline" />
                <p className="font-bold text-lg text-black">Multiline</p>
              </div>

              <p className="text-sm">
                MNK is the market leader in Indonesia with strong relationship
                with most of the leading players in Indonesia’s mining
                industries.
              </p>
            </div>

            <div className="flex flex-col flex-[1_1_0%] gap-2">
              <div className="flex flex-row items-center justify-start gap-2">
                <Image src={LineChart} width={30} height={30} alt="Social" />
                <p className="font-bold text-lg text-black">Social</p>
              </div>

              <p className="text-sm">
                MNK employs more than 500 people, with production facilities and
                operational sites throughout Indonesia, including an extensive
                supply chain network to ensure timely deliveries.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-[1_1_0%] items-center justify-center relative">
          <div className="bg-primary w-3/4 sm:w-1/2 lg:w-4/5 h-[19rem] sm:h-[22rem] lg:h-96 ml-16 lg:ml-auto"></div>

          <div className="absolute -top-5 sm:-top-8 lg:-top-5 -right-3 sm:-right-44 lg:right-10 transform w-full lg:min-w-[337px] h-96">
            <Image
              src={AboutUsSection1}
              width={384}
              height={384}
              loading="lazy"
              className="w-1/2 min-w-[300px] lg:w-full lg:h-full"
              alt="About Us Section 1"
            />
          </div>
        </div>
      </section>

      <section
        id="vission&mission"
        className="py-7 px-4 sm:px-7 lg:px-10 flex flex-col w-full gap-10 mt-10"
      >
        <TitleComponent title="Vision & Mission" />

        <AccordionComponent data={dataAboutUs.visiMissi} />
      </section>
    </main>
  );
}
