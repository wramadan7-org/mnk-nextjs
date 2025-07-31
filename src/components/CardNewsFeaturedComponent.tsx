import Image from "next/image";
import News1 from "@/assets/images/news1.jpg";
import { Button } from "@mui/material";

export default function CardNewsFeaturedComponent() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 rounded-md overflow-hidden">
      <div className="flex flex-1/2 w-full lg:w-1/2">
        <Image
          src={News1}
          className="object-cover object-center max-h-72"
          alt="News1"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1/2 w-full lg:w-1/2 gap-3 p-3">
        <div className="flex flex-col flex-1/2 gap-2 text-tertiary">
          <h3 className="text-lg">25 Agustus 2015</h3>
          <h2 className="font-bold text-black text-2xl">
            OKAS restrukturisasi utang US$ 12,7 juta
          </h2>
          <pre className="text-xs lg:text-sm text-tertiary line-clamp-[7]">
            <p className="text-wrap">
              JAKARTA. PT Ancora Indonesia Resources Tbk (OKAS)
              merestrukturisasi pinjaman investasi senilai US$ 12,7 juta yang
              diperoleh dari Bank CIMB Niaga. Restrukturisasi utang itu meliputi
              perubahan jadwal pembayaran atas pinjaman dan penurunan tingkat
              suku bunga.
            </p>

            <p className="text-wrap">
              Charles D. Gobel, Direktur Utama OKAS mengatakan, perseroan dan
              kreditur sepakat memperpanjang tenor pinjaman selama dua tahun.
              Sehingga, jatuh tempo pembayaran yang seharusnya pada Januari 2019
              akan diperpanjang sampai dengan 2021.
            </p>

            <p className="text-wrap">
              Selain itu, pinjaman itu juga direstrukturisasi dengan menurunkan
              suku bunga yang tadinya 6% per tahun menjadi 5% per tahun setelah
              memenuhi covenant dan menunjukkan pembayaran debt service yang
              tepat waktu selama tiba bulan berturut-turut.
            </p>

            <p className="text-wrap">
              Suku bunga tersebut dapat meningkat kembali menjadi 10% pada tahun
              2019 jika harga komoditas terutama batubara dan minyak bumi
              kembali meningkat. &quot;Besarnya cicilan bunga maupun pokok
              pinjaman menjadi lebih ringan,&quot; ujarnya dalam keterangan
              resmi, Selasa (3/5).
            </p>

            <p className="text-wrap">
              Sampai dengan Kuartal I 2016, OKAS memiliki pinjaman jangka
              panjang yang akan jatuh tempo dalam waktu satu tahun sebesar US$
              74,29 juta. Sementara total liabilitas perseroan mencapai US$
              169,9 juta, dengan ekuitas sebesar US$ 18,8 juta.
            </p>

            <p className="text-wrap">
              Pada periode itu, penjualan OKAS masih menurun menjadi US$ 29,5
              juta dibandingkan periode yang sama tahun lalu sebesar US$ 37,49
              juta. Rugi bersih perseroan juga masih meningkat dari US$ 639.068
              menjadi US$ 1,46 juta.
            </p>
          </pre>
        </div>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          className="mt-auto w-fit"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
