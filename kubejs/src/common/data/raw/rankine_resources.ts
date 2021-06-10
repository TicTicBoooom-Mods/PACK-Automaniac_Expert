import {ObjectEnum} from "./object-enum";

export class Resources extends ObjectEnum<RankineResource> {

    PETALITE = this.make('Petalite');
    MALACHITE = this.make('Malachite');
    AZURITE = this.make('Azurite');
    CHALCOPYRITE = this.make('Chalcopyrite');
    LEPIDOLITE = this.make('Lepidolite');
    CASSITERITE = this.make('Cassiterite');
    ALUMINA = this.make('Alumina');
    SPHALERITE = this.make('Sphalerite');
    MAGNETITE = this.make('Magnetite');
    PENTLANDITE = this.make('Pentlandite');
    MAGNESITE = this.make('Magnesite');
    GALENA = this.make('Galena');
    VANADINITE = this.make('Vanadinite');
    BISMUTHINITE = this.make('Bismuthinite');
    ACANTHITE = this.make('Acanthite');
    PYROLUSITE = this.make('Pyrolsite');
    CHROMITE = this.make('Chromite');
    MOLYBDENITE = this.make('Molybdenite');
    WOLFRAMITE = this.make('Wolframite');
    ILMENITE = this.make('Ilmenite');
    COLUMBITE = this.make('Columbite');
    TANTALITE = this.make('Tantalite');
    COBALTITE = this.make('Copbaltite');
    CELESTINE = this.make('Celestine');
    PLATINUM_ARSENIDE = this.make('Platinum Arsenide');
    ZIRCON = this.make('Zircon');
    THORITE = this.make('Thorite');
    URANINITE = this.make('Uraninite');
    GREENOCKITE = this.make('Greenockite');
    STIBNITE = this.make('Stibnite');
    XENOTIME = this.make('Xenotime');
    BARITE = this.make('Barite');
    CRYOLITE = this.make('Cryolite');
    MONAZITE_CE = this.make('Monazite (Ce)');
    MONAZITE_LA = this.make('Monazite (La)');
    MONAZITE_ND = this.make('Monazite (Nd)');
    MONAZITE_SM = this.make('Monazite (Sm)');
    LIGNITE = this.make('Lignite');
    SUBBITUMINOUS_COAL = this.make('Subbituminous Coal');
    BITUMINOUS_COAL = this.make('Bituminous Coal');
    ANTHRACITE_COAL = this.make('Anthracite Coal');
    COKE = this.make('Coke');
    SALT = this.make('Salt');
    PINK_SALT = this.make('Pink Salt');
    GRAPHITE = this.make('Graphite');
    SILICON_CARBIDE = this.make('Silicon Carbide');
    CINNABAR = this.make('Cinnabar');
    RUBY = this.make('Ruby');
    SAPPHIRE = this.make('Sapphire');
    OPAL = this.make('Opal');
    AQUAMARINE = this.make('Aquamarine');
    TOURMALINE = this.make('Tourmaline');
    TIGER_IRON = this.make('Tiger Iron');
    GARNET = this.make('Garnet');
    PERIDOT = this.make('Peridot');
    TOPAZ = this.make('Topaz');
    AMBER = this.make('Amber');
    PEARL = this.make('Pearl');
    FLUORITE = this.make('Fluorite');
    LABRADORITE = this.make('Labradorite');
    LONSDALEITE_DIAMOND = this.make('Lonsdaleite Diamond');
    RHODINITE = this.make('Rhodinite');
    RHODOCHROSITE = this.make('Rhodochrosite');
    CHROME_ENSTATITE = this.make('Chrome Enstatite');
    FELDSPAR = this.make('Orthoclase Feldspar', 'feldspar');
    PLAGIOCLASE_FELDSPAR = this.make('Plagioclase Feldspar');
    CALCITE = this.make('Calcite');
    DOLOMITE = this.make('Dolomite');
    OLIVINE = this.make('Olivine');
    PYROXENE = this.make('Pyroxene');
    MICA = this.make('Mica');
    AMPHIBOLE = this.make('Amphibole');
    CALCIUM_SILICATE = this.make('Calcium Silicate');
    POZZOLAN = this.make('Pozzolan');
    PERLITE = this.make('Perlite');
    TRONA = this.make('Trona');
    THENARDITE = this.make('Thenardite');
    BORAX = this.make('Borax');
    SALTPETER = this.make('Saltpeter');
    SODIUM_CARBONATE = this.make('Sodium Carbonate');
    SODIUM_SULFIDE = this.make('Sodium Sulfide');
    SODIUM_HYDROXIDE = this.make('Sodium Hydroxide');
    BONE_CHAR = this.make('Bone Char');
    QUICKLIME = this.make('Quicklime');
    MAGNESIA = this.make('Magnesia');
    SLAG = this.make('Slag');

    private make(name: string, id: string = name.toLowerCase().replace(" ", "_")): RankineResource {
       return this.create({
            name: name,
            id: id,
        });
    }
}

export interface RankineResource {
    name: string;
    id: string;
}

export const RESOURCES = new Resources();
