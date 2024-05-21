import { useEffect, useState } from 'react';
import './App.css';
import Headers from './Components/Headers';
import News from './Components/News';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)
  let [loading,setloading]=useState(true)
  let [articles,setaricles]=useState([])
  let [page,setpage]=useState(1)
  let [results, setResults] = useState(0);
  const fetchData=async(page)=>{
    setloading(true)
    const response=await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}&page=${page}&pageSize=20`)
    if(response.ok){
      const data=await response.json()
      console.log(data)
      setloading(false)
      setaricles(data.articles)
      setResults(data.totalResults);
    }
    else{
      console.error("error occured")
    }
  }
  const clickNext=async()=>{
    setpage(page+1)
  }
  const clickPrev=async()=>{
    console.log("prev is clicked")
    setpage(page-1)
  }
  useEffect(()=>{
    fetchData(page)
  },[page])
  return (
    <>
    <Headers/>
    {loading===true ? <div className='loading'></div> :
    <News items={articles} clickNext={clickNext} clickPrev={clickPrev} pageValue={page} results={results}/>}
    </>
  );
}

export default App;
