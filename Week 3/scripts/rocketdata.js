fetch('https://api.spacexdata.com/v2/rockets')
    .then(result => result.json())
    .then((res) => {
    rocketdata(res);
})

function rocketdata(result){
    console.log("Loading JSON...");
    var container = document.getElementById("rocketcontainer");
    var row = document.createElement("div");
        row.className = "row";
    for(var i=0; i<result.length; i++){
        console.log("JSON data loaded");
        var datacontainer = document.createElement("div");
            datacontainer.className = "col-md-6";
        var rocketname = document.createElement("h2");
            rocketname.innerHTML = result[i].name;
            rocketname.align = "center";
        var firstFlight = document.createElement("p");
            firstFlight.innerHTML = "First Launch : " +result[i].first_flight;
        var company = document.createElement("p");
            company.innerHTML = "Company : "+result[i].company;
        var successrate = document.createElement("p");
            successrate.innerHTML = "Success rate : "+result[i].success_rate_pct+"%";
        var description = document.createElement("p");
            description.innerHTML ="Description : "+"<br/>"+result[i].description;
        container.appendChild(row);
        row.appendChild(datacontainer);
        datacontainer.appendChild(rocketname);
        datacontainer.appendChild(company);
        datacontainer.appendChild(firstFlight);
        datacontainer.appendChild(successrate);
        datacontainer.appendChild(description);
    }
}