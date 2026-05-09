export function unary(fn) {
    return function(arg) {
        return fn(arg)
    }
}

export function identity(param) {
    return param;
}