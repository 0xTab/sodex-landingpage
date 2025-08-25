import Image from "next/image";

interface LogoProps {
    className?: string;
    size?: "small" | "medium";
}

const Logo = ({ className, size = "small" }: LogoProps) => {
    const getSize = (size: LogoProps["size"]): {width: number, height: number} => {
        switch (size) {
            case "small":
                return {width: 117.76, height: 32};
            case "medium":
                return {width: 176.64, height: 48};
            default:
                return {width: 117.76, height: 32};
        }
    }

    const { width, height } = getSize(size);

  return (
    <div className={`flex items-center ${className}`}>
        <Image src="/logo/logo.webp" alt="Logo" width={width} height={height} />
    </div>
  );
};

export default Logo;
