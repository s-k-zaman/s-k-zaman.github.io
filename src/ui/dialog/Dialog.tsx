import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { Dialog as DialogPrimitive } from "@radix-ui/react-dialog";
import React, { useEffect, useState, ReactNode, useMemo } from "react";
import { classNames } from "../../lib/tailwindCss";
import { IoClose } from "react-icons/io5";

export type DialogProps = {
  trigger: React.ReactNode;
  tabIndex?: number;
  name?: string; // query param key
  clearQueryParamsOnClose?: string[];
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "fit" | "sm" | "md" | "lg" | "xl";
  noEscapeClose?: boolean;
  noOutsideClose?: boolean;
  noCloseButton?: boolean;
  enableOverflow?: boolean;
  className?: string;
  containerClassName?: string;
  triggerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  footerClassName?: string;
  overlayClassName?: string;
};

const enum DIALOG_STATE {
  CLOSED = "CLOSED",
  CLOSING = "CLOSING",
  OPEN = "OPEN",
}

export function Dialog({
  trigger,
  name,
  clearQueryParamsOnClose,
  title,
  description,
  children,
  footer,
  tabIndex = 0,
  size = "md",
  enableOverflow = false,
  noCloseButton = false,
  noEscapeClose = false,
  noOutsideClose = false,
  className = "",
  containerClassName = "",
  triggerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  footerClassName = "",
  overlayClassName = "",
}: DialogProps) {
  const [modalState, setModalState] = useState(DIALOG_STATE.CLOSED);

  const searchParams = new URLSearchParams(window.location.search);
  const shouldOpen = name ? searchParams.get("dialog") === name : false;

  useEffect(() => {
    if (modalState === DIALOG_STATE.CLOSED && shouldOpen) {
      setModalState(DIALOG_STATE.OPEN);
    }

    if (modalState === DIALOG_STATE.CLOSING && !shouldOpen) {
      setModalState(DIALOG_STATE.CLOSED);
    }
  }, [shouldOpen, modalState]);

  const handleOpenChange = (open: boolean) => {
    if (!name) {
      setModalState(open ? DIALOG_STATE.OPEN : DIALOG_STATE.CLOSING);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const clearKeys = ["dialog", ...(clearQueryParamsOnClose || [])];

    if (open) {
      params.set("dialog", name);
    } else {
      clearKeys.forEach((key) => params.delete(key));
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    setModalState(open ? DIALOG_STATE.OPEN : DIALOG_STATE.CLOSING);
  };

  return (
    <DialogPrimitive.Root
      open={modalState === DIALOG_STATE.OPEN}
      onOpenChange={handleOpenChange}
    >
      <DialogPrimitive.Trigger
        className={classNames("cursor-pointer", triggerClassName)}
        tabIndex={tabIndex}
        asChild
      >
        {trigger}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={classNames(
            "z-40",
            "fixed transition-opacity inset-0 bg-black/50 backdrop-blur-sm",
            overlayClassName,
          )}
        />
        <DialogPrimitive.Content
          onEscapeKeyDown={(e) => {
            if (noEscapeClose) e.preventDefault();
          }}
          onPointerDownOutside={(e) => {
            if (noOutsideClose) e.preventDefault();
          }}
          aria-describedby={
            description && typeof description === "string"
              ? description
              : undefined
          }
          className={classNames(
            "z-50",
            "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "focus:outline-none",
            "w-full max-w-[20rem] xs:max-w-[23rem]",
            "max-h-[95vh]",
            size === "sm" && "sm:max-w-sm",
            size === "md" && "sm:max-w-md",
            size === "lg" && "sm:max-w-lg",
            size === "xl" && "sm:max-w-xl",
            size === "fit" && "sm:max-w-fit",
            containerClassName,
          )}
        >
          {/* HACK: Wrapper fix proper animation of content box */}
          <div
            className={classNames(
              "w-full",
              "rounded-[20px]",
              "shadow-2xl shadow-white/5 bg-card text-white/80",
              enableOverflow ? "overflow-auto" : "overflow-visible",
              "animate-fade-in-up",
              "p-6 lg:p-8 ",
              className,
            )}
          >
            {/* Always render a title, but visually hide it if not provided */}
            <DialogPrimitive.Title
              className={classNames(
                "text-2xl font-semibold mb-2",
                description && "mb-0",
                titleClassName,
                !title && "sr-only",
              )}
            >
              {title || "Dialog"}
            </DialogPrimitive.Title>
            {description && (
              <DialogPrimitive.Description
                className={classNames(
                  "text-sm mb-4 text-gray-500 dark:text-gray-400",
                  descriptionClassName,
                )}
              >
                {description}
              </DialogPrimitive.Description>
            )}

            <div className="mb-4">{children}</div>

            {footer && (
              <div
                className={classNames(
                  "flex justify-end space-x-2",
                  footerClassName,
                )}
              >
                {footer}
              </div>
            )}

            {!noCloseButton && (
              <DialogPrimitive.Close asChild>
                <button
                  className={classNames(
                    "absolute top-[6px] right-[8px]",
                    "p-[5px]",
                    "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",
                    "flex items-center justify-center",
                  )}
                  aria-label="Close"
                >
                  <IoClose size={22} />
                </button>
              </DialogPrimitive.Close>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

type DialogCloseProps = {
  "data-testid"?: string;
  dialogCloseProps?: React.ComponentProps<(typeof DialogPrimitive)["Close"]>;
  children?: ReactNode;
  // onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function DialogClose(props: DialogCloseProps) {
  const Close = useMemo(() => DialogPrimitive.Close, []);

  return (
    <Close asChild {...props.dialogCloseProps}>
      <button
        data-testid={props["data-testid"] || "dialog-rejection"}
        {...props}
      >
        {props.children ? props.children : "close"}
      </button>
    </Close>
  );
}

DialogClose.displayName = "WebDialogClose";
