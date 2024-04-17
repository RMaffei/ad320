async function getRecommendedTracks() {
  const trackLink = document.getElementById('trackLinkInput').value;
  const response = await fetch(`/recommendations?trackLink=${trackLink}`);
  const data = await response.json();
  const recommendedTracks = data.tracks.map(track => `<li>${track.name} by ${track.artists.map(artist => artist.name).join(', ')}</li>`).join('');
  document.getElementById('recommendedTracks').innerHTML = recommendedTracks;
}