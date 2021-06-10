export function runic_altar_recipe(event: KRecipeEvent, result: string, resultCount: number, mana: number, ...ingredients: Array<any>) {
    let object = {
        "type": "botania:runic_altar",
        "output": {
            "item": result,
            "count": resultCount
        },
        "mana": mana,
        "ingredients": []
    };
    for (let ingredient of ingredients) {
        (<any>object.ingredients).push(ingredient)
    }
    event.custom(object);
}


export function runic_altar_smelting(event: KRecipeEvent, ingot: string, ore: string) {
    let tore = {tag: ore}
    runic_altar_recipe(event, ingot, 14, 5000, tore, tore, tore, tore, tore, tore, tore, tore, {item: "minecraft:coal"}, {item: "minecraft:charcoal"});
}
