
import Logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <nav className='bg-white sticky top-0 z-50 shadow-md '>
        <div className=' container mx-auto px-4'>
            <div className="flex h-16 items-center justify-between">
            <img src={Logo} alt='' className='h-auto p-3'/>

            <ul className='flex gap-4 items-center justify-center text-black'>
                <li className='text-pink-500' > <a className="link link-hover">Home</a></li>
                <li><a className="link link-hover">Technologies</a></li>
                <li><a className="link link-hover">Projects</a></li>
                <li><a className="link link-hover">About</a></li>
                <li><a className="link link-hover">Contact</a></li>
            </ul>
            <div className="justify-self-end flex items-center gap-3 p-8">
                <button className="btn btn-success rounded-3xl bg-white">Sign In</button>
                <button className="btn btn-error rounded-3xl bg-pink-500">Sign Up</button>
            </div>
            
        </div>
        </div>
        </nav>
    );
};

export default Nav;