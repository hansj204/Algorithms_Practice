function removeFullStop(new_id) {
    if('.' === new_id.charAt(0)) new_id = new_id.slice(1);
    if('.' === new_id.charAt(new_id.length - 1)) new_id = new_id.slice(0, new_id.length- 1);

    return new_id;
}

function solution(new_id) {
    //1,2,3단계
    new_id = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '').replace(/(.)\1+/gi, ".");

    //4단계
    if('.' === new_id.charAt(0)) new_id = new_id.slice(1);
    if('.' === new_id.charAt(new_id.length - 1)) new_id = new_id.slice(0, new_id.length- 1);    

    //5단계
    if(0 === new_id.length) new_id = 'a';

    //6단계
    if(new_id.length > 15) {
        new_id = new_id.substr(0, 15);
        if('.' === new_id.charAt(new_id.length - 1)) new_id = new_id.slice(0, new_id.length- 1);
    }
    
    if(new_id.length < 3) new_id = new_id.padEnd(3, new_id.slice(-1));

    return new_id;
}

console.log(solution("z-+.^."))