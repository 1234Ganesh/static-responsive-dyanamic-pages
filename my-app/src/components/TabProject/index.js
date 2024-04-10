import './index.css'
const TabProject=props=>{
    const {projectsList}=props
    const {imageURL,title,description}=projectsList
    return(
        <div className='container'>
        <li>
            <img src={imageURL}
            alt={title} className="img"/>
            <h1 className='heading'>{title}</h1>
            <p className='des'>{description}</p>
        </li>
        </div>
    )
}

export default TabProject