import dotenv from 'dotenv';
dotenv.config();

function required(key: string, defaultValue?: number): string {
  const value = process.env[key] || defaultValue + '';
  if (!value) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

const config = {
  db: {
    host: required('DB_HOST'),
    user: required('DB_USER'),
    database: required('DB_DATABASE'),
    password: required('DB_PASSWORD'),
  },
  port: parseInt(required('PORT', 8080)),
  cors: {
    allowedOrigin: required('CORS_ALLOW_ORIGIN'),
  },
};

export { config };
