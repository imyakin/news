import React from "react";
import { INews } from "../../store/models/models";

interface NewsItemProps {
    item: INews
}

const NewsItem: React.FC<NewsItemProps> = ({item}) => {
    
    return (
    <div className="col s4 m3">
        <div className="card small z-depth-5">
            <div className="card-image">
                <img src={item.urlToImage} alt="newspic" style={{height: '155px'}}/>
                <span style={{fontSize: "10px"}} className="card-title">{item.title}</span>
            </div>
            <div className="card-content">
                <p>{item.description}</p>
            </div>
            <div className="card-action">
                <a href={item.url}>Read more</a>
            </div>
        </div>
    </div>
    )
}

export default NewsItem