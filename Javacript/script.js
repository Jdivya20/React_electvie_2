// function deepEqual(a,b){
//     if(a===b)
//             return true;
//     else 
//         return false;
// }
function deepEqual(a,b){
    if(typeof a==typeof b){
        if ((typeof a=='object' && typeof b == 'object') && (a==null && b == null))
            return true;
        
        else if((typeof a=='object' && typeof b == 'object') && (a==null || b == null))
            return false ;
        else
            return true
    }
        
    else
        return false;
}
console.log(deepEqual(1,"1"))
// console.log(typeof {})