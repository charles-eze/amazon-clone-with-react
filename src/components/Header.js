import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { NavLink as Link, useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
    // dispatch is not in use, left it here anyways
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory(); 

   const handleAuth = () => {
        if (user) {
            auth.signOut()
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        }
    }

    const username = user?.email; //The ? is called optional chaining. it prevents errors thrown while fetching user details from firebase.
    const shortUname = username?.slice(0, 5) 
     
    return (
        <div className='h-5 md:h-14 w-full flex items-center justify-between bg-black'>
            <div className='flex object-fill w-9 md:w-32 pt-1.5 md:pt-2 md:px-2.5 md:ml-3 md:mr-7 border-black xl:border hover:border-white'>
                <Link
                     to='/' exact>
                    <img
                        to='/' exact
                        className='p-0.5'
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                        alt='Amazon logo' />
                </Link>
            </div>
            <div className='flex h-3 md:h-10 w-2/5 md:w-80 lg:w-3/6 xl:w-7/12 md:items-center '>
                <input 
                    type='text'
                    style={{fontSize: 6}}
                    className='relative md:w-full md:text-base md:h-9 w-full rounded-sm border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent ' />
                <SearchIcon 
                        className='md:text-4xl search-icon relative rounded-r-sm right-3 md:right-9'
                        style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29', fontSize: 12}}/>
            </div>
            <div className='flex text-white -left-24 md:-left-0'>
                <Link to={!user && '/login'}
                    onClick={handleAuth}
                    className='flex flex-col pt-1.5 md:pt-0 pr-2 md:pr-0 lg:pr-2 lg:ml-2.5 lg:px-3 lg:pb-0.5 xl:border border-black hover:border-white'>
                    <span className='md:text-xs md:pt-2 -mb-0.5' style={{fontSize: 5}} >{user ? `Hello, ${shortUname}...` : 'Hello Guest' }</span>
                    <span className='md:text-sm md:font-bold' style={{fontSize: 6, fontWeight: 700}} >{user ? 'Sign Out' : 'Sign In'}</span>
                </Link>
                <Link to={!user ? '/login' : '/orders'}>
                    <div className='flex flex-col pr-2 pt-1.5 md:pt-0 md:ml-2.5 md:px-1 lg:px-3 lg:pb-0.5 xl:border border-black hover:border-white'>
                        <span className='md:text-xs -mb-0.5 md:pt-2' style={{fontSize: 5}} >Returns</span>
                        <span className='md:text-sm md:font-bold' style={{fontSize: 6, fontWeight: 700}}>{'&'} Orders</span>
                    </div>
                </Link>
                <div className='flex pr-1.5 items-center -mt-0.5 md:ml-2.5 md:px-0.5 lg:px-3 lg:py-0 md:mr-3 xl:border border-black hover:border-white'>
                    <Link to='/checkout' >
                        <ShoppingBasketIcon className='md:text-2xl' style={{fontSize: 10}}/>
                        <span className='md:text-sm md:font-bold md:mr-2.5' style={{fontSize: 6, fontWeight: 700}}>{basket?.length}</span>
                    </Link>
                </div>

            </div>
            
            
        </div>
    )
}

export default Header
