
function validate(){

    var name= document.getElementById('name').value;
    var text='Wypełnij pole: wpisz imię i nazwisko';
     var text1='';
     var check=/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}\s[a-zA-Z]{2,}$/;

    
     if(check.test(name)){
      document.getElementById('nameinfo').innerHTML=text1;
     
     }else{
        document.getElementById('nameinfo').innerHTML=text;

return false;
      
     }
     
     
     
     var email= document.getElementById('email').value;
    var text='Wpisz poprawny email';
     var text1='';
     var check=/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
      
     if(check.test(email)){
       document.getElementById('emailinfo').innerHTML=text1;
      
     }else{
       document.getElementById('emailinfo').innerHTML=text; 
        return false;
     }


// var info="Formularz został wysłany";
 if (text!==""){
       
// alert(info);
var button = document.querySelector('#button');
// nasluchiwanie na klikniecie w button
button.onclick = function cityPoz() {
            




   
     }

// else{
//         document.getElementById('info').innerHTML='coś';  

//      }
// return true;
//    }


   

function cityPoz() {
    var mydata = JSON.parse(filmPoz);
document.getElementById('poznan').style.backgroundColor='grey';

    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
var img1 = "<img src=kurier.jpeg>"
var img2 = "<img src=marwel.jpeg>"
var img3 = "<img src=ciemno.jpeg>"

    for (var i = 0; i < liczba; i++) {
        if (mydata[i].city == 'Poznań') {
    
            var li = document.createElement('span');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title;
            // // dodaje stylowanie
            li.style.color = 'grey';
            li.style.borderBottomColor = 'grey';
            // // dodaje jakies zdarzenie do nowo utworzonego elementu

            // dodac go do istniejacej listy
            var button = document.querySelector('#jeden');
            button.appendChild(li);


      

            document.getElementById('kurier').innerHTML= img1 
            document.getElementById('marwel').innerHTML= img2
            document.getElementById('ciemno').innerHTML= img3
        }

    }
}



function cityKrak() {
    var mydata = JSON.parse(filmPoz);
    document.getElementById('krak').style.backgroundColor='grey';

    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
    var img1 = "<img src= tomy.jpeg>"
    var img2 = "<img src=jakwytresowac.jpeg>"
    var img3 = "<img src=caleszcze.jpeg>"

    for (var i = 0; i < liczba; i++) {

        if (mydata[i].city == 'Kraków') {


            var li = document.createElement('p');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title;
            // // dodaje stylowanie
            li.style.color = 'grey';
            li.style.borderBottomColor = 'grey';
            // // dodaje jakies zdarzenie do nowo utworzonego elementu

            // dodac go do istniejacej listy
            var button = document.querySelector('#dwa');
            button.appendChild(li)

            // document.getElementById('krak').innerHTML+= mydata[i].title + " " + ", "
            document.getElementById('tomy').innerHTML= img1
            document.getElementById('jakwytresowac').innerHTML= img2
            document.getElementById('caleszczescie').innerHTML= img3

        }

    }

}

function cityKat() {
    var mydata = JSON.parse(filmPoz);
    document.getElementById('kat').style.backgroundColor='grey';

    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
    var img1 = "<img src= corgi.jpeg>"
    var img2 = "<img src= mia.jpeg>"
    var img3 = "<img src= jakwytresowac.jpeg>"

    for (var i = 0; i < liczba; i++) {

        if (mydata[i].city == 'Katowice') {
            var li = document.createElement('p');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title;
            // // dodaje stylowanie
            li.style.color = 'grey';
            li.style.borderBottomColor = 'grey';
            // // dodaje jakies zdarzenie do nowo utworzonego elementu

            // dodac go do istniejacej listy
            var button = document.querySelector('#trzy');
            button.appendChild(li);

            // document.getElementById('kat').innerHTML+= mydata[i].title + " " + ", "
            document.getElementById('corgi').innerHTML= img1
            document.getElementById('mia').innerHTML= img2
            document.getElementById('jakwytresowac1').innerHTML= img3
        }

    }

}

function cityPila() {
    var mydata = JSON.parse(filmPoz);

    document.getElementById('pila').style.color='grey';
    // ?sprawdzamy ile mamy obiektów
    var liczba = Object.keys(mydata).length
var img1 = "<img src= zubrpompik.jpeg>"
    var img2 = "<img src= caleszcze.jpeg>"
    var img3 = "<img src= marwel.jpeg>"


    for (var i = 0; i < liczba; i++) {

        if (mydata[i].city == 'Piła') {
            var li = document.createElement('p');
            // wypelniam nowo utworzony element trascia
            li.innerText = mydata[i].title;
            // // dodaje stylowanie
            li.style.color = 'grey';
            li.style.borderBottomColor = 'grey';
            // // dodaje jakies zdarzenie do nowo utworzonego elementu

            // dodac go do istniejacej listy
            var button = document.querySelector('#cztery');
            button.appendChild(li);



            // document.getElementById('kat').innerHTML+= mydata[i].title + " " + ", "
            document.getElementById('zubrpompik').innerHTML= img1
            document.getElementById('caleszcze').innerHTML= img2
            document.getElementById('marwel1').innerHTML= img3
        }

    }

}

// miejsca kino poznań
function cinemaPoznan() {
  
    // ?sprawdzamy ile mamy obiektów
    // var liczba = Object.keys(mydata).length
    
  
    var iloscKolumn = 10;
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
    document.getElementById("napis").style.fontSize="1.3em"



    var sum = 0;
    var elements = document.querySelectorAll("button")

    elements.forEach(function (element) {
        element.style.height = '60px';
        element.style.width = '60px';
        element.style.backgroundColor = 'transparent';

        element.addEventListener("click", function () {
            if (element.style.backgroundColor == "green") {
                element.style.backgroundColor = "transparent"
                sum = sum - 15;
                document.getElementById("cena").innerHTML = sum;

            } else {
                element.style.backgroundColor = "green"

                sum = sum + 15;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = "+ sum + " zł";

            }
            document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " = "+ sum + " zł";
            document.getElementById("cena").style.paddingBottom="20px"
            document.getElementById("cena").style.fontSize="1.3em"
        })

    })

}

// miejsca kino Kraków
function cinemaKrak() {
  
    // ?sprawdzamy ile mamy obiektów
   
    var iloscKolumn = 7;
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



    var sum = 0;
    var elements = document.querySelectorAll("button")

    elements.forEach(function (element) {
        element.style.height = '20px';
        element.style.width = '40px';
        element.style.backgroundColor = 'transparent';

        element.addEventListener("click", function () {
            if (element.style.backgroundColor == "red") {
                element.style.backgroundColor = "transparent"
                sum = sum - 15;
                document.getElementById("cena").innerHTML = sum;

            } else {
                element.style.backgroundColor = "red"

                sum = sum + 15;
                document.getElementById("cena").innerHTML = sum;
                
            }
            
        })

    })

}
    function cinemaKat() {
        var iloscKolumn = 5;
        var iloscWierszy = 8;
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



        var sum = 0;
        var elements = document.querySelectorAll("button")

        elements.forEach(function (element) {
    element.style.height='20px';
    element.style.width='40px';
    element.style.backgroundColor='transparent';

            element.addEventListener("click", function(){
    if(element.style.backgroundColor=="green"){
    element.style.backgroundColor="transparent"
    sum = sum - 15;
                    document.getElementById("cena").innerHTML = sum;

     }
      else {
                    element.style.backgroundColor = "green"

                    sum = sum + 15;
                    document.getElementById("cena").innerHTML = sum;

      }

                })

            })

        }
        function cinemaPila() {
            var iloscKolumn = 9;
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
    
    
    
            var sum = 0;
            var elements = document.querySelectorAll("button")
    
            elements.forEach(function (element) {
        element.style.height='20px';
        element.style.width='40px';
        element.style.backgroundColor='transparent';
    
                element.addEventListener("click", function(){
        if(element.style.backgroundColor=="green"){
        element.style.backgroundColor="transparent"
        sum = sum - 15;
                        document.getElementById("cena").innerHTML = sum;
    
         }
          else {
                        element.style.backgroundColor = "green"
    
                        sum = sum + 15;
                        document.getElementById("cena").innerHTML = sum;
    
          }
    
                    })
    
                })
    
            }
        
        }
        
    












