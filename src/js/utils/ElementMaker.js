const element = function(){
    let elem = undefined;
    return function (el){
        elem = document.createElement(el)
        return elem
    }
}

const elementMaker = element(); 

export default elementMaker