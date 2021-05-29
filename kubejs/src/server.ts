import {run_early_server} from "./mod/early_game";

onEvent('recipes', event => {
    run_early_server(event);
})
