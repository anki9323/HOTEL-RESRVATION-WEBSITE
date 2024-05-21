//Time convetor//
let Second    =document.getElementById("Second");
let Millisecond        =document.getElementById("Millisecond");
let Microsecond   =document.getElementById("Microsecond");
let Nanosecond  =document.getElementById("Nanosecond");
let picosecond  =document.getElementById("picosecond");
let Minute    =document.getElementById("Minute");
let Hour   =document.getElementById("Hour");
let Day       =document.getElementById("Day");
let week       =document.getElementById("week");
let Month      =document.getElementById("Month");
let year =document.getElementById("year");

// *********Time************ //
function SecondToOther(val){
    Millisecond.value = val*1000;
    Microsecond.value =  val*1000000;
    Nanosecond.value    =  val*1000000000;
    picosecond.value    =  val*1000000000000;
    Minute.value  =  val*0.0166666667;
    Hour.value    =  val*0.0002777778;
    Day.value  =  val*0.0000115741;
    week.value = val*0.0000016534;
    Month.value    =  val*3.802570537E-7;
    year.value  =  val*3.168808781E-8;
}
function MillisecondToOther(val){
    Second.value = val* 0.001;
    Microsecond.value = val*1000;
    Nanosecond.value    =  val*1000000;  
    picosecond.value   = val*1000000000;
    Minute.value = val*0.0000166667; 
    Hour.value   = val*2.777777777E-7;
    Day.value = val*1.157407407E-8;
    week.value = val*1.653439153E-9;
    Month.value    =  val*3.802570537E-10;
    year.value  =  val*3.168808781E-11;
}
function MicrosecondToOther(val){
    Second.value = val*0.000001;
    Millisecond.value = val*0.001;
    Nanosecond.value    =  val*1000;  
    picosecond.value = val*1000000;
    Minute.value = val*1.666666666E-8; 
    Hour.value = val*2.777777777E-10;
    Day.value = val*1.157407407E-11;
    week.value = val*1.653439153E-12;
    Month.value    =  val*3.802570537E-13;
    year.value  =  val*3.168808781E-14;
}
function NanosecondToOther(val){
    Second.value = val*1.E-9;
    Millisecond.value = val*0.000001;
    Microsecond.value = val*0.001;  
    picosecond.value = val*1000;
    Minute.value = val*1.666666666E-11; 
    Hour.value = val*2.777777777E-13;
    Day.value = val*1.157407407E-14;
    week.value = val*1.653439153E-15;
    Month.value    =  val*3.802570537E-16;
    year.value  =  val*3.168808781E-17;
}
function picosecondToOther(val){
    Second.value = val*1.E-12;
    Millisecond.value = val*1.E-9;
    Microsecond.value = val*0.000001;
    Nanosecond.value    =  val*0.001;
    Minute.value = val*1.666666666E-14;
    Hour.value = val*2.777777777E-16;
    Day.value = val*1.157407407E-17;
    week.value = val*1.653439153E-18;
    Month.value    =  val*3.802570537E-19;
    year.value  =  val*3.168808781E-20;
}
function MinuteToOther(val){
    Second.value = val*60;
    Millisecond.value = val*60000;
    Microsecond.value = val*60000000; 
    Nanosecond.value    =  val*60000000000;
    picosecond.value = val*60000000000000;
    Hour.value = val*0.0166666667;
    Day.value = val*0.0006944444;
    week.value = val*0.0000992063;
    Month.value    =  val*0.0000228154;
    year.value  =  val*0.0000019013;
}
function HourToOther(val){
    Second.value = val*3600;
    Millisecond.value = val*3600000;
    Microsecond.value = val*3600000000;
    Nanosecond.value    =  val*3600000000000;  
    picosecond.value = val*3600000000000000;
    Minute.value = val*60;
    Day.value = val*0.0416666667;
    week.value = val*0.005952381;
    Month.value    =  val*0.0013689254;
    year.value  =  val*0.0001140771;

}
function DayToOther(val){
    Second.value = val*86400;
    Millisecond.value = val*86400000;
    Microsecond.value = val*86400000000; 
    Nanosecond.value    =  val*86400000000000;
    picosecond.value = val*86400000000000000;
    Minute.value = val*1440;
    Hour.value = val*24;
    week.value = val*0.1428571429;
    Month.value    =  val*0.0328542094;
    year.value  =  val*0.0027378508;

}
function weekToOther(val){
    Second.value = val* 604800;
    Millisecond.value = val* 604800000;
    Microsecond.value = val*604800000000;
    Nanosecond.value    =  val*604800000000000;
    picosecond.value = val* 604800000000000000;
    Minute.value = val*10080;
    Hour.value = val*168;
    Day.value = val*7;
    Month.value    =  val*0.2299794661;
    year.value  =  val*0.0191649555;
}
function MonthToOther(val){
    Second.value = val*2629800;
    Millisecond.value = val*2629800000;
    Microsecond.value = val* 2629800000000;
    Nanosecond.value    =  val*2629800000000000;
    picosecond.value = val* 2629800000000000000;
    Minute.value = val* 43830;
    Hour.value = val* 730.5;
    Day.value = val*30.4375;
    week.value = val*4.3482142857;
    year.value  =  val*0.0833333333;
}
function yearToOther(val){
    Second.value = val*31557600;
    Millisecond.value = val* 31557600000;
    Microsecond.value = val* 31557600000000;
    Nanosecond.value    =  val*31557600000000000;
    picosecond.value = val*31557600000000000000
    Minute.value = val*525960;
    Hour.value = val*8766;
    Day.value = val*365.25;
    week.value = val*52.178571429;
    Month.value    =  val*12;

}

function convertToOthers(convertFrom,value)
{    
    switch(convertFrom){
        case "Second" : SecondToOther (parseFloat(value)); break;
        case "Millisecond": MillisecondToOther(parseFloat(value)); break;
        case "Microsecond" : MicrosecondToOther(parseFloat(value)); break;
        case "Nanosecond" :NanosecondToOther(parseFloat(value)); break;
        case "picosecond"   : picosecondToOther(parseFloat(value)); break;
        case "Minute" : MinuteToOther (parseFloat(value)); break;
        case "Hour"   : HourToOther(parseFloat(value)); break;
        case "Day" : DayToOther(parseFloat(value)); break;
        case "week" : weekToOther(parseFloat(value)); break;
        case "Month"   : MonthToOther(parseFloat(value)); break;
        case "year" : yearToOther(parseFloat(value)); break;
    }
}
