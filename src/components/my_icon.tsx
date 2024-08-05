import Image from "next/image";

export default function MyIcon({
  src,
  alt,
  isActive,
  className,
  height,
  width,
}: {
  src: string;
  alt: string;
  isActive?: boolean;
  className?: string;
  height?: number;
  width?: number;
}) {
  return (
    <div className={className}>
      <div className="h-[36px] w-[36px] relative">
        <Image
          src={src}
          alt={alt}
          width={height ?? 24}
          height={width ?? 24}
          color="black"
          className="mr-[12px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        {isActive && (
          <div className="h-[6px] w-[6px] rounded-full bg-[#EB5757] absolute right-[2px] top-[6px]"></div>
        )}
      </div>
    </div>
  );
}
