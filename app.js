// -- START --let variables //

//dating if statement//

let currentDate = new Date();
let timeAndDay = document.querySelector(".timeAndDay");
let greetings = document.querySelector(".greetings");
let Day = currentDate.getDate();
let minute = currentDate.getMinutes();
let months = currentDate.getMonth();
let Weeks = currentDate.getDay();
let year = currentDate.getFullYear();
let TimeHour = currentDate.getHours();
let nameMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let nameWeeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let textCurrentDate = document.querySelector(".current-date");
textCurrentDate.innerHTML = `${nameMonths[months]} ${Day}, ${year},`;
// -- END --let variables //

//--START-- if statement for time that also changes introduction //
//***** IF ELSE STATEMENT 1 ******//
if (TimeHour === 0) {
  //minute if statement//
  if (minute < 10) {
    minute = `0${minute}`;
  } //minute if statement--END//
  greetings.innerHTML = `Hey, Early bird! its`;
  timeAndDay.innerHTML = `${nameWeeks[Weeks]},<strong style="font-weight: 700;"> 12: ${minute} am </strong>and its`;
}
//***** IF ELSE STATEMENT 2 ******//
else if (TimeHour < 12) {
  //minute if statement//
  if (minute < 10) {
    minute = `0${minute}`;
  } //minute if statement--END//
  greetings.innerHTML = `Good Morning! Today is`;
  timeAndDay.innerHTML = `${nameWeeks[Weeks]},<strong style="font-weight: 700;"> ${TimeHour}: ${minute} am </strong>and its`;
}
//***** IF ELSE STATEMENT 3 ******//
else if (TimeHour > 17) {
  //minute if statement//
  if (minute < 10) {
    minute = `0${minute}`;
  }

  //minute if statement--END//
  greetings.innerHTML = `Good Evening! Today is`;
  timeAndDay.innerHTML = `${
    nameWeeks[Weeks]
  }, <strong style="font-weight: 700;">${
    TimeHour - 12
  }: ${minute} pm </strong> and its`;
}
//***** IF ELSE STATEMENT 4 ******//
else if (TimeHour === 12) {
  //minute if statement//
  if (minute < 10) {
    minute = `0${minute}`;
  } //minute if statement--END//
  greetings.innerHTML = `Hello There! Today is`;
  timeAndDay.innerHTML = `${nameWeeks[Weeks]}, <strong style="font-weight: 700;">${TimeHour}: ${minute} pm </strong> and its`;
}
//***** IF ELSE STATEMENT 5 ******//
else {
  //minute if statement//
  if (minute < 10) {
    minute = `0${minute}`;
  } //minute if statement--END//
  greetings.innerHTML = `Good Afternoon! Today is`;
  timeAndDay.innerHTML = `${
    nameWeeks[Weeks]
  }, <strong style="font-weight: 700;">${
    TimeHour - 12
  }: ${minute} pm </strong> and its`;
}
//----END--- of if statement for time//

