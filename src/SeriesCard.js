import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background-color: var(--light-color-2);
  border-radius: 5px;
  overflow: hidden;
  background-image: ${props => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center center;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  > * {
    position: relative;
    z-index: 2;
  }

  .title {
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 1rem;

    .rating {
      font-size: 2rem;
    }
  }

  .plot {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    align-items: center;
  }

  .button {
    align-self: flex-end;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: var(--accent-color-1);
    color: var(--light-color-1);
    border: none;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export default function({
  Title,
  Plot,
  Poster,
  imdbID,
  imdbRating,
  totalSeasons,
  onClick
}) {
  return (
    <Card imgUrl={Poster}>
      <div className="title">
        <div>{Title}</div>
        <div className="rating">{imdbRating}/10</div>
      </div>
      <div className="plot">
        {Plot}
        <br />
        Seasons: {totalSeasons}
      </div>
      <button
        className="button"
        onClick={() =>
          onClick({
            id: imdbID,
            totalSeasons
          })
        }
      >
        Get random episode
      </button>
    </Card>
  )
}
