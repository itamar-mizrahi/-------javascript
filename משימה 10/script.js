let date1 = new Date("October 13, 2014 08:11:00"); 
let date2 = new Date("October 13, 2014 11:13:00"); 
function hourDifference(dt1,dt2){
    hour1=date1.getHours();
    hour2=date2.getHours();
    return Math.abs(hour1 - hour2)


}
console.log(hourDifference(date1, date2)); 