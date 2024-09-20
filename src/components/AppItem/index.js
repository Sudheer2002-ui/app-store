import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, websiteUrl} = appDetails

  return (
    <li className="listapp">
      <img className="img" src={imageUrl} alt={appName} />
      <a href={websiteUrl} target="blank">
        {appName}
      </a>
    </li>
  )
}
export default AppItem
