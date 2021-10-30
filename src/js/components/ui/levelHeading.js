import tagline from '../ui/tagline'
import header from '../ui/header'
import logo from '../ui/logo'

const levelHeading = function (){
     const homeHeader = header('pageHeader')
     const pageLogo = logo('#C8D8CD', '250px', '250px')
     const pageTagline = tagline('p','pageTagline','A simple and aesthetic To-Do list')

     homeHeader.append(pageLogo)
     homeHeader.append(pageTagline)

     return homeHeader
}

export default levelHeading