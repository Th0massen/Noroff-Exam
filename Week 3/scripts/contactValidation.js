function validate(){
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var feedback = document.getElementById("comment").value;
    if(name == ""){
        document.getElementById("name").style.color = "red";
    } else {
        document.getElementById("name").style.color = "green";
    }
    if(feedback == ""){
        document.getElementById("comment").style.color = "red";
    } else {
        document.getElementById("comment").style.color = "green";
    }
    validateEmail(mail);
}
function validateEmail(mail){
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(mail == ""){
        document.getElementById("email").style.color = "red";
    }else if(pattern.test(email.value)) {
        document.getElementById("email").style.color = "green";
        display();
        return true;
    } else{
        document.getElementById("email").style.color = "red";
        return false;
    }
}
function display(){
    if(document.getElementById("name").value != "" && document.getElementById("comment").value != ""){
        document.getElementById("show").style.display = "block";
        $("contactModal").modal("hide");
        console.log("Message sent.");
        $('contactModal').on('hidden', function() {
            console.log("modal Cleared");
            clear()
        });
    }
}
