import {Component} from 'react'
import './App.css'
import TabProject from './components/TabProject'

import TabItem from './components/TabItem'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

class App extends Component{
  state={activeTabId:tabsList[0].tabId}

  getFiltered=()=>{
    const {activeTabId}=this.state
    const filtered=projectsList.filter(each=>each.category === activeTabId
      ,
      )
      return filtered
    }

   

  updateData=(tabId)=>{
    this.setState({activeTabId:tabId})

  }

  render(){
    const {activeTabId}=this.state
    const filtered=this.getFiltered()
    return(
      <div className='container-app'>
        <h1 className='heading'>Project</h1>
        <p className='des'>Your Skill and achievement showcase your strenghts and abilities.Speak about any new <br/> skills or software you learnt to perform the project responsibilities</p>
        <div  className='container'>
     <ul className='con'>
     
     {tabsList.map(each=>(
      <TabItem tabsList={each}
      updateData={this.updateData}
      isActive={activeTabId === each.tabId}/>
     ))}
     </ul>
     </div>
     <div className='project-app'>
     <ul className='project-container'>
      {filtered.map(each=>
        <TabProject projectsList={each} key={each.projectId}/>)}
         
     </ul>
     </div>
     </div>
    )
  }
}

export default App
