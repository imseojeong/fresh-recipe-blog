import downArrow from '../assets/icons/down-arrow.svg'

interface Entry {
  id: string
  name: string
}

const EntryItem = ({ entry }: { entry: Entry }) => {
  return (
    <li>
      <a href="/">
        <div className="folios">
          <span>Entry</span>
          <span>#{entry.id}</span>
        </div>
        <figure>
          <img src={`/entries/entry_${entry.id}.png`} alt={entry.name} />
        </figure>
        <strong>{entry.name}</strong>
        <button type="button">
          <img src={downArrow} alt="Down Arrow" />
        </button>
      </a>
    </li>
  )
}

export default EntryItem
