import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../Components";
import { Carousel, TextType, SplitText,Button, } from "../Components/index";
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Blogbg from '../Components/Image/blogBg.png'

function Home() {
   const authStatus=useSelector((state)=>state.auth.status)
    const navigate=useNavigate()
     const navItem=[
     {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
   ]



  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

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
      <div>
        
        <section>
          <div className="flex justify-end ">
             <img 
             src={Blogbg} 
              alt="Blog background" 
             className="w-150 h-127 mask-l-from-0% m-1 rounded-lg shadow-lg"
              />   
          </div>
          <div className="h-500px -mt-80 mx-7 p-6  ">
            <div className="h-20 flex w-fit">
              <SplitText
                text="Login To Read"
                className="text-6xl font-semibold text-center"
                delay={80}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.3}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
               
            </div >
            <div className=" w-fit h-fit ">
              <SplitText
                text="POSTS"
                
                className="text-6xl text-orange-500 font-semibold "
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

            <nav className='flex h-18 m-10 mx-1'>
                    {navItem.map((item)=>
                    item.active ? (
                        <div key={item.name} className="flex m-2 my-2 ">
                            <button onClick={()=>navigate(item.slug)}
                                 className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-all duration-300 w-48 transform hover:-translate-y-1 hover:scale-105"
                            >{item.name}
                            </button>
                        </div>
                    ) :null
                    )}
                
            </nav>
            
          </div>
          
        
          <div>
             

        
          </div>
          <div className="h-screen">
            
            <Carousel
              baseWidth={1000}
              autoplay={true}
              autoplayDelay={4000}
              pauseOnHover={true}
              loop={true}
              round={false}
            >
               <p className="text-6xl  font-bold  my-8">Get your next</p>
             
              <TextType
              
                text={[
                  "chai time snacks idea",
                  "DIY idea",
                   "home decor idea",
                  "outfit idea",
                ]}
               typingSpeed={30}    
                pauseDuration={3200}    
                showCursor={false}
                cursorCharacter="|"
                textColors={[
                  "text-blue-600",
                  "text-pink-500",
                  "text-green-600",
                  "text-purple-500",
                ]}
              />
            </Carousel>
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
