import React, { useState, useEffect } from 'react';
import AppwriteService from '../appwrite/config';
import { Container, PostCard } from '../Components';

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AppwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap gap-4 justify-center">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] p-2"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;