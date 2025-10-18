import React from 'react';

const NewsCard = ({news}) => {
    console.log(news);
    return (
        <div>
           <h1>{news.title}</h1>
           <img src={news.image_url} alt="" />
        </div>
    );
};

export default NewsCard;