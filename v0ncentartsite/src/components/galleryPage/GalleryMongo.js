//Constants
const api = "api";
const GET_ALL_ROUTE = api + "/getAllGallery";
const GET_ONE_ROUTE = api + "getOneGallery/{id}";
const CREATE_LISTING_ROUTE = api + "/createListingGallery";
const UPDATE_ONE_ROUTE = api + "/updateOneGallery/{id}";
const DELETE_ONE_ROUTE = api + "/deleteOneGallery/{id}";
const getAll = async () => {
    let all = [];
    await fetch(GET_ALL_ROUTE)
        .then(response => response.json())
        .then(data => all.push(data));
    return all;
};
// export functions and constants
export { CREATE_LISTING_ROUTE, GET_ALL_ROUTE, GET_ONE_ROUTE, UPDATE_ONE_ROUTE, DELETE_ONE_ROUTE, getAll };
