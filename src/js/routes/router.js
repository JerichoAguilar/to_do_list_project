import homePage from "../pages/homePage";
import toDo from "../pages/toDo";
import notFound from "../pages/pageNotFound";

const routes = {
    '/':homePage(),
    '/toDo':toDo()
}

const Router = function(pathname){

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    console.log(isValidRoute)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname

    )

    if(isValidRoute === undefined){
        app.append(notFound())
    }
    else{
        app.appendChild(routes[window.location.pathname])
    }

     
}

export {Router}