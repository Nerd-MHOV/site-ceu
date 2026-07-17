import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ptBR from '@fullcalendar/core/locales/pt-br'
import { useEffect, useState } from 'react'
import getSymplaEvents, { CalendarEvent } from '@/helpers/getSymplaEvents'
import { EventClickArg } from '@fullcalendar/core/index.js'


const Calendar = () => {

  const [event, setEvent] = useState<CalendarEvent[]>([]);

    async function getEvents() {
      const response = await getSymplaEvents()
      setEvent(response);
    }
    useEffect(() => {
      getEvents()
    }, [])

    function handleEventClick(info: EventClickArg) {
      const url = info.event.extendedProps.url
      if (url) {
        window.open(url, '_blank')
      }
    }

    return (
       <div className="max-w-lg h-[600px] mx-auto px-3 mt-12">
         <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale={ptBR}
        themeSystem='Slate'
        height={550}
        events={event.map(e => ({ title: e.title, date: e.date, className: e.className, extendedProps: { url: e.url } }))}
        eventClick={handleEventClick}
        eventClassNames="cursor-pointer"
        //   eventColor='#ffce44'
      />
      <p>*As tarjas <b className='text-blue-400'>azuis</b> representam os <b>DIAS</b> e o <b>HORÁRIO</b> das sessões <b>abertas ao público</b>. Clique numa data para ir direto para a reserva na Sympla.</p>
       </div>
    );
}

export default Calendar
