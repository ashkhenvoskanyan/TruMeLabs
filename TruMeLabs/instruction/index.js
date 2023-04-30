// var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     videoId: 'iM75fbGUtDI',
//     playerVars: {
//       'autoplay': 1,
//       'loop': 1,
//       'controls': 0,
//       'mute': 1,
//       'rel': 0,
//       'showinfo': 0
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
//   event.target.playVideo();
//   event.target.mute();
//   event.target.setPlaybackQuality('hd720');
// }

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.ENDED) {
//     player.playVideo();
//   }
// }
