"use client";
import { dataAboutUs } from "@/libs/dataAboutUs";
import { DialogProps } from "@/types/dialogType";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

type DialogBodProps = {
  data?: (typeof dataAboutUs.boardOfDirectors)[0];
};

export default function DialogBodComponent({
  isOpen,
  onClose,
  data,
}: DialogProps & DialogBodProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth={!fullScreen}
      maxWidth="md"
      scroll="paper"
      aria-labelledby="dialog-bod"
      aria-describedby="dialog-personal-bod"
    >
      <DialogContent>
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-12 md:col-span-4 flex items-start justify-center">
            <div className="border-8 border-gray-300 rounded-md w-72 h-[25rem] relative shadow">
              <div className="absolute -right-5 top-1/2 transform -translate-y-1/2">
                <Image
                  src={data?.image || "/no-image.png"}
                  width={250}
                  height={250}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/no-image.png";
                  }}
                  alt={data?.name ?? "BOD Image"}
                  className={`w-64 h-[20rem] ${
                    !data?.image ? "object-contain bg-gray-100" : "object-cover"
                  } object-center rounded-md shadow-lg/40`}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <h1 className="text-2xl/tight font-extrabold text-primary mb-2">
              {data?.name}
            </h1>

            <h2 className="text-lg/tight font-semibold text-secondary mb-4">
              {data?.title}
            </h2>

            <pre className="text-wrap text-sm break-words text-tertiary">
              {data?.description}
            </pre>
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="text" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
