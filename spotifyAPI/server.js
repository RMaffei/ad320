require('dotenv').config(); // Load environment variables from .env file

const http = require('http');
const url = require('url');
const fetch = require('node-fetch');

const port = process.env.PORT || 3000;
const token = process.env.SPOTIFY_ACCESS_TOKEN;

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === '/recommendations' && query.trackLink) {
    const trackId = getTrackIdFromLink(query.trackLink);
    fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${trackId}&limit=10`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    })
    .catch(err => {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

function getTrackIdFromLink(link) {
  const parts = link.split('/');
  return parts[parts.length - 1];
}

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
