import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'
import _ from 'lodash'

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentMedia, setCurrentMedia] = useState({});
  const [similiarMedia, setSimiliarMedia] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [top, setTop] = useState([]);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");

  const myList = [
    {
      poster_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fgot-m.jpeg?alt=media&token=b099662a-2307-4712-9dcd-f55ce6648eff",
      backdrop_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fgot-d.jpeg?alt=media&token=a098902b-a816-4032-9551-3f53465095f2",
      title: "Game of Thrones"
    },
    {
      poster_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fhod-m.jpeg?alt=media&token=f3cad901-5ad4-4165-ab7f-a53f5b5a4c76",
      backdrop_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fhod-d.jpeg?alt=media&token=c8760d18-eaf1-48ea-b983-773fd7b05150",
      title: "House of the Dragon"
    },
    {
      poster_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fhello-me-m.jpeg?alt=media&token=43d2e157-c954-423c-b5ca-a480fa83d366",
      backdrop_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fhello-me-d.jpeg?alt=media&token=2aef5bdb-331e-4f53-8961-6ed36f9a65c3",
      title: "Hello, Me!"
    },
    {
      poster_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fattorney-woo-m.jpeg?alt=media&token=85bfda94-1805-4199-9584-3d3c7d728c2f",
      backdrop_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fattorney-woo-d.jpeg?alt=media&token=92fe8fbc-7369-4911-bffd-0e67cc6ded08",
      title: "Extraordinary Attorney Woo"
    },
    {
      poster_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fstranger-things-m.jpeg?alt=media&token=70e27b41-0425-42e3-9436-b4b8722b662a",
      backdrop_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fstranger-things-d.jpeg?alt=media&token=18ee7a9d-9e34-44c3-9f22-174b62906a83",
      title: "Stranger Things"
    },
    {
      poster_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Ffearless-m.jpeg?alt=media&token=f4ce5c10-d603-4556-90bd-a8f3e6a7e91e",
      backdrop_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Ffearless-d.jpeg?alt=media&token=6a689be0-146a-495b-afa4-79c789ccbc04",
      title: "Fearless"
    },
    {
      poster_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fozark-m.jpeg?alt=media&token=7270d616-c8bd-4281-85d5-4ea075e2dfe1",
      backdrop_path: "https://firebasestorage.googleapis.com/v0/b/codepen-projects-48f69.appspot.com/o/react-netflix-clone%2Fozark-d.jpeg?alt=media&token=33c69410-45a2-48b1-ad97-a65c90b71f62",
      title: "Ozark"
    }
  ]

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
    similiarMedia,
    setSimiliarMedia
  }

  useEffect(() => {

    let urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=631627e688738d84a1cae51aa035b23a`;
    let urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=631627e688738d84a1cae51aa035b23a`;
    let urlTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=631627e688738d84a1cae51aa035b23a`;

    const requestPopular = axios.get(urlPopular);
    const requestUpcoming = axios.get(urlUpcoming);
    const requestTop = axios.get(urlTop);

    axios
      .all([requestPopular, requestUpcoming, requestTop])
      .then(axios.spread((...responses) => {

        const popularResults = responses[0].data.results.slice(0, 7)
        const upComingResults = responses[1].data.results.slice(0, 7)
        const topResults = responses[2].data.results.slice(0, 7)

        const shuffledPopularResults = _.shuffle(popularResults)
        const shuffledUpComingResults = _.shuffle(upComingResults)
        const shuffledTopResults = _.shuffle(topResults)

        setPopular(shuffledPopularResults);
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

