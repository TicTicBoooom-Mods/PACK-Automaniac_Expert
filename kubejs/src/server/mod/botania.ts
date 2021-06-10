import {runic_altar_recipe, runic_altar_smelting} from "../lib/botania";

export function setup_botanical_recipes(event: KRecipeEvent) {
    // Stage 0
    event.remove({id: "botania:mana_spreader"})
    event.shaped("botania:mana_spreader", [
        "LLL",
        "RP ",
        "LLL"
    ], {
        L: "botania:livingwood",
        R: "botania:livingrock",
        P: "#botania:petals"
    })

    event.remove({id: "botania:runic_altar"})
    event.shaped("botania:runic_altar", [
        "LLL",
        "LWL"
    ], {
        L: "botania:livingrock",
        W: "botania:manaweave_cloth"
    })

    runic_altar_smelting(event, "minecraft:iron_ingot", "forge:ores/iron")
    runic_altar_smelting(event, "create:zinc_ingot", "forge:ores/zinc")
    runic_altar_smelting(event, "rankine:copper_ingot", "forge:ores/copper")
    runic_altar_smelting(event, "rankine:lignite", "forge:ores/lignite")
    runic_altar_smelting(event, "rankine:salt", "forge:ores/halite")
    runic_altar_smelting(event, "rankine:pink_salt", "forge:ores/pink_halite")
    runic_altar_smelting(event, "minecraft:gold_ingot", "forge:ores/gold")
}
