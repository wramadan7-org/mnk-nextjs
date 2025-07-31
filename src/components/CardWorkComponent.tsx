"use client";
import { formatDateByUserTimezone } from "@/utils/formatDate";
import Image, { StaticImageData } from "next/image";
import Comment from "@/assets/icons/comment.svg";
import Person from "@/assets/icons/person.svg";

type Props = {
  dateNews: string;
  title: string;
  image: string | StaticImageData;
  commentCount: number;
  createdBy: string;
};

export default function CardWorkComponent({
  title,
  image,
  dateNews,
  commentCount,
  createdBy,
}: Props) {
  return (
    <div
      role="button"
      aria-label="News 1"
      className="rounded overflow-hidden flex flex-col relative hover:cursor-pointer group min-h-72"
    >
      <div className="hidden sm:flex absolute top-0 left-5 bg-secondary p-3 rounded transform transition-transform duration-300 group-hover:scale-x-[-1] flex-col">
        <span className="text-white text-sm font-semibold transform group-hover:scale-x-[-1] inline-block text-center">
          {formatDateByUserTimezone(dateNews, "D")}
        </span>
        <span className="text-white text-sm font-semibold transform group-hover:scale-x-[-1] inline-block text-center">
          {formatDateByUserTimezone(dateNews, "MMM")}
        </span>
      </div>

      <Image
        src={image}
        width={1024}
        height={1024}
        alt="News 1"
        loading="lazy"
        className="object-contain sm:object-cover h-full w-full sm:object-center"
      />

      <div className="flex flex-col relative sm:absolute sm:bottom-5 sm:left-0 bg-white rounded p-3 text-tertiary sm:mx-5 gap-3">
        <h1 className="font-bold text-sm sm:text-base line-clamp-none sm:line-clamp-2 lg:line-clamp-4 text-black group-hover:text-secondary">
          {title}
        </h1>

        <div className="flex flex-row gap-3 items-center justify-start flex-nowrap">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Image src={Comment} width={12} height={12} alt="Comment" />

            <div className="flex flex-row flex-nowrap gap-1 items-center justify-center">
              <p className="text-xs">{commentCount}</p>

              <p className="text-xs">Comments</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-center">
            <Image src={Person} width={12} height={12} alt="Person" />

            <p className="text-xs capitalize">{createdBy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
