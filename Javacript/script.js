// var a=prompt()
// var b=prompt()
// function deepEqual(a,b){
//     if(a===b)
//             return true;
//     else 
//         return false;
// }
function deepEqual(a,b){
    if(typeof a==typeof b){
        if(a==b)
            return true
        else if ((typeof a=='object' && typeof b == 'object') && (a==null && b == null))
            return true;
        
        else if((typeof a=='object' && typeof b == 'object') && (a==null || b == null))
            return false ;
        else
            return false
       
    }
        
    else
        return false;
}
console.log(deepEqual(null,[]))
// console.log(deepEqual(a,b))
// console.log(typeof {})