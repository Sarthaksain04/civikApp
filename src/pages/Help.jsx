import React from 'react'

function Help() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Help & Guide</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📌 How to Add a Post</h2>
        <p className="mb-2">
          1. Navigate to the <strong>Add Post</strong> page from the navbar.
        </p>
        <p className="mb-2">
          2. Fill in the title, content, and upload an image if needed.
        </p>
        <p className="mb-2">
          3. Click the <span className="font-semibold text-green-600">Submit</span> button to publish your post.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">✍️ How to Write a Post</h2>
        <p className="mb-2">
          - Be clear and concise. Use paragraphs to separate ideas.
        </p>
        <p className="mb-2">
          - You can use basic formatting like <strong>bold</strong> and <em>italic</em> depending on the editor.
        </p>
        <p className="mb-2">
          - You can also add images to make your post more engaging.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🛠️ How to Edit/Delete a Post</h2>
        <p className="mb-2">
          1. Go to <strong>Your Posts</strong> or <strong>Dashboard</strong>.
        </p>
        <p className="mb-2">
          2. Click the <span className="text-yellow-600 font-medium">Edit</span> or 
          <span className="text-red-600 font-medium"> Delete</span> button below the post you want to modify.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔐 Do I need an account?</h2>
        <p className="mb-2">
          Yes! You must be logged in to add, edit, or delete posts. Visit the 
        </p>
      </section>

     
    </div>
  );
}


export default Help