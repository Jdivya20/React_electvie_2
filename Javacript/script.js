function deepEqual(a,b){
    if(typeof a==typeof b){
        if(a===b)
            return true;
    }
        
    else
        return false;
}
console.log(deepEqual(1,"2"))
