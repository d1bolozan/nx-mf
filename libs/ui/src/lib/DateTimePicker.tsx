import "../App.css";

import { addLocale } from "primereact/api";
import { Calendar, CalendarBaseProps } from "primereact/calendar";
import { FormEvent, Nullable } from "primereact/ts-helpers";
import { FC, SyntheticEvent, useEffect, useState } from "react";

type LanguageType = "ro" | "en" | "es" | "fr";
type firstDayOfWeekType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface DateTimePickerProps extends CalendarBaseProps {
  id: string;
  label: string;
  datetime: string | null;
  locale?: LanguageType;
  firstDayOfWeek?: firstDayOfWeekType;
  handleChangeDate: (datetime: string) => void;
}
const DateTimePicker: FC<DateTimePickerProps> = ({
  id,
  label,
  datetime,
  locale = "ro",
  firstDayOfWeek = 1,
  handleChangeDate,
  ...props
}) => {
  const formatDateToISOWithoutTimezone = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  addLocale(locale, { firstDayOfWeek: firstDayOfWeek });

  const [selectedDateTime, setSelectedDateTime] = useState<Nullable<Date>>(
    datetime ? new Date(datetime) : null
  );

  useEffect(() => {
    if (!datetime) {
      return;
    }
    setSelectedDateTime(new Date(datetime));
  }, [datetime]);

  const onChangeDate = (e: FormEvent<Date, SyntheticEvent<Element, Event>>) => {
    e.preventDefault();
    setSelectedDateTime(e.value);
    if (e.value) {
      handleChangeDate(formatDateToISOWithoutTimezone(e.value));
    } else {
      handleChangeDate("");
    }
  };

  return (
    <span className="p-float-label w-full">
      <Calendar
        readOnlyInput
        inputId={id}
        value={selectedDateTime}
        onChange={onChangeDate}
        showTime
        hourFormat="24"
        showIcon
        dateFormat="dd-mm-yy"
        showButtonBar
        locale={locale}
        pt={{
          clearButton: {
            root: { className: "hidden" }
          }
        }}
        className="w-full"
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </span>
  );
};
export default DateTimePicker;
