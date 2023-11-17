import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
import throttle from 'lodash.throttle';

player.on('timeupdate', function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
});

const throttledTimeUpdate = throttle(function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000);

player.on('timeupdate', throttledTimeUpdate);
