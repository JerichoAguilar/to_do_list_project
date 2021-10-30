import tagline from '../ui/tagline'
import header from '../ui/header'
import logo from '../ui/logo'

const levelHeading = function (){
     const homeHeader = header('pageHeader')
     const pageLogo = logo('#4D5E5B', '500px', '500px')
     const pageTagline = tagline('p','pageTagline','A simple and aesthetic To-Do list')

     homeHeader.append(pageLogo)
     homeHeader.append(pageTagline)

     return homeHeader
}

export default levelHeading