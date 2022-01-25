const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const age = getInputNumberValue("age");
  const gender = getSelectedValue("gender");
  const activityLevel = getSelectedValue("activity__level");

  const basal = Math.round(
    gender === 'female'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  );

  const maintenance = Math.round(basal * Number(activityLevel));
  const gainWeight = maintenance + 450;
  const loseWeight = maintenance - 450;

  document.getElementById("outBasal");
  outBasal.innerHTML = "Seu metabolismo basal é de " + basal  + " calorias";;

  document.getElementById("outMaintenance");
  outMaintenance.innerHTML = "Para manter peso você precisa consumir em média " + maintenance + " calorias" ;

  document.getElementById("outLoseweight");
  outLoseWeight.innerHTML = "Para perder peso você precisa consumir em média " + loseWeight + " calorias" ;

  document.getElementById("outGainWeight");
  outGainWeight.innerHTML = "Para ganhar peso você precisa consumir em média " + gainWeight + " calorias" ;
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
