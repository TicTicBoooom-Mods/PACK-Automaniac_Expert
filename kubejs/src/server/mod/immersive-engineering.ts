import {botania, ie} from "../../common/ids";

export function setup_ie_recipes(event: KRecipeEvent) {
    event.remove(ie('crafting/hemp_fabric'))
    event.shaped("4x " + ie("hemp_fabric"), [
        "MHM",
        "HSH",
        "MHM"
    ], {
        M: botania('manaweave_cloth'),
        H: ie('hemp_fiber'),
        S: "#forge:rods/wooden"
    })
}
