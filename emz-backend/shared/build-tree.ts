const context = {
    left: 'left',
    right: 'right',
    children: 'children'
};

const allocateNode = (hier, node, hMap) => {

    const hNode = hMap.has(node) ? hMap.get(node ) : {l:node[context.left],r:node[context.right]};

    delete node[context.left];
    delete node[context.right];

    hMap.set(node,hNode);

    if (!hier.length ) {
        hier.push([]);
    }

    const last = hier[hier.length-1];

    //if root level
    if (!hMap.has(last)) {
        last.push(node);
        hier.push(node);
    }
    else if (hMap.get(last).r > hMap.get(node).r ) {
        if(!last[context.children]) {
            last[context.children] = [];
        }

        last[context.children].push(node);
        hier.push(node);
    }
    else {
        hier.pop();
        return allocateNode(hier,node,hMap);
    }

    return hier;
};

export const nestedSetData = ( table, treeMap = [], hMap = null ) => {
    let set = table;

    if (treeMap.length === 0) {
        hMap = new WeakMap();
        set = [...set];
    }

    const currentNode = Object.assign({},set.shift());

    treeMap = allocateNode(treeMap, currentNode, hMap);

    if (!set.length) {

        return treeMap[0];

    } else {

        return nestedSetData(set, treeMap, hMap);
    }
};

export const flatNestedData = ( nested, pointer = {i:0}, flatten = []) => {
    for(const i in nested ) {
        const node = nested[i];

        const row = Object.assign({},node);
        flatten.push(row);
        row[context.left] = ++pointer.i;
        delete row[context.children];

        if(node[context.children]) {
            flatNestedData(node[context.children],pointer,flatten);
        }
        row[context.right] = ++pointer.i;
    }

    return flatten;
};

export const depthDecorator = (array, depth = 0) => {
    return array.map((child) => Object.assign(child, {
        depth,
        children: depthDecorator(child.children || [], depth + 1)
    }));
}
