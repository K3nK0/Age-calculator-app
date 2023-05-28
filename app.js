// Attend que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {

    const inputDay = document.getElementById('input-day')
    const labelDay = document.getElementById('label-day')
    const inputMonth = document.getElementById('input-month')
    const labelMonth = document.getElementById('label-month')
    const inputYear = document.getElementById('input-year')
    const labelYear = document.getElementById('label-year')

    // Sélectionne le formulaire
    const form = document.querySelector('form');
    
    // Ajoute un écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Empêche le rechargement de la page
      
      // Récupère les valeurs saisies par l'utilisateur
      let day = parseInt(document.getElementById('day').value);
      let month = parseInt(document.getElementById('month').value);
      let year = parseInt(document.getElementById('year').value);
      
      // Vérifie si les valeurs sont valides
      if (day === "") {
        
      }
      
      // Récupère la date actuelle
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      let currentMonth = currentDate.getMonth() + 1; // Les mois vont de 0 à 11
      let currentDay = currentDate.getDate();
      
      // Calcul de l'âge en années, mois et jours
      let ageYears = currentYear - year;
      let ageMonths = currentMonth - month;
      let ageDays = currentDay - day;
      
      // Si le mois actuel est inférieur au mois de naissance, ajuste l'âge en conséquence
      if (currentMonth < month) {
        ageYears--;
        ageMonths = 12 - (month - currentMonth);
      }
      
      // Si le mois actuel est égal au mois de naissance, vérifie le jour actuel
      if (currentMonth === month) {
        // Si le jour actuel est inférieur au jour de naissance, ajuste l'âge en conséquence
        if (currentDay < day) {
          ageYears--;
          ageMonths = 11;
          let daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
          ageDays = daysInPreviousMonth - (day - currentDay);
        } else if (currentDay === day) {
          // Si le jour actuel est égal au jour de naissance, affiche un message spécial
          alert('Joyeux anniversaire !');
        }
      }
      
      // Affiche les résultats dans l'interface utilisateur
      document.getElementById('years').textContent = ageYears;
      document.getElementById('months').textContent = ageMonths;
      document.getElementById('days').textContent = ageDays;
    });
  });
  