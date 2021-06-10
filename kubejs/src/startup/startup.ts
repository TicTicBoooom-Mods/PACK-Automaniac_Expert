import {setup_rankine_additions} from "./mod/rankine";
import {setup_custom_fluids} from "./mod/automaniac";

onEvent("item.registry", event => {
    setup_rankine_additions(event);
})

onEvent("fluid.registry", event => {
    setup_custom_fluids(event);
})
