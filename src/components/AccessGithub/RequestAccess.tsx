import { cn } from "../../lib/tailwindCss";
import { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsSend } from "react-icons/bs";

type Props = {
  github: string;
  privateGithubAccessText?: string;
};

export function RequestAccess({ github, privateGithubAccessText = "" }: Props) {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  if (!github) return null;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const send = async (form: any) => {
      setIsSending(true);
      setError(false);
      setIsSuccess(false);

      const formData = new FormData(form.current);
      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const message = formData.get("message")?.toString() || "";

      const templateParams = {
        name: `GitHub user/email: ${name}`,
        email: `${email.length ? email + "," : "N/A."} Wants private repo access`,
        message: `📩 New GitHub repository access request from portfolio site:\n\nWants to access: ${github}\n\nAccess Display Text(in website): ${privateGithubAccessText}\n\nReason: ${message}`,
      };
      try {
        const result: { status: number; text: string } = await emailjs.send(
          "service_qqldcwt",
          "template_m14ffj8",
          templateParams,
          "TsiLurJuTzfzePRpH",
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
    send(form);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={cn(
        "w-full",
        "flex flex-col gap-6",
        "px-4 xl:px-8 py-4 xl:py-5 pb-2 xl:pb-3",
        "rounded-[10px] mt-0 ",
        "text-white/90 font-medium font-montserrat",
      )}
    >
      <input
        required
        type="text"
        name="name"
        placeholder="*Github username/email"
        className={cn(
          "px-[10px] py-[5px] lg:px-[20px] lg:py-[10px]",
          "bg-transparent rounded",
          "border-[1.5px] border-white/20",
          "placeholder:text-white/[0.45]",
          "focus:outline focus:outline-1 outline-primary",
        )}
      />
      <input
        type="email"
        name="email"
        placeholder="Your e-mail"
        className={cn(
          "px-[10px] py-[5px] lg:px-[20px] lg:py-[10px]",
          "bg-transparent rounded",
          "border-[1.5px] border-white/20",
          "placeholder:text-white/[0.45]",
          "focus:outline focus:outline-1 outline-primary",
        )}
      />
      <textarea
        required
        name="message"
        minLength={10}
        rows={4}
        placeholder="*Why you want to access? Oneliner would be fine..."
        className={cn(
          "resize-none",
          "px-[10px] py-[5px] lg:px-[20px] lg:py-[10px]",
          "bg-transparent rounded",
          "border-[1.5px] border-white/20",
          "placeholder:text-white/[0.45]",
          "focus:outline focus:outline-1 outline-primary",
        )}
      ></textarea>
      {!isError && isSuccess ? (
        <p className="text-green-400 font-bold">
          message received😊, I will verify and reply soon.
        </p>
      ) : null}
      {isError && !isSuccess ? (
        <p className="text-red-400 font-bold">
          error occurred 😢, try again later please.🥺
        </p>
      ) : null}
      <button
        className={cn(
          "mx-auto flex items-center gap-4",
          "px-[10px] py-[5px] lg:px-[20px] lg:py-[10px]",
          "rounded-[10px]",
          "bg-secondary-text/80 text-primary hover:text-black",
          "shadow-lg active:shadow-sm active:scale-95",
          "transition-[width] ease-in duration-700 disabled:cursor-wait",
          isSending && "animate-pulse",
        )}
        type="submit"
        disabled={isSending}
      >
        {isSending ? (
          <>
            Sending... <BsSend />
          </>
        ) : (
          <>
            Request Access <BsSend />
          </>
        )}
      </button>
    </form>
  );
}
