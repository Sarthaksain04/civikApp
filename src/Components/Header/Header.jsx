import React from 'react'
import {Container,Logo,LogoutBtn,} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate()
  const navItem=[
  {
      name:'Home',
      slug:"/",
      active:true
  },
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
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]




  return (
    <header className="shadow sticky z-60 top-0 bg-white" >
        <Container>
            <nav className='flex h-18'>
                <div className=' mr-4'>
                    <Link to='/'>
                    <Logo width='70px'/>

                    </Link>
                </div>
                <ul className=' flex ml-auto'>
                    {navItem.map((item)=>
                    item.active ? (
                        <li key={item.name}>
                            <button onClick={()=>navigate(item.slug)}
                            className='inline-bock px-8 py-5 duration-200  text-blue-700 font-bold '
                            >{item.name}
                            </button>
                        </li>
                    ) :null
                    )}
                    {authStatus && (
                        <li  className='inline-bock px-8 py-3 duration-200  text-blue-700 font-bold'>
                            <LogoutBtn/>
                        </li>
                    )}

                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header