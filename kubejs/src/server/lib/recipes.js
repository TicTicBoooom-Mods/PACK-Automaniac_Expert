export class RecipeUtils {
    static rm(event, value, type) {
        if (!(type instanceof RMType)){
            throw new Error("invalid type passed to rm")
        }

        type.action(event, value);
    }
}

export class RMType {
    static RecipeId = new RMType((e, x) => e.remove({id: x}));
    static InputId = new RMType((e, x) => e.remove({input: x}))
    static InputTagId = new RMType( (e, x) => e.remove({input: '#' + x}))
    static OutputId = new RMType((e, x) => e.remove({output: x}))

    constructor(action) {
        this.action = action;
    }
}