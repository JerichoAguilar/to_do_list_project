import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'
import tagline from '../components/ui/tagline'
import header from '../components/ui/header'
import logo from '../components/ui/logo'
import makeElement from '../utils/makeElement'

const homePage = function (){
   
    const homeHeader = header('pageHeader')
    const pageLogo = logo('#4D5E5B', '500px', '500px')
    const pageTagline = tagline('p','pageTagline','A simple and aesthetic to-do list')
    const toDoAppLink = link('to do app', '/todoapp')

    homeHeader.append(pageLogo)
    homeHeader.append(pageTagline)
    homeHeader.append(toDoAppLink)
    

    return homeHeader
      
}

export default homePage