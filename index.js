module.exports = function(obj, ...objsToAdd) {
    for(let objToAdd of objsToAdd) {
        for(let [k, v] of Object.entries(objToAdd)) {
            if(obj.hasOwnProperty(k)) {
                if(Array.isArray(v) && Array.isArray(obj[k])) {
                    obj[k].push.apply(obj[k], v);
                } else if(typeof v === 'object' && typeof obj[k] === 'object') {
                    obj[k] = objAssign(obj[k], v);
                } else {
                    obj[k] = v;
                }
            } else {
                obj[k] = v;
            }
        }
    }
    return obj;
}