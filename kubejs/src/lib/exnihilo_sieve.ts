export class SieveRecipeBuilder {
    private input: any = {};
    private outputs: Array<{ item: string, rolls: Array<OutputRoll>, keys: string }> = []

    set_input(key: string, input: string) {
        this.input[key] = input;
        return this;
    }

    add_output(keys: string, item: string, rolls: Array<OutputRoll>) {
        this.outputs.push({
            keys: keys,
            item: item,
            rolls: rolls
        });
        return this;
    }

    build(event: KRecipeEvent) {
        for (let i = 0; i < this.outputs.length; i++) {
            for (let c = 0; c < this.outputs[i].keys.length; c++) {
                let char = this.outputs[i].keys.charAt(c);
                let result = {
                    type: "exnihilosequentia:sieve",
                    rolls: this.outputs[i].rolls,
                    input: {
                        item: this.input[char]
                    },
                    result: {
                        item: this.outputs[i].item
                    }
                };
                event.custom(result);
            }
        }
    }
}

export class Mesh {
    static STRING = "string";
    static FLINT = "flint";
    static IRON = "iron";
    static DIAMOND = "diamond";
    static EMERALD = "emerald";
    static NETHERITE = "netherite";
}

export class MeshPresets {
    public static ore(rarity: number): Array<OutputRoll> {
        return [
            ens_roll(Mesh.FLINT, rarity),
            ens_roll(Mesh.IRON, 1.2 * rarity),
            ens_roll(Mesh.DIAMOND, 1.5 * rarity),
            ens_roll(Mesh.EMERALD, 2 * rarity),
            ens_roll(Mesh.NETHERITE, 3 * rarity),
        ]
    }
}

export function ens_roll(mesh: string, chance: number): OutputRoll {
    return {
        mesh: mesh,
        chance: Math.round(chance * 100) / 100
    }
}

export interface OutputRoll {
    mesh: string;
    chance: number;
}

export function rm_sieve_loot(event: KRecipeEvent, suffix: string): void {
    event.remove({id: 'exnihilosequentia:sieve/ens_' + suffix})
}
