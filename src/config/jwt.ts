export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'supersecret',
  expiresIn: '1h',
};
