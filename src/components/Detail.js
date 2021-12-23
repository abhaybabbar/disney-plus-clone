import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Navigate } from "react-router-dom";
import db from "../firebase";
import cssProperties from "../healper/cssProperties";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // save the movie data
          setMovie(doc.data());
          console.log("exist");
        } else {
          // if id is not in data base, redirect to home
          console.log("does not exist");
          setRedirect(true);
        }
      });
  }, [id]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Background>
        <img src={movie.backgroundImage} />
      </Background>
      <ImageTitle>
        <img src={movie.logo} />
      </ImageTitle>
      <Controls>
        <MainButton>
          <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>Play</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>
        </MainButton>
        <SideButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" />
          </GroupWatchButton>
        </SideButton>
      </Controls>
      <SubTitle>{movie.subtitle}</SubTitle>
      <Description>{movie.description}</Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 50px calc(3.5vw + 5px);
  postion: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  @media (max-width: ${cssProperties.breakPoint2}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const MainButton = styled.div`
  display: flex;
`;
const SideButton = styled.div`
  display: flex;
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: white;
  max-width: 700px;
  @media (max-width: ${cssProperties.breakPoint2}) {
    max-width: 400px;
    font-size: 18px;
  }
  @media (max-width: ${cssProperties.breakPoint2}) {
    font-size: 18px;
  }
`;
