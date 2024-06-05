import  { useContext } from 'react';
import ThemeContext from '../store/data-context';
import newsImg from '../assets/newsImg.jpeg';

export default function Card() {
    const { data } = useContext(ThemeContext);
    const dispData = data.articles;
   

    return (
        <div>
            <div className=' flex flex-wrap justify-center list-none'>
                {dispData ? (
                    dispData.map((news, index) => (
                        <li className='hover:p-4 hover:bg-sky-300 m-3 center text-stone-900 max-w-sm rounded overflow-hidden shadow-2xl p-2 ' key={index}>
                            <img className='p-2 h-[15rem] w-full' src={news.urlToImage ? news.urlToImage : newsImg}  />
                            <h2 className='font-bold text-lg'>{news.title.slice(0,30)}...</h2>
                            <p>{news.description ? news.description.slice(0, 90) : 'Stay updated with top headlines, breaking news, and in-depth stories from around the world.'}...</p>
                            <a href={news.url} target="_blank">
                            <button  className='rounded p-2 bg-red-600 text-stone-100 my-2 hover:bg-red-700'>Read More</button>                        
                            </a></li>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
