


function myFunc(){
    alert("You are a true scientist. Keep experimenting!");
}

function hilig(){
    alert("I couldn't agree more!")
}

//function printName(){
//    if (firnam == "" )
//}

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
        alert("You need to type something into the box before submitting");
    }
    else {
        alert("I don't believe that was one of the choices?");
    }
}

function printStars(){
    let rank = document.getElementById('rank').value;
    if(rank<=5 && rank>=1){
    let print = "";
    for (let i = 1; i <= rank; i++){
        print = print + " " + "<img src='images/neutronstar.jpg' width='40px' />";
    }
    document.getElementById('neutrons').innerHTML = print + " Yes, these are neutron stars!!!";
    return;
    }
    else{
        document.getElementById('neutrons').innerHTML = "Please input a valid entry: 1-5."
    }
}

//document.getElementById('sta').addEventListener('click', printStars);

