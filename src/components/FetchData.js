import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
const FetchData = ({category, country}) => {
    const [data, setData] = useState();
    const scrollContainerRef = useRef(null);

    const fetchData = async () => {
        try {
            
            let url = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b318bce131434f43b76efc33eb9f5076';
            if (category) {
              const encodedCategory = encodeURIComponent(category);
              url = `https://newsapi.org/v2/top-headlines?country=in&category=${encodedCategory}&apiKey=b318bce131434f43b76efc33eb9f5076`;
            }
            if(country) {
                url = 'https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=b318bce131434f43b76efc33eb9f5076';
            }
            const response = await axios.get(url);
            setData(response.data.articles);
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    
    useEffect( () => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])
    console.log(data)
  return (
    <div className='container my-5'>
      <h3 className='header-tag'><u>TOP HEADLINES</u></h3>
      <div ref={scrollContainerRef} className='cards-container my-3 gap-4 flex flex-row justify-content-center align-items-center'>
        {
            data?.map( (cardData) => {
                return <Card dataObject = {cardData}>
                    </Card>
                })
        }
      </div>
    </div>
  )
}

export default FetchData
