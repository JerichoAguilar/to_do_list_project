import levelHeading from './../components/ui/levelHeading'
import directory from '../components/cards/directory'
import link from './../components/ui/link'
import { createStore, getStore } from '../redux/store'
import { listitem } from '../components/cards/listitem'
import { keyGenerator } from '../utils/keys'
import { dataFetcher } from '../utils/dataFetcher'


const toDo = function (){
    const page = document.createElement('div');
    const pageHeader = levelHeading();
    const container = directory();
    const homelink = link('home', '/');
    page.append(pageHeader)
    pageHeader.append(homelink)



    const onAppInit = async function(e){
        // fetch data for the to do list
        // pull data -- store data --- display data
        const todolist = await dataFetcher('./data/todos.json')
        // keygenerator is for data that has no unique key
        //creating new data to do key
        // importing multiple data sets create new data in your app
        
        //build the data store for the app
        createStore(keyGenerator(todolist))
        console.log(getStore())

        if(getStore().length !== 0){
            const elements =  getStore().map(task=>{
                   return listitem(task) 
              })
            const ul = container.querySelector('#tasks')
            elements.forEach(elm=>{
                ul.append(elm)
            })
            page.append(container)
          }
        
      }
      window.addEventListener('load', onAppInit)
    
    
    

    
    

    return page
}




export default toDo
