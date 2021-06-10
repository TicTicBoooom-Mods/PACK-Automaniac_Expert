import {ELEMENTS} from "../../common/data/raw/rankine_elements";
import {ORES} from "../../common/data/raw/rankine_ores";

export function setup_rankine_additions(event: any) {
    for (let elem of ELEMENTS.values()) {
        event.create(elem.id.toLowerCase() + "_dust").displayName(elem.id + ' Dust').color(0, elem.color).texture('kubejs:item/dust');
        event.create(elem.id.toLowerCase() + "_gear").displayName(elem.id + ' Gear').color(0, elem.color).texture('kubejs:item/gear');
        event.create(elem.id.toLowerCase() + "_plate").displayName(elem.id + ' Plate').color(0, elem.color).texture('kubejs:item/plate');
        event.create(elem.id.toLowerCase() + "_rod").displayName(elem.id + ' Rod').color(0, elem.color).texture('kubejs:item/rod');
    }

    for (let elem of ORES.values()) {
        event.create(elem.id.toLowerCase().replace(' ', '_') + "_dust").displayName(elem.id + ' Dust').color(0, elem.color).texture('kubejs:item/dust');
        event.create(elem.id.toLowerCase().replace(' ', '_') + "_crushed_ore").displayName('Crushed ' + elem.id + ' Ore').color(0, elem.color).texture('kubejs:item/crushed_ore');
        event.create(elem.id.toLowerCase().replace(' ', '_') + "_purified_ore").displayName('Purified ' + elem.id + ' Ore').color(0, elem.color).texture('kubejs:item/dust');
    }
}
