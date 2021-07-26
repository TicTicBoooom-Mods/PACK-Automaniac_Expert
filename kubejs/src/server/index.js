import {RecipeUtils, RMType} from "./lib/recipes";

onEvent('recipes',event => {
    RecipeUtils.rm(event, "minecraft:iron_pickaxe",  RMType.RecipeId)
    RecipeUtils.rm(event, "minecraft:wooden_pickaxe",  RMType.RecipeId)
    RecipeUtils.rm(event, "minecraft:stone_pickaxe",  RMType.RecipeId)
    RecipeUtils.rm(event, "minecraft:diamond_pickaxe",  RMType.RecipeId)
    RecipeUtils.rm(event, "minecraft:golden_pickaxe",  RMType.RecipeId)
    RecipeUtils.rm(event, "minecraft:netherite_pickaxe",  RMType.RecipeId)
})