import React from "react";
import styled from "styled-components";
import HoverVideoPlayer from "react-hover-video-player";
import cssProperties from "../healper/cssProperties";

const tiles = [
  {
    video: "videos/1564674844-disney.mp4",
    img: "/images/viewers-disney.png",
  },
  {
    video: "videos/1564676714-pixar.mp4",
    img: "/images/viewers-pixar.png",
  },
  {
    video: "videos/1564676115-marvel.mp4",
    img: "/images/viewers-marvel.png",
  },
  {
    video: "videos/1608229455-star-wars.mp4",
    img: "/images/viewers-starwars.png",
  },
  {
    video: "videos/1564676296-national-geographic.mp4",
    img: "/images/viewers-national.png",
  },
];

function Viewers() {
  return (
    <Container>
      {tiles.map((tile) => {
        return (
          <Wrap>
            <HoverVideoPlayer
              videoSrc={tile.video}
              restartOnPaused
              style={{
                width: "100%",
                height: "100%",
              }}
              pausedOverlay={
                <img
                  src={tile.img}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    background: "rgba(10, 10, 10, 0.9)",
                  }}
                />
              }
              hoverOverlay={
                <img
                  src={tile.img}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
            />
          </Wrap>
        );
      })}
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
  padding: 30px 0 26px;

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
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px;, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  &:hover {
      box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px;, rgb(0 0 0 / 72%) 0 30px 22px -10px;
      cursor: pointer;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
  }
`;
