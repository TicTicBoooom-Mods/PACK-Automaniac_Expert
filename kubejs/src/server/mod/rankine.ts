import {add_all_item_tags} from "../lib/tags/items";

export function setup_item_tags(event: any) {
    add_all_item_tags(event, "automaniac:grey_stones", "rankine:anorthosite", "rankine:rhyolite", "rankine:black_dacite", "rankine:gneiss", "rankine:phyllite")
}
