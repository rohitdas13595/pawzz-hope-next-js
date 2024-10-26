import crypto from 'crypto';

export  function hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.scryptSync(password, salt, 64, {
      N: 16384,
      r: 8,
      p: 1,
    }).toString('hex');
  
    return `${salt}:${hashedPassword}`;
  }
  
  // Validate a password
  export function validatePassword(password: string, hashedPassword: string): boolean {
    const [salt, storedHash] = hashedPassword.split(':');
    const hashedPasswordBuffer = crypto.scryptSync(password, salt, 64, {
      N: 16384,
      r: 8,
      p: 1,
    });
    const hashedPasswordHex = hashedPasswordBuffer.toString('hex');
  
    return hashedPasswordHex === storedHash;
  }