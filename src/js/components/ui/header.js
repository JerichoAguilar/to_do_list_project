import makeElement from "../../utils/makeElement";

const header = function (className="tagline"){
    const template = `<header class="${className}"></header>`
    const element = makeElement(template)

    return element
     
}

export default header