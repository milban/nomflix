import React from "react"
import SearchPresenter from "./SearchPresenter"
import { movieApi, tvApi } from "../../api"

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    beforeTerm: "",
    error: null,
    loading: false
  }

  handleSubmit = event => {
    event.preventDefault()
    const { searchTerm } = this.state
    if (searchTerm !== "") {
      this.searchByTerm()
    }
  }

  updateTerm = event => {
    const {
      target: { value: searchTerm }
    } = event
    this.setState({
      searchTerm
    })
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state
    this.setState({ loading: true })
    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm)
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm)

      this.setState({ movieResults, tvResults, beforeTerm: searchTerm })
    } catch {
      this.setState({ error: "Can't find searching result" })
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, beforeTerm, error, loading } = this.state
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        beforeTerm={beforeTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      ></SearchPresenter>
    )
  }
}
