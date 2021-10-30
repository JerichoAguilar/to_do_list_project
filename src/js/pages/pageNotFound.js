import makeElement from './../utils/makeElement'
import tagline from '../components/ui/tagline'
import header from '../components/ui/header'
import logo from '../components/ui/logo'
import link from './../components/ui/link'
const notFound = function(){
    const homeHeader = header('pageHeader')
    const pageLogo = logo('#4D5E5B', '500px', '500px')
    const pageTagline = tagline('p','pageTagline','A simple and aesthetic To-Do list')

    const page = document.createElement('div')
    const backToSafety = link('Back to Home', '/')
    const template = `
        <header class="ui-header">
        <h1>Error 404</h1>
        <p>Page Not Found</p>
        </header>
        `;

        const pageHeader = makeElement(template)
        pageHeader.append(backToSafety)
        page.append(pageHeader)

        return page
}







export default notFound