const os = require('os')
console.log(os.hostname());
console.log(os.cpus()[0].model);
console.log(new Date(os.uptime()).toISOString());

// console.log(os.hostname());
