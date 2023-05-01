import { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsSend } from "react-icons/bs";
import classes from "./writeMessage.module.css";

type Props = {
  className?: string;
};

function WriteMessage({}: Props) {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const send = async (formData: any) => {
      setIsSending(true);
      try {
        const result: { status: number; text: string } = await emailjs.sendForm(
          "service_qqldcwt",
          "template_m14ffj8",
          formData,
          "TsiLurJuTzfzePRpH"
        );
        if (result.text !== "OK") {
          throw "err";
        } else {
          setIsSuccess(true);
          (e.target as HTMLFormElement).reset();
        }
      } catch (error) {
        setError(true);
        console.log("er", error);
      } finally {
        setIsSending(false);
      }
    };
    send(form.current);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`mt-10 flex flex-col gap-6 w-full p-6 xl:p-10 rounded-[10px] bg-secondary-dark text-primary font-medium font-montserrat ${classes.open_from_top}`}
    >
      <input
        required
        type="text"
        name="name"
        placeholder="Your Name*"
        className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] bg-transparent border-[1.5px] rounded border-primary placeholder:text-primary/40 focus:outline focus:outline-1 outline-primary"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Your e-mail*"
        className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] bg-transparent border-[1.5px] rounded border-primary placeholder:text-primary/40 focus:outline focus:outline-1 outline-primary"
      />
      <textarea
        required
        name="message"
        rows={7}
        placeholder="Your message*"
        className="px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] bg-transparent border-[1.5px] rounded border-primary placeholder:text-primary/40 focus:outline focus:outline-1 outline-primary resize-none"
      ></textarea>
      {!isError && isSuccess ? (
        <p className="text-green-800 font-bold">
          message received😊, I will reply soon.
        </p>
      ) : null}
      {isError && !isSuccess ? (
        <p className="text-red-800 font-bold">
          error occurred 😢, try again later please.🥺
        </p>
      ) : null}
      <button
        className="mx-auto flex items-center gap-4 px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] rounded-[10px] bg-primary text-secondary-dark hover:text-secondary-text shadow-lg active:shadow-sm active:scale-95 transition-[width] ease-in duration-700 disabled:cursor-wait"
        type="submit"
        disabled={isSending}
      >
        {isSending ? (
          <span className="animate-pulse text-secondary-text">
            <BsSend />
          </span>
        ) : (
          <>
            send your message <BsSend />
          </>
        )}
      </button>
    </form>
  );
}

export default WriteMessage;
