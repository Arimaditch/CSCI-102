function formValidate(){
    // alert("form validated")

    if(document.forms[0].name.value == ""){
        alert("Name must not be empty!")
        document.forms[0].name.style.border = "2px solid red"
        return false;
    }

    else{
        alert("Form information is valid")
        return true;
    }
}