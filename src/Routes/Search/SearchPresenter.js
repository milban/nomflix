import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "Components/Loader"
import Section from "Components/Section"
import Message from "Components/Message"
import Poster from "Components/Poster"

const Container = styled.div`
  padding: 0px 20px;
`

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  beforeTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader></Loader>
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie, key) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date}
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {movieResults && movieResults.length === 0 && (
          <Message text={`Movie: Nothing found for ${beforeTerm}`} color="#dfe6e9" />
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Show Results">
            {tvResults.map((show, key) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date}
                isMovie={false}
              ></Poster>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length === 0 && (
          <Message text={`TV Shows: Nothing found for ${beforeTerm}`} color="#dfe6e9" />
        )}
        {error && <Message text={error} color="#e74c3c"></Message>}
      </>
    )}
  </Container>
)

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  beforeTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter
