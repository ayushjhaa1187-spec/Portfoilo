const logger = require('./utils/logger');
console.log("Simulating DB error...");
logger.error("Test DB Error");
logger.on('finish', () => {
    console.log("Logger finished, exiting.");
    process.exit(0);
});
logger.end();
console.log("End called.");
