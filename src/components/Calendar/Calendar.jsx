import { CalendarBlock, DataText, SCalendar, CalendarPeriod } from "./Calendar.styled";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { formatDate } from "date-fns";
import { ru } from "date-fns/locale";

export function Calendar({date, setDate, readOnly}) {
  return (
    <SCalendar>
      <DataText>Даты</DataText>
      <CalendarBlock>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          <DateCalendar views={['day']} value={date} onChange={setDate} readOnly={readOnly}
                        dayOfWeekFormatter={(weekday) => formatDate(weekday, "eeeeee", { locale: ru })} />
        </LocalizationProvider>

        <CalendarPeriod>
          {
            date
            ? (
              <>
                Срок исполнения: <span className="date-control">{formatDate(date, "dd.MM.yyyy", { locale: ru })}</span>.
              </>
            )
            : "Выберите срок исполнения..."
          }
        </CalendarPeriod>
      </CalendarBlock>
    </SCalendar>
  )
}
