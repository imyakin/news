import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks/hooks";
import { INews } from "../../store/models/models";
import Pagination from "../Pagination/Pagination";
import Preloader from "../Preloader/Preloader";
import NewsItem from "./NewsItem";


const News = () => {
    const {news, isLoading} = useAppSelector(state => state.newsSlice)

    const [currPage, setCurrPage] = useState(1)
    const newsPerPage = 4;
    const pages = [];
    const lastNewsIndex = currPage * newsPerPage;
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const totalNews = news.length
    const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

    for(let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++){
        pages.push(i)
    }

    const nextPage = () => setCurrPage(prev => prev + 1);
    const prevPage = () => setCurrPage(prev => prev - 1);
    const paginate = (pageNumber: number) => setCurrPage(pageNumber)

    return <>
        {isLoading && <Preloader/>}
        {news.length > 1 ? 
        <>
            <div className="container">
                <div className="row">
                    {news && currentNews.map((item: INews) => <NewsItem key={item.url} item={item}/>)}
                </div>
            </div>
            <div className="center-align">
                <Pagination
                    totalNews={totalNews}
                    newsPerPage={newsPerPage}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currPage={currPage}
                />
            </div>
        </> 
        : 
        <h4 className="center-align">Choose the category above</h4>
        }
    </>
    
}

export default News