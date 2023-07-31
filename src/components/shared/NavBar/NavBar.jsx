import { useContext, useState } from "react";
import {
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  const navItems = [
    <>
      <li className="list-none"><Link to='/'>Home</Link></li>
      <li className="list-none"><Link to='/instructors'>Instructor</Link></li>
      <li className="list-none"><Link to='/classes'>Classes</Link></li>
      {user && <li className="list-none"><Link to='/dashboard'>Dashboard</Link></li>}



    </>
  ]


  const handelLogout = e => {
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure to logout ?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout.!'
    }).then((result) => {
        if (result.isConfirmed) {
            logout()
                .then(() => {
                    Swal.fire(
                        'Logged out!',
                        'You are logged out successful.',
                        'success'
                    )
                })
                .catch(err => {
                    Swal.fire(
                        'Error!',
                        err.message,
                        'error'
                    )
                })
        }
    })
}
  
  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto items-center justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-8">
              <img src="https://i.ibb.co/5FRJR1x/Languagenext-Logo.png" width={44} alt="" />
              <div>
                <Link
                  to="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <span>nextLang.io</span>
                </Link>
              </div>
              {/* primary */}
              <ul className="hidden lg:flex gap-8 ">
                {navItems}
              </ul>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="flex items-center gap-10">
                <div className=" flex items-center gap-2">
                  {
                  user ?    <li className="list-none"><Link onClick={handelLogout} className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100" to='/logOut'>LogOut</Link></li>
                      :
                    
                    <li className="list-none"><Link className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100" to='/login'>Login</Link></li>
                  }
                </div>
                <div className=" hidden md:block">
                  {/* Avatar */}
                  {
                                    user && 
                                        <img src={user?.photoURL} className='h-[40px] rounded-full w-[40px]' alt="" />
                                    
                                }
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              {navItems}
            {/* <li><Link>Home</Link></li>
                <li><Link>Home</Link></li>
                <li><Link>Home</Link></li>
                <li><Link>Home</Link></li> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;