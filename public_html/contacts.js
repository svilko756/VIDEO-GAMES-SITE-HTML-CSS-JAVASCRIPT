  //Дефиниране на константи с постояннп стойност
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const button = document.getElementById("button");
  //Функция proverka() 
  function proverka() 
  {
     // Проверка дали има въведени данни във form елементите
    if (first.value && last.value && email.value)
    {
      button.disabled = false;  //Работещ бутон
    } 
    else {
      button.disabled = true;  //Неработещ бутон
    }
  }
  first.addEventListener("input", proverka); //Първата константа с addEventListener(чака попълване)
  last.addEventListener("input", proverka); //Втората константа с addEventListener(чака попълване)
  email.addEventListener("input", proverka); //Третата константа с addEventListener(чака попълване)