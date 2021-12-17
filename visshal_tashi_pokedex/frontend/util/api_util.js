
const fetchAllPokemon = () => {
    return $.ajax({
        method: "GET",
        url: "/api/pokemon"
    })
}

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export default fetchAllPokemon;