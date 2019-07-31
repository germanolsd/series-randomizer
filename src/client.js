import axios from "axios"
const baseURL = "https://www.omdbapi.com/?apikey=8499246d "

const client = axios.create({ baseURL })

export const getSeriesByName = name => {
  const params = {
    type: "series",
    t: name
  }
  return client.get("", { params })
}

export const getEpisode = async ({ id, totalSeasons }) => {
  const season = Math.round(Math.random() * totalSeasons)
  let res = await client.get("", {
    params: {
      i: id,
      Season: season
    }
  })
  const episode = Math.round(Math.random() * res.data.Episodes.length)
  return client.get("", {
    params: {
      i: id,
      Season: season,
      Episode: episode
    }
  })
}
