module.exports = function multiply(first, second) {
    function reverse( str ) {
        var temp = '';
        for ( var i = str.length - 1 ; i >= 0 ; i-- )
            temp += str[i];
        return temp;
    }
    function sum_long( x , y ){
        var overflow = 0;
        var temp = '';
        if ( x.length < y.length )
        {
            var tmp = x;
            x = y;
            y = tmp;
        }
        while ( x.length != y.length)
        {
            y += '0';
        }
        for ( var i = 0 ; i < y.length ; i ++ )
        {
            var number = ( +x[i] + +y[i] + overflow ) % 10 ;
            overflow = Math.floor( ( +x[i] + +y[i] + overflow ) / 10 );
            temp += number ;
        }
        if ( overflow > 0 )
            temp += overflow;
        return temp;
    }

    function mult_long( x , y) {
        var str = '';
        var zeros = '';
        var overflow = 0;
        var temp = '';

        for ( var i = 0; i < y.length; i++ ) {
            str = '';
            str = zeros;
            zeros += 0;

            for ( var j = 0; j < x.length; j++ ) {
                var number = ( ( +y[i] * +x[j] ) + overflow ) % 10;
                overflow = Math.floor(( +y[i] * +x[j] + overflow) / 10);
                str += number;
            }
            if (overflow > 0)
                str += overflow;

            overflow = 0;
            temp = sum_long(temp, str);
        }
        return temp;
    }
    if ( first.length < second.length )
    {
        var tmp = first;
        first = second;
        second = tmp;
    }
    first = reverse( first );
    second = reverse( second );
    return  reverse( mult_long( first , second ) );
}


