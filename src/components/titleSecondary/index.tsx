function TitleSecondary({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center leading-[32px] mb-[20px] lg:mb-[34px]">
        <h2 className="text-secondary-text font-medium text-xl lg:text-2xl ">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export default TitleSecondary;
