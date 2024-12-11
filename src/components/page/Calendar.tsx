import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ptBR from '@fullcalendar/core/locales/pt-br'
import { useEffect, useState } from 'react'
import getEventsCalendar from '@/helpers/getEventsCalendar'
import { EventSourceInput } from '@fullcalendar/core/index.js'


const Calendar = () => {

  const [event, setEvent] = useState([]);

    async function getEvents() {
      const response = await getEventsCalendar()
      console.log(response);
      setEvent(response);
    }
    useEffect(() => {
      getEvents()
    }, [])
    
    return (
       <div className="max-w-lg h-[600px] mx-auto px-3 mt-12">
         <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale={ptBR}
        themeSystem='Slate'
        height={550}
        events={event}
        //   eventColor='#ffce44'
      />
      <p>*As tarjas <b className='text-blue-400'>azuis</b> representam os <b>DIAS</b> e o <b>HORÁRIO</b> das sessões <b>abertas ao público</b>.</p>
       </div>
    );
}

export default Calendar
