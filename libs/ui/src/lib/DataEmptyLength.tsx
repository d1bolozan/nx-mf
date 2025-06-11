import "../App.css";

import { Button } from "primereact/button";

type DataEmptyLengthType = {
  buttonLabel: string;
  onButtonClick: () => void;
  allowAdd?: boolean;
};
const DataEmptyLength = ({ buttonLabel, onButtonClick, allowAdd = false }: DataEmptyLengthType) => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-2 text-center">
      <div className="text-3xl font-bold text-primary">No {buttonLabel}s have been found.</div>
      {allowAdd && (
        <>
          <p className="text-xl font-bold text-text-secondary">
            If you want to add new {buttonLabel} on the list press the button below
          </p>

          <Button
            label={buttonLabel.toLocaleUpperCase()}
            icon="pi pi-plus"
            outlined
            onClick={onButtonClick}
            className="whitespace-nowrap rounded-lg px-1.5 py-1.5 font-bold"
          />
        </>
      )}
    </div>
  );
};
export default DataEmptyLength;
