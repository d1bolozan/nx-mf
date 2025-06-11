import { Button } from "primereact/button";
import { FC } from "react";

type DataNotFoundCardProps = {
  titleMessage: string;
  subtitleMessage?: string;
  buttonLabel?: string;
  buttonIcon?: string;
  className?: string;
  onButtonClick?: () => void;
};
const DataNotFoundCard: FC<DataNotFoundCardProps> = ({
  titleMessage,
  subtitleMessage,
  buttonLabel,
  buttonIcon,
  className,
  onButtonClick
}) => {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center space-y-2 text-center ${className}`}
    >
      <div className="text-3xl font-bold text-primary">{titleMessage}</div>
      {subtitleMessage && (
        <p className="text-xl font-bold text-text-secondary">{subtitleMessage}</p>
      )}
      {buttonLabel && buttonLabel?.length > 0 && (
        <Button
          label={buttonLabel}
          icon={buttonIcon}
          outlined
          onClick={onButtonClick}
          className="whitespace-nowrap rounded-lg px-1.5 py-1.5 font-bold"
        />
      )}
    </div>
  );
};
export default DataNotFoundCard;
