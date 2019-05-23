function validate() {

    var mydata = JSON.parse(login);
        var liczba = Object.keys(mydata).length
        for (var i = 0; i < liczba; i++) {
            var name = document.getElementById('name').value
    
    
    
            var text = 'Wpisz poprawne hasło';
            var text1 = '';
            var check = /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/;
    
    
            if (check.test(name)) {
    
                document.getElementById('test').innerHTML = text1;
    
    
            } else {
                document.getElementById('test').innerHTML = text;
                console.log('nie')
    
                return false;
    
            }
    
    
    
    
    
            var email = document.getElementById('email').value
    
            var text = 'Wpisz poprawny email';
            var text1 = '';
            var check = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    
            if (check.test(email)) {
                document.getElementById('test').innerHTML = text1;
    
            } else {
                document.getElementById('test').innerHTML = text;
                return false;
            }
    
    
    
            if (mydata[i].password == name && mydata[i].mail == email) {
    
                document.querySelector('.wrapper1').style.visibility = 'hidden'
                document.getElementById('zalogowany').style.visibility = 'visible'
                document.getElementById('zalogowany').innerHTML = 'Jesteś zalogowany. Witamy'
                document.getElementById('welcome').style.visibility = 'hidden'
                document.getElementById('tlo').style.display = 'none'
    
    
    
                document.getElementById('all').style.visibility = 'visible'
    
    
    
            }
    
        }
        }
    


function cityKrak() {
    
    var mydata = JSON.parse(filmPoz);
    document.getElementById('krak').style.color = 'red';
    document.getElementById('krak').style.fontSize = '32px';

    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
    var img1 = "<img src= tomy.jpeg>"
    var img2 = "<img src=jakwytresowac.jpeg>"
    var img3 = "<img src=caleszcze.jpeg>"

    for (var i = 0; i < liczba; i++) {

        if (mydata[i].city == 'Kraków') {


            var li = document.createElement('span');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title + " " + "/"
            // // dodaje stylowanie
            // li.style.color = 'grey';

            // // dodaje jakies zdarzenie do nowo utworzonego elementu

            // dodac go do istniejacej listy
            var button = document.querySelector('#jeden');
            button.appendChild(li)

            // document.getElementById('krak').innerHTML+= mydata[i].title + " " + ", "
            document.getElementById('seans').innerHTML = "Seanse na dzisiaj"
            document.getElementById('tomy').innerHTML = img1
            document.getElementById('jakwytresowac').innerHTML = img2
            document.getElementById('caleszczescie').innerHTML = img3

        }
       
    }
    return false
}

function tomy() {
    document.getElementById('wybranyfilm').innerHTML = "TO MY"
}

function jakwytresowac() {
    document.getElementById('wybranyfilm').innerHTML = "JAK WYTRESOWAĆ SMOKA"
}

function caleszczescie() {
    document.getElementById('wybranyfilm').innerHTML = "CAŁE SZCZĘŚCIE"
}

function cinemaKrak() {

    // ?sprawdzamy ile mamy obiektów

    var iloscKolumn = 6;
    var iloscWierszy = 5;
    var napis = "";
    var img = "<button></button>"
    var tablica = [];
    //deklaracja drugiego wymiaru tablicy
    for (var i = 0; i < iloscWierszy; i++) {
        tablica[i] = [];
    }
    //wypełnianie tablicy wartościami
    for (var i = 0; i < iloscWierszy; i++) {
        for (var j = 0; j < iloscKolumn; j++) {
            tablica[i][j] = img + i + "/" + j;
        }
    }
    //odczytywanie tablicy i generowanie napisu  
    for (var i = 0; i < iloscWierszy; i++) {
        for (var j = 0; j < iloscKolumn; j++) {
            napis += tablica[i][j];
        }
        napis += '<br>';
    }
    //wyświetlenie napisu na stronie
    document.getElementById("div2").innerHTML = napis;
    document.getElementById("napis").innerHTML = "Kliknij i wybierz miejsce";
    document.getElementById("napis").style.fontSize = "1.3em"




    var sum = 0;
    var elements = document.querySelectorAll("button")

    elements.forEach(function (element) {
        element.style.height = '60px';
        element.style.width = '60px';
        element.style.backgroundColor = 'transparent';

        element.addEventListener("click", function () {
            if (element.style.backgroundColor == "red") {
                element.style.backgroundColor = "transparent"
                sum = sum - 15;
                document.getElementById("cena").innerHTML = sum;

            } else {
                element.style.backgroundColor = "red"

                sum = sum + 15;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = " + sum + " zł";

            }
            document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = " + sum + " zł";
            document.getElementById("napis").style.visibility = "hidden"
            document.getElementById("kup").innerHTML = "Rezerwuję to miejsce";
            // document.getElementById("cena").style.fontSize="1.3em"
        })

    })

}