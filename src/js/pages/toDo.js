import levelHeading from './../components/ui/levelHeading'
import directory from '../components/cards/directory'
import link from './../components/ui/link'
import {getStore} from '../redux/store'
import {listitem} from '../components/cards/listitem'
import {Router} from "~/src/js/routes/router"
import {render} from 'ejs'


const toDo = function (){
    const page = document.createElement('div');
    const pageHeader = levelHeading();
    const container = directory();
    const homelink = link('Home', '/');
    page.append(pageHeader)
    pageHeader.append(homelink)

    function cleanUp(){
        const tasks = container.querySelectorAll('li');
        tasks.forEach(task=>{
            task.removeEventListener('click', onDeleteTask)
        })
    }

    function onDeleteTask(e){
        const taskID = {id:e.currentTarget.parentElement.dataset.key};
        cleanUp();
        Router('/delete', taskID);
    }
    function render(){
        const ul = container.querySelector("ul")
        ul.innerHTML=""
        //creating the mpty cards from the data
        const elements = getStore().map(task=> listitem(task))
        //looping task
        //add event listener for any additional elements
        elements.forEach(element=>{
            element.querySelector('#delete').addEventListener('click', onDeleteTask)
            ul.append(element)
        })
        page.append(container)
    }
    render();
    return page
}

    




export default toDo
