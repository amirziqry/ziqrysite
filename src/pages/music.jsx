import React from 'react';
import { Link } from 'react-router-dom';

export default function Music() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Music</h1>

      {/* Spotify track embed */}
      <div className="card mb-6">
        <iframe
          title="spotify-track"
          src="https://open.spotify.com/embed/track/2MAxPqGbfcNQVgyci7WeUk?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>

      {/* Spotify album embed #1 */}
      <div className="card mb-6">
        <iframe
          title="spotify-album-1"
          src="https://open.spotify.com/embed/album/1eYJ2HxcC3ARpsd3gfcbHo?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>

      {/* Spotify album embed #2 */}
      <div className="card mb-6">
        <iframe
          title="spotify-album-2"
          src="https://open.spotify.com/embed/album/6dNxU9gXCmIRlZejPKNJAm?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>
    </div>
  );
}
