
import BannerStack from '../assets/banner-stack.png';
const Banner = () => {
    return (
        <section className='bg-white bg-cover bg-center'>

            <div className='grid grid-cols-2 container mx-auto items-center gap-3'>

            <div className='max-w-2xl p-8 '>
            <h2 className="text-5xl font-bold ">Build Your Ideal <span className='bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span></h2>
            <p className='text-xl py-4 text-gray-500'>Explore frontened,database,and tooling options,<br></br>compare them side by side ,and put together the stack that fits your<br></br> next project.</p>

            <div className="py-7  flex flex-wrap gap-2">
            <button className="btn px-3 rounded-xl bg-linear-to-r from-orange-500 to-pink-500 text-white hover:bg-red-600">Explore technologies</button>
            <button className="btn px-8 rounded-xl border-gray-300 bg-white text-gray-500 ">Learn More</button>
            </div>
            </div>

            <div className="flex justify-center ">
            <img src={BannerStack} alt='' />
            </div>
            </div>
            
            
        </section>
    );
};

export default Banner;