
    // validation code
    function validation()
    {
        // get the input box value 
        let inputVal = document.getElementById('country').value;
        let innnertextVal = document.getElementById('country').options[document.getElementById('country').selectedIndex].text;
        console.table('Name:- '+ inputVal);
        if(inputVal == '')
        {
            document.getElementById('error').innerText = "Please select a country.";
            document.getElementById('errorRow').style.display = 'block';
            hideError();
            return false;
        }
        else
        {
            document.getElementById('success').innerText = "You selected:- " +  innnertextVal ;
            document.getElementById('successRow').style.display = 'block';
            return true;
        }
    }
    // Hide Error Message 
    function hideError()
    {
        setTimeout(function(){
            document.getElementById('errorRow').style.display ="none";
        }, 5000);
    }

