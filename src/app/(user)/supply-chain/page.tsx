import HeroComponent from "@/components/HeroComponent";
import Image from "next/image";
import Crain from "@/assets/images/crain.jpg";
import TitleComponent from "@/components/TitleComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MNK - Supply Chain",
  description:
    "Explore the supply chain of PT. Multi Nitrotama Kimia (MNK), Indonesia’s leading provider of mining explosives and blasting services.",
};

export default function SupplyChain() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-x-hidden">
      <HeroComponent />

      <section
        id="bulkExplosives"
        className="container py-7 px-4 sm:px-7 lg:px-10 flex flex-col lg:flex-row flex-wrap w-full gap-10 mt-10"
      >
        <div className="flex flex-[1_1_0%]">
          <Image
            src={Crain}
            className="max-h-[500px] rounded shadow"
            width={800}
            height={300}
            alt="Bulk Explosive"
            loading="lazy"
          />
        </div>

        <div className="flex flex-[1_1_0%] flex-col gap-3">
          <TitleComponent title="Bulk Explosive" />

          <pre className="text-tertiary text-sm sm:text-base text-wrap space-y-3">
            <h1 className="font-bold text-xl text-black underline italic">
              Ammonium Nitrate
            </h1>

            <p>
              Basic materials of AN are Ammonia and Nitric Acid (NA) which react
              in a pipe reactor producing Ammonium Nitrate with concentration of
              ± 85%.
            </p>

            <p className="font-bold">Specification:</p>

            <ul className="list-disc ml-10">
              <li>{`Water content maximum 0.25 %`}</li>
              <li>{`Oil absorption > 6%`}</li>
              <li>{`Bulk Density 0.73 0.78 Kg /dm3`}</li>
              <li>{`Nitrogen content minimum 34.5 %.`}</li>
              <li>{`Purity 99.55% (weigh).`}</li>
            </ul>
          </pre>

          <pre className="text-tertiary text-sm sm:text-base text-wrap space-y-3">
            <h1 className="font-bold text-xl text-black underline italic">
              Ammonium Nitrate Fuel Oil (ANFO)
            </h1>

            <p>
              Ammonium Nitrate Fuel Oil (ANFO) is one of many explosive raw
              material types in which its biggest components consist of AN mixed
              with fuel oil.
            </p>

            <p>
              Based on the research studies, it is found that the experts in
              mining tend to use ANFO for its safe and economic characteristics.
            </p>

            <p>
              Compared to other explosive raw materials, ANFO is categorized as
              dry-based and highly safe explosion both in underground explosion
              and in an open explosion with 1 to 12 inches or more diameters.
            </p>
          </pre>

          <pre className="text-tertiary text-sm sm:text-base text-wrap space-y-3">
            <h1 className="font-bold text-xl text-black underline italic">
              Emulsion
            </h1>

            <p>
              Emulsion is an explosive material made from liquid phase oxide
              mixed with oil phase (diesel or diesel oil) added by emulsifier to
              stabilize the emulsion phase. Glass micro-balloons or chemical
              gassing agent is used for spreading agent in order to create a hot
              spot atmosphere because the granular oxidizing is very small,
              which is about 0.001 mm.
            </p>

            <p>
              Currently, the using of explosive emulsion is going wider in
              various mineral mining, either in cartridge or in a Mobile Mixer
              Unit (MMU) truck to the explosion hole.
            </p>

            <p>
              MNK has multiple on-site emulsion plants with several customers in
              Kalimantan and Sulawesi and we are continuously expanding every
              year.
            </p>
          </pre>
        </div>
      </section>

      <section
        id="explosiveTransportLicense"
        className="container py-7 px-4 sm:px-7 lg:px-10 flex flex-col lg:flex-row-reverse flex-wrap w-full gap-10 mt-10"
      >
        <div className="flex flex-[1_1_0%]">
          <Image
            src={Crain}
            className="max-h-[500px] rounded shadow"
            width={800}
            height={300}
            alt="Explosives Transport & Licensing"
            loading="lazy"
          />
        </div>

        <div className="flex flex-[1_1_0%] flex-col gap-3">
          <TitleComponent title="Explosives Transport & Licensing" />

          <pre className="text-tertiary text-sm sm:text-base text-wrap space-y-3">
            In Indonesia, commercial explosive is a highly controlled and
            regulated industry. There are restrictions / limitations and
            regulations that control import, storage, production, transporting,
            purchase, mixing and usage of explosives. As an integrated explosive
            provide, MNK is the only company with a full range of licenses to
            operate commercial mining explosives business, that makes us a
            unique company that can offer end-to-end blasting solutions. We work
            with several licensed explosive carriers throughout Indonesia, as a
            result MNK have blanket coverage of Indonesia for explosive
            distribution.
          </pre>
        </div>
      </section>

      <section
        id="explosiveAccessories"
        className="container py-7 px-4 sm:px-7 lg:px-10 flex flex-col lg:flex-row flex-wrap w-full gap-10 mt-10"
      >
        <div className="flex flex-[1_1_0%]">
          <Image
            src={Crain}
            className="max-h-[500px] rounded shadow"
            width={800}
            height={300}
            alt="Explosive Accessories"
            loading="lazy"
          />
        </div>

        <div className="flex flex-[1_1_0%] flex-col gap-3">
          <TitleComponent title="Explosive Accessories" />

          <pre className="text-tertiary text-sm sm:text-base text-wrap space-y-3">
            <p>
              MNK can provide wide range initiation systems to customers from
              various brands. We currently mainly import our explosive
              initiation systems and MNK planned to establish a detonator
              assembly plant in Handil, East Kalimantan. In future, we might
              plan to establish our booster assembly and cartridge emulsion
              plant in Handil.
            </p>

            <p>
              There are 2 types of detonator that we mainly supply to market
              i.e. electric detonators and non-electric detonators. We could
              also provide electronics detonators from various principals. For
              detonators MNK provide both surface and in-hole detonators with
              various lengths and selections of delay intervals according to our
              customers’ needs. MNK import boosters and cartridge emulsion
              mainly from China and India. We provide various sizes and
              diameters, mainly 200gr and 400gr of boosters and 32mm x 200mm and
              50mm x 200mm cartridge emulsion.
            </p>

            <ul className="list-decimal ml-10">
              <li>{`Detonators; is a device used to trigger an explosive device. Detonators can be chemically, mechanically, or electrically initiated, the latter two being the most common. Many detonators’ primary explosive is a material called ASA compound. This compound is formed from lead azide, lead styphnate and aluminium and is pressed into place above the base charge, usually TNT or tetryl in military detonators and PETN in commercial detonators.`}</li>
              <li>{`High Explosive; Cap sensitive product, such as Cartridge / Dynamite, Booster, Power Split and Detonating Cord; all high explosives stored in one magazine.`}</li>
            </ul>

            <ul className="list-disc ml-16">
              <li>
                Booster; is high explosives compounds such as TNT
                (trinitrotoluol) and PETN (pentaerythritol tetranitrate), high
                detonation that use technology of casting and pess effective so
                that once in execution of detonation use electric detonators or
                non electric detonator. And can be pledged upon which detonator
                of mining of underground, open mining and also for construction
                work.
              </li>
              <li>
                Cartridge; is high explosives, there is a very wide range of
                dynamite compositions based on: nitroglycerine, nitro glycol,
                nitrocellulose, oxidizing salts, fuel ingredients. The liquid
                portion of all dynamites consists of a blend of nitroglycerine
                and nitro glycol, known collectively as ‘NG’. Nitroglycerine is
                usually the minor % of the two as nitro glycol has a lower
                freezing point (-22oC), better heat stability and is cheaper. NG
                content varies from 5-90%.
              </li>
            </ul>

            <h1 className="font-bold text-xl text-black underline italic">
              HANDIL NON ELECTRIC DETONATOR ASSEMBLY
            </h1>

            <p>
              MNK is currently developing a non-electric detonator assembly
              plant in our Integrated Explosives Center in Handil, East
              Kalimantan. Initial production capacity is targeted at 2.3 million
              pieces of accessories per annum
            </p>
          </pre>
        </div>
      </section>
    </main>
  );
}
