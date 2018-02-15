
const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let output = '';
for(i of channels) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+i+'?callback=?', function(data) {
      output += '<li>';
      output += '<img src='+data.logo+'></img>';
      output += '<a href='+data.url+'>'+ data.name + '</a>';
      if (data.status !== null) {
        output += '<p>'+ data.status+ '</p/>'
      } else {
        output += '<p>currently offline!</p/>'
      }

      output += '</li>';
      console.log(data);
      $('#channel').html(output);
    });
};
