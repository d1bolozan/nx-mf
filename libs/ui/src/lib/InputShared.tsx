import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ReactNode, useMemo, useRef } from "react";

interface InputSharedCommonsType {
  inputText: string;
  item: string;
  handleAction: (a: string) => void;
  changeInputText: (a: string) => void;
}

interface InputSharedAdd extends InputSharedCommonsType {
  actionType: "Add";
  invalidInput: boolean;
  errorMsg: string;
  children?: ReactNode;
}

interface InputSharedSearch extends InputSharedCommonsType {
  actionType: "Search";
}

type InputSharedProps = InputSharedAdd | InputSharedSearch;

const InputShared = (props: InputSharedProps) => {
  const { inputText, actionType, item, handleAction, changeInputText } = props;

  const capFirstLetterItemType = useMemo(
    () => item.charAt(0).toUpperCase() + item.slice(1),
    [item]
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const onHandle = () => {
    if (actionType === "Add" && inputRef.current && inputRef.current.value === "") {
      inputRef.current.focus();
    } else {
      handleAction(inputText);
    }
  };

  const renderInputField = (
    placeholder: string,
    icon: string,
    additionalClasses = "",
    children: ReactNode | null = null
  ) => (
    <div className="flex items-center">
      <div className="p-inputgroup w-fit flex-grow-0">
        <span className="p-input-icon-right">
          {inputText?.length > 0 && (
            <i
              className="pi pi-times cursor-pointer"
              onClick={() => {
                changeInputText("");
                if (actionType === "Search") {
                  handleAction("");
                }
              }}
            />
          )}
          <InputText
            ref={inputRef}
            className={`w-[20rem] rounded-r-none ${additionalClasses}`}
            value={inputText}
            type="text"
            placeholder={placeholder}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => changeInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onHandle();
              }
            }}
          />
        </span>
        {children}
        <Button
          onClick={onHandle}
          icon={icon}
          tooltipOptions={{ position: "right", showDelay: 100, hideDelay: 0 }}
        />
      </div>
    </div>
  );

  // for Add
  if (actionType === "Add") {
    const { invalidInput, errorMsg, children } = props as InputSharedAdd;
    return (
      <div>
        {renderInputField(
          `${capFirstLetterItemType} name`,
          "pi pi-plus",
          invalidInput ? "p-invalid" : "",
          children
        )}
        {invalidInput && errorMsg && (
          <small className="text-danger font-semibold">{errorMsg}</small>
        )}
      </div>
    );
  }

  // for Search
  return <div>{renderInputField(`Search ${item}`, "pi pi-search")}</div>;
};

export default InputShared;
