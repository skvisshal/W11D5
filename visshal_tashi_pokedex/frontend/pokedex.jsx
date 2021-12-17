import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import fetchAllPokemon from "./util/api_util"
import {receiveAllPokemon} from "./actions/pokemon_actions"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    const getSuccess = pokemon => store.dispatch(receiveAllPokemon(pokemon));
    fetchAllPokemon().then(getSuccess);
    //console.log(store.getState())
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store ={store} />, root)
})
