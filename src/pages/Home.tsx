import EntryItem from '../components/EntryItem'
import Weather from '../components/Weather'
import { StyledHome } from './Home.styles'
import entryData from '../data/entries.json'

const Home = () => {
  return (
    <StyledHome>
      <Weather />
      <header className="home-hero">
        <div className="hero-information">
          <h1>Bite Me: A Daily Dose of Vegan</h1>
          <p>
            Join me as I munch my way through 365+ days of plant-based
            deliciousness. Expect questionable puns, unexpected recipes, and a
            whole lot of leafy greens.
          </p>
        </div>
      </header>
      <main>
        <header>
          <h2>Lettuce Begin!</h2>
          <p>Check out my daily vegan recipes.</p>
        </header>
        <ul className="entry-list">
          {entryData.entries.map((entry) => (
            <EntryItem key={entry.id} entry={entry} />
          ))}
        </ul>
      </main>
    </StyledHome>
  )
}

export default Home
