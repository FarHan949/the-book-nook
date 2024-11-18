import { Link } from 'react-router-dom';
import bgImg from '../../../public/bgImg.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between m-5 bg-indigo-50 w-11/12 border ml-10 rounded-xl items-center'>
            
            <div className='p-7 m-7'>
                <h1 className='text-6xl' style={{fontFamily: "Markazi Text, serif", fontWeight: "bold"}}
                >Books to freshen up <br /> <span>your bookshelf</span></h1>

               <Link to='/listBook'>
                <button 
                className='btn hover:text-black bg-indigo-600 text-white mt-10'> 
                View The List
                </button>
                </Link>
                
            </div>
             
            <img className='p-10 m-10' width={"300px"} src={bgImg} alt="" />
        </div>
    );
};

export default Banner;