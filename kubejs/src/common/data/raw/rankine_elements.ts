import {ObjectEnum} from "./object-enum";

class Elements extends ObjectEnum<RankineElement> {
    LITHIUM: RankineElement = this.make('Lithium', 0x42ecf5);
    BERYLLIUM: RankineElement = this.make('Beryllium', 0x63bd59);
    BORON: RankineElement = this.make('Boron', 0x666161);
    CARBON: RankineElement = this.make('Carbon', 0x363434);
    SODIUM: RankineElement = this.make('Sodium', 0xc4c963);
    MAGNESIUM: RankineElement = this.make('Magnesium', 0xe7e8dc);
    ALUMINUM: RankineElement = this.make('Aluminum', 0xe3dcd5);
    SILICON: RankineElement = this.make('Silicon', 0x525252);
    PHOSPHORUS: RankineElement = this.make('Phosphorus', 0xd95050);
    SULFUR: RankineElement = this.make('Sulfur', 0xe8d43c);
    POTASSIUM: RankineElement = this.make('Potassium', 0xad4488);
    CALCIUM: RankineElement = this.make('Calcium', 0xede979);
    SCANDIUM: RankineElement = this.make('Scandium', 0xd7f0af);
    TITANIUM: RankineElement = this.make('Titanium', 0xc9c9c9);
    VANADIUM: RankineElement = this.make('Vanadium', 0xd93b3b);
    CHROMIUM: RankineElement = this.make('Chromium', 0xb3b3b3);
    MANGANESE: RankineElement = this.make('Manganese', 0xebb2b2);
    COBALT: RankineElement = this.make('Cobalt', 0x82e1ed);
    NICKEL: RankineElement = this.make('Nickel', 0xb4f0de);
    COPPER: RankineElement = this.make('Copper', 0xed9d4c);
    ZINC: RankineElement = this.make('Zinc', 0xf5f5e6);
    GALLIUM: RankineElement = this.make('Gallium', 0x8b5499);
    GERMANIUM: RankineElement = this.make('Germanium', 0xe4e8d3);
    ARSENIC: RankineElement = this.make('Arsenic', 0xeb9942);
    SELENIUM: RankineElement = this.make('Selenium', 0x519928);
    RUBIDIUM: RankineElement = this.make('Rubidium', 0xd65e5e);
    STRONTIUM: RankineElement = this.make('Strontium', 0xd4cc8c);
    YTTRIUM: RankineElement = this.make('Yttrium', 0xede8d5);
    ZIRCONIUM: RankineElement = this.make('Zirconium', 0x324cc9);
    NIOBIUM: RankineElement = this.make('Niobium', 0x8192e6);
    MOLYBDENUM: RankineElement = this.make('Molybdenum', 0xdecee0);
    TECHNETIUM: RankineElement = this.make('Technetium', 0x81c6db);
    RUTHENIUM: RankineElement = this.make('Ruthenium', 0xbd9731);
    RHODIUM: RankineElement = this.make('Rhodium', 0xdce6ca);
    PALLADIUM: RankineElement = this.make('Palladium', 0xe04e1d);
    SILVER: RankineElement = this.make('Silver', 0xededed);
    CADMIUM: RankineElement = this.make('Cadmium', 0x8da876);
    INDIUM: RankineElement = this.make('Indium', 0x515496);
    TIN: RankineElement = this.make('Tin', 0xdddded);
    ANTIMONY: RankineElement = this.make('Antimony', 0xc8e3aa);
    TELLURIUM: RankineElement = this.make('Tellurium', 0xe3d1aa);
    IODINE: RankineElement = this.make('Iodine', 0x5f2770);
    CESIUM: RankineElement = this.make('Cesium', 0x40b372);
    BARIUM: RankineElement = this.make('Barium', 0xb34094);
    LANTHANUM: RankineElement = this.make('Lanthanum', 0x9ae3de);
    CERIUM: RankineElement = this.make('Cerium', 0x9ae3bb);
    PRASEODYMIUM: RankineElement = this.make('Praseodymium', 0xe3d39a);
    NEODYMIUM: RankineElement = this.make('Neodymium', 0x9ab5e3);
    PROMETHIUM: RankineElement = this.make('Promethium', 0xf5baca);
    SAMARIUM: RankineElement = this.make('Samarium', 0xd6c578);
    EUROPIUM: RankineElement = this.make('Europium', 0xe5e8ac);
    GADOLINIUM: RankineElement = this.make('Gadolinium', 0xf4dff5);
    TERBIUM: RankineElement = this.make('Terbium', 0xe4eded);
    DYSPROSIUM: RankineElement = this.make('Dysprosium', 0xecede4);
    HOLMIUM: RankineElement = this.make('Holmium', 0xede4ec);
    ERBIUM: RankineElement = this.make('Erbium', 0xece4ed);
    THULIUM: RankineElement = this.make('Thulium', 0xd8ede8);
    YTTERBIUM: RankineElement = this.make('Ytterbium', 0xd8ede8);
    LUTETIUM: RankineElement = this.make('Lutetium', 0xede5ca);
    HAFNIUM: RankineElement = this.make('Hafnium', 0x92b3ae);
    TANTALUM: RankineElement = this.make('Tantalum', 0x78756e);
    TUNGSTEN: RankineElement = this.make('Tungsten', 0x968e7b);
    RHENIUM: RankineElement = this.make('Rhenium', 0x7b9396);
    OSMIUM: RankineElement = this.make('Osmium', 0xe2ace6);
    IRIDIUM: RankineElement = this.make('Iridium', 0x9e9578);
    PLATINUM: RankineElement = this.make('Platinum', 0x60cfdb);
    THALLIUM: RankineElement = this.make('Thallium', 0xe7c3eb);
    LEAD: RankineElement = this.make('Lead', 0x6f75c7);
    BISMUTH: RankineElement = this.make('Bismuth', 0xedd5f0);
    POLONIUM: RankineElement = this.make('Polonium', 0xa6a6a6);
    ASTATINE: RankineElement = this.make('Astatine', 0x2bb545);
    FRANCIUM: RankineElement = this.make('Francium', 0xb5822b);
    RADIUM: RankineElement = this.make('Radium', 0x4fc45a);
    ACTINIUM: RankineElement = this.make('Actinium', 0x4f6ac4);
    THORIUM: RankineElement = this.make('Thorium', 0x4d4d4d);
    PROTACTINIUM: RankineElement = this.make('Protactinium', 0x005e2c);
    URANIUM: RankineElement = this.make('Uranium', 0x12a356);
    NEPTUNIUM: RankineElement = this.make('Neptunium', 0x161e66);
    PLUTONIUM: RankineElement = this.make('Plutonium', 0xb828b5);
    AMERICIUM: RankineElement = this.make('Americium', 0x7a405c);
    CURIUM: RankineElement = this.make('Curium', 0xd98bb0);
    BERKELIUM: RankineElement = this.make('Berkelium', 0x8b90d9);
    CALIFORNIUM: RankineElement = this.make('Californium', 0xde6d9a);
    EINSTEINIUM: RankineElement = this.make('Einsteinium', 0xde6d9a);
    FERMIUM: RankineElement = this.make('Fermium', 0xde6d9a);
    MANDELEVIUM: RankineElement = this.make('Mandelevium', 0x1eced4);
    NOBELIUM: RankineElement = this.make('Nobelium', 0xab59d4);
    LAWRENCIUM: RankineElement = this.make('Lawrencium', 0x9e9578);
    RUTHERFORDIUM: RankineElement = this.make('Rutherfordium', 0xe33b3b);
    DUBNIUM: RankineElement = this.make('Dubnium', 0x3be34f);
    SEABORGIUM: RankineElement = this.make('Seaborgium', 0x3be3cf);
    BOHRIUM: RankineElement = this.make('Bohrium', 0x3b5ae3);
    HASSIUM: RankineElement = this.make('Hassium', 0xe3b63b);
    MEITNERIUM: RankineElement = this.make('Meitnerium', 0xe3dd3b);
    DARMSTADTIUM: RankineElement = this.make('Darmstadtium', 0x631616);
    ROETGENIUM: RankineElement = this.make('Roentgenium', 0xe81c1c);
    COPERNICIUM: RankineElement = this.make('Copernicium', 0x1c3be8);
    NIHONIUM: RankineElement = this.make('Nihonium', 0x1caee8);
    FLEROVIUM: RankineElement = this.make('Flerovium', 0xe81cb2);
    MOSCOVIUM: RankineElement = this.make('Moscovium', 0x1fe81c);
    LIVERMORIUM: RankineElement = this.make('Livermorium', 0xe51ce8);
    TENNESINE: RankineElement = this.make('Tennessine', 0x93dbc6);
    IRON: RankineElement = this.make('Iron', 0xefefef);
    NETHERITE: RankineElement = this.make('Netherite', 0x545454);

    private make(id: string, color: number, ingot_id: string = id.toLowerCase() + "_ingot"): RankineElement {
        return this.create({
            id: id,
            color: color,
            ingot_id: ingot_id
        });
    }
}

export interface RankineElement {
    id: string;
    color: number;
    ingot_id: string;
}

export const ELEMENTS = new Elements();
