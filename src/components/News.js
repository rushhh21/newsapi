import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import Load from "./Load";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [isLoad, setIsLoad] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const getData = async () => {
        setIsLoad(true);
        let newsURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&pageSize=${pageSize}&category=${props.category}&page=${page}`;
        let getDate = await fetch(newsURL);
        let jsonData = await getDate.json();
        setIsLoad(false);
        setArticles(jsonData.articles);
        setTotalResults(jsonData.totalResults);
    }

    useEffect(() => {
        return async () => {
            getData();
        };
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    const capitalizeWord = (data) => {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }

    return (
        <>
            <div className="container mt-5">
                <h3 className="text-center mb-4 text-dark">
                    News App - Top {capitalizeWord(props.category)} Headlines
                </h3>
                {isLoad && <Load />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Load />}
                        scrollableTarget="scrollableDiv"
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            {articles.map((e, index) => {
                                return (
                                    <CardItem
                                        key={index}
                                        title={e.title && e.title.slice(0, 55) + "..."}
                                        desc={e.description && e.description.slice(0, 115) + "..."}
                                        imgUrl={e.urlToImage}
                                        newsApi={e.url}
                                    />
                                );
                            })}
                        </div>
                    </InfiniteScroll>

            </div>
        </>
    );
};

export default News;
