import React from 'react'
import { NavLink } from 'react-router-dom'


function Link({ to, children }) {
return (
<NavLink
to={to}
className={({ isActive }) =>
`px-3 py-1 rounded-md ${isActive ? 'bg-white/8' : 'hover:bg-white/6'} transition`
}
>
{children}
</NavLink>
)
}


export default function Nav() {
return (
<header className="sticky top-0 z-50 backdrop-blur-sm">
<div className="navbar">
<div className="flex items-center gap-4">
<div className="text-xl font-bold">Amir Ziqry</div>
</div>


<nav className="flex items-center gap-3">
<Link to="/">Home</Link>
<Link to="/music">Music</Link>
<Link to="/kasahara">Kasahara</Link>
<Link to="/dev">Software Dev</Link>
</nav>
</div>
</header>
)
}