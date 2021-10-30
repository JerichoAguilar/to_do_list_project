import makeElement from '../../utils/makeElement'
const directory = function (){
    const template = `
    <aside id="directory" class="directory">
    <ul id="tasks" class="tasks">
     
    </ul>
    <footer>
        <button><svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 24 24" width="100px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"/></svg></button>
    </footer>
</aside>
    `

    return makeElement(template)
}

export default directory