const API_KEY = '126cdc8eea974eef92e8a19646046422';
const NEWS_API = 'https://newsapi.org/v2/everything'


export const getNewsList = async (searchingFor, currentPage) => {
    const response = await fetch(`${NEWS_API}?apikey=${API_KEY}&q=${searchingFor}&page=${currentPage}`)
    console.log(response, 1)
    const news = await response.json();
    console.log(news, 2);
    return news;    
}

export const getNew = async idNew => {
    const response = await fetch(`${NEWS_API}?apikey=${API_KEY}&i=${idNew}`);
    const newDetail = await response.json();
    return newDetail;

}