//Weight convetor//
let kilogram    =document.getElementById("kilogram");
let Gram        =document.getElementById("Gram");
let milligram   =document.getElementById("milligram");
let metric_ton  =document.getElementById("metric_ton");
let Long_ton    =document.getElementById("Long_ton");
let short_ton   =document.getElementById("short_ton");
let pound       =document.getElementById("pound");
let ounce       =document.getElementById("ounce");
let carrat      =document.getElementById("carrat");
let Atomic_mass_Unit =document.getElementById("Atomic_mass_Unit");

function kilogramToOther(val){
    Gram.value = val*1000;
    milligram.value =  val*1e+6;
    metric_ton.value    =  val*0.001;
    Long_ton.value  =  val*0.000984207;
    short_ton.value    =  val*0.00110231;
    pound.value  =  val*2.20462;
    ounce.value = val*35.274;
    carrat.value    =  val*5000;
    Atomic_mass_Unit.value  =  val*6.022e+26;
}
function GramToOther(val){
    kilogram.value = val* 0.001;
    milligram.value = val*1000;  
    metric_ton.value   = val*0.000001;
    Long_ton.value = val*9.842073304E-7; 
    short_ton.value   = val*0.0000011023;
    pound.value = val*0.0022046244;
    ounce.value = val*0.0352739907;
    carrat.value    =  val*5;
    Atomic_mass_Unit.value  =  val*6.022136652E+233;
}
function milligramToOther(val){
    kilogram.value = val*0.000001;
    Gram.value = val*0.001;  
    metric_ton.value = val*9.999999999E-10;
    Long_ton.value = val*9.842073304E-10; 
    short_ton.value = val*1.10231221E-9;
    pound.value = val*0.0000022046;
    ounce.value = val*0.000035274;
    carrat.value    =  val*0.005;
    Atomic_mass_Unit.value  =  val*602213665200000000000;
}
function metric_tonToOther(val){
    kilogram.value = val*1000;
    Gram.value = val*1000000;
    milligram.value = val*1000000000;
    Long_ton.value = val*0.9842073304;
    short_ton.value = val*1.1023122101;
    pound.value = val*2204.6244202;
    ounce.value = val*35273.990723;
    carrat.value    =  val*5000000;
    Atomic_mass_Unit.value  =  val*6.022136652E+29;
}
function Long_tonToOther(val){
    kilogram.value = val*1016.04608;
    Gram.value = val*1016046.08;
    milligram.value = val*1016046080; 
    metric_ton.value = val*1.01604608;
    short_ton.value = val*1.12;
    pound.value = val*2240;
    ounce.value = val*35840;
    carrat.value    =  val*5080230.4;
    Atomic_mass_Unit.value  =  val*6.118768338E+29;
}
function short_tonToOther(val){
    kilogram.value = val*907.184;
    Gram.value = val*907184;
    milligram.value = val*907184000;  
    metric_ton.value = val*0.907184;
    Long_ton.value = val*0.8928571429;
    pound.value = val*2000;
    ounce.value = val*32000;
    carrat.value    =  val*4535920;
    Atomic_mass_Unit.value  =  val*5.463186016E+29;

}
function poundToOther(val){
    kilogram.value = val*0.453592;
    Gram.value = val*453.592;
    milligram.value = val*453592; 
    metric_ton.value = val*0.000453592;
    Long_ton.value = val*0.0004464286;
    short_ton.value = val*0.0005;
    ounce.value = val*16;
    carrat.value    =  val*2267.96;
    Atomic_mass_Unit.value  =  val*2.731593008E+26;

}
function ounceToOther(val){
    kilogram.value = val* 0.0283495;
    Gram.value = val* 28.3495;
    milligram.value = val*28349.5;
    metric_ton.value = val* 0.0000283495;
    Long_ton.value = val*0.0000279018;
    short_ton.value = val*0.00003125;
    pound.value = val*0.0625;
    carrat.value    =  val*141.7475;
    Atomic_mass_Unit.value  =  val*1.70724563E+25;
}
function carratToOther(val){
    kilogram.value = val*0.0002;
    Gram.value = val* 0.0002;
    milligram.value = val* 200;
    metric_ton.value = val* 2.E-7;
    Long_ton.value = val* 1.96841466E-7;
    short_ton.value = val* 2.20462442E-7;
    pound.value = val*0.0004409249;
    ounce.value = val*0.0070547981;
    Atomic_mass_Unit.value  =  val*1.20442733E+23;
}
function Atomic_mass_UnitToOther(val){
    kilogram.value = val*1.660540199E-27;
    Gram.value = val* 1.660540199E-24;
    milligram.value = val* 1.660540199E-21;
    metric_ton.value = val*1.660540199E-30;
    Long_ton.value = val*1.634315837E-30;
    short_ton.value = val*1.830433737E-30;
    pound.value = val*3.660867475E-27;
    ounce.value = val*5.85738796E-26;
    carrat.value    =  val*8.302700999E-24;

}

function convertToOthers(convertFrom,value)
{    
    switch(convertFrom){
        case "kilogram" : kilogramToOther (parseFloat(value)); break;
        case "Gram": GramToOther(parseFloat(value)); break;
        case "milligram" : milligramToOther(parseFloat(value)); break;
        case "metric_ton"   : metric_tonToOther(parseFloat(value)); break;
        case "Long_ton" : Long_tonToOther (parseFloat(value)); break;
        case "short_ton"   : short_tonToOther(parseFloat(value)); break;
        case "pound" : poundToOther(parseFloat(value)); break;
        case "ounce" : ounceToOther(parseFloat(value)); break;
        case "carrat"   : carratToOther(parseFloat(value)); break;
        case "Atomic_mass_Unit" : Atomic_mass_UnitToOther(parseFloat(value)); break;
    }
}
