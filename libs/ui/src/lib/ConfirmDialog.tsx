import "../App.css";

import { Button } from "primereact/button";
import { Dialog, DialogProps } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";

interface ConfirmPopupProps extends Omit<DialogProps, "onHide"> {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title?: string;
  confirmType: "delete" | "warning" | "info";
  buttonAcceptText: "Delete" | "Save" | "Update" | "Ok";
  children: React.ReactNode;
  onSuccess: any;
  onCancel?: any;
}

type ConfirmType = "delete" | "warning" | "info";
type ButtonAcceptType = "Delete" | "Save" | "Update" | "Ok";

const ConfirmDialog = ({
  visible,
  setVisible,
  title,
  confirmType,
  buttonAcceptText,
  children,
  onSuccess,
  onCancel,
  ...props
}: ConfirmPopupProps) => {
  const getTitle = (title: string | null | undefined, confirmType: ConfirmType) => {
    if (title !== undefined && title !== null && title.length > 0) {
      return title;
    }

    switch (confirmType) {
      case "delete":
        return "Are you sure you want to delete this item?";
      case "warning":
        return "Are you sure you want to proceed?";
      default:
        return "Are you sure you want to proceed?";
    }
  };
  const getIcon = (confirmType: ConfirmType) => {
    switch (confirmType) {
      case "delete":
        return "pi pi-trash";
      case "warning":
        return "pi pi-exclamation-triangle";
      default:
        return "pi pi-question";
    }
  };
  const getBackground = (confirmType: ConfirmType) => {
    switch (confirmType) {
      case "delete":
        return "rgb(var(--mdt-web-error-rgb))";
      case "warning":
        return "rgb(var(--mdt-web-warning-rgb))";
      default:
        return "rgb(var(--mdt-web-primary-rgb))";
    }
  };
  const getSeverity = (
    buttonAcceptText: ButtonAcceptType
  ): "info" | "danger" | "secondary" | "success" | "warning" | "help" => {
    switch (buttonAcceptText) {
      case "Delete":
        return "danger";
      case "Save":
        return "success";
      case "Update":
        return "success";
      default:
        return "info";
    }
  };

  const onCancelHandle = () => {
    setVisible(false);
    if (onCancel) onCancel();
  };
  const onSuccessHandle = () => {
    setVisible(false);
    onSuccess();
  };

  return (
    <Dialog
      {...props}
      visible={visible}
      style={{ maxWidth: "30rem", width: "100%" }}
      showHeader={false}
      closable={false}
      draggable={false}
      resizable={false}
      onHide={() => setVisible(false)}
      className="mdt-custom-confirmDialog relative"
      pt={{
        mask: {
          className: "mdt-custom-confirmDialog-mask"
        }
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1.875rem",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <div
          style={{
            width: "3.75rem",
            height: "3.75rem",
            background: `${getBackground(confirmType)}`
          }}
          className={` flex items-center justify-center rounded-full  border-2 p-0.5 drop-shadow`}
        >
          <i
            style={{
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              color: "#ffffff"
            }}
            className={`${getIcon(confirmType)}`}
          ></i>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-1 pt-2">
        <div className="mt-2 flex items-center justify-center text-center text-xl font-semibold">
          {getTitle(title, confirmType)}
        </div>
        <div className=" flex justify-center">{children}</div>

        <div className="flex justify-end gap-1">
          <Button
            label="Cancel"
            outlined
            className="border-none text-text-primary shadow-none"
            style={{ boxShadow: "none" }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onCancelHandle();
            }}
          />
          <Button
            label={buttonAcceptText}
            severity={getSeverity(buttonAcceptText)}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onSuccessHandle();
            }}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
