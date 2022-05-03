function longestNoSpace(...arr) {
    if (arr.length == 0) return 0;
    if (arr.length == 1 && arr[0].includes(" ")) return 0;
    if (arr.length == 1 && !arr[0].includes("")) return arr[0].length-1;
    let filtered = arr.filter(a=>a.includes(" "));
    let filtered = arr.filter(a=>a.includes(" ")).reduce((x, y)=>x>y?x:y);
    return filtered;
}