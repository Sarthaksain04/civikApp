// import React from "react";
// import { Link } from "react-router-dom";
// import appwriteService from "../appwrite/config";


// function PostCard({ $id, title, featuredImage }) {
//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
//         <img
//           src={appwriteService.getFilePreview(featuredImage)}
//           alt={title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default PostCard;
import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform border border-gray-100">
        {/* Image container with overlay effect */}
        <div className="relative overflow-hidden h-56">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating read time badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            read
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-6">
          {/* Category badge */}
          <div className="flex items-center mb-3">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
               Post
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-6 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
          
          {/* Read more indicator */}
          <div className="mt-4 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Read more</span>
            <svg 
              className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
    </Link>
  );
}

export default PostCard;

