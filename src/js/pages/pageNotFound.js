import makeElement from './../utils/makeElement'
import link from './../components/ui/link'
import levelHeading from './../components/ui/levelHeading'
const notFound = function(){
    const pageHeader = levelHeading();
    const page = document.createElement('div')
    const backToSafety = link('Back to Home', '/')
    const template = `
        <div class="error404">
        <h1>Error 404</h1>
        <p>Page Not Found</p>
        </div>
        `;

        const error = makeElement(template)
        error.append(backToSafety)
        page.append(pageHeader)
        page.append(error)
        

        return page
}







export default notFound