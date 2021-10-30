import levelHeading from '../components/ui/levelHeading'
import link from '../components/ui/link'

const homePage = function (){
    const pageHeader = levelHeading()
    const toDoAppLink = link('To-Do App', '/todo')
    
    pageHeader.append(toDoAppLink)
    return pageHeader
      
}

export default homePage