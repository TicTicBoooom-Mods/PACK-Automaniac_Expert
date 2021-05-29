declare function onEvent(a: "recipes", handle: (e: KRecipeEvent)=> void): void

declare interface KRecipeEvent {
    custom(obj: any): void
    remove(o: any): void
}
