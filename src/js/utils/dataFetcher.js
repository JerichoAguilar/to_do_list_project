/*
    dataFetcher (url)

    description:
    parameters:
        url:string

        async ----> promise
*/
const dataFetcher = async function (url=undefined){

    const reponse = await fetch(url);
    const payload = await reponse.json();
    
    return payload;
}

export {dataFetcher}