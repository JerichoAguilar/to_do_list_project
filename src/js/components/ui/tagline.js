import makeElement from "../../utils/makeElement"

const tagline = function (elementType="p", className="tagline", label="tagline"){
    const template = `<${elementType} class="${className}"> ${label}</${elementType}>`
    const element = makeElement(template)

    return element
     
}

export default tagline