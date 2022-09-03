import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className="directory-item-container">
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="directory-body-container">
          <h1>{title}</h1>
          <p>Shop for {title}</p>
        </div>
      </div>
    )
}

export default DirectoryItem;