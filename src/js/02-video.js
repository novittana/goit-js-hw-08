import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

localStorage.setItem('videoplayer-current-time', seconds);

player.on(
  'timeupdate',
  throttle(function () {
    console.log('played the video!');
  }),
  1000
);

player.setCurrentTime({ seconds });