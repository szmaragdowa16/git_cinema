
        function cityPila() {
            var mydata = JSON.parse(filmPoz);
        
            // document.getElementById('pila').style.color = 'red';
            // document.getElementById('pila').style.fontSize = '32px';
            // ?sprawdzamy ile mamy obiektów
            var liczba = Object.keys(mydata).length
            var img1 = "<img src= zubrpompik.jpeg>"
            var img2 = "<img src= caleszcze.jpeg>"
            var img3 = "<img src= marwel.jpeg>"
        
        
            for (var i = 0; i < liczba; i++) {
        
                if (mydata[i].city == 'Piła') {
                    var li = document.createElement('span');
                    // wypelniam nowo utworzony element trascia
                    li.innerText = mydata[i].title + " " + "/"
                    // // dodaje stylowanie
                    // li.style.color = 'grey'
        
                    // // dodaje jakies zdarzenie do nowo utworzonego elementu
        
                    // dodac go do istniejacej listy
                    var button = document.querySelector('#jeden');
                    button.appendChild(li);
        
        
        
                    // document.getElementById('kat').innerHTML+= mydata[i].title + " " + ", "
                    document.getElementById('seans').innerHTML = "Seanse na dzisiaj"
                    document.getElementById('zubrpompik').innerHTML = img1
                    document.getElementById('caleszcze').innerHTML = img2
                    document.getElementById('marwel1').innerHTML = img3
                }
        
            }
            return false
        }
        
        function zubrpompik() {
            document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: ZUBR POMPIK"
            document.getElementById('zubrpompik').style.opacity = "1"
  
            document.getElementById('caleszcze').style.display="none"
          document.getElementById('marwel1').style.display="none"
          var kup=document.getElementById('kup')
          kup.addEventListener("click", function(){
              document.getElementById('marwel1').style.visibility = "hidden"
              document.getElementById('caleszcze').style.visibility = "hidden"
          
           
              document.querySelector('.wrapper1').style.visibility =  "visible"
          
              document.getElementById("div2").style.display = "none"
              document.getElementById('rezerwuje').innerHTML="Zaloguj sie, aby kupić bilet/y"
              document.getElementById('kup').style.visibility="hidden"
          })
          
        }
        
        function caleszczescie1() {
            document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: CAŁE SZCZĘŚCIE"
            document.getElementById('caleszcze').style.opacity = "1"
  
            document.getElementById('zubrpompik').style.display="none"
          document.getElementById('marwel1').style.display="none"
          var kup=document.getElementById('kup')
          kup.addEventListener("click", function(){
              document.getElementById('marwel1').style.visibility = "hidden"
              document.getElementById('zubrpompik').style.visibility = "hidden"
          
           
              document.querySelector('.wrapper1').style.visibility =  "visible"
          
              document.getElementById("div2").style.display = "none"
              document.getElementById('rezerwuje').innerHTML="Zaloguj sie, aby kupić bilet/y"
              document.getElementById('kup').style.visibility="hidden"
          })
        }
        
        function marwel1() {
            document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: KAPITAN MARWEL"
            document.getElementById('marwel1').style.opacity = "1"
  
            document.getElementById('caleszcze').style.display="none"
          document.getElementById('zubrpompik').style.display="none"
          var kup=document.getElementById('kup')
          kup.addEventListener("click", function(){
              document.getElementById('zubrpompik').style.visibility = "hidden"
              document.getElementById('caleszcze').style.visibility = "hidden"
          
           
              document.querySelector('.wrapper1').style.visibility =  "visible"
          
              document.getElementById("div2").style.display = "none"
              document.getElementById('kup').innerHTML="Zaloguj sie, aby kupić bilet/y"
          })
        }
        function cinemaPila() {
            var iloscKolumn = 7;
            var iloscWierszy = 5;
            var napis = "";
    var img = "<svg></svg>"
    var tablica = [];
    
    //deklaracja drugiego wymiaru tablicy
    for (var i = 0; i < iloscWierszy; i++) {
        tablica[i] = [];
    }
    //wypełnianie tablicy wartościami
    for (var i = 0; i < iloscWierszy; i++) {
        for (var j = 0; j < iloscKolumn; j++) {
            
        tablica[i][j] = img +i + '/' + j 
        
        
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

    document.getElementById("kwadrat").style.display = "none"

    document.getElementById("div2").innerHTML = napis;
    document.getElementById("napis").innerHTML = "Kliknij i wybierz miejsce";
    document.getElementById("napis").style.fontSize = "1.3em"



    var sum = 0;
 
    var elements = document.querySelectorAll("svg")

    elements.forEach(function (element) {
       
        element.style.height = '60px';
        element.style.width = '60px';

        element.style.border ="solid 1px silver";
        element.style.paddingLe ="10px";
        element.style.backgroundColor = 'transparent';

        element.addEventListener("click", function () {
            if (element.style.backgroundColor == "red") {
                element.style.backgroundColor = "transparent"
                sum = sum - 15;
                var liczba=sum/15;
                if(liczba>1){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2= "Rezerwuję te miejsca"
                    var napis3=""
                }
                else if(liczba==0){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis3= "Wybierz miejsce"
                    var napis2=""
                  
                }


                else{
                    var napis1= "Wybrałeś" + " " + liczba + " " + "miejsce" 
                    var napis2= "Rezerwuję to miejsce"
                    var napis3=""
                }
               
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " +" wynosi " + sum + "zł"+'<br>' + " " +napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " +" wynosi " + sum + "zł"+'<br>' + " " +napis1;
                document.getElementById("kup").innerHTML = napis2
                document.getElementById("miejscezero").innerHTML = napis3
                document.getElementById("wrapper1").style.visibility = "visible"
               
            } else {
        
                element.style.backgroundColor = "red"
                
               
               
                sum = sum + 15;
                var liczba=sum/15;
                if(liczba>1){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsca"
                    var napis2= "Rezerwuję te miejsca"
                    var napis3=""
                }
                else if(liczba==0){
                    var napis1= "Wybrałeś" + " " + " " + liczba + " " + "miejsc"
                    var napis2=""
                    var napis3= "Wybierz miejsce"
                   

                }


                else{
                    var napis1= "Wybrałeś" + " " + liczba + " " + "miejsce" 
                    var napis2= "Rezerwuję to miejsce"
                    var napis3=""
                }
               
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł"+'<br>' + " " +napis1;
                document.getElementById("cena").innerHTML = 'Twoja kwota do zapłaty' + " " + " wynosi " + sum + "zł"+'<br>' + " " +napis1;
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

