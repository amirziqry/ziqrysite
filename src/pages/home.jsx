import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
return (
<div className="container flex flex-col items-center gap-10">
<section className="w-full flex flex-col items-center mt-8">
<img src="/ziqrypic.JPG" alt="profile" className="profile-img" />
<h1 className="mt-6 text-4xl font-bold">Amir Ziqry</h1>
<p className="mt-3 hero-bio">"All work and no play makes Jack a dull boy"</p>


<div className="mt-6 flex items-center gap-4">

</div>
</section>


<section className="w-full">
  <h2 className="text-2xl font-semibold mb-4">Featured</h2>

  <div className="featured-image-container">
    <img
      src="/images/featured.gif"
      alt="Featured Animation"
      className="featured-image"
    />
  </div>
</section>

</div>
)
}