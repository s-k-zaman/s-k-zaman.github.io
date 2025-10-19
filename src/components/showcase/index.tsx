import React from "react";
import { cn } from "../../lib/tailwindCss";

type ShowcaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  id?: string;
  largeContent?: boolean;
  lowMargin?: boolean;
  children: React.ReactNode;
};

function Showcase({
  children,
  lowMargin,
  largeContent = false,
  ...rest
}: ShowcaseProps) {
  return (
    <section
      className={cn(
        "mx-auto",
        largeContent ? "max-w-[1210px]" : "max-w-[740px]",
        "text-slate-200 font-poppins",
        `${lowMargin ? "mt-[50px] lg:mt-[100px]" : "mt-[150px] lg:mt-[200px]"}`,
        rest.className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Showcase;
