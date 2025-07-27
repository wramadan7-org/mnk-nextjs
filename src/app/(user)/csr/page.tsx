import HeroComponent from "@/components/HeroComponent";
import Crain from "@/assets/images/crain.jpg";
import Image from "next/image";
import TitleComponent from "@/components/TitleComponent";
import AccordionComponent from "@/components/AccordionComponent";
import { dataAboutUs } from "@/libs/dataAboutUs";
import SwiperCsrComponent from "@/components/SwiperCsrComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MNK - CSR",
  description:
    "MNK, which has its operation in Cikampek, periodically undertakes numerous social activities, aimed at assisting local communities.",
};

export default function Csr() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-x-hidden">
      <HeroComponent />

      <section
        id="introduction"
        className="container py-7 px-4 sm:px-7 lg:px-10 flex flex-col lg:flex-row flex-wrap w-full gap-10 mt-10"
      >
        <h1 className="text-center text-3xl text-black font-bold">
          MNK, which has its operation in Cikampek, periodically undertakes
          numerous social activities, aimed at assisting local communities.
        </h1>

        <div className="flex flex-col-reverse md:flex-row gap-5 w-full text-tertiary">
          <div className="flex flex-[1_1_50%] gap-3 flex-col">
            <div className="flex flex-col">
              <div className="flex flex-row w-full gap-2 items-center justify-between">
                <p className="text-lg text-black font-bold">
                  Community development programs
                </p>

                <div className="w-3 h-1 bg-secondary"></div>
              </div>

              <ul className="list-disc ml-5">
                <li>
                  MNK’s involvement to improve entrepreneurial skills of
                  communities in the vicinity of MNK operation.
                </li>
                <li>
                  Technical trainings for the betterment of surrounding
                  communities.
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row w-full gap-2 items-center justify-between">
                <p className="text-lg text-black font-bold">
                  Relation development programs with the public
                </p>

                <div className="w-3 h-1 bg-secondary"></div>
              </div>

              <ul className="list-disc ml-5">
                <li>
                  Partnership with regional government to raise programs
                  efficiency and effectiveness oriented to enhance community’s
                  standard of living.
                </li>
                <li>
                  Communities’ quality of life improvement, especially in
                  education and sports for students as well as school children
                  and the environment.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-[1_1_50%] justify-center">
            <Image
              src={Crain}
              width={450}
              height={450}
              alt="Crain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="csr-programs"
        className="container py-7 px-4 sm:px-7 lg:px-10 flex flex-col flex-wrap w-full gap-10 mt-10"
      >
        <h1 className="text-center text-3xl text-black font-bold">
          To realize this program, In 2019, MNK has constantly and continuously
          organized CSR programs, such as:
        </h1>

        <table className="w-full border-collapse table-fixed sm:table-auto">
          <thead className="text-white bg-primary">
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">
                Kegiatan - <span className="italic">Activity</span>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Lokasi - <span className="italic">Location</span>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Penerima - <span className="italic">Recipients</span>
              </th>
            </tr>
          </thead>

          <tbody className="text-tertiary">
            <tr>
              <td className="text-center border border-gray-300 p-4">1</td>
              <td className="border border-gray-300 p-4">
                Donation for the construction or improvement of public
                facilities such as road repair, bridge construction,
                construction of mosques/places of worship, orphanage and
                donation for religious festivities.
              </td>
              <td className="border border-gray-300 p-4">Cikampek</td>
              <td className="border border-gray-300 p-4">
                Communities surrounding the MNK site, Community organizations,
                and at certain institution.
              </td>
            </tr>

            <tr>
              <td className="text-center border border-gray-300 p-4">2</td>
              <td className="border border-gray-300 p-4">
                Participated in Idul Adha religious festivity by distributing
                livestocks for Qurban to the communities around MNK site.
              </td>
              <td className="border border-gray-300 p-4">
                Cikampek, Muara Jawa Kaltim, Timika
              </td>
              <td className="border border-gray-300 p-4">
                Communities in the vicinity of MNK site.
              </td>
            </tr>

            <tr>
              <td className="text-center border border-gray-300 p-4">3</td>
              <td className="border border-gray-300 p-4">
                Donation of school supplies and prayer equipment to orphanage
                surrounding the MNK site.
              </td>
              <td className="border border-gray-300 p-4">Cikampek</td>
              <td className="border border-gray-300 p-4">
                Orphanage in the vicinity of MNK site.
              </td>
            </tr>

            <tr>
              <td className="text-center border border-gray-300 p-4">4</td>
              <td className="border border-gray-300 p-4">
                Donation of sports facilities and infrastructure each site
                within the Company, as well as outsite the Company.
              </td>
              <td className="border border-gray-300 p-4">
                Jakarta, Cikampek, Balikpapan & Handil (Kalimantan Timur)
              </td>
              <td className="border border-gray-300 p-4">
                Employees at the site and communities surrounding the MNK site.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-tertiary">
          CSR programs for employees appear to have a positive impact in terms
          of employees’ performance and productivity. While the CSR program that
          are oriented to communities around the MNK has raised public awareness
          on health and education that ultimately passed on a positive image for
          MNK in the eyes of the community.
        </p>
      </section>

      <section
        id="slider-csr"
        className="container h-72 md:h-80 lg:h-96 xl:h-[27rem] w-full"
      >
        <SwiperCsrComponent />
      </section>

      <section
        id="faq"
        className="container flex flex-col w-full h-full gap-10 mt-10 text-tertiary py-7 px-4 sm:px-7 lg:px-10"
      >
        <TitleComponent
          title="MNK Social Responsibility Related to 
Environment Problems"
          isCentered
        />

        <AccordionComponent
          data={dataAboutUs?.environmentProblems}
          expanded="expand"
        />
      </section>
    </main>
  );
}
