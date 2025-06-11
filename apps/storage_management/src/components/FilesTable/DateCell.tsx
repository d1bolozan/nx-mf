import { format } from "date-fns";

type Props = {
  date: string;
};

const DateCell = ({ date }: Props) => {
  return format(new Date(date), "dd-MM-yyyy HH:mm:ss");
};

export default DateCell;
