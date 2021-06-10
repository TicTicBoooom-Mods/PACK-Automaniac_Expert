import {tinkers_melting_tag, tinkers_table_casting_consumed} from "../lib/tinkers";

export function setup_tinkers_recipes(event: KRecipeEvent) {
    tinkers_melting_tag(event, "automaniac:grey_stones", "kubejs:molten_grey_stone", 144, 500, 80);
    tinkers_table_casting_consumed(event, "forge:nuggets/zinc", "kubejs:molten_grey_stone", 144, "create:andesite_alloy", 80);
    tinkers_table_casting_consumed(event, "forge:nuggets/copper", "kubejs:molten_grey_stone", 144, "create:andesite_alloy", 80);
    tinkers_table_casting_consumed(event, "forge:nuggets/iron", "kubejs:molten_grey_stone", 144, "create:andesite_alloy", 80);
}
