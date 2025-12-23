import EntryItem from '../components/EntryItem'
import Weather from '../components/Weather'

const Home = () => {
  return (
    <>
      <Weather />
      <header className="home-hero">
        <h1>Bite Me: A Daily Dose of Vegan</h1>
        <p>
          Join me as I munch my way through 365+ days of plant-based
          deliciousness. Expect questionable puns, unexpected recipes, and a
          whole lot of leafy greens.
        </p>
      </header>
      <main>
        <header>
          <h1>Lettuce Begin!</h1>
          <p>Check out my daily vegan recipes.</p>
        </header>
        <ul className="entry-list">
          <EntryItem />
          <EntryItem />
          <EntryItem />
        </ul>
      </main>
    </>
  )
}

export default Home
