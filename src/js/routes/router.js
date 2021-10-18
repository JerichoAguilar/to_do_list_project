import homePage from "../pages/homePage";
import toDo from "../pages/toDo";
import notFound from "../pages/pageNotFound";
/* 
    Object 
    Routes  
     key       value
    route    page.js
*/

 

const routes = {
    '/':homePage(),
    '/toDo':toDo(),
    '/pageNotFound':notFound()
    
}

const Router = function(pathname){
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname

    )

    app.appendChild(routes[window.location.pathname])

     
}


export {routes}
export default Router