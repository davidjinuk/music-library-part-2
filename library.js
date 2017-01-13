var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function() {
      var playlist = '';
    for(var key in library['playlists']){
      playlist += library.playlists[key].id + ': ' + library.playlists[key].name + ' - ' + library.playlists[key].tracks.length + ' tracks\n';
    }
    return console.log(playlist);
  },
  printTracks: function() {
    var tracks = '';
    for (var key in library['tracks']) {
      if (library['tracks'].hasOwnProperty(key)) {
        tracks += library['tracks'][key].id + ': ';
        tracks += library['tracks'][key].name + ' by ';
        tracks += library['tracks'][key].artist + ' (';
        tracks += library['tracks'][key].album + ')';
      }
      tracks += '\n';
    }
    return console.log(tracks);
  },
  printPlaylist: function(playlistId) {
    var output = "";
    var playlistDetail = library["playlists"][playlistId];
    output+=playlistDetail.id+": "+playlistDetail.name+" - "+playlistDetail.tracks.length+" tracks\n";
    for(var x=0; x < playlistDetail.tracks.length; x++){
      output+=library.tracks[playlistDetail.tracks[x]].id+
      ": "+library.tracks[playlistDetail.tracks[x]].name+" by "+library.tracks[playlistDetail.tracks[x]].artist+" ( "+library.tracks[playlistDetail.tracks[x]].album+" )\n";
    }
    return console.log(output);
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    library.playlists[playlistId].tracks.push(trackId);
  },
  uniqueId: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    var uniqueId = library.uniqueId();
    library.tracks[uniqueId] = {
      id: uniqueId,
      name: name,
      artist: artist,
      album: album
    }
    return console.log(library.tracks[uniqueId]);
  },
  addPlaylist: function () {
    var uniqueId = library.uniqueId();

    library.playlists[uniqueId] = {}
    library.playlists[uniqueId].id = uniqueId;
    library.playlists[uniqueId].name = 'name';
    library.playlists[uniqueId].tracks = [];

    return console.log(library.playlists[uniqueId]);
  }
};
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01', 'p02');
library.addTrack('Looping Objects', 'Jim Looper', 'Love Looping');
library.addPlaylist('Jim');

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }