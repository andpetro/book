function booking() {
    var name = document.getElementById("name").value;
    var env = document.getElementById("env").value;
    var product = document.getElementById("product").value; 
    var bw = document.getElementById("bw").value;
    /*var rd = document.getElementById("rd").value;*/
    var rd = document.querySelector('input[name="rd"]:checked').value;
    var access = document.querySelector('input[name="access"]:checked').value;
    var date = document.getElementById("date").value;

    document.getElementById("bookingConfirm").innerHTML = "🟢 Product is booked! Summary:" + "<br />" + "<br />" + 
    "Name: " + name + "<br />" +
    "Environment: " + env + "<br />" +
    "Product: "+ product + "<br />" + 
    "Bandwidth: " + bw + " Mbps <br />" +
    "Remote Device is " + rd + "<br />" +
    "Access Node is " + access + "<br />" +
    "Valid till: " + date;
    

}

function checkname() {
    var name = document.getElementById("name").value;
    var regex = /^[A-Za-z0-9]{1,10}$/;
    if (regex.test(name)) {
        document.getElementById("messagename").style.color = "green";
        document.getElementById("messagename").innerHTML = " Ok"; 
    }
    else {
        document.getElementById("messagename").style.color = "red";
        document.getElementById("messagename").innerHTML = " Max. 10 symbols";
    }
}

function checkbw() {
    var bw = document.getElementById("bw").value;
    if(bw > 1000) {
        document.getElementById("messagebw").style.color = "red";
        document.getElementById("messagebw").innerHTML = " Max. bandwidth is 1000 Mbps";
    }
    else {
        document.getElementById("messagebw").style.color = "green";
        document.getElementById("messagebw").innerHTML = " Ok";
    }
}


function checkdate() {
    var date = document.getElementById("date").value;
    var input = new Date(date)
    var today = new Date();
    var inputd = input.getDate();
    var todayd = today.getDate();
    if((inputd - todayd) > 3) {
        document.getElementById("messagedate").style.color = "red";
        document.getElementById("messagedate").innerHTML = " Max reservation period is 3 days";
    }
    else {
        document.getElementById("messagedate").style.color = "green";
        document.getElementById("messagedate").innerHTML = " Ok";
     
}
}
