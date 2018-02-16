
const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let output = '';
for(i of channels) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+i+'?callback=?', function(data) {
      output += '<li>';
      output += '<div class=placeholder><img src='+data.logo+'></img></div>';
      output += '<div class="info"><a href='+data.url+'>'+ data.name + '</a>';
      if (data.status !== null) {
        output += '<p class="status">'+ data.status+ '</p/>'
      } else {
        output += '<p class="status">currently offline!</p/></div>'
      }
      output += '</li>';
      console.log(data);
      $('#channel').html(output);
    });
};
