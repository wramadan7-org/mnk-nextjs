type Props = {
  isCentered?: boolean;
  title: string;
};

export default function TitleComponent({ isCentered = false, title }: Props) {
  return (
    <div
      className={`flex flex-col gap-3 w-full ${
        isCentered ? "items-center justify-center" : "items-start justify-start"
      }`}
    >
      <p
        className={`text-black text-4xl font-bold text-wrap ${
          isCentered ? "text-center" : "text-start"
        }`}
      >
        {title.split("\n")?.map((line, index) => (
          <span key={index}>
            {line}

            <br />
          </span>
        ))}
      </p>

      <div className="h-1.5 w-1/5 max-w-20 bg-secondary"></div>
    </div>
  );
}