// --- START -- Function on Search field//
function search(pop) {
  pop.preventDefault();

  function realData(value) {
    //START--date-time - in each countries//
    let NewDate = `${value.data.dt}`;
    let standardDate = new Date(NewDate * 1000);
    alert(standardDate);

    // let Day = standardDate.getDate();
    // let minute = standardDate.getMinutes();
    // let months = standardDate.getMonth();
    // let Weeks = standardDate.getDay();
    // let year = standardDate.getFullYear();
    // let TimeHour = standardDate.getHours();

    // let currentDate = new Date();
    let timeAndDay = document.querySelector(".timeAndDay");
    let greetings = document.querySelector(".greetings");
    let Day = standardDate.getDate();
    let minute = standardDate.getMinutes();
    let months = standardDate.getMonth();
    let Weeks = standardDate.getDay();
    let year = standardDate.getFullYear();
    let TimeHour = standardDate.getHours();
    let nameMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let nameWeeks = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let textCurrentDate = document.querySelector(".current-date");
    textCurrentDate.innerHTML = `${nameMonths[months]} ${Day}, ${year},`;
    // -- END --let variables //

    //--START-- if statement for time that also changes introduction //
    //***** IF ELSE STATEMENT 1 ******//
    if (TimeHour === 0) {
      //minute if statement//
      if (minute < 10) {
        minute = `0${minute}`;
      } //minute if statement--END//
      greetings.innerHTML = `Hey, Early bird! its`;
      timeAndDay.innerHTML = `${nameWeeks[Weeks]},<strong style="font-weight: 700;"> 12: ${minute} am </strong>and its`;
    }
    //***** IF ELSE STATEMENT 2 ******//
    else if (TimeHour < 12) {
      //minute if statement//
      if (minute < 10) {
        minute = `0${minute}`;
      } //minute if statement--END//
      greetings.innerHTML = `Good Morning! Today is`;
      timeAndDay.innerHTML = `${nameWeeks[Weeks]},<strong style="font-weight: 700;"> ${TimeHour}: ${minute} am </strong>and its`;
    }
    //***** IF ELSE STATEMENT 3 ******//
    else if (TimeHour > 17) {
      //minute if statement//
      if (minute < 10) {
        minute = `0${minute}`;
      }

      //minute if statement--END//
      greetings.innerHTML = `Good Evening! Today is`;
      timeAndDay.innerHTML = `${
        nameWeeks[Weeks]
      }, <strong style="font-weight: 700;">${
        TimeHour - 12
      }: ${minute} pm </strong> and its`;
    }
    //***** IF ELSE STATEMENT 4 ******//
    else if (TimeHour === 12) {
      //minute if statement//
      if (minute < 10) {
        minute = `0${minute}`;
      } //minute if statement--END//
      greetings.innerHTML = `Hello There! Today is`;
      timeAndDay.innerHTML = `${nameWeeks[Weeks]}, <strong style="font-weight: 700;">${TimeHour}: ${minute} pm </strong> and its`;
    }
    //***** IF ELSE STATEMENT 5 ******//
    else {
      //minute if statement//
      if (minute < 10) {
        minute = `0${minute}`;
      } //minute if statement--END//
      greetings.innerHTML = `Good Afternoon! Today is`;
      timeAndDay.innerHTML = `${
        nameWeeks[Weeks]
      }, <strong style="font-weight: 700;">${
        TimeHour - 12
      }: ${minute} pm </strong> and its`;
    }

    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    //END--date-time - in each countries//
    let NewIcon = `${value.data.weather[0].icon}`;
    let OldIcon = document.querySelector("#myicon");
    let newTemp = `${value.data.main.temp}`;
    let newHumidity = `${value.data.main.humidity}`;
    newTemp = Math.ceil(newTemp);
    let humid = document.querySelector("#humid");
    let currentDegrees = document.querySelector(".current-degrees");
    currentDegrees.innerHTML = `${newTemp} °C  | ${Math.ceil(
      (newTemp * 9) / 5 + 32
    )} °F`;
    humid.innerHTML = `with a humidity of ${newHumidity}%`;
    //START -- if statement icon //
    if (NewIcon == "03d")
      OldIcon.innerHTML = `<img src="images/03d.png" style="width: 250pt;"/>`;
    else if (NewIcon === "01d") {
      OldIcon.innerHTML = `<img src="images/01d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "02d") {
      OldIcon.innerHTML = `<img src="images/02d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "04d") {
      OldIcon.innerHTML = `<img src="images/04d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "09d") {
      OldIcon.innerHTML = `<img src="images/09d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "10d") {
      OldIcon.innerHTML = `<img src="images/10d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "11d") {
      OldIcon.innerHTML = `<img src="images/11d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "13d") {
      OldIcon.innerHTML = `<img src="images/13d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "50d") {
      OldIcon.innerHTML = `<img src="images/50d.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "01n") {
      OldIcon.innerHTML = `<img src="images/01n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "02n") {
      OldIcon.innerHTML = `<img src="images/02n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "03n") {
      OldIcon.innerHTML = `<img src="images/03n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "04n") {
      OldIcon.innerHTML = `<img src="images/04n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "09n") {
      OldIcon.innerHTML = `<img src="images/09n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "10n") {
      OldIcon.innerHTML = `<img src="images/10n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "11n") {
      OldIcon.innerHTML = `<img src="images/11n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "13n") {
      OldIcon.innerHTML = `<img src="images/13n.png" style="width: 250pt;"/>`;
    } else if (NewIcon === "50n") {
      OldIcon.innerHTML = `<img src="images/50n.png" style="width: 250pt;"/>`;
    }
  }
  //END -- if statement icon //

  // --- END -- Function on Search field//

  let SearchInput = document.querySelector("#SearchingInput");
  let SearchVal = SearchInput.value;
  let FirstLet = SearchVal.slice(0, 1);
  let CapFirstName = FirstLet.toUpperCase();
  let newCity = document.querySelector(".current-country");

  //-- START -- Weather API//
  let countryName = `${SearchVal}`;
  let unit = "metric";
  let addressUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=dcd07d1aa5fa314f984ce1fb0e330deb&units=${unit}`;
  axios.get(addressUrl).then(realData);
  //-- END -- Weather API//

  if (SearchVal === "") {
    alert(`Please Enter any Place :)`);
  } else {
    newCity.innerHTML = `in ${CapFirstName}${SearchVal.slice(
      1,
      SearchVal.length
    ).toLowerCase()},`;
  }
}

let form = document.querySelector("#cityForm");
form.addEventListener("submit", search);

//--START -- Current Button. detects your current location//
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(myPosition);
}

function myPosition(thisPosition) {
  let longitude = thisPosition.coords.longitude;
  let latitude = thisPosition.coords.latitude;
  let unit = "metric";
  let MyLocationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dcd07d1aa5fa314f984ce1fb0e330deb&units=${unit}`;
  axios.get(MyLocationApiUrl).then(MyNewDegrees);
}

function MyNewDegrees(theDegrees) {
  let myTemperature = theDegrees.data.main.temp;
  let myHumidity = theDegrees.data.main.humidity;
  let myCityNewName = theDegrees.data.name;
  let myCountryNewName = theDegrees.data.sys.country;
  let humid = document.querySelector("#humid");
  let currentDegrees = document.querySelector(".current-degrees");
  let newCity = document.querySelector(".current-country");
  currentDegrees.innerHTML = `${myTemperature} °C  | ${Math.ceil(
    (myTemperature * 9) / 5 + 32
  )} °F`;
  humid.innerHTML = `with a humidity of ${myHumidity}%`;
  newCity.innerHTML = `in ${myCountryNewName}, ${myCityNewName}`;
}

let currentButton = document.querySelector("#currentButton");
currentButton.addEventListener("click", getCurrentPosition);
