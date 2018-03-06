
const channels = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let output = '';
let allBtn = $('#all'),
    online = $('#online'),
    offline = $('#offline');

for(i of channels) {
  $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/'+i+'?callback=?', function(data) {
      viewChannels(data);
    });
};

  
online.on('click', function() {
  $('li.off').hide();
  $('li.on').show();
});

offline.on('click', function() {
  $('li.on').hide();
  $('li.off').show();
});


allBtn.on('click', function() {
  $('li').show();
});

$('#search').keyup(function(){
  let textSearch = $('#search').val();
  let expr = new RegExp(textSearch, 'i');

  for (const li of $('li')) {
    $(li).hide()
    console.log()
    if ($(li).children('.info').children('a').text().search(expr) !== -1) {
      $(li).show()
    }
  }
});

function viewChannels(jsonData) {
  let status = jsonData.status === null ? "off" : "on" ;
  let live = jsonData.status === null ? "offline" : "live" ;
  output += '<li class='+ status +'><span class="isLive '+live+'">'+live+'</span>';
  output += '<div class=placeholder><img src='+jsonData.logo+'></img></div>';
  output += '<div class="info"><a href='+jsonData.url+'>'+ jsonData.name + '</a>';
  if (jsonData.status !== null) {
    output += '<p class="status">'+ jsonData.status+ '</p/>'
  } else {
    output += '<p>currently offline!</p/></div>'     
  }
  output += '</li>';
  $('#channel').html(output);
}
