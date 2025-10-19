import { cn } from "../../lib/tailwindCss";

function TitleWithBar({
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
        "flex flex-row gap-[10px] lg:gap-[99px] justify-between leading-[32px] mb-[20px] lg:mb-[34px]",
      )}
    >
      <h2 className="text-secondary-text font-medium text-xl lg:text-2xl ">
        {title}
      </h2>
      <div className="border w-auto grow h-0 mt-auto"></div>
    </div>
  );
}

export default TitleWithBar;
