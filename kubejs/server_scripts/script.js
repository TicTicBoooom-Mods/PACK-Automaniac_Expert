(() => {
    "use strict";
    var e, t, n, i, a, r = {
        450: (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.botania = t.ie = t.extended_crafting = t.mm_controller = t.ex_nihilo_thermal = t.ex_nihilo_mekanism = t.ex_nihilo_sequentia = t.rankine = void 0, t.rankine = function (e) {
                return "rankine:" + e
            }, t.ex_nihilo_sequentia = function (e) {
                return "exnihilosequentia:" + e
            }, t.ex_nihilo_mekanism = function (e) {
                return "exnihilomekanism:" + e
            }, t.ex_nihilo_thermal = function (e) {
                return "exnihilothermal:" + e
            }, t.mm_controller = function (e) {
                return "masterfulmachinery:" + e + "_controller"
            }, t.extended_crafting = function (e) {
                return "extendedcrafting:" + e
            }, t.ie = function (e) {
                return "immersiveengineering:" + e
            }, t.botania = function (e) {
                return "botania:" + e
            }
        }, 952: function (e, t) {
            var n = this && this.__values || function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], i = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function () {
                        return e && i >= e.length && (e = void 0), {value: e && e[i++], done: !e}
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            };

            function i(e, t, i, a) {
                for (var r, o, c = [], l = 4; l < arguments.length; l++) c[l - 4] = arguments[l];
                var s = {type: "botania:runic_altar", output: {item: t, count: i}, mana: a, ingredients: []};
                try {
                    for (var _ = n(c), u = _.next(); !u.done; u = _.next()) {
                        var d = u.value;
                        s.ingredients.push(d)
                    }
                } catch (e) {
                    r = {error: e}
                } finally {
                    try {
                        u && !u.done && (o = _.return) && o.call(_)
                    } finally {
                        if (r) throw r.error
                    }
                }
                e.custom(s)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.runic_altar_smelting = t.runic_altar_recipe = void 0, t.runic_altar_recipe = i, t.runic_altar_smelting = function (e, t, n) {
                var a = {tag: n};
                i(e, t, 14, 5e3, a, a, a, a, a, a, a, a, {item: "minecraft:coal"}, {item: "minecraft:charcoal"})
            }
        }, 443: function (e, t) {
            var n = this && this.__values || function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], i = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function () {
                        return e && i >= e.length && (e = void 0), {value: e && e[i++], done: !e}
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.add_all_item_tags = void 0, t.add_all_item_tags = function (e, t) {
                for (var i, a, r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
                try {
                    for (var c = n(r), l = c.next(); !l.done; l = c.next()) {
                        var s = l.value;
                        e.add(t, s)
                    }
                } catch (e) {
                    i = {error: e}
                } finally {
                    try {
                        l && !l.done && (a = c.return) && a.call(c)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }
        }, 721: (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.tinkers_table_casting_consumed = t.tinkers_melting_tag = void 0, t.tinkers_melting_tag = function (e, t, n, i, a, r) {
                void 0 === a && (a = 500), void 0 === r && (r = 100), e.custom({
                    type: "tconstruct:melting",
                    ingredient: {tag: t},
                    result: {fluid: n, amount: i},
                    temperature: a,
                    time: r
                })
            }, t.tinkers_table_casting_consumed = function (e, t, n, i, a, r) {
                e.custom({
                    type: "tconstruct:casting_table",
                    cast: {tag: t},
                    cast_consumed: !0,
                    fluid: {name: n, amount: i},
                    result: a,
                    cooling_time: r
                })
            }
        }, 521: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.setup_botanical_recipes = void 0;
            var i = n(952);
            t.setup_botanical_recipes = function (e) {
                e.remove({id: "botania:mana_spreader"}), e.shaped("botania:mana_spreader", ["LLL", "RP ", "LLL"], {
                    L: "botania:livingwood",
                    R: "botania:livingrock",
                    P: "#botania:petals"
                }), e.remove({id: "botania:runic_altar"}), e.shaped("botania:runic_altar", ["LLL", "LWL"], {
                    L: "botania:livingrock",
                    W: "botania:manaweave_cloth"
                }), i.runic_altar_smelting(e, "minecraft:iron_ingot", "forge:ores/iron"), i.runic_altar_smelting(e, "create:zinc_ingot", "forge:ores/zinc"), i.runic_altar_smelting(e, "rankine:copper_ingot", "forge:ores/copper"), i.runic_altar_smelting(e, "rankine:lignite", "forge:ores/lignite"), i.runic_altar_smelting(e, "rankine:salt", "forge:ores/halite"), i.runic_altar_smelting(e, "rankine:pink_salt", "forge:ores/pink_halite"), i.runic_altar_smelting(e, "minecraft:gold_ingot", "forge:ores/gold")
            }
        }, 330: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.setup_extended_crafting_recipes = void 0;
            var i = n(450);

            function a(e, t, n) {
                e.shaped(i.extended_crafting(t + "_table"), ["GLG", "OCO", " O "], {
                    G: n,
                    O: "#minecraft:logs",
                    C: "#forge:workbenches",
                    L: "botania:livingrock"
                })
            }

            t.setup_extended_crafting_recipes = function (e) {
                !function (e) {
                    e.remove({id: "create:crafting/kinetics/shaft"}), e.custom({
                        type: "extendedcrafting:shaped_table",
                        pattern: ["AA", "AA", "AA", "AA", "AA"],
                        key: {A: {item: "create:andesite_alloy"}},
                        result: {item: "create:shaft", count: 4}
                    }), e.remove({id: "create:crafting/kinetics/large_cogwheel"}), e.custom({
                        type: "extendedcrafting:shaped_table",
                        pattern: [" AAA ", "ABCBA", "ACDCA", "ABCBA", " AAA "],
                        key: {
                            A: {tag: "minecraft:wooden_slabs"},
                            B: {item: "botania:livingrock"},
                            C: {item: "create:andesite_alloy"},
                            D: {item: "create:shaft"}
                        },
                        result: {item: "create:large_cogwheel", count: 3}
                    }), e.remove({id: "create:crafting/kinetics/cogwheel"}), e.custom({
                        type: "extendedcrafting:shaped_table",
                        pattern: ["  A  ", " ABA ", "ABCBA", " ABA ", "  A  "],
                        key: {
                            A: {tag: "minecraft:wooden_slabs"},
                            B: {item: "botania:livingrock"},
                            C: {item: "create:shaft"}
                        },
                        result: {item: "create:cogwheel", count: 6}
                    }), e.remove({id: "create:crafting/kinetics/gearbox"}), e.custom({
                        type: "extendedcrafting:shaped_table",
                        pattern: ["AAAAA", "BCDCB", "EDEDE", "BDCDB", "AAAAA"],
                        key: {
                            A: {item: "create:andesite_alloy"},
                            B: {tag: "minecraft:wooden_slabs"},
                            C: {item: "create:large_cogwheel"},
                            D: {item: "create:cogwheel"},
                            E: {item: "create:shaft"}
                        },
                        result: {item: "create:gearbox"}
                    }), e.remove({id: "create:crafting/kinetics/propeller"}), e.custom({
                        type: "extendedcrafting:shaped_table",
                        pattern: ["A   A", " ABA ", " BCB ", " ABA ", "A   A"],
                        key: {
                            A: {tag: "forge:ingots/iron"},
                            B: {item: "create:andesite_alloy"},
                            C: {item: "create:shaft"}
                        },
                        result: {item: "create:propeller"}
                    }), e.remove({id: "create:crafting/kinetics/encased_fan"}), e.custom({
                        type: "extendedcrafting:shaped_table",
                        pattern: ["AAAAA", "BCCCB", "DEEFF", "BCCCB", "AAAAA"],
                        key: {
                            A: {item: "create:andesite_alloy"},
                            B: {tag: "minecraft:wooden_slabs"},
                            C: {item: "botania:livingrock"},
                            D: {item: "create:propeller"},
                            E: {item: "create:cogwheel"},
                            F: {item: "create:shaft"}
                        },
                        result: {item: "create:encased_fan"}
                    }), e.remove({id: "create:crafting/kinetics/water_wheel"}), e.custom({
                        type: "extendedcrafting:shaped_table",
                        pattern: [" AAA ", "AABAA", "ABCBA", "AABAA", " AAA "],
                        key: {
                            A: {tag: "minecraft:wooden_slabs"},
                            B: {item: "create:andesite_alloy"},
                            C: {item: "create:shaft"}
                        },
                        result: {item: "create:water_wheel"}
                    })
                }(e), e.remove({id: i.extended_crafting("basic_table")}), e.remove({id: i.extended_crafting("advanced_table")}), e.remove({id: i.extended_crafting("elite_table")}), e.remove({id: i.extended_crafting("ultimate_table")}), a(e, "advanced", "#forge:ingots/gold"), a(e, "elite", "#forge:ingots/manasteel"), a(e, "ultimate", "#forge:gems/mana_diamond")
            }
        }, 704: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.setup_ie_recipes = void 0;
            var i = n(450);
            t.setup_ie_recipes = function (e) {
                e.remove(i.ie("crafting/hemp_fabric")), e.shaped("4x " + i.ie("hemp_fabric"), ["MHM", "HSH", "MHM"], {
                    M: i.botania("manaweave_cloth"),
                    H: i.ie("hemp_fiber"),
                    S: "#forge:rods/wooden"
                })
            }
        }, 383: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.setup_item_tags = void 0;
            var i = n(443);
            t.setup_item_tags = function (e) {
                i.add_all_item_tags(e, "automaniac:grey_stones", "rankine:anorthosite", "rankine:rhyolite", "rankine:black_dacite", "rankine:gneiss", "rankine:phyllite")
            }
        }, 197: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {value: !0}), t.setup_tinkers_recipes = void 0;
            var i = n(721);
            t.setup_tinkers_recipes = function (e) {
                i.tinkers_melting_tag(e, "automaniac:grey_stones", "kubejs:molten_grey_stone", 144, 500, 80), i.tinkers_table_casting_consumed(e, "forge:nuggets/zinc", "kubejs:molten_grey_stone", 144, "create:andesite_alloy", 80), i.tinkers_table_casting_consumed(e, "forge:nuggets/copper", "kubejs:molten_grey_stone", 144, "create:andesite_alloy", 80), i.tinkers_table_casting_consumed(e, "forge:nuggets/iron", "kubejs:molten_grey_stone", 144, "create:andesite_alloy", 80)
            }
        }
    }, o = {};

    function c(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var n = o[e] = {exports: {}};
        return r[e].call(n.exports, n, n.exports, c), n.exports
    }

    e = c(197), t = c(383), n = c(521), i = c(330), a = c(704), onEvent("recipes", (function (t) {
        e.setup_tinkers_recipes(t), n.setup_botanical_recipes(t), i.setup_extended_crafting_recipes(t), a.setup_ie_recipes(t)
    })), onEvent("item.tags", (function (e) {
        t.setup_item_tags(e)
    }))
})();
