const clock = document.querySelector("#clock");
const today = document.querySelector(".today");

function getNow(){
  const date = new Date();

  // today
  const todayMonth = date.getMonth()+1;
  const todayDate = date.getDate();
  let todayDay;
  switch(date.getDay()){
    case 0:
      todayDay = "일";
      break;
    case 1:
      todayDay = "월";
      break;
    case 2:
      todayDay = "화";
      break;
    case 3:
      todayDay = "수";
      break;
    case 4:
      todayDay = "목";
      break;
    case 5:
      todayDay = "금";
      break;
    case 6:
      todayDay = "토";
      break;
  }
  today.innerText = `${todayMonth}월 ${todayDate}일 ${todayDay}요일`;

  // clock
  let hours, meridiem;
  if(date.getHours()>12){
    hours = String(date.getHours()-12).padStart(2, "0");
    meridiem = "PM";
  }else{
    hours = String(date.getHours()).padStart(2, "0");
    meridiem = "AM";
  };
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

getNow();
setInterval(getNow, 1000);