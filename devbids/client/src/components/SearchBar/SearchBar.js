import React from 'react'
import './SearchBar.css'

// For searching for contracts based on categorys
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: [],
      text: '',
    }
  }

  onTextChange = (e) => {
    const { items } = this.props
    const value = e.target.value
    let suggestions = []
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = items.sort().filter((v) => regex.test(v))
    }
    this.setState(() => ({ suggestions, text: value }))
  }

  renderSuggestions() {
    const { suggestions } = this.state
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    )
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }
  render() {
    const { text } = this.state
    return (
      <div className="SearchBar">
        <input
          value={text}
          onChange={this.onTextChange}
          type="text"
          placeholder="Example: React"
        />
        <ul>{this.renderSuggestions()}</ul>
      </div>
    )
  }
}
