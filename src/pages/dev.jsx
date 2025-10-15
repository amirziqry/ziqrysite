import React from 'react'

export default function Dev() {
  return (
    <div className="container">
      <p className="text-white/80">Here's me and my partner Yusuf. We are both Software Engineering students.</p>
      <div className="flex items-center gap-6 mb-6">
        {/* Replace .jpg with your .gif file */}
        <img
          src="/meandyusuf.gif"
          alt="partner animation"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div>
          <p className="text-white/80">
            We build web apps, e-commerce stores, and custom integrations. Focused on clean code, fast UX and maintainability.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Services</h3>
      <div className="grid-cols-responsive mb-6">
        <div className="card">Web App Development</div>
        <div className="card">Landing Pages & Funnels</div>
        <div className="card">E-commerce & Integrations</div>
      </div>

      <a href="mailto:amirziqry8@gmail.com" className="btn btn-primary">
        Contact for Work
      </a>
    </div>
  )
}
