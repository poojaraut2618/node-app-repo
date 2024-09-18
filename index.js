const os = require('os');

console.log("My First App");
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);

console.log("=============Built-in Module - OS====================");
console.log(`Architecture: ${os.arch()}`);
console.log(`Information about CPU ${os.cpus()}`);
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Total Memory:  ${os.totalmem()}`);
console.log(`Host Name:  ${os.hostname()}`);
console.log(`Platform:  ${os.platform()}`);
console.log(`Release:  ${os.release()}`);
console.log(`Type: ${os.type()}`);
console.log(`UpTime:  ${os.uptime()}`);
console.log(`User Information:  ${os.userInfo()}`);

console.log("=============Global Objects====================");

console.log(global);
console.log('====================================================');
console.log(console);
console.log('====================================================');
console.log(process);
console.log('====================================================');
console.log(__filename);
console.log('====================================================');
console.log(__dirname);
console.log('====================================================');
console.log(module);







