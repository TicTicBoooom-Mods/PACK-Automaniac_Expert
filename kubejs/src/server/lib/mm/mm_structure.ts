export class StructureBuilder {
    private _controllerId: string;
    private _structureId: string;
    private _ticks: number;
    private _layout: Array<Array<string>> = [];
    private _legend: any;

    public constructor(controllerId: string, structureId: string, ticks: number) {
        this._controllerId = controllerId;
        this._structureId = structureId;
        this._ticks = ticks;
    }

    public layout(): StructureLayoutBuilder {
        return new StructureLayoutBuilder(this);
    }

    public legend() : StructureLegendBuilder {
        return new StructureLegendBuilder(this);
    }

    set_layout(layout: Array<Array<string>>): void {
        this._layout = layout;
    }

    set_legend(legend: any): void {
        this._legend = legend;

    }

    build(event: KRecipeEvent): void {
        event.custom({
            type: "masterfulmachinery:machine_structure",
            controllerId: this._controllerId,
            id: this._structureId,
            ticks: this._ticks,
            layout: this._layout,
            legend: this._legend,
        })
    }
}


export class StructureLayoutBuilder {
    private data: Array<Array<string>> = []
    private _parentBuilder: StructureBuilder;

    constructor(parentBuilder: StructureBuilder) {
        this._parentBuilder = parentBuilder;
    }

    public make_layer(): StructureLayoutLayerBuilder {
        return new StructureLayoutLayerBuilder(this);
    }

    add_layer(layer: Array<string>) {
        this.data.push(layer);
    }

    public end(): StructureBuilder {
        this._parentBuilder.set_layout(this.data);
        return this._parentBuilder
    }
}

export class StructureLayoutLayerBuilder {
    private data: Array<string> = []
    private _parentBuilder: StructureLayoutBuilder;

    constructor(parentBuilder: StructureLayoutBuilder) {
        this._parentBuilder = parentBuilder;

    }

    public make_row(): StructureLayoutRowBuilder {
        return new StructureLayoutRowBuilder(this);
    }

    add_row(row: string) {
        this.data.push(row)
    }

    public end(): StructureLayoutBuilder {
        this._parentBuilder.add_layer(this.data);
        return this._parentBuilder;
    }

}

export class StructureLayoutRowBuilder {
    private data: string = '';
    private _parentBuilder: StructureLayoutLayerBuilder;

    constructor(parentBuilder: StructureLayoutLayerBuilder) {
        this._parentBuilder = parentBuilder;
    }

    public put_keys(char: string): StructureLayoutRowBuilder {
        this.data += char;
        return this;
    }

    public end(): StructureLayoutLayerBuilder {
        this._parentBuilder.add_row(this.data);
        return this._parentBuilder;
    }
}

export class StructureLegendBuilder {
    private _parentBuilder: StructureBuilder;
    private data: any = {};

    constructor(parentBuilder: StructureBuilder) {
        this._parentBuilder = parentBuilder;
    }

    public put_block(key: string, id: string): StructureLegendBuilder {
        this.data[key] = {block: id};
        return this;
    }

    public end(): StructureBuilder {
        this._parentBuilder.set_legend(this.data);
        return this._parentBuilder;
    }
}
