import { useParams } from 'react-router-dom'

const EntryDetail = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>EntryDetail</h1>
      <p>Entry ID: {id}</p>
    </div>
  )
}

export default EntryDetail
