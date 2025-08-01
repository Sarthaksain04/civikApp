import React from 'react'

function Feture() {
  return (
   <div className="max-w-4xl mx-auto p-6">
   <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
     🚀 Powerful Blog Features
   </h1>
   
   <div className="space-y-6">
     <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
       <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">
         ✍️ Write & Create
       </h3>
       <p className="text-gray-700 text-center">
         Express your thoughts with intuitive blog creation tools, rich text editor, draft saving, image uploads, and easy publishing with categories and tags.
       </p>
     </div>

     <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
       <h3 className="text-xl font-semibold text-center text-green-800 mb-3">
         📖 Read & Discover
       </h3>
       <p className="text-gray-700 text-center">
         Explore amazing content from writers worldwide. Browse all posts, search by topics and keywords, filter by categories, and get personalized recommendations.
       </p>
     </div>

     <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
       <h3 className="text-xl font-semibold text-center text-purple-800 mb-3">
         ⚙️ Edit & Manage
       </h3>
       <p className="text-gray-700 text-center">
         Full control over your content. Edit published posts anytime, delete unwanted content, manage visibility settings, and track post performance with analytics.
       </p>
     </div>


     <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
       <h3 className="text-xl font-semibold text-center text-yellow-800 mb-3">
         📊 Analytics & Insights
       </h3>
       <p className="text-gray-700 text-center">
         Track your blog's performance with detailed analytics. Monitor views, engagement metrics, reader demographics, and export comprehensive reports.
       </p>
     </div>

     <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
       <h3 className="text-xl font-semibold text-center text-indigo-800 mb-3">
         🎨 Customization
       </h3>
       <p className="text-gray-700 text-center">
         Make your blog uniquely yours. Customize your profile, choose themes, upload avatars and banners, create personalized URLs, and showcase your style.
       </p>
     </div>
   </div>

   <div className="mt-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-lg">
     <h2 className="text-2xl font-bold mb-4">Ready to Start Blogging?</h2>
     
   </div>
 </div>


  )
}

export default Feture