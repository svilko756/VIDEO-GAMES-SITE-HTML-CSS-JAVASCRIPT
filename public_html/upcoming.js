function f1() //Функция f1()
{     
    //Създаване на три промелива (въпроса) с user input
    let question_1 = prompt("Коя е последната ,която сте играли: ");
    let question_2 = prompt("Коя е първата видеоигра,която сте играли: ");
    let question_3 = prompt("Кой е ти е любимият жанр видеогри: ");
    
    //if statemnt за празни отговори
    if ((question_1 === null || question_1 === "") || 
    (question_2 === null || question_2 === "") || 
    (question_3 === null || question_3 === ""))
    {
        document.getElementById("wtext").innerHTML="Моля въведете коректни данни"; //Текст след if
    }
    else //else за отговор
    {
        document.getElementById("wtext").innerHTML="Това е интересно.Вижте най-очакваните премиери през 2026г."; //Текст след else
    }
    
}

