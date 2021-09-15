var crtDate = new Date();
var dayOfWeeek = crtDate.getDay();
var strDate;
console.log(dayOfWeeek);

switch(dayOfWeeek){
    case 0:
        strDay = "Sunday";
        break;

    case 1:
        strDay = "Money";
        break;

    case 2:
        strDay = "Tuesday";
        break;

    default:
        strDay = "Ivalid";
        break;
}
console.log(strDay);