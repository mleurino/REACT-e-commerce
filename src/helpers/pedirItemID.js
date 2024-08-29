import data from "../data/data.json";


export const PedirItemID = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((elemento) => elemento.id === id)


        if (item) {
            resolve(item);
            
        }else{
            reject({
                error: "No se encontro el producto"
            })
        }
    })

}