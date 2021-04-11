import News from './News'

export const NewsCollection = ({newsCollection, onToggle}) => {
    
    return (
    <div>
        {newsCollection.map((news) => (
                <News
                key ={news.id}
                news ={news}
                onToggle ={onToggle} />
                ))}
            
     </div>
    )
}

export default NewsCollection