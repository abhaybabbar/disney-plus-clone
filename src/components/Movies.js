import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import cssProperties from "../healper/cssProperties";

function Movies() {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommender for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.cardImage} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
  @media (max-width: ${cssProperties.breakPoint1}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: ${cssProperties.breakPoint2}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${cssProperties.breakPoint3}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 80%;
    margin: 0 auto;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px;, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
      box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px;, rgb(0 0 0 / 72%) 0 30px 22px -10px;
      cursor: pointer;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
  }
`;
