import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { Dialog as DialogPrimitive } from "@radix-ui/react-dialog";
import React, { useEffect, useState, ReactNode, useMemo } from "react";
import { classNames } from "../../lib/tailwindCss";

export type DialogProps = {
  trigger: React.ReactNode;
  name?: string; // query param key
  clearQueryParamsOnClose?: string[];
  title?: string;
  description?: string | ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
  noEscapeClose?: boolean;
  noOutsideClose?: boolean;
  closeButton?: boolean;
  className?: string;
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
  size = "md",
  closeButton = false,
  noEscapeClose = false,
  noOutsideClose = false,
  className = "",
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
        asChild
      >
        {trigger}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={classNames(
            "z-40",
            "fixed inset-0 bg-black/50 backdrop-blur-sm",
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
          className={classNames(
            "z-50",
            "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg w-full max-w-[90vw] focus:outline-none",
            size === "sm" && "max-w-sm",
            size === "md" && "max-w-md",
            size === "lg" && "max-w-lg",
            className,
          )}
        >
          {title && (
            <DialogPrimitive.Title
              className={classNames(
                "text-lg font-semibold mb-2",
                titleClassName,
              )}
            >
              {title}
            </DialogPrimitive.Title>
          )}
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

          {closeButton && (
            <DialogPrimitive.Close asChild>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Close"
              >
                ✕
              </button>
            </DialogPrimitive.Close>
          )}
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
