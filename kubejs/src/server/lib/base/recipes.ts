export function rm_recipe(event: KRecipeEvent, id: string) {
    event.remove({id: id});
}
