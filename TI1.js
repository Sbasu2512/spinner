Let game = [[null,0,0,1],[0,null,null,null],[0,null,null,null],[1,null,null,null]];

function print (arr) {
let output = “";
let outputRow  = “”
    for(let row of arr) {
   outputRow = “|”
   for(let col of row) {
 
  if(col === 0) {
         output += "O";
  } else if(col === 1) {
         output += "X";	
 } else {				/
   output += " ";
   output += "|";
}
Output += outputRow  ; 

}
return output;
};

console.log(print(game));
