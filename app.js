
const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let output = '';
for(i of channels) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+i+'?callback=?', function(data) {
    viewChannels(data);
    });
};


function viewChannels(jsonData) {
  output += '<li><span class="live">live</span>';
  output += '<div class=placeholder><img src='+jsonData.logo+'></img></div>';
  output += '<div class="info"><a href='+jsonData.url+'>'+ jsonData.name + '</a>';
  if (jsonData.status !== null) {
    output += '<p class="status">'+ jsonData.status+ '</p/>'
  } else {
    output += '<p class="status">currently offline!</p/></div>'
  }
  output += '</li>';
  $('#channel').html(output);
}
