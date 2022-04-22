import moment from 'moment'

export const fromNowFilter = {
  filters: {
    showFromNow (datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}