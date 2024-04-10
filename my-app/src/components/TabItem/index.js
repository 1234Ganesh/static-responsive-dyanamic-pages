import './index.css'
const TabItem=props=>{
    const {tabsList,updateData,isActive}=props
    const {displayText,tabId}=tabsList
    const updateClcik=()=>{
        updateData(tabId)
    }
    const isActiveClassname=isActive ? "active-btn":""

    return(
        <li>
            <button onClick={updateClcik} type='button' className={`btn ${isActiveClassname}`}>
          {displayText}
            </button>
            
        </li>
    )
}

export default TabItem