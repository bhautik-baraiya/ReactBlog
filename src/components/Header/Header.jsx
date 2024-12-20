import React from 'react'
import { Container, Logo, LogoutBtn } from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: '/add-posts',
      active: authStatus
    }
  ]

  return (
    <div className="flex justify-center items-center backdrop-blur-2xl mt-3 ">
      <header className=' py-3 border-2 rounded-full border-black w-[60%] bg-[#c0c9ff]'>
        <Container>
          <nav className='flex justify-center items-center w-[100%] h-[100%] '>
            <div className="w-[10%]  mr-4 pl-5">
              <Link to="/">
                <Logo width='80px' />
              </Link>
            </div>
            <ul className='w-[50%] h-[100%] ml-auto  flex justify-center items-center'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className=''>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='flex justify-center items-center py-2 px-3 duration-200 hover:bg-blue-100 rounded-full '
                    >{item.name}</button>
                  </li>
                ) : null
              )}
            </ul>

            {authStatus && (
              <li className='w-[20%] inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                <LogoutBtn />
              </li>
            )}
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header

