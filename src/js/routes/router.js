import homePage from "../pages/homePage";
import toDo from "../pages/toDo";
import notFound from "../pages/pageNotFound";
import deletePage from "../pages/delete";
import editPage from "../pages/editPage";

const routes = {
    '/':homePage,
    '/todo':toDo,
    '/delete':deletePage,
    '/edit' :editPage
}

const Router =  function (pathname, params=null)   {

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    //console.log(isValidRoute)
   
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
       if(isValidRoute === undefined){
           app.append(notFound())
       }else{
        app.appendChild(routes[window.location.pathname](params))
       }
    

}
export {Router}