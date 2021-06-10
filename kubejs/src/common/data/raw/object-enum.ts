export class ObjectEnum<T> {
    protected vals: Array<T> = []

    public values(): Array<T> {
        return this.vals;
    }

    protected create(obj: T): T {
        this.vals.push(obj);
        return obj;
    }
}
