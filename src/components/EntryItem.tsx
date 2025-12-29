import downArrow from '../assets/icons/down-arrow.svg'
import { StyledEntryItem } from './EntryItem.syles'

interface Entry {
  id: string
  name: string
}

const EntryItem = ({ entry }: { entry: Entry }) => {
  return (
    <StyledEntryItem>
      <a href="/">
        <div className="entry-item-container">
          <div className="folios">
            <span>Entry</span>
            <span>#{entry.id}</span>
          </div>
          <figure>
            <img src={`/entries/entry_${entry.id}.png`} alt={entry.name} />
          </figure>
          <div className="title">
            <strong>{entry.name}</strong>
          </div>
          <button type="button">
            <img src={downArrow} alt="Down Arrow" />
          </button>
        </div>
      </a>
    </StyledEntryItem>
  )
}

export default EntryItem
