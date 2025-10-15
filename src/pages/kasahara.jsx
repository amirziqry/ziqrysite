import React from 'react'


const images = ['/kasahara/1.jpg', '/kasahara/2.jpg', '/kasahara/3.jpg']


export default function Kasahara() {
return (
<div className="container">
<div className="flex items-center gap-6 mb-6">
<img src="/kasaharalogo.png" alt="kasahara" className="kasahara-logo" />
<div>

<p className="text-white/80">A creative clothing brand focused on minimal, thoughtful designs.</p>
</div>
</div>


<h3 className="text-xl font-semibold mb-4">Gallery</h3>
<div className="grid-cols-responsive mb-6">
{images.map((src) => (
<div key={src} className="card">
<img src={src} className="cover" alt="kasahara" />
</div>
))}
</div>
<a href="kasahara.co" target="_blank" rel="noreferrer" className="btn btn-primary">kasahara.co</a>
</div>
)
}