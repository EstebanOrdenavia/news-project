import { Container } from "@mui/material"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/loading/loading";
import { NewsList } from "../components/news/New";
import Pagination2 from "../components/pagination/pagination";
import Search from "../components/search/Search";
import { getNewsList } from "../service/news-service";



const NewsPage = () => {

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [countPages, setCountPages] = useState(1);
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('query')) {
            searchPage(page);
        }
    }, [searchParams, page])

    const searchPage = async () => {
        setIsLoading(true);
        const { Search: articles, totalResults } = await getNewsList(searchParams.get('query'), page)
        setNews(articles)
        setCountPages(Math.ceil(parseInt(totalResults)/10));
        setIsLoading(false);
    }

    const onSearch = (searchCriteria) => {
        setSearchParams({query: searchCriteria});
    }

    const onChangePage = (page) => {
        setPage(page);
    }
    
    console.log(news);
    return (
        <Container maxWidth="lg">
            <div>Esta es la home de noticias</div>
            <Search onSearch = { onSearch }/>
            { isLoading && <Loading /> }
            { news && <NewsList news = { news } /> }
            { news && <Pagination2 countPages = { countPages } onChange={ onChangePage } /> }
        
        </Container>
    )
}

export default NewsPage;