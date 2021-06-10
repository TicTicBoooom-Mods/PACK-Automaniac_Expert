import {extended_crafting} from "../../common/ids";

export function setup_extended_crafting_recipes(event: KRecipeEvent) {
    setup_generated_recipes(event)
    // Tables
    event.remove({id: extended_crafting("basic_table")});
    event.remove({id: extended_crafting("advanced_table")});
    event.remove({id: extended_crafting("elite_table")});
    event.remove({id: extended_crafting("ultimate_table")});

    table_with_ingot(event, "advanced", "#forge:ingots/gold");
    table_with_ingot(event, "elite", "#forge:ingots/manasteel");
    table_with_ingot(event,"ultimate",  "#forge:gems/mana_diamond");
}


function table_with_ingot(event: KRecipeEvent, table: string,  ingot: string) {
    event.shaped(extended_crafting(table + '_table'), [
        "GLG",
        "OCO",
        " O "
    ], {
        G: ingot,
        O: "#minecraft:logs",
        C: "#forge:workbenches",
        L: "botania:livingrock"
    });
}



function setup_generated_recipes(event :KRecipeEvent) {
    event.remove({id: 'create:crafting/kinetics/shaft'})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA",
            "AA",
            "AA",
            "AA",
            "AA"
        ],
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            }
        },
        "result": {
            "item": "create:shaft",
            "count": 4
        }
    })

    event.remove({id: 'create:crafting/kinetics/large_cogwheel'})

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "ABCBA",
            "ACDCA",
            "ABCBA",
            " AAA "
        ],
        "key": {
            "A": {
                "tag": "minecraft:wooden_slabs"
            },
            "B": {
                "item": "botania:livingrock"
            },
            "C": {
                "item": "create:andesite_alloy"
            },
            "D": {
                "item": "create:shaft"
            }
        },
        "result": {
            "item": "create:large_cogwheel",
            "count": 3
        }
    })

    event.remove({id: 'create:crafting/kinetics/cogwheel'})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A  ",
            " ABA ",
            "ABCBA",
            " ABA ",
            "  A  "
        ],
        "key": {
            "A": {
                "tag": "minecraft:wooden_slabs"
            },
            "B": {
                "item": "botania:livingrock"
            },
            "C": {
                "item": "create:shaft"
            }
        },
        "result": {
            "item": "create:cogwheel",
            "count": 6
        }
    })

    event.remove({id: 'create:crafting/kinetics/gearbox'})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "BCDCB",
            "EDEDE",
            "BDCDB",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "B": {
                "tag": "minecraft:wooden_slabs"
            },
            "C": {
                "item": "create:large_cogwheel"
            },
            "D": {
                "item": "create:cogwheel"
            },
            "E": {
                "item": "create:shaft"
            }
        },
        "result": {
            "item": "create:gearbox"
        }
    })

    event.remove({id: "create:crafting/kinetics/propeller"})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A   A",
            " ABA ",
            " BCB ",
            " ABA ",
            "A   A"
        ],
        "key": {
            "A": {
                "tag": "forge:ingots/iron"
            },
            "B": {
                "item": "create:andesite_alloy"
            },
            "C": {
                "item": "create:shaft"
            }
        },
        "result": {
            "item": "create:propeller"
        }
    })
    event.remove({id: "create:crafting/kinetics/encased_fan"})

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "BCCCB",
            "DEEFF",
            "BCCCB",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "B": {
                "tag": "minecraft:wooden_slabs",
            },
            "C": {
                "item": "botania:livingrock"
            },
            "D": {
                "item": "create:propeller"
            },
            "E": {
                "item": "create:cogwheel"
            },
            "F": {
                "item": "create:shaft"
            }
        },
        "result": {
            "item": "create:encased_fan"
        }
    })

    event.remove({id: "create:crafting/kinetics/water_wheel"})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "AABAA",
            "ABCBA",
            "AABAA",
            " AAA "
        ],
        "key": {
            "A": {
                "tag": "minecraft:wooden_slabs"
            },
            "B": {
                "item": "create:andesite_alloy"
            },
            "C": {
                "item": "create:shaft"
            }
        },
        "result": {
            "item": "create:water_wheel"
        }
    })
}
