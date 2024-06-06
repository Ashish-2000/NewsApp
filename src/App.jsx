import ThemeContext from './store/data-context';
import Header from './components/Header';
import News from './components/News';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState({});
  const [category, setCategory] = useState('general');
  


  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_NEWS_API_KEY}&category=${category}`);
      const resData = await response.json();
      setData(resData);
    }
    getData();
  }, [category]); // Add category to the dependency array

  const contextValue = { data };

  return (
    <ThemeContext.Provider value={contextValue}>
      <Header  setCategory={setCategory}   />
      <News />
    </ThemeContext.Provider>
  );
}

export default App;
