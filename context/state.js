import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'
import _ from 'lodash'

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentMedia, setCurrentMedia] = useState({});
  const [similiarMedia, setSimiliarMedia] = useState([]);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [top, setTop] = useState([]);
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
    latest,
    upcoming,
    top,
    similiarMedia,
    setSimiliarMedia
  }

  useEffect(() => {
    let urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=631627e688738d84a1cae51aa035b23a`;
    let urlLatest = `https://api.themoviedb.org/3/movie/now_playing?api_key=631627e688738d84a1cae51aa035b23a`;
    let urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=631627e688738d84a1cae51aa035b23a`;
    let urlTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=631627e688738d84a1cae51aa035b23a`;

    const requestPopular = axios.get(urlPopular);
    const requestLatest = axios.get(urlLatest);
    const requestUpcoming = axios.get(urlUpcoming);
    const requestTop = axios.get(urlTop);

    axios
      .all([requestPopular, requestLatest, requestUpcoming, requestTop])
      .then(axios.spread((...responses) => {

        const popularResults = responses[0].data.results
        const latestResults = responses[1].data.results
        const upComingResults = responses[2].data.results
        const topResults = responses[3].data.results

        const shuffledPopularResults = _.shuffle(popularResults)
        const shuffledLatestResults = _.shuffle(latestResults)
        const shuffledUpComingResults = _.shuffle(upComingResults)
        const shuffledTopResults = _.shuffle(topResults)

        setPopular(shuffledPopularResults);
        setLatest(shuffledLatestResults);
        setUpcoming(shuffledUpComingResults);
        setTop(shuffledTopResults);

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

