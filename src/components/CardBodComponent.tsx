"use client";
import { dataAboutUs } from "@/libs/dataAboutUs";
import Image from "next/image";
import Link from "next/link";
import FacebokOrange from "@/assets/icons/facebook-orange.svg";
import TwitterOrange from "@/assets/icons/twitter-orange.svg";
import WhatsappOrange from "@/assets/icons/whatsapp-orange.svg";
import { useState } from "react";
import DialogBodComponent from "./DialogBodComponent";

export default function CardBodComponent(
  item: (typeof dataAboutUs.boardOfDirectors)[0]
) {
  const [isOpenDialogState, setIsOpenDialogState] = useState(false);

  const handleCloseDialog = () => {
    setIsOpenDialogState(false);
  };

  const handleOpenDialog = () => {
    setIsOpenDialogState(true);
  };

  return (
    <>
      <div
        key={`${item?.name}`}
        className="rounded-md overflow-hidden w-full h-[40rem] max-w-96 lg:max-w-full lg:h-[38rem] bg-gray-500 relative group"
      >
        <Image
          src={item?.image}
          width={380}
          height={380}
          className="w-full h-full object-cover object-center duration-500 ease-in-out group-hover:scale-100 scale-105"
          alt={item?.name}
        />

        <div className="absolute bottom-0 left-0 w-full h-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out opacity-70 z-20"></div>

        <button
          type="button"
          onClick={handleOpenDialog}
          className="absolute text-left bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-md w-11/12 h-fit z-40 text-tertiary flex flex-col p-5 gap-1 group/card hover:cursor-pointer"
        >
          <h2 className="text-base font-bold uppercase">{item?.title}</h2>

          <h1 className="text-xl font-extrabold uppercase text-black group-hover/card:text-secondary">
            {item?.name}
          </h1>

          <p className="text-sm line-clamp-4">{item?.description}</p>

          <div className="flex flex-row items-center justify-start gap-3 mt-3">
            <span onClick={(e) => e.stopPropagation()}>
              <Link
                href={item?.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={FacebokOrange}
                  width={10}
                  height={10}
                  alt={`${item?.name}-facebook`}
                />
              </Link>
            </span>

            <span onClick={(e) => e.stopPropagation()}>
              <Link
                href={item?.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TwitterOrange}
                  width={18}
                  height={18}
                  alt={`${item?.name}-twitter`}
                />
              </Link>
            </span>

            <span onClick={(e) => e.stopPropagation()}>
              <Link
                href={item?.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={WhatsappOrange}
                  width={15}
                  height={15}
                  alt={`${item?.name}-whatsapp`}
                />
              </Link>
            </span>
          </div>
        </button>
      </div>

      {isOpenDialogState && (
        <DialogBodComponent
          isOpen={isOpenDialogState}
          onClose={handleCloseDialog}
          data={item}
        />
      )}
    </>
  );
}
