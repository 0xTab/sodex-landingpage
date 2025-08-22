import localFont from "next/font/local";

const latoRegular = localFont({
  src: "../../public/fonts/Lato-Regular.ttf",
  variable: "--font-lato-regular",
  display: "swap",
});

const latoBold = localFont({
  src: "../../public/fonts/Lato-Bold.ttf",
  variable: "--font-lato-bold",
  display: "swap",
});

const interRegular = localFont({
  src: "../../public/fonts/Inter-Regular.otf",
  variable: "--font-inter-regular",
  display: "swap",
});

const interBold = localFont({
  src: "../../public/fonts/Inter-Bold.otf",
  variable: "--font-inter-bold",
  display: "swap",
});

export { latoRegular, latoBold, interRegular, interBold };