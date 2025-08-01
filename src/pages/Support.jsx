import React from 'react'

function Support() {
  return (
     <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Customer Support</h1>

      <p className="text-lg mb-8">
        Our support team is here to assist you with any issues, feedback, or questions you have.
        Reach out anytime — we usually respond within 24 hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Support Channels */}
        <div className="bg-white border rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">📞 Support Channels</h2>
          <ul className="space-y-2">
            <li><strong>Email:</strong> <a href="mailto:support@yourstartup.com" className="text-purple-500 hover:underline">support@yourstartup.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919876543210" className="text-purple-500 hover:underline">+91 98765 XXXXX</a></li>
            <li><strong>Live Chat:</strong> Available 10 AM – 6 PM IST</li>
            <li><strong>WhatsApp Support:</strong> <a href="https://wa.me/91987654XXXX" target="_blank" rel="noreferrer" className="text-purple-500 hover:underline">Message Us</a></li>
          </ul>
        </div>

        {/* Response & Timings */}
        <div className="bg-white border rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">⏰ Response Time</h2>
          <p className="mb-2">✅ Standard Queries: <strong>Within 12–24 hours</strong></p>
          <p className="mb-2">⚡ Urgent Issues: <strong>Within 2–4 hours (Weekdays)</strong></p>
          <p className="mb-2">🌐 Weekend Support: Available for critical issues only</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Still Need Help?</h3>
        <p className="text-gray-700">
          You can raise a ticket by emailing us or contacting us via WhatsApp. We’re always ready to help you!
        </p>
      </div>
    </div>
  )
}

export default Support