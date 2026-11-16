import { useEffect, useRef, useState } from 'react'
import './infiniteScrolling.css'

/**
 * ============================================================================
 * 🐾 HOW TO ADD MORE DOGGOS:
 * ============================================================================
 * To add a new pup to the gallery, simply append a new object to the `dogData`
 * array below following this template:
 *
 *   {
 *     name: 'Your Dog Name',        // String: The dog's name
 *     breed: 'Dog Breed',           // String: Breed or mix
 *     mood: 'Quirky personality',    // String: Short mood/tagline
 *     image: 'https://...',         // String: Image URL (Unsplash, local asset, etc.)
 *     color: '#f6c453',             // String: Hex color for card accent & glow
 *   },
 *
 * The new dog will automatically be included in:
 *  - The infinite scroll gallery
 *  - The live search bar (searches name, breed, and mood)
 *  - The card number index counter
 * ============================================================================
 */
const dogData = [
  {
    name: 'Milo',
    breed: 'Golden retriever',
    mood: 'Sunshine seeker',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
    color: '#f6c453',
  },
  {
    name: 'Coco',
    breed: 'French bulldog',
    mood: 'Tiny but mighty',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85',
    color: '#ff8c69',
  },
  {
    name: 'Winston',
    breed: 'Cavalier spaniel',
    mood: 'Professional cuddler',
    image:
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85',
    color: '#9b8cff',
  },
  {
    name: 'Luna',
    breed: 'Border collie',
    mood: 'Adventure ready',
    image:
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=85',
    color: '#53c6b4',
  },
  {
    name: 'Biscuit',
    breed: 'Dachshund',
    mood: 'Snack supervisor',
    image:
      'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=900&q=85',
    color: '#f28f3b',
  },
  {
    name: 'Nala',
    breed: 'Samoyed',
    mood: 'Cloud with paws',
    image:
      'https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=900&q=85',
    color: '#6db6ff',
  },
  {
    name: 'Otis',
    breed: 'Beagle',
    mood: 'Trail detective',
    image:
      'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=900&q=85',
    color: '#e97070',
  },
  {
    name: 'Pepper',
    breed: 'Australian shepherd',
    mood: 'Zoomies champion',
    image:
      'https://images.unsplash.com/photo-1558788353-9e7a5b4b1f8d?auto=format&fit=crop&w=900&q=85',
    color: '#55a98b',
  },
  {
    name: 'Maple',
    breed: 'Shiba inu',
    mood: 'Neighborhood icon',
    image:
      'https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&w=900&q=85',
    color: '#e8a34f',
  },
  {
    name: 'Frankie',
    breed: 'Pug',
    mood: 'Nap enthusiast',
    image:
      'https://images.unsplash.com/photo-1530280016448-4db5b1d1b3f5?auto=format&fit=crop&w=900&q=85',
    color: '#c98e71',
  },
  {
    name: 'Daisy',
    breed: 'Labrador',
    mood: 'Best friend energy',
    image:
      'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85',
    color: '#f0d47a',
  },
  {
    name: 'Archie',
    breed: 'Corgi',
    mood: 'Tiny legs, big plans',
    image:
      'https://images.unsplash.com/photo-1546975490-e8b92a360b24?auto=format&fit=crop&w=900&q=85',
    color: '#e67d5f',
  },
  {
    name: 'Sage',
    breed: 'Greyhound',
    mood: 'Elegant sprinter',
    image:
      'https://images.unsplash.com/photo-1553882809-a4f57e0e0e0a?auto=format&fit=crop&w=900&q=85',
    color: '#8296b8',
  },
  {
    name: 'Teddy',
    breed: 'Bernese mountain dog',
    mood: 'Gentle giant',
    image:
      'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=900&q=85',
    color: '#7c9b88',
  },
  {
    name: 'Ruby',
    breed: 'Jack Russell terrier',
    mood: 'Pocket rocket',
    image:
      'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=900&q=85',
    color: '#df7660',
  },
  {
    name: 'Bear',
    breed: 'Newfoundland',
    mood: 'Big-hearted floof',
    image:
      'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=900&q=85',
    color: '#6e837c',
  },
]

const pageSize = 4
const fallbackDogImage =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85'

function InfiniteScrolling() {
  const [visibleDogs, setVisibleDogs] = useState(dogData.slice(0, pageSize))
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const loadMoreRef = useRef(null)
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredDogs = dogData.filter((dog) =>
    [dog.name, dog.breed, dog.mood].some((value) =>
      value.toLowerCase().includes(normalizedSearch),
    ),
  )
  const dogsToDisplay = normalizedSearch ? filteredDogs : visibleDogs

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || isLoading || normalizedSearch) return

        setIsLoading(true)
        window.setTimeout(() => {
          setVisibleDogs((currentDogs) => [
            ...currentDogs,
            ...dogData.slice(currentDogs.length % dogData.length, (currentDogs.length % dogData.length) + pageSize),
          ])
          setIsLoading(false)
        }, 650)
      },
      { rootMargin: '280px 0px' },
    )

    const currentTarget = loadMoreRef.current
    if (currentTarget) observer.observe(currentTarget)

    return () => observer.disconnect()
  }, [isLoading, normalizedSearch])

  function handleSearch(event) {
    event.preventDefault()
  }

  return (
    <main className="dog-page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="dog-header">
        <p className="eyebrow">THE GOOD DOG CLUB <span>✦</span></p>
        <h1>Endless <em>good boys.</em></h1>
        <p className="intro">
          A never-ending collection of wagging tails, wet noses, and very
          important naps.
        </p>
        <form className="dog-search" onSubmit={handleSearch}>
          <label className="sr-only" htmlFor="gallery-search">
            Search the dog gallery
          </label>
          <input
            id="gallery-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name, breed, or mood"
          />
          <button type="submit">Search</button>
        </form>
        <div className="scroll-hint" aria-hidden="true">
          <span>SCROLL TO DISCOVER</span>
          <span className="arrow">↓</span>
        </div>
      </header>

      <section className="dog-grid" aria-label="Dog gallery">
        {dogsToDisplay.map((dog, index) => (
          <article
            className="dog-card"
            key={`${dog.name}-${index}`}
            style={{ '--card-color': dog.color, '--delay': `${(index % pageSize) * 90}ms` }}
          >
            <div className="image-wrap">
              <img
                src={dog.image}
                alt={`${dog.name}, a ${dog.breed}`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = fallbackDogImage
                }}
              />
              <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="heart" aria-hidden="true">♡</span>
            </div>
            <div className="dog-info">
              <div>
                <h2>{dog.name}</h2>
                <p>{dog.breed}</p>
              </div>
              <span className="mood">{dog.mood}</span>
            </div>
          </article>
        ))}
      </section>

      {normalizedSearch && filteredDogs.length === 0 ? (
        <p className="empty-search" role="status">
          No good dogs found for “{searchTerm}”. Try another search.
        </p>
      ) : (
        <div ref={loadMoreRef} className="load-more" aria-live="polite">
          {isLoading ? (
          <>
            <span className="loader" />
            Finding more good dogs…
          </>
          ) : (
            'Keep scrolling for more tails ↓'
          )}
        </div>
      )}
    </main>
  )
}

export default InfiniteScrolling