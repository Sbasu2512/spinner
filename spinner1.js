//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spin = () => {
       
       for(let i=0; i<10; i++){
              setTimeout(() => {
                     process.stdout.write('\r|   ');
                   }, 100);
                   
                   setTimeout(() => {
                     process.stdout.write('\r/   ');
                   }, 300);
                   
                   setTimeout(() => {
                     process.stdout.write('\r-   ');
                   }, 500);
                   
                   setTimeout(() => {
                     // Need to escape the backslash since it's a special character.
                     process.stdout.write('\r\\   '); 
                   }, 700);
              
                   setTimeout(() => {
                     process.stdout.write('\r\|   '); 
                   }, 900);
              
                   setTimeout(() => {
                     // Need to escape the backslash since it's a special character.
                     process.stdout.write('\r\/   '); 
                   }, 1100);
                   
                   setTimeout(() => {
                     process.stdout.write('\r\-   '); 
                   }, 1400);   

                   setTimeout(() => {
                     process.stdout.write('\r\\   '); 
                   }, 1600);   
       }
}

spin();