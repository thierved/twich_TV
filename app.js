
const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


$.each(channels, function(i) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+channels[i]+'?callback=?', function(data) {
      console.log(data.status);
    });
});
