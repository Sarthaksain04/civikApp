import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../Components";
import TextType from "../Animation/TextType";
import CircularGallery from "../Animation/CircularGallery";
import Carousel from "../Animation/Carousel";


function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="">
        <section>
         <Carousel
  baseWidth={1000}
  autoplay={true}
  autoplayDelay={3500}
  pauseOnHover={true}
  loop={true}
  round={false}
>
  <TextType
  text={[                                         
    "Welcome To BLOG ❤️",                           
    "Read, Write and Explore", 
    "Happy blogging, fellow writers!",                                 
  ]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  textColors={[
    "text-blue-600",      
    "text-pink-500",        
    "text-green-600",     
    "text-purple-500",   
  ]}
/>
</Carousel>
                   
            <div style={{ height: "600px", position: "relative" }}>
              <CircularGallery
                bend={0}
                textColor="#000000
"
                borderRadius={0.05}
                scrollEase={0.004}
              />
              
            </div>


          
        </section>
      </div>
    );
  }
  return (
    <div className="w-full py-8 bg-white">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
