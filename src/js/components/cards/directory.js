import makeElement from '../../utils/makeElement'
const directory = function (){
    const template = `
    <aside id="directory" class="directory">
    <ul id="tasks" class="tasks">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default directory