import React ,{useState,useEffect}from 'react'
import  AppwriteService  from '../appwrite/config'
import { Container,Postform} from '../Components'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const [post,setPosts]=useState(null)
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            AppwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else(
            navigate("/")
        )
    },[slug,navigate])
  
    return post ? (
        <div className='py-8'>
           <Container>
           <Postform post={post}/>
           </Container>
        </div>

    ):null
}


export default EditPost