import React from 'react'
import { useParams } from 'react-router-dom'


export default function Release() {
const { slug } = useParams()


// In production you'd fetch release data by slug. Here we show a template.
return (
<div className="container">
<div className="card">
<h1 className="text-2xl font-bold mb-2">{slug.replace('-', ' ')}</h1>
<p className="text-white/80 mb-4">Choose a platform to listen:</p>
<div className="flex gap-3">
<a href="#" className="btn btn-primary">Spotify</a>
<a href="#" className="btn btn-primary">Apple Music</a>
<a href="#" className="btn btn-primary">Bandcamp</a>
</div>
</div>
</div>
)
}
