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
       <div className="max-w-2xl mx-auto px-3 mt-12">
         <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale={ptBR}
        themeSystem='Slate'
        events={event}
        //   eventColor='#ffce44'
      />
       </div>
    );
}

export default Calendar
