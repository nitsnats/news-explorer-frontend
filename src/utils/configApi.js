// const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://api.news.nitsnats.mooo.com'; //api back-end

// export const BASE_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://api.news.nitsnats.mooo.com'
//     : 'http://localhost:3000';

const INITIAL_CARDS = 3;
const PAGE_SIZE = 100;
const SEARCH_INTERVAL = 7 * 24 * 3600 * 1000;
// const API_KEY = '6b802b3ca0f849d3b738eec7946ca745'; // API KEY 
// const API_KEY = '3649f523c46a46e0b39915c4d16a74a5';
const API_KEY = '519603d778664f839e0de1bc540c0217';
const NEWS_URL = 'https://newsapi.org/v2';
const PROXY_URL = 'https://nomoreparties.co/news/v2';

export {
  // BASE_URL,
  PAGE_SIZE,
  INITIAL_CARDS,
  SEARCH_INTERVAL,
  API_KEY,
  NEWS_URL,
  PROXY_URL,
};