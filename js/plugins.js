$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000
    });
});

function myAgeInDays() {

    "use strict";

    var myAge = 25;

    return myAge * 365;

}

var ageCalc = myAgeInDays();

document.getElementById("test").innerHTML = "your age in Days = " + ageCalc + " Day";

function myPriceIs () {

    document.getElementById("price").innerHTML = "from my javascript";
}

function myTextIs () {
    document.getElementById("price").innerHTML = "text from javascript";
}


var myInput = document.getElementById("myinput"),
    
    myDiv = document.getElementById("mydiv"),

    myButton = document.getElementById("mybutton");

myInput.onkeyup = function () {

    "use strict";

     myDiv.innerHTML = myInput.value * 3.75;

};

var myButton = document.getElementById("mybutton");

myButton.onmouseover = function () {

    "use strict";

    myButton.innerHTML = "you have gone";
};

var friends = [
    "ahmed",
    "hassen",
    "mohamed",
    "abram",
    "soha"
];

console.log(friends);


friends.splice(0 , 3 , "alkrim", "marina" ); 

console.log(friends);


var myDate = new Date(),

    myString = myDate.toLocaleString();

    console.log(myDate);

    console.log(myString);

function validation () {
var form = document.getElementById("form");
var email = document.getElementById("email").value;

var text = document.getElementById("text");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "You Email Addrees In Valid.";
    text.style.color = "#00ff00";

} else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address.";
    text.style.color = "#ff0000";
}
if (email === "");
    Form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
}

var myMainstring = "I Love The Javascript And Jason",

    mySubString = myMainstring.substr(11, );

    console.log(myMainstring);
    console.log(typeof (myMainstring));
    console.log(mySubString);
    console.log(typeof (mySubString));


        var person = {
            firstName: "John",
            lastName : "Doe",
            age: 25,
            birthday : function(years) {
                this.age = this.age + years;
                return "Happy Birthday";
            }
        };
        var foo = person.birthday(2);
        var bar = person.age;


        function generateYears (Start, End) {
            "use strict";

            var years;
            document.write ("<select>");

            for (years = Start; years <= End; years++) {

                document.write ("<option value = \"" + years + "\">" + years + "</option>");

            }

            document.write ("</select>");
        }

        generateYears (1980, 2020);


