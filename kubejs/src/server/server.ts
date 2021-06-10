import {setup_tinkers_recipes} from "./mod/tinkers";
import {setup_item_tags} from "./mod/rankine";
import {setup_botanical_recipes} from "./mod/botania";
import {setup_extended_crafting_recipes} from "./mod/extendedcrafting";
import {setup_ie_recipes} from "./mod/immersive-engineering";

onEvent('recipes', event => {
    setup_tinkers_recipes(event);
    setup_botanical_recipes(event);
    setup_extended_crafting_recipes(event)
    setup_ie_recipes(event)
})

onEvent("item.tags", event => {
    setup_item_tags(event);
})
