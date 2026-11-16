import { useState } from 'react'
import './pageSections.css'

function Contact() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    const trimmedQuery = query.trim()
    setResult(
      trimmedQuery
        ? `Looking for contact information about “${trimmedQuery}”.`
        : 'Enter a name or topic to search our contact list.',
    )
  }

  return (
    <section className="page-section contact-section">
      <div className="page-section-inner">
        <p className="page-section-label">Contact the pack</p>
        <h2>Need a little help?</h2>
        <p>
          Search for a team member or a topic, and we will point you in the
          right direction.
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <label className="sr-only" htmlFor="contact-search">
            Search contacts
          </label>
          <input
            id="contact-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search contacts"
          />
          <button type="submit">Search</button>
        </form>
        {result && <p className="search-result" role="status">{result}</p>}
      </div>
    </section>
  )
}

export default Contact