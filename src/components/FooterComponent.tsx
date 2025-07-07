import Image from "next/image";
import ContactNumber from "@/assets/icons/phone.svg";
import EmailAddress from "@/assets/icons/email.svg";
import Facebook from "@/assets/icons/facebook-white.svg";
import Twitter from "@/assets/icons/twitter-white.svg";
import Whatsapp from "@/assets/icons/whatsapp-white.svg";

export default function FooterComponent() {
  return (
    <footer className="bg-primary w-full h-fit py-7 px-4 sm:px-7 lg:px-10 flex flex-[1_1_0%] flex-col gap-8">
      <div className="flex flex-[1_1_0%] flex-wrap flex-row justify-start sm:justify-between gap-8">
        <div className="flex flex-col gap-3 w-full md:lg-max-w-xs lg:max-w-3xs">
          <h2 className="text-secondary">Head Office</h2>

          <pre className="text-wrap text-sm">
            Equity Tower 41st Floor Suite A Sudirman Central Business Disctrict
            (SCBD)
            <br />
            Jl. Jend. Sudirman Kav. 52-53 Lot 9 Jakarta 12190
            <br />
            Telp : (+62-21) 2903 5022
            <br />
            Fax : (+62-21) 2903 5021
          </pre>
        </div>

        <div className="flex flex-col gap-3 w-full md:lg-max-w-xs lg:max-w-3xs">
          <h2 className="text-secondary">Plan Site</h2>

          <pre className="text-wrap text-sm">
            Kawasan Industri Kujang Cikampek
            <br />
            Jl. Jend. A. Yani, Dawuan Cikampek, Jawa Barat 41373
            <br />
            Telp : (+62-264) 313700
            <br />
            Fax : (+62-264) 313389
          </pre>
        </div>

        <div className="flex flex-col gap-3 w-full md:lg-max-w-xs lg:max-w-3xs">
          <h2 className="text-secondary">Operational Office</h2>

          <pre className="text-wrap text-sm">
            Jl. Kol. Syarifoedin Yoes No. 69 Balikpapan Kalimantan Timur 76115
            <br />
            Telp : (+62-542) 8520 519, (+62-542) 8520 520
            <br />
            Fax : (+62-542) 8520 521
          </pre>
        </div>

        <div className="flex flex-col gap-3 w-full md:lg-max-w-xs lg:max-w-3xs">
          <h2 className="text-secondary">Pusat Teknologi Terpadu</h2>

          <pre className="text-wrap text-sm">
            Jln. Husni Thamrin RT.08
            <br />
            Kel. Muara Kembang Dalam
            <br />
            Kec. Muara Jawa
            <br />
            Kab. Kutai Kartanegara 75261
            <br />
            Telp. 0541 691571
          </pre>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-[1_1_0%] flex-wrap justify-start sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap flex-[1_1_0%] gap-4 items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-2 flex-nowrap">
            <Image
              width={15}
              height={15}
              src={ContactNumber}
              alt="Contact Number"
            />

            <p className="text-white text-sm">(+62-21) 2903 5022</p>
          </div>

          <div className="flex flex-row items-center justify-start gap-2 flex-nowrap">
            <Image
              width={15}
              height={15}
              src={EmailAddress}
              alt="Email Address"
            />

            <p className="text-white text-sm">company.info@mnk.co.id</p>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap gap-4 items-center justify-start">
          <button
            className="cursor-pointer w-fit h-fit items-center justify-center"
            type="button"
            aria-label="Facebook"
          >
            <Image width={7} height={7} src={Facebook} alt="Facebook Account" />
          </button>

          <button
            className="cursor-pointer w-fit h-fit items-center justify-center"
            type="button"
            aria-label="Twitter"
          >
            <Image width={12} height={12} src={Twitter} alt="Twitter Account" />
          </button>

          <button
            className="cursor-pointer w-fit h-fit items-center justify-center"
            type="button"
            aria-label="Whatsapp"
          >
            <Image
              width={12}
              height={12}
              src={Whatsapp}
              alt="Whatsapp Number"
            />
          </button>
        </div>
      </div>

      <p className="text-white/50 text-start text-sm sm:text-center w-full">
        Copyright © 2024 MNK All rights reserved.
      </p>
    </footer>
  );
}
