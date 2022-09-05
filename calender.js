const weeks =['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year =date.getFullyear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1)
const endDate = new Date(year, month, 0)
const endDayCount = endDate.getDate()
const startDay = startDate.getDay()

let getCount = 1
let calenderHtml = ''

calenderHtml += '<h1>' + year + '/' + month + '</h1>'
calenderHtml += '<table>'
