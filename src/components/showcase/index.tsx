function Showcase({
  id,
  children,
  lowMargin,
}: {
  lowMargin?: boolean;
  id?: string;
  children: JSX.Element;
}) {
  return (
    <section
      id={id}
      className={`${
        lowMargin ? "mt-[100px]" : "mt-[200px]"
      } max-w-[740px] mx-auto text-slate-200 font-poppins`}
    >
      {children}
    </section>
  );
}

export default Showcase;
