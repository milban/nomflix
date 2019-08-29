import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Helmet from "react-helmet"
import Loader from "Components/Loader"

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`

const Cover = styled.div`
  width: 40%;
  height: 80%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`

const Data = styled.div`
  width: 60%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`

const ItemContainer = styled.div``

const Item = styled.span``

const Divider = styled.span`
  margin: 0 10px;
`

const Overview = styled.p`
  margin-top: 20px;
  width: 70%;
  opacity: 0.7;
  line-height: 1.5;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Detail | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{`${
          result.original_title ? result.original_title : result.original_name
        } | Nomflix`}</title>
      </Helmet>
      <Backdrop
        bgImage={
          result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : "http://www.etyellowpages.com/images/cinema/NoPoster.jpg"
          }
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result.release_date : result.first_air_date}</Item>
            <Divider>·</Divider>
            <Item>
              {result.runtime
                ? result.runtime
                : result.episode_run_time && result.episode_run_time[0]}{" "}
              min
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, idx) =>
                  idx + 1 === result.genres.length ? (
                    <span key={idx}>{genre.name}</span>
                  ) : (
                    <span key={idx}>{`${genre.name} / `}</span>
                  )
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  )

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default DetailPresenter
