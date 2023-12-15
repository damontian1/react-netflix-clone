import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'
import _ from 'lodash'

const AppContext = createContext();

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzE2MjdlNjg4NzM4ZDg0YTFjYWU1MWFhMDM1YjIzYSIsInN1YiI6IjU5NTEyNTFhOTI1MTQxMmFjNzAwYzc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i2hI5cCxebjAwBNov88e1TIwUUXfvkAfdgktLxp4c90';
const accountId = "6594727";

const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

export const fetchData = (url) => axios.get(url, config);

export function AppWrapper({ children }) {
  const [currentMedia, setCurrentMedia] = useState({});
  const [similarMedia, setSimilarMedia] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [top, setTop] = useState([]);
  const [myList, setMyList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");

  const contextValue = {
    currentMedia,
    setCurrentMedia,
    visible,
    setVisible,
    query,
    setQuery,
    popular,
    upcoming,
    top,
    myList,
    similarMedia,
    setSimilarMedia
  }

  useEffect(() => {

    let urlPopular = `https://api.themoviedb.org/3/movie/popular`;
    let urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming`;
    let urlTop = `https://api.themoviedb.org/3/movie/top_rated`;
    let urlWatchlist = `https://api.themoviedb.org/3/account/${accountId}/watchlist/tv`;

    const requestPopular = fetchData(urlPopular);
    const requestUpcoming = fetchData(urlUpcoming);
    const requestTop = fetchData(urlTop);
    const requestWatchlist = fetchData(urlWatchlist);

    axios
      .all([requestPopular, requestUpcoming, requestTop, requestWatchlist])
      .then(axios.spread((...responses) => {

        const popularResults = responses[0].data.results.slice(0, 7);
        const upComingResults = responses[1].data.results.slice(0, 7);
        const topResults = responses[2].data.results.slice(0, 7);
        const watchlistResults = responses[3].data.results.slice(0, 7);

        const shuffledPopularResults = _.shuffle(popularResults);
        const shuffledUpComingResults = _.shuffle(upComingResults);
        const shuffledTopResults = _.shuffle(topResults);
        const shuffledwatchlistResults = _.shuffle(watchlistResults);

        setPopular(shuffledPopularResults);
        setUpcoming(shuffledUpComingResults);
        setTop(shuffledTopResults);
        setMyList(shuffledwatchlistResults);

      })).catch(errors => {
        console.log(errors);
      })
  }, [])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

