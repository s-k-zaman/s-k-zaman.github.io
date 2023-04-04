function TitleWithBar({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-[99px] justify-between leading-[32px] mb-[34px]">
        <h2 className="text-secondary-text font-medium text-2xl ">{title}</h2>
        <div className="border w-auto grow h-0 mt-auto"></div>
      </div>
      {children}
    </div>
  );
}

export default TitleWithBar;
