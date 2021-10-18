import elementMaker from "../utils/ElementMaker";
import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'
import tagline from '../components/ui/tagline'
import header from '../components/ui/header'
import logo from '../components/ui/logo'
import makeElement from '../utils/makeElement'

const toDo = function (){
   
    const homeHeader = header('pageHeader')
    const pageLogo = logo('#000000', '500px', '500px')
    const pageTagline = tagline('p','pageTagline','A simple and aesthetic to-do list')
    const homeLink = link('home', '/')

    homeHeader.append(pageLogo)
    homeHeader.append(pageTagline)
    homeHeader.append(homeLink)
    

    return homeHeader
      
}

export default toDo
