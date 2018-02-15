
const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let output = '';
for(i of channels) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+i+'?callback=?', function(data) {
      output += '<li>';
      output += '<p>'+ data.name + '</p>' ;
      output += '</li>';
      console.log(data.status);
      console.log(output);
      $('#channel').html(output);
    });
};
