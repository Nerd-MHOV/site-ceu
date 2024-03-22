import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ptBR from '@fullcalendar/core/locales/pt-br'

const Calendar = () => {
  
    return (
       <div className="max-w-2xl mx-auto">
         <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale={ptBR}
        themeSystem='Slate'
        events={[
            { title: '21:00', date: '2024-03-02', className: 'bold-event' },
            { title: '21:00', date: '2024-03-09', className: 'bold-event' },
            { title: '21:00', date: '2024-03-16', className: 'bold-event' },
            { title: '21:00', date: '2024-03-23', className: 'bold-event' },
            { title: '21:00', date: '2024-03-28', className: 'bold-event' },
            { title: '21:00', date: '2024-03-29', className: 'bold-event' },
            { title: '21:00', date: '2024-03-30', className: 'bold-event' },
            { title: '23:00', date: '2024-03-30', className: 'bold-event' },
            { title: '21:00', date: '2024-03-31', className: 'bold-event' },
          ]}
        //   eventColor='#ffce44'
      />
       </div>
    );
}

export default Calendar
