import { Router } from './routes/router'
import { createStore, getStore } from './redux/store'
import { dataFetcher } from './utils/dataFetcher'
import { keyGenerator } from './utils/keys'
import button from './components/ui/button/'


const app = document.querySelector("#app");

const onAppInit = async function(e){
  // fetch data for the to do list
  // pull data -- store data --- display data
  const todolist = await dataFetcher('./data/todos.json')
  // keygenerator is for data that has no unique key
  //creating new data to do key
  // importing multiple data sets create new data in your app
  
  //build the data store for the app
  createStore(keyGenerator(todolist))
  Router(window.location.pathname)
  // console.log(getStore())

}
window.addEventListener('load', onAppInit)




