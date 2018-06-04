    
fetch('http://api.open-notify.org/astros?format=json')
    .then(result => result.json())
    .then((res) => {
    listPeople(res);
})

function listPeople(result){
    for(var i = 0; i < result.people.length; i++){
        var infoContainer = document.getElementById("peopleinspace");
        var people = document.createElement("div");
            people.className = "people";
            infoContainer.appendChild(people);
        var name = document.createElement("h4");
            name.innerHTML = "Name: "+result.people[i].name;
            people.appendChild(name);
        var craft = document.createElement("p");
            craft.innerHTML = "Craft: "+result.people[i].craft;
            people.appendChild(craft);
    }
}
 