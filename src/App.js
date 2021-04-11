
import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Buttons from './components/Buttons';
import NewsCollection from './components/NewsCollection'



function App() {
  const [newsCollection, setNewsCollection] = useState([])

  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fectchNews()
      setNewsCollection(newsFromServer)

    }
    
    getNews()
  }, [])

  // fetch news
  const fectchNews = async () => {
    const res = await fetch('http://localhost:5000/news')
    const data = await res.json()

    // console.log(data)
    return data
  }


  // only food
  // const foodNews = () => newsCollection.filter((news) => news.theme === "food"
  //   )


  // click the tag
  const onClick =(type) => {
    console.log('click the tag')
    chooseNews(type)
    
  }

  // chooseNews
  const chooseNews = (type) => {
    console.log(type)
    console.log(newsCollection)
    setNewsCollection(
      newsCollection.filter((news) => news.theme === type)
      )
    console.log(newsCollection)
    //typeNews = 


    
  
    //console.log(typeNews)
  
  }



   // toggle the like button
   const toggleLiked = (id) => {
     setNewsCollection(  
       newsCollection.map((news) =>
         news.id === id ? {...news, like:!news.like} : news
       )
       )


  }

  return (
    <div className="container">
     <Header />
     <div className="tags-container">
     <Buttons text='food' onClick = {onClick} type="food" />
     <Buttons text='society' onClick = {onClick} type= "society"/>
     </div>
     <div  className= "news-container">
      <NewsCollection newsCollection = {newsCollection}
      onToggle = {toggleLiked}
      />
     </div>
    </div>
  );
}

export default App;
