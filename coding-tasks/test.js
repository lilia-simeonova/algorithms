function R (r){ 
    switch ( ! ( r += ( r < 0 ) - ( r > 0 ) ) ) { 
        case 0 : R (-r);
        default : console.log('',r);
    }
}

console.log(R(5));