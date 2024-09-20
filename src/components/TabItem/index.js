import './index.css'

const TabItem = props => {
  const {tabDetails, onTabChange, isActive} = props
  const {displayText, tabId} = tabDetails
  const highlight = isActive ? 'highlight' : ''
  const changeTheTab = () => {
    onTabChange(tabId)
  }
  return (
    <li className="list">
      <button
        type="button"
        className={`tab-btn ${highlight}`}
        onClick={changeTheTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
