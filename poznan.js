// function validate() {

// var mydata = JSON.parse(login);
//     var liczba = Object.keys(mydata).length
//     for (var i = 0; i < liczba; i++) {
//         var name = document.getElementById('name').value



//         var text = 'Wpisz poprawne hasło';
//         var text1 = '';
//         var check = /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/;


//         if (check.test(name)) {

//             document.getElementById('test').innerHTML = text1;


//         } else {
//             document.getElementById('test').innerHTML = text;
//             console.log('nie')

//             return false;

//         }





//         var email = document.getElementById('email').value

//         var text = 'Wpisz poprawny email';
//         var text1 = '';
//         var check = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

//         if (check.test(email)) {
//             document.getElementById('test').innerHTML = text1;

//         } else {
//             document.getElementById('test').innerHTML = text;
//             return false;
//         }



//         if (mydata[i].password == name && mydata[i].mail == email) {

//             document.querySelector('.wrapper1').style.visibility = 'hidden'
//             document.getElementById('zalogowany').style.visibility = 'visible'
//             document.getElementById('zalogowany').innerHTML = 'Jesteś zalogowany. Witamy'
//             document.getElementById('welcome').style.visibility = 'hidden'
//             document.getElementById('tlo').style.display = 'none'



//             document.getElementById('all').style.visibility = 'visible'



//         }

//     }
//     }








function cityPoz() {

    var mydata = JSON.parse(filmPoz);


    document.getElementById('poznan').style.color = 'red';
    document.getElementById('poznan').style.fontSize = '32px';
    // document.getElementById('miniaturka').style.width='80%';

    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
    var img1 = "<img src=kurier.jpeg>"
    var img2 = "<img src=marwel.jpeg>"
    var img3 = "<img src=ciemno.jpeg>"

    for (var i = 0; i < liczba; i++) {
        if (mydata[i].city == 'Poznań') {
            

            var li = document.createElement('span');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title + " " + "/"
            // // dodaje stylowanie
            // li.style.border = '1px grey solid';

            // // dodaje jakies zdarzenie do nowo utworzonego elementu

            // dodac go do istniejacej listy
            var button = document.querySelector('#jeden');
            button.appendChild(li);

           
            document.getElementById('seans').innerHTML = "Seanse na dzisiaj"


      document.getElementById('kurier').innerHTML = img1
       
        document.getElementById('marwel').innerHTML = img2
         document.getElementById('ciemno').innerHTML = img3



        }

    }
  

}





function kurier() {
    
  document.getElementById('wybranyfilm').innerHTML = " Wybrałeś film: KURIER"
  document.getElementById('kurier').style.opacity = "1"
  document.getElementById('marwel').style.opacity = ".5"
document.getElementById('ciemno').style.opacity = ".5"
var kup=document.getElementById('kup')
kup.addEventListener("click", function(){
    document.getElementById('marwel').style.visibility = "hidden"
    document.getElementById('ciemno').style.visibility = "hidden"
   
    document.querySelector('.wrapper1').style.visibility =  "visible"
    document.getElementById("div2").style.visibility = "hidden"
})






}

function marwel() {
    document.getElementById('wybranyfilm').innerHTML = " Wybrałeś film: KAPITAN MARVEL"
    document.getElementById('marwel').style.opacity = "1"
    document.getElementById('kurier').style.opacity = ".5"
         document.getElementById('ciemno').style.opacity = ".5"
}

function ciemno() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: CIEMNO PRAWIE NOC"
    document.getElementById('ciemno').style.opacity = "1"
    document.getElementById('marwel').style.opacity = ".5"
         document.getElementById('kurier').style.opacity = ".5"
}


  








function cinemaPoznan() {

    // ?sprawdzamy ile mamy obiektów
    // var liczba = Object.keys(mydata).length


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
            
        tablica[i][j] = img + i + "/" + j 
        
        
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
                var liczba=sum/15;
                if(liczba>1){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2= "Rezerwuje te miejsca"
                    var napis3=""
                }
                else if(liczba==0){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis3= "Wybierz miejsce"
                    var napis2=""
                  
                }


                else{
                    var napis1= "Wybrałeś" + " " + liczba + " " + "miejsce" 
                    var napis2= "Rezerwuje to miejsce"
                    var napis3=""
                }
               
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = " + sum + "zł" + " " +napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = " + sum + "zł"+ " " +napis1;
                document.getElementById("kup").innerHTML = napis2
                document.getElementById("miejscezero").innerHTML = napis3
                document.getElementById("wrapper1").style.visibility = "visible"
            } else {
        
                element.style.backgroundColor = "red"
                
               
               
                sum = sum + 15;
                var liczba=sum/15;
                if(liczba>1){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2= "Rezerwuje te miejsca"
                    var napis3=""
                }
                else if(liczba==0){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis2=""
                    var napis3= "Wybierz miejsce"
                   

                }


                else{
                    var napis1= "Wybrałeś" + " " + liczba + " " + "miejsce" 
                    var napis2= "Rezerwuje to miejsce"
                    var napis3=""
                }
               
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = " + sum + "zł" + " " +napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = " + sum + "zł"+ " " +napis1;
                document.getElementById("kup").innerHTML = napis2
                document.getElementById("miejscezero").innerHTML = napis3
               
            
               
            
            
            }

            


         
           
           
            document.getElementById("napis").style.visibility = "hidden";
            // document.getElementById("cena").style.fontSize="1.3em"
            // var podsuma=document.getElementById("podsuma")
            // podsuma.addEventListener("click", function () {
            //    document.getElementById('danedopodsumy').innerHTML=sum
            // })
        })

    })
    
    
}

