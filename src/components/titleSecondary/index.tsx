import { cn } from "../../lib/tailwindCss";

function TitleSecondary({
  title,
  largeContent = false,
}: {
  title: string;
  largeContent?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto",
        largeContent ? "max-w-[1210px]" : "max-w-[740px]",
        "flex justify-center items-center leading-[32px] mb-[20px] lg:mb-[34px]",
      )}
    >
      <h2 className="text-secondary-text font-medium text-xl lg:text-2xl ">
        {title}
      </h2>
    </div>
  );
}

export default TitleSecondary;
