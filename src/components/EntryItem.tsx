const EntryItem = () => {
  return (
    <li>
      <a href="/">
        <div className="folios">
          <span>Entry</span>
          <span>#{'01'}</span>
        </div>
        <figure>
          <img src="/" alt="/" />
        </figure>
        <strong>{'Tomato Basil Pasta'}</strong>
        <button type="button">down arrow</button>
      </a>
    </li>
  )
}

export default EntryItem
