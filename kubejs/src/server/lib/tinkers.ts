export function tinkers_melting_tag(event: KRecipeEvent, tag: string, fluidOut: string, fluidAmount: number, temp: number = 500, time = 100) {
    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": tag
        },
        "result": {
            "fluid": fluidOut,
            "amount": fluidAmount
        },
        "temperature": temp,
        "time": time
    })
}


export function tinkers_table_casting_consumed(event: KRecipeEvent, castItem: string, fluid: string, fluidAmount: number, result: string, coolingTime: number) {
    event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": castItem,
        },
        "cast_consumed": true,
        "fluid": {
            "name": fluid,
            "amount": fluidAmount
        },
        "result": result,
        "cooling_time": coolingTime
    })
}
