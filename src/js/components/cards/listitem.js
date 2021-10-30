import makeElement from "../../utils/makeElement";

const listitem = function ({id,category,description,isComplete}) {
    const template = `
    <li class="${category} ${isComplete}" data-key="${id}"
    <p>${description}</p>
    </li>`

    return makeElement(template)
}

export {listitem}