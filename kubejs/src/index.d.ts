declare function onEvent(a: "recipes", handle: (e: KRecipeEvent)=> void): void
declare function onEvent(a: "item.registry", handle: (e: any)=> void): void
declare function onEvent(a: any, handle: (e: any) => void): void
declare interface KRecipeEvent {
    custom(obj: any): any
    remove(o: any): any
    shaped(id: string, arr: Array<string>, key: any): any
    replaceInput(o: any, i: string, n: string): any
}
