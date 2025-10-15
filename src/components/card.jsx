import React from 'react'


export function Card({ children, className = '' }) {
return <div className={`card ${className}`}>{children}</div>
}


export function IconLink({ href, children }) {
return (
<a href={href} className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/6 transition">
{children}
</a>
)
}


/* -------------------------
src/pages/Home.jsx
------------------------- */
import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
return (
<div className="container flex flex-col items-center gap-10">
<section className="w-full flex flex-col items-center mt-8">
<img src="/profile.jpg" alt="profile" className="profile-img" />
<h1 className="mt-6 text-4xl font-bold">Amir Ziqry</h1>
<p className="mt-3 hero-bio">Creative developer, copywriter, musician. I blend design, sound and code to build simple, minimal experiences.</p>


<div className="mt-6 flex items-center gap-4">
<Link to="/music" className="btn btn-primary">Music</Link>
<Link to="/kasahara" className="btn btn-primary">Kasahara</Link>
<Link to="/dev" className="btn btn-primary">Software Dev</Link>
</div>
</section>


<section className="w-full">
<h2 className="text-2xl font-semibold mb-4">Featured</h2>
<div className="grid-cols-responsive">
<div className="card">Simple project card 1</div>
<div className="card">Simple project card 2</div>
<div className="card">Simple project card 3</div>
</div>
</section>
</div>
)
}