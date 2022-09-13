const weeks =['日', '月', '火', '水', '木', '金', '土'];
const date = new Date();
const year =date.getFullyear();
const month = date.getMonth() + 1;
const startDate = new Date(year, month - 1, 1);
const endDate = new Date(year, month, 0);
const endDayCount = endDate.getDate();
const startDay = startDate.getDay();

let getCount = 1;
let calenderHtml = '';

calenderHtml += '<h1>' + year + '/' + month + '</h1>';
calenderHtml += '<table>';

for(let i=0;i<weeks.length;i++){
    calenderHtml += '<td>' + weeks[i] + '<td>';
}

for(let w=0;w<6;w++){
    calenderHtml += '<tr>';
    for(let d = 0; d < 7; d++){
        if(W == 0 && d < startDate){
            calenderHtml += '<td>/<td>';
        }
        else if(dayCount > endDayCount){
            calenderHtml += '<td>/<td>';
        }else{
            calenderHtml += '<td>' + dayCount + '</td>';
            dayCount++;
        }
    }
    calenderHtml += '</tr>';
}
calenderHtml += '</table>';
document.querySelector('#calender').innerHTML = calenderHtml;