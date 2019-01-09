// https://randomuser.me/api/
var url = "https://randomuser.me/api";
var image = document.querySelector("#avatar");
var full_name = document.querySelector("#fullname");
var user_name = document.querySelector("#username");
var city = document.querySelector("#city");
var e_mail = document.querySelector("#email");
var button_ = document.querySelector("#btn");
button_.addEventListener("click",function()
     {
  fetch(url).then(function(res){
                  if(!res.ok)
                    {
                      throw Error(404);
                    }
    return res;
                  }).then(function(value)
                         {
    return value.json();
  }).then(function(data)
         { var user = (data.results[0].name.first).charAt(0).toUpperCase()+ (data.results[0].name.first).substring(1) + " " +(data.results[0].name.last).charAt(0).toUpperCase() + (data.results[0].name.last).substring(1);
    full_name.innerHTML = user;
          var new_user_name = data.results[0].login.username;
          user_name.innerHTML = new_user_name;
          var new_email = data.results[0].email;
          e_mail.innerHTML = new_email;
        var new_city = data.results[0].location.city;
          city.innerHTML = new_city;
      var new_url = data.results[0].picture.medium;
          image.src = new_url;
          
  }).catch(function(err)
          {
    console.log("Error in the server !!! Possible cause weak internet or no internet connection",err);
  })
});