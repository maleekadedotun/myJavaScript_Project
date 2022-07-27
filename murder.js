var room = "dining room";
    var suspect = "Mr. Parkes"; 
    var weapon = "knife";
    var solved = false;

    if (room =='gallery') {
        suspect = 'Ms. Van Cleve';
        weapon = 'trophy';
        solved = true;
    } else if (room=='ballroom') {
        suspect = 'Mr. Kalehoff';
        weapon = 'poison';
        solved = true;
        
    } else if (room=='dining room') {
            suspect = 'Mr. Parkes';
            weapon = 'knife';
            solved = 'true';
    } else {
        suspect = 'Mrs. Sparr';
        weapon = 'pool stick';
        solved = true;
    }
    /* ****************************************** */
    // The code below will run only when `solved` is true
    if (solved) {
        console.log(`${suspect} did it in ${room} with the ${weapon}`);
    }
    document.getElementById('demo').innerHTML =(`${suspect} did it in ${room} with the ${weapon}`);

    var musicians = 4;
if( musicians <= 0){
  console.log("not a group"); 
} else if(musicians ===1){
    console.log("solo");
} else if(musicians === 2){
    console.log("duet");
}else if(musicians === 3){
    console.log("trio");
}else if( musicians === 4){
    console.log("quartet");
}else{
    console.log("this is a large group");
}
// document.getElementById('demo1').innerHTML =musicians;

    
   