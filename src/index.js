function digitToStr(digit) {
    switch (digit) {
        case '0': return 'zero';
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';

        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';

        case '20': return 'twenty';
        case '30': return 'thirty';
        case '40': return 'forty';
        case '50': return 'fifty';
        case '60': return 'sixty';
        case '70': return 'seventy';
        case '80': return 'eighty';
        case '90': return 'ninety';
    }

}

module.exports = function toReadable (number) {
    let arr = String(number).split('');

    if (arr.length == 1) {return digitToStr(arr[0])};
    if (arr.length == 2) {return arr[0]=='1' ? digitToStr(arr[0] + arr[1]) 
                                             : (arr[1]=='0') ? digitToStr(arr[0]+'0') 
                                                             : digitToStr(arr[0]+'0') + ' ' + digitToStr(arr[1])};
    let res='';
    if (arr[1]=='0') {
        if (arr[2]=='0') { res='' }
        else { res = ' ' + digitToStr(arr[2]) }
    }                                                             
    else if (arr[1]=='1') { res = ' ' + digitToStr(arr[1] + arr[2]) } 
         else if (arr[2]=='0') { res = ' ' + digitToStr(arr[1]+'0') }
              else { res = ' ' + digitToStr(arr[1]+'0') + ' ' + digitToStr(arr[2]) }

    return digitToStr(arr[0]) + ' hundred' + res;
}
