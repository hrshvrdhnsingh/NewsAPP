import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom';
const Card = (props) => {
    const [result, setResult] = useState(props.dataObject);

    console.log(result);
    useEffect(() => {
      setResult(props.dataObject)
    }, [props.dataObject])
    const buttonHandler = () => {
        // Check if result has a URL before navigating
        if (result && result.url) {
            window.open(result.url, '_blank');
        } else {
          console.error('No URL found in the result');
        }
    };
    
    console.log(result)
    return (
    <div className='card'>
      <img className='image-card gap-1' src={result.urlToImage? (result.urlToImage):('/src/images/news-concept-landing-page_52683-11365.jpg')} alt=''></img>
      <h5>{result.title}</h5>
      <p>{result.description && result.description.length > 100 ? `${result.description.substring(0, 100)}...` : result.description}</p>
      <button className='read-more-btn button type1' onClick={buttonHandler}><span className='btn-text'>Read more</span></button>
    </div>
  )
}

export default Card
