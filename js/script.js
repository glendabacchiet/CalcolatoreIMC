const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    // impedisce che la pagina sia aggiornata
  event.preventDefault();

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  // calcolo dell'imc
  const bmi = (weight/(height*height)).toFixed(2);

  const value = document.getElementById('value');
  let description = '';
  
  // permette di rimuovere la classe 'hidden' dell'elemtno 'infos'
  document.getElementById('infos').classList.remove('hidden');
  
  // aggiunge la classe 'attention' al valore dell'imc
  value.classList.add('attention');

  if (bmi < 16.5) {
    description = 'Sottopeso severo';
  } else if (bmi >= 16.5 && bmi <= 18.4) {
    description = 'Sottopeso';
  } else if (bmi > 18.5 && bmi <= 24.9) {
    description = 'Normale';
    value.classList.remove('attention');
    value.classList.add('normale');
  } else if (bmi > 25 && bmi <= 30) {
    description = 'Sovrappeso';
  } else if (bmi > 30.1 && bmi <= 34.9) {
    description = 'Obesità primo grado';
  } else if (bmi > 35 && bmi <= 40) {
    description = 'Obesità secondo grado';
  } else {
    description = 'Obesità terzo grado';
  }

  // cambia il punto per un virgola nel risultato
  value.textContent = bmi.replace('.', ',');
  document.getElementById('description').textContent = description;
});
