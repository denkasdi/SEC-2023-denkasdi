function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_hcudhin";
  const templateID = "template_j7f2uzy";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}





var button = document.getElementById("buttoncareer");
var buttonskills = document.getElementById("buttonskills");
var buttonprojects = document.getElementById("buttonprojects");
var contactmebutton = document.getElementById("contactmebutton");
var buttonclose = document.getElementById("buttonclose");

function opencareer() {
    document.getElementById("career1").style.display = "contents";
    document.getElementById("contactmebutton").style.zIndex = "-1";
}

function closecareer() {
    document.getElementById("career1").style.display = "none";
    document.getElementById("contactmebutton").style.zIndex = "100";
}


function openskills() {
    document.getElementById("section-bar2").style.opacity = "100%";
    document.getElementById("section-bar2").style.zIndex = "101";
    document.getElementById("contactmebutton").style.zIndex = "-10";
}

function closeskills() {
    document.getElementById("section-bar2").style.opacity = "0%";
    document.getElementById("section-bar2").style.zIndex = "97";
    document.getElementById("contactmebutton").style.zIndex = "100";
}


function openprojects() {
    document.getElementById("projects1").style.opacity = "100%";
    document.getElementById("projects1").style.zIndex = "100";
    document.getElementById("contactmebutton").style.zIndex = "-1";
}

function closeprojects() {
    document.getElementById("projects1").style.opacity = "0%";
    document.getElementById("projects1").style.zIndex = "0";
    document.getElementById("contactmebutton").style.zIndex = "100";
}


function contactmefunction() {
    document.getElementById("emailform1").style.opacity = "100%";
    document.getElementById("contactmebutton").style.zIndex = "-1";
}

function closecontactme() {
    document.getElementById("emailform1").style.opacity = "0%";
    document.getElementById("contactmebutton").style.zIndex = "100";
}

function contactme0() {
    document.getElementById("emailform1").style.opacity = "100%";
    document.getElementById("contactmebutton").style.zIndex = "-1";
}

function closecontactme() {
    document.getElementById("emailform1").style.opacity = "0%";
    document.getElementById("contactmebutton").style.zIndex = "100";
}



var aboutmecolor = true;

function aboutme() {
    if (aboutmecolor) {
        document.getElementById("about1").style.backgroundColor = "lightblue";
        aboutmecolor = false;
    } else {
        document.getElementById("about1").style.backgroundColor = "white";
        aboutmecolor = true;
    }
}

const toggle = document.getElementById("toggle");
const slider = document.querySelector(".slider");
const hero1 = document.getElementById("hero1");
const darkmodetext = document.getElementById("darkmodetext");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const profilecard1 = document.getElementById("profilecard1");
const about1 = document.getElementById("about1");
const globalsection = document.getElementById("globalsection");
const selection1 = document.getElementById("selection1");
const descp0 = document.getElementById("descp0");
const descp1 = document.getElementById("descp1");
const descp2 = document.getElementById("descp2");
const about2 = document.getElementById("about2");

toggle.addEventListener("change", function() {
    if (this.checked) {
        slider.style.backgroundColor = "green";
        hero1.style.backgroundColor = "#22303C";
        sectiondarkmode.style.backgroundColor = "#22303C";
        darkmodetext.style.color = "white";
        name1.style.color = "whitesmoke";
        name2.style.color = "whitesmoke";
        profilecard1.style.backgroundColor = "#22303C";
        about1.style.backgroundColor = "#192734";
        globalsection.style.backgroundColor = "#192734";
        selection1.style.backgroundColor = "#2c2836";
        about2.style.backgroundColor = "#2c2836";
        descp0.style.color = "white";
        descp1.style.color = "white";
        descp2.style.color = "white";
    } else {
        slider.style.backgroundColor = "#ccc";
        hero1.style.backgroundColor = "whitesmoke";
        sectiondarkmode.style.backgroundColor = "whitesmoke";
        darkmodetext.style.color = "black";
        name1.style.color = "gray"
        name2.style.color = "gray"
        profilecard1.style.backgroundColor = "whitesmoke";
        about1.style.backgroundColor = "whitesmoke";
        globalsection.style.backgroundColor = "whitesmoke";
        selection1.style.backgroundColor = "lightgray";
        about2.style.backgroundColor = "whitesmoke";
        descp0.style.color = "black";
        descp1.style.color = "black";
        descp2.style.color = "black";

    }
});