import React from 'react'

function ContactUs() {
  return (
    <div> <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Contact Us</h1>

      <p className="mb-8 text-lg">
        Have questions, suggestions, or need help? Reach out to us using the details below. We're here to help!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

        {/* Personal Contact */}
        <div className="bg-white rounded-2xl shadow-md p-6 border">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">📱 Personal Contact</h2>
          <p className="mb-2">
            <span className="font-medium">Phone:</span>{" "}
            <a href="tel:+919123456789" className="text-blue-500 hover:underline">+91 94625XXXXX</a>
          </p>
          <p className="mb-2">
            <span className="font-medium">Email:</span>{" "}
            <a href="mailto:rudra@example.com" className="text-blue-500 hover:underline">rudra@example.com</a>
          </p>
          <p className="mb-2">
            <span className="font-medium">LinkedIn:</span>{" "}
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/linkedin</a>
          </p>
        </div>

        {/* Team Contact */}
        <div className="bg-white rounded-2xl shadow-md p-6 border">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">👥 Team Contact</h2>
          <p className="mb-2">
            <span className="font-medium">Support Email:</span>{" "}
            <a href="mailto:team.support@yourstartup.com" className="text-green-600 hover:underline">team.support@blog.com</a>
          </p>
          <p className="mb-2">
            <span className="font-medium">Feedback Email:</span>{" "}
            <a href="mailto:feedback@yourstartup.com" className="text-green-600 hover:underline">feedback@blog.com</a>
          </p>
          <p className="mb-2">
            <span className="font-medium">Instagram:</span>{" "}
            <a href="https://www.instagram.com/yourteamhandle" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">@yourteamhandle</a>
          </p>
        </div>

      </div>

      <div className="bg-gray-50 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">📬 Want to Drop Us a Message?</h3>
        <p className="text-gray-600">
          You can also use the <a href="/help" className="text-blue-500 underline">Help Page</a> or reach us on social platforms. We respond within 24–48 hours.
        </p>
      </div>
    </div></div>
  )
}

export default ContactUs