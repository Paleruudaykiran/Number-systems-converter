import React from 'react'
const bases = {
    Binary : 2,
    Octal : 8,
    Decimal : 10,
    HexaDecimal : 16
}
const Algorithms = (srcVal,source,target) => {
    console.log(srcVal,source,target)
    let srcb = bases[source]
    let trgb = bases[target] 
    if(trgb === 10) {
        return AnyToDecimal(srcVal,srcb) 
    }
    if(srcb == 10) { 
        return DecimalToAny(srcVal,trgb)
    }
    else {
        let ans1 = AnyToDecimal(srcVal,srcb)
        console.log(ans1)
        let ans2 = DecimalToAny(ans1,trgb)
        console.log(ans2) 
        return ans2
    }
}
const DecimalToAny = (val,trgb) => {
    val = Number(val) 
    let ans = ''
    while(val != 0) { 
        let q = val%trgb
        switch(q) {
            case 10 : 
                q = 'A'
                break
            case 11 : 
                q = 'B'
                break
             case 12 :
                 q = 'C'
                 break
             case 13 :
                 q = 'D' 
                 break
             case 14 : 
                 q = 'E'
                 break
             case 15 : 
                 q = 'F'
                 break
             default :
                 q = String(q)
        }
        ans = q + ans
        val = Math.floor(val/trgb) 
    }
    return ans
}
const AnyToDecimal = (val,srcb) => {
    let ans = 0
    let len = val.length - 1
    for(var i = 0 ; i < val.length ; i++) {
       let n = val[len - i] 
       switch(n) {
        case 'A' : 
            n = 10
            break
        case 'B' : 
            n = 11
            break
         case 'C' :
             n = 12
             break
         case 'D' :
             n = 13 
             break
         case 'E' : 
             n = 14
             break
         case 'F' : 
             n = 15
             break
         default :
             n = Number(n)
    }
       let curr = n*(Math.pow(srcb,i)) 
       console.log('curr ' + curr + 'n : ' + n + 'pow : ' + Math.pow(srcb,i)) 
       ans = ans + curr
    }
    console.log('ans ' + ans)
    return ans
}
export default Algorithms
