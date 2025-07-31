import Image from "next/image";
import News2 from "@/assets/images/news2.jpg";
// import News3 from "@/assets/images/news3.jpg";
// import News4 from "@/assets/images/news4.jpg";
// import News5 from "@/assets/images/news5.jpg";
// import News6 from "@/assets/images/news6.jpg";
// import News7 from "@/assets/images/news7.jpg";
// import News8 from "@/assets/images/news8.jpg";
// import { Button } from "@mui/material";

export default function CardNewsComponent() {
  return (
    <button
      type="button"
      className="flex flex-row lg:flex-col gap-3 bg-white rounded-md shadow overflow-hidden cursor-pointer transform-view hover:scale-105 transition-transform duration-300"
    >
      <div className="flex flex-1/5 lg:flex-1/2 h-full w-full items-center justify-center">
        <Image
          src={News2}
          className="object-cover object-center h-full lg:max-h-72 w-full"
          alt="News2"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-4/5 lg:flex-1/2 w-full items-start justify-start text-left lg:justify-start p-3">
        <h3 className="text-sm lg:text-lg text-tertiary font-semibold">
          25 Agustus 2015
        </h3>
        <h2 className="font-bold text-black text-xl lg:text-2xl line-clamp-1 lg:line-clamp-2">
          OKAS restrukturisasi utang US$ 12,7 juta
        </h2>
        <div className="hidden lg:block mt-3">
          <p className="text-wrap line-clamp-3 text-tertiary">
            JAKARTA. PT Ancora Indonesia Resources Tbk (OKAS) merestrukturisasi
            pinjaman investasi senilai US$ 12,7 juta yang diperoleh dari Bank
            CIMB Niaga. Restrukturisasi utang itu meliputi perubahan jadwal
            pembayaran atas pinjaman dan penurunan tingkat suku bunga.
          </p>
        </div>
      </div>
    </button>
  );
}
