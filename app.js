// Attend que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {

  // Sélectionne le formulaire
  const form = document.querySelector('form');

  // Récupère la date actuelle
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1; // Les mois vont de 0 à 11
  let currentDay = currentDate.getDate();

  const day = document.getElementById('day');
  const labelDay = document.getElementById('label-day');
  const textErrorDay = document.getElementById('error-day');

  const month = document.getElementById('month');
  const labelMonth = document.getElementById('label-month');
  const textErrorMonth = document.getElementById('error-month');

  const year = document.getElementById('year');
  const labelYear = document.getElementById('label-year');
  const textErrorYear = document.getElementById('error-year');


  // Ajoute un écouteur d'événement pour la soumission du formulaire
  form.addEventListener('submit', (e) => {

    document.getElementById('years').innerText = "--";
    document.getElementById('months').innerText = "--";
    document.getElementById('days').innerText = "--";

    textErrorDay.innerText = "";
    labelDay.style.color = "hsl(0, 1%, 44%)";
    day.style.border = "1px solid hsl(0, 1%, 44%)";

    textErrorMonth.innerText = "";
    labelMonth.style.color = "hsl(0, 1%, 44%)";
    month.style.border = "1px solid hsl(0, 1%, 44%)";

    textErrorYear.innerText = "";
    labelYear.style.color = "hsl(0, 1%, 44%)";
    year.style.border = "1px solid hsl(0, 1%, 44%)";

    e.preventDefault(); // Empêche le rechargement de la page
    checkDay();
    checkMonth();
    checkYear();
      
    let checkDayResult = checkDay()
    console.log(checkDayResult);

    if (checkDay() === false && checkMonth() === false && checkYear() === false ){

      const dayValue = parseInt(day.value)
      const monthValue = parseInt(month.value)
      const yearValue = parseInt(year.value)

      // Calcul de l'âge en années, mois et jours
      let ageYears = currentYear - yearValue;
      let ageMonths = currentMonth - monthValue;
      let ageDays = currentDay - dayValue;

      // Si le mois actuel est inférieur au mois de naissance, ajuste l'âge en conséquence
      if (currentMonth < monthValue) {
        ageYears--;
        ageMonths = 12 - (monthValue - currentMonth);
      }

      // Si le mois actuel est égal au mois de naissance, vérifie le jour actuel
      if (currentMonth === monthValue) {
        if (currentDay > dayValue) {
          ageYears--;
          ageMonths = 11;
          let daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
          let remainingDays = daysInPreviousMonth - (dayValue - currentDay);
          ageDays = remainingDays < 0 ? daysInPreviousMonth : remainingDays;
        } else if (currentDay > dayValue) {
          ageDays = currentDay - dayValue;
        } else {
          ageDays = 0;
        }
      }

      // Affiche les résultats dans l'interface utilisateur
      document.getElementById('years').textContent = ageYears;
      document.getElementById('months').textContent = ageMonths;
      document.getElementById('days').textContent = ageDays;

    }

  });

  function checkDay(){
    if(day.value === ""){
      textErrorDay.innerText = "This field is required";
      labelDay.style.color = "hsl(0, 100%, 67%)";
      day.style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else if(!(1 <= day.value && day.value <= 31)){
      textErrorDay.innerText = "Must be a valid day";
      labelDay.style.color = "hsl(0, 100%, 67%)";
      day.style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else{
      const monthValue = parseInt(month.value);
      const yearValue = parseInt(year.value);
      const maxDays = new Date(yearValue, monthValue, 0).getDate();

      if (day.value > maxDays){
        textErrorDay.innerText = "Must be a valid date";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        month.style.border = "1px solid hsl(0, 100%, 67%)";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        year.style.border = "1px solid hsl(0, 100%, 67%)";
      }
      else{
        return false;
      }
    }
  }

  function checkMonth(){
    if(month.value === ""){
      textErrorMonth.innerText = "This field is required";
      labelMonth.style.color = "hsl(0, 100%, 67%)";
      month.style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else if(!(1 <= month.value && month.value <= 12)){
      textErrorMonth.innerText = "Must be a valid month";
      labelMonth.style.color = "hsl(0, 100%, 67%)";
      month.style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else{
      return false;
    }
  }

  function checkYear(){
    if(year.value === ""){
      textErrorYear.innerText = "This field is required";
      labelYear.style.color = "hsl(0, 100%, 67%)";
      year.style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else if(year.value > currentYear){
      textErrorYear.innerText = "Must be a valid year";
      labelYear.style.color = "hsl(0, 100%, 67%)";
      year.style.border = "1px solid hsl(0, 100%, 67%)";
    }
    else{
      return false;
    }
  }

  });
  
  