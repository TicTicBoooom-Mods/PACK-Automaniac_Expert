import {StructureBuilder} from "../lib/mm/mm_structure";
import {mm_controller} from "../../common/ids";

export function setup_masterful_machinery_recipes(event: KRecipeEvent) {
    create(event);
    removal(event);
    overrides(event);
}

function create(event: KRecipeEvent) {



}

function removal(event: KRecipeEvent) {

}

function overrides(event: KRecipeEvent) {

}

function create_primitive_crusher(event: KRecipeEvent) {
    new StructureBuilder(mm_controller("primitive"), "crusher", 200)
        .layout().make_layer()
        .make_row().put_keys("AAA").end()
        .make_row().put_keys("BBB").end()
        .make_row().put_keys("CCC").end().end()
        .make_layer()
        .make_row().put_keys("AAA").end()
        .make_row().put_keys("")
}
