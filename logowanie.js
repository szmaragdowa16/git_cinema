

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
    
            } else  {
                document.getElementById('test').innerHTML = text;
                return false;
            }
    
    
    
            if (mydata[i].password == name && mydata[i].mail == email) {
                var img4 = "<img src=emotka.png>"


                document.querySelector('.wrapper1').style.visibility = 'hidden'
                document.getElementById('zalogowany').style.visibility = 'visible'
                document.getElementById('zalogowany').innerHTML = img4 + " <br>" + " cdn..."
                document.getElementById('zalogowany').style.fontSize='38px';
               
               
                document.getElementById('welcome').style.visibility = 'hidden'
                document.getElementById('tlo').style.display = 'none'
    
    
    
                document.getElementById('all').style.visibility = 'visible'
    
    
    
            }
            else{
                var text= "Nie ma Cię w bazie użytkowników,<br> albo wprowadziłeś nieprawidłowy e-mail";
                document.getElementById('test').innerHTML = text;
             
            }
    
        }
        }
       
        