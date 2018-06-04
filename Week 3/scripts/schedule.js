
fetch('https://api.spacexdata.com/v2/launches/upcoming')
  .then(result => result.json())
  .then((res) => {
  schedule(res);
})

function schedule(result){
  for(var i = 0; i < result.length; i++){
    console.log(result[i].launch_date_local);
    var container = document.getElementById("schedulecontainer");
    var launches = document.createElement("div");
      launches.className = "col-7";
    var launchHeader = document.createElement("div");
      launchHeader.className = "col-12";
      launchHeader.align = "center";
    var mission = document.createElement("h5");
      mission.innerHTML = "Mission: "+result[i].mission_name;
    var rocket = document.createElement("p")
      rocket.innerHTML = "Rocket: "+result[i].rocket.rocket_name;
    var payload_name = document.createElement("p");
      payload_name.innerHTML = "Payload Name: "+result[i].rocket.second_stage.payloads[0].payload_id;
    var payload_type = document.createElement("p");
      payload_type.innerHTML = "Payload Type: "+result[i].rocket.second_stage.payloads[0].payload_type;
    var launchsite = document.createElement("p");
      launchsite.innerHTML = "LaunchSite: "+result[i].launch_site.site_name_long;
    var launchdate = document.createElement("p");
      launchdate.innerHTML = "Launch Date: "+result[i].launch_date_local;
    var launchcount = document.createElement("div");
      launchcount.className = "col-12";
    var countDisplay = document.createElement("p");
      countDisplay.align = "center";
      countDisplay.className = "daystolaunch";
    var countDate = new Date(result[i].launch_date_utc);
    console.log(countDate.toUTCString());
    var now = new Date().getTime();
    var distance = countDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countDisplay.innerHTML = days+" Days "+hours+" Hours "+"to Launch"; 
    /* Append to container */
    container.appendChild(launches);
    /* Append to the div */
    launches.appendChild(launchHeader);
    launchHeader.appendChild(mission);
    launches.appendChild(rocket);
    launches.appendChild(payload_name);
    launches.appendChild(payload_type);
    launches.appendChild(launchsite);
    launches.appendChild(launchdate);
    launches.appendChild(launchcount);
    launchcount.appendChild(countDisplay);
  }
}
