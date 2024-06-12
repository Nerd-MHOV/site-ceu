
import {format} from 'date-fns'

async function featchEventsCalendar() {
    return fetch('http://187.63.83.165:3336/session')
        .then( response => {
            if (!response.ok) {
                return []
            }
            return response.json()
        })
        .catch( err => {
            return []
        })
}

interface FeathEventItem {
    id: number,
    data: string,
    qtdpax: string,
    description: string,
}

async function getEventsCalendar() {
    const calendarItems = await featchEventsCalendar();
    return calendarItems.map( (item: FeathEventItem) => {
        const date =(item.data)
        return {
            title: format(date, "HH:mm"),
            date: format(date, 'yyyy-MM-dd'),
            className: 'bold-event'
        }
    })
}

export default getEventsCalendar