// działa OK

// function cinemaPoz(){

// let str = '';

// for (let i=0; i<8; i++) {

//     str +='<img src=chear.jpeg>'


//     for (let j=0; j<5; j++) {

//         str +='<img src=chear.jpeg>' 

//     }
//     str += '</br>';

// }

// document.getElementById("div1").innerHTML=str
//     var sum=0;
//         var elements=document.querySelectorAll("img");

//         elements.forEach(function(element){

//             element.addEventListener("click", function() {
//               if (element.style.color=="red")  {
//         element.style.color="black";

//          sum= sum-15;
//          document.getElementById("cena").innerHTML=sum;
//               }


//               else {element.style.backgroundColor="red"

//                    sum=sum+15;
//                    document.getElementById("cena").innerHTML=sum;

//             }

//             })

//         })
//     }

// function cinemaKrak(){

//     let str = '';

//     for (let i=0; i<5; i++) {

//         str +='<img src=chear.jpeg>'


//         for (let j=0; j<5; j++) {

//             str +='<img src=chear.jpeg>' 

//         }
//         str += "\n";
//     }
//     document.getElementById("div1").innerHTML=str
//     var sum=0;
//         var elements=document.querySelectorAll("img");

//         elements.forEach(function(element){

//             element.addEventListener("click", function() {
//               if (element.style.color=="green")  {
//         element.style.color="black";

//          sum= sum-15;
//          document.getElementById("cena").innerHTML=sum;
//               }


//               else {element.style.color="green"

//                    sum=sum+15;
//                    document.getElementById("cena").innerHTML=sum;

//             }

//             })

//         })
//     }




// function cinemaPoz(){
//     for(var j=0;j<10;j++){
//         var para_parent=document.createElement('div');
//         var node_parent = document.createTextNode(j);

//         for (var i=0; i<10; i++){
//             var para=document.createElement('span');
//             var node = document.createTextNode("rz:" + j + "m" + i + " ");  
//             para.appendChild(node);
//             para_parent.appendChild(para);
//         }
//         var element= document.getElementById('div1');
//         element.appendChild(para_parent);
//     }
//     var sum=0;
//     var elements=document.querySelectorAll("div span");

//     elements.forEach(function(element){

//         element.addEventListener("click", function() {
//           if (element.style.color=="green")  {
//     element.style.color="black";

//      sum= sum-15;
//      document.getElementById("cena").innerHTML=sum;
//           }


//           else {element.style.color="green"

//                sum=sum+15;
//                document.getElementById("cena").innerHTML=sum;

//         }

//         })

//     })
// }