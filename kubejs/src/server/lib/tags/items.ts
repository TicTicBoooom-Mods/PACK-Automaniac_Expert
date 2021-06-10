export function add_all_item_tags(event: any, tag: string, ...items: Array<string>) {
    for (let item of items) {
        event.add(tag, item);
    }
}
