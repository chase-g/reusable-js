function range(start: number, stop: number){
return Array.apply(null, Array(stop - start + 1)).map(function (_, i) {return i + start;})
}
