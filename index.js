
// const superbowlWin = record.find(function(record){ 
// }

function superbowlWin(array1){
    const resultWin = array1.find(obj => obj.result === 'W');
    if(resultWin !==undefined){
        return resultWin.year
    }else
    return resultWin
};