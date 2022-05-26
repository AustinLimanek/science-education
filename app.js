
function myFunc(){
    alert("You are a true scientist. Keep experimenting!");
}

function hilig(){
    alert("I couldn't agree more!")
}

function submit(){
    if (document.getElementById('scisub').value == "physics") {
        alert("I agree, this is my absolute favorite subject");
    }
    else if (document.getElementById('scisub').value == "chemistry"){
        alert("Due to the property of spin, particles take up non-zero volume");
    }
    else if (document.getElementById('scisub').value == "biology"){
        alert("Vaccines are synthesized by deeply understanding both biology and chemistry");
    }
    else if (document.getElementById('scisub').value == "geology"){
        alert("Sometimes confused with geography, but the two go hand in hand due to mountain ranges and rivers often defining the borders between countries");
    }
    else if (document.getElementById('scisub').value == ""){
        alert("You need to type something into the box before submitting")
    }
    else {
        alert("I don't believe that was one of the choices?");
    }
}