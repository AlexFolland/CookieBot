//cookie bot: auto-play-through cookie clicker
// Here, we just find the last stable release and load it.
console.log("### COOKIE clicker BETA - trying to link to latest release"); 
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/repos/prinzstani/CookieBot/releases/latest', false);
xhr.send();
var response = JSON.parse(xhr.responseText);
var latest = response.html_url + '/cookieAutoPlay.js';
latest=latest.replace('github','cdn.rawgit');
latest=latest.replace('/releases/tag','');
console.log("### LOADING FROM " + latest); 
Game.LoadMod(latest);
//Game.LoadMod('https://prinzstani.github.io/CookieBot/cookieAutoPlay.js');