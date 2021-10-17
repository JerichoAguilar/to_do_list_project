import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'
const loginPage = function (){
   

    const header = document.createElement('header')
    const h1 = levelHeading('h1','Login Page')
    const home = link('home page', '/')
    const signUp = link('sign up', '/signup')
    header.append(h1)
    header.append(home)
    header.append(signUp)

    return header
      
}

export default loginPage