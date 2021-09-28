/*
    dataFetcher (url)

    description:
    parameters:
        url:string

        async ----> promise
*/
const dataFetcher = async function (url=null){
    // enter code here
    const reponse = await fetch(url);
    const data = await reponse.json();
    
    return data;
}

export default dataFetcher