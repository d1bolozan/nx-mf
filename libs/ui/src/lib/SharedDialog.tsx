import "../App.css";

import { Button } from "primereact/button";
import { Dialog, DialogProps } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";

type ActionType = "Add" | "Edit" | "Filter";

interface SharedDialogType<Action extends ActionType> extends Omit<DialogProps, "onHide"> {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
  actionType: ActionType;
  onSuccess: () => void;
  onDiscardFilters?: Action extends "Filter" ? () => void : () => void | undefined;
  isOnSuccessDisabled: boolean;
  children: React.ReactNode;
  onCancel?: any;
}

const SharedDialog = ({
  visible,
  setVisible,
  title,
  actionType,
  onSuccess,
  isOnSuccessDisabled,
  onDiscardFilters,
  children,
  onCancel,
  ...props
}: SharedDialogType<ActionType>) => {
  const getTitle = (actionType: ActionType, title: string) => {
    switch (actionType) {
      case "Add":
        return `Add new ${title}`;
      case "Edit":
        return `Edit ${title}`;
      case "Filter":
        return `${title}`;
      default:
        return title;
    }
  };

  const getLabel = (actionType: ActionType) => {
    switch (actionType) {
      case "Add":
        return `Add`;
      case "Edit":
        return `Save`;
      case "Filter":
        return `Apply`;
      default:
        return `?????`;
    }
  };
  const getIcon = (actionType: ActionType) => {
    switch (actionType) {
      case "Add":
        return `pi-check`;
      case "Edit":
        return `pi-save`;
      case "Filter":
        return `pi-check`;
      default:
        return `pi-question`;
    }
  };

  const header = () => {
    return <h6>{getTitle(actionType, title)}</h6>;
  };

  const footer = () => {
    return (
      <div className="flex w-full justify-between">
        {actionType === "Filter" && (
          <Button
            className="flex-shrink-0"
            icon="pi pi-filter"
            text
            label="Clear filters"
            severity="danger"
            onClick={() => {
              if (onDiscardFilters) {
                onDiscardFilters();
              }
            }}
          />
        )}
        <div className="flex w-full justify-end gap-1">
          <Button
            icon="pi pi-times"
            label="Cancel"
            severity="danger"
            outlined
            onClick={() => {
              setVisible(false);
              onCancel && onCancel();
            }}
          />
          <Button
            className="min-w-[6rem]"
            icon={`pi ${getIcon(actionType)}`}
            label={getLabel(actionType)}
            severity="success"
            disabled={isOnSuccessDisabled}
            onClick={(e) => {
              setVisible(false);
              e.stopPropagation();
              e.preventDefault();
              onSuccess();
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <Dialog
      {...props}
      closeOnEscape
      draggable={false}
      resizable={false}
      header={header}
      footer={footer}
      visible={visible}
      style={{ width: "40vw" }}
      breakpoints={{
        "1024px": "50vw !important",
        "960px": "75vw !important",
        "641px": "95vw !important"
      }}
      onHide={() => {
        setVisible(false);
      }}
    >
      {children}
    </Dialog>
  );
};

export default SharedDialog;
