import moment from 'moment'

export const parseDate = (date: string) => moment(date, 'YYYY-MM-DD  hh:mm:ss').format('MMM Do, YYYY')
