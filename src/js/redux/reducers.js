
/* 
       Stratagy for managin data.
       MVC

             Store (data) Model

             Control Reducer
             action- what do you want to do to the store
                   - add
                     action.type = "add"
                   - edit
                     action.type = "edit"
                     reducer will add the edit object to the store
                   - delete
             payload
              data to perform the action
              action.type = "edi"
              find the employee by the key
              replace the existing data with the new data paylaod

*/
import {getStore} from './../redux/store'

const reducers = function({action,payload, ...rest}){
     
  switch(action.type){
      case "edit": return "edit a task";
      case "delete": return "remove a task";
      case "add": return "add a new task";
      default: return getStore()
  }

}

export {reducers}
