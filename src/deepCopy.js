export const deepCopy = (parent, child) => {
        let toStr = Object.prototype.toString,
        astr = '[object Array]';

    child = child || {};

    for (let i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === 'object') {
                child[i] = (toStr.call(parent[i] === astr) ? [] : {});
                deepCopy(parent[i], child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}