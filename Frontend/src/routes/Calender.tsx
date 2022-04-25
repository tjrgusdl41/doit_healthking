import { useCallback, useState } from "react";
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg
} from "@fullcalendar/react";
import "./Calender.css"
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { INITIAL_EVENTS, createEventId } from "../utils/event-utils";
import { MainPage } from "./MainPage";
export const Calender = () => {
const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
    const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );
    const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
      console.log(selectInfo)
    let title = prompt("운동루틴을 입력하세요")?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }, []);
    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    console.log(clickInfo)
    if (
      window.confirm(`이날의 운동「${clickInfo.event.title}」삭제하시겠습니까?`)
    ) {
      clickInfo.event.remove();
    }
  }, []);
    return (

    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
        editable={false}
          initialEvents={INITIAL_EVENTS}
          locales={allLocales}
          locale="ko"
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
            </div>
        
    )
}
