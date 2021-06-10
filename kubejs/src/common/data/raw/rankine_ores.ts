import {ObjectEnum} from "./object-enum";

class Ores extends ObjectEnum<RankineOre> {
    PETALITE: RankineOre = this.make('Petalite', 0xd1d1cf);
    LIGNITE: RankineOre = this.make('Lignite', 0x8a5c20);
    SUBBITUMINOUS_COAL: RankineOre = this.make('Subbituminous Coal', 0x2e2d2d);
    BITUMINOUS_COAL: RankineOre = this.make('Bituminous Coal', 0x232323);
    ANTHRACITE_COAL: RankineOre = this.make('Anthracite Coal', 0x030303);
    CRYOLITE: RankineOre = this.make('Cryolite', 0xe6e5dc);
    MAGNESITE: RankineOre = this.make('Magnesite', 0xf5f4f0);
    NATIVE_ALUMINUM: RankineOre = this.make('Native Aluminum', 0xc98551);
    BAUXITE: RankineOre = this.make('Bauxite', 0xad2e03);
    NATIVE_SULFUR: RankineOre = this.make('Native Sulfur', 0xdbba27);
    ILMENITE: RankineOre = this.make('Ilmenite', 0x9e9778);
    VANADINITE: RankineOre = this.make('Vanadinite', 0xdb1818);
    CHROMITE: RankineOre = this.make('Chromite', 0xf0f0f0);
    PYROLUSITE: RankineOre = this.make('Pyrolusite', 0xbababa);
    PYRITE: RankineOre = this.make('Pyrite', 0xdba718);
    MAGNETITE: RankineOre = this.make('Magnetite', 0xbab9b6);
    COBALTITE: RankineOre = this.make('Cobaltite', 0x1875b8);
    PENTLANDITE: RankineOre = this.make('Pentlandite', 0xb3b2aa);
    INTERSPINIFEX: RankineOre = this.make('Interspinifex', 0x73715f);
    NATIVE_COPPER: RankineOre = this.make('Native Copper', 0xf2832e);
    MALACHITE: RankineOre = this.make('Malachite', 0x63baaa);
    SPHALERITE: RankineOre = this.make('Sphalerite', 0xc5c79b);
    NATIVE_GALLIUM: RankineOre = this.make('Native Gallium', 0x711787);
    NATIVE_ARSENIC: RankineOre = this.make('Native Arsenic', 0xa66524);
    NATIVE_SELENIUM: RankineOre = this.make('Native Selenium', 0x2de3a6);
    CELESTINE: RankineOre = this.make('Celestine', 0x8ae3e1);
    XENOTIME: RankineOre = this.make('Xenotime', 0xd68f2b);
    COLUMBITE: RankineOre = this.make('Columbite', 0x668cd9);
    MOLYBDENITE: RankineOre = this.make('Molybdenite', 0xc7c5ab);
    NATIVE_SILVER: RankineOre = this.make('Native Silver', 0xfafafa);
    ACANTHITE: RankineOre = this.make('Acanthite', 0xdbdbdb);
    GREENOCKITE: RankineOre = this.make('Greenockite', 0xd6d027);
    NATIVE_INDIUM: RankineOre = this.make('Native Indium', 0x2787d6);
    NATIVE_TIN: RankineOre = this.make('Native Tin', 0xc2c2c2);
    CASSITERITE: RankineOre = this.make('Cassiterite', 0x4a4a4a);
    STIBNITE: RankineOre = this.make('Stibnite', 0x4a4a4a);
    TELLURIUM: RankineOre = this.make('Tellurium', 0xc7b030);
    TANTALITE: RankineOre = this.make('Tantalite', 0x4a4a4a);
    WOLFRAMITE: RankineOre = this.make('Wolframite', 0x635943);
    NATIVE_GOLD: RankineOre = this.make('Native Gold', 0xd9bb29);
    NATIVE_LEAD: RankineOre = this.make('Native Lead', 0x7798a1);
    GALENA: RankineOre = this.make('Galena', 0x7798a1);
    NATIVE_BISMUTH: RankineOre = this.make('Native Bismuth', 0xe3dae6);
    BISMUTHINITE: RankineOre = this.make('Bismuthinite', 0xe6d8eb);
    URANINITE: RankineOre = this.make('Uraninite', 0xe6d8eb);
    PLUMBAGO: RankineOre = this.make('Plumbago', 0x262626);
    MOISSANITE: RankineOre = this.make('Moissanite', 0xc3cee0);
    SPERRYLITE: RankineOre = this.make('Sperrylite', 0xc3cee0);
    MONAZITE: RankineOre = this.make('Monazite', 0xad8e4b);
    LAZURITE: RankineOre = this.make('Lazurite', 0x4b64ad);
    DIAMOND: RankineOre = this.make('Diamond', 0x45dbe6);
    EMERALD: RankineOre = this.make('Emerald', 0x37bd39);
    OPAL: RankineOre = this.make('Opal', 0xa9ebe8);
    AQUAMARINE: RankineOre = this.make('Aquamarine', 0x7cb8d9);
    MAJORITE: RankineOre = this.make('Majorite', 0xc91818);
    QUARTZ: RankineOre = this.make('Quartz', 0xd6cec3);
    FLUORITE: RankineOre = this.make('Fluorite', 0xedebe1);
    CINNABAR: RankineOre = this.make('Cinnabar', 0xc91818);
    HALITE: RankineOre = this.make('Halite', 0xedf0f2);
    PINK_HALITE: RankineOre = this.make('Pink Halite', 0xf3e4f5);
    KAMACITE: RankineOre = this.make('Kamacite', 0xe8e8e8);
    ANTITAENITE: RankineOre = this.make('Antitaenite', 0xe8e8e8);
    TAENITE: RankineOre = this.make('Taenite', 0xe8e8e8);
    TETRAAENITE: RankineOre = this.make('Tetrataenite', 0xd0d6ce);
    LONSDALEITE: RankineOre = this.make('Lonsdalite', 0xede6ec);

    private make(id: string, color: number, ingot_id: string = id.toLowerCase() + "_ingot"): RankineOre {
        return this.create({
            id: id,
            color: color,
            ingot_id: ingot_id
        });
    }
}


export interface RankineOre {
    id: string;
    color: number;
    ingot_id: string;
}

export const ORES = new Ores();
