const crypto = require('crypto');

salt = crypto.randomBytes(16);
iv = crypto.randomBytes(16);
key = crypto.pbkdf2Sync('my password', salt, 100000, 256/8, 'sha256');

//Creates and returns a Decipher object that uses the given algorithim, key and initilization vector iv
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update('Hi good evening how are you doing?', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted); 


    
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);











