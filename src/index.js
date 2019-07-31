import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { getSeriesByName, getEpisode } from "./client"
import SeriesCard from "./SeriesCard"
import EpisodeCard from "./EpisodeCard"

import "./styles.css"

function App() {
  const [series, setSeries] = useState(null)
  const [inputVal, setInputVal] = useState("friends")
  const [episode, setEpisode] = useState(null)
  useEffect(() => {
    const search = setTimeout(() => {
      inputVal && getSeriesByName(inputVal).then(r => setSeries(r.data))
    }, 350)
    return () => {
      clearTimeout(search)
    }
  }, [inputVal])

  const getRandomEpisode = params => {
    getEpisode(params).then(res => setEpisode(res.data))
  }
  const showSeries = () =>
    series && <SeriesCard {...series} onClick={getRandomEpisode} />

  const showEpisode = () => episode && <EpisodeCard {...episode} />
  return (
    <div className="App">
      <div className="top-bar">
        <div className="top-bar__text">Random series episode picker</div>
        <div className="input-container">
          <input
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="Type series name here"
          />
          <button onClick={() => setInputVal("")}>Clear</button>
        </div>
      </div>

      <div className="body">
        {showSeries()}
        {showEpisode()}
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
