import dotenv from "dotenv";
dotenv.config();

const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    ORIGIN: process.env.origin,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: parseInt(process.env.SMTP_PORT),
    SMTP_TLS: process.env.SMTP_TLS,
    SMTP_USERNAME: process.env.SMTP_USERNAME,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_SENDER: process.env.SMTP_SENDER,
};

export default env;
