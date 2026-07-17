import { format } from 'date-fns'

interface SymplaEvent {
    id: number
    name: string
    start_date: string | null
    end_date: string | null
    url: string | null
    image: string | null
}

export interface CalendarEvent {
    title: string
    date: string
    className: string
    url: string | null
}

// Em produção (export estático) o PHP roda no mesmo domínio, então o caminho
// relativo funciona. Em `next dev` não há PHP nenhum servido pelo Next — para
// testar localmente, suba `php -S localhost:8099 -t server` e defina
// NEXT_PUBLIC_SYMPLA_PROXY_URL=http://localhost:8099/sympla-events.php em .env.local.
const SYMPLA_PROXY_URL = process.env.NEXT_PUBLIC_SYMPLA_PROXY_URL || '/sympla-events.php'

async function fetchSymplaEvents(): Promise<SymplaEvent[]> {
    return fetch(SYMPLA_PROXY_URL)
        .then(response => response.ok ? response.json() : [])
        .catch(() => [])
}

async function getSymplaEvents(): Promise<CalendarEvent[]> {
    const events = await fetchSymplaEvents()
    return events
        .filter(event => !!event.start_date)
        .map(event => ({
            title: format(event.start_date as string, 'HH:mm'),
            date: format(event.start_date as string, 'yyyy-MM-dd'),
            className: 'bold-event',
            url: event.url,
        }))
}

export function getNextEvent(events: CalendarEvent[]): CalendarEvent | null {
    const now = format(new Date(), 'yyyy-MM-dd')
    const upcoming = events
        .filter(event => event.date >= now)
        .sort((a, b) => a.date.localeCompare(b.date))
    return upcoming[0] ?? null
}

export default getSymplaEvents
