//Constants
const api:string = "api";
const GET_ALL_ROUTE:string = api + "/getAllGallery"
const GET_ONE_ROUTE:string = api + "/getOneGallery/"
const CREATE_LISTING_ROUTE:string = api + "/createListingGallery";
const UPDATE_ONE_ROUTE:string = api + "/updateOneGallery/"
const DELETE_ONE_ROUTE:string = api + "/deleteOneGallery/"
const getAll = async () => {
        let all = []
        await fetch(GET_ALL_ROUTE)
        .then(response => response.json())
        .then(data => all.push(data))
        return all
}
const getOne = async (id:number) => {
        let one = ''
        await fetch(GET_ONE_ROUTE + id)
        .then(response => response.json())
        .then (data =>  one = data)
        return one
}
const deleteOne = async (id:number) => {
        try {
               await fetch(DELETE_ONE_ROUTE+id,{
                       method: 'DELETE',
                       headers: {
                               'Accept': 'application/json',
                               'Content-Type': 'application/json'
                       }
               })
               console.log('Successfully deleted document: ', id)
        } catch (error) {
                console.log('There was an error while trying to delete the requested document:\n', error)
        }
}
// export functions and constants
export {CREATE_LISTING_ROUTE,
        GET_ALL_ROUTE,
        GET_ONE_ROUTE,
        UPDATE_ONE_ROUTE,
        DELETE_ONE_ROUTE,
        getAll,
        getOne,
        deleteOne
        };