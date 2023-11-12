import "node";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "production" | "development" | "testing";
            PORT: string;
            origin: string;
            SMTP_HOST: string;
            SMTP_PORT: string;
            SMTP_TLS: "yes" | "no";
            SMTP_USERNAME: string;
            SMTP_PASSWORD: string;
            SMTP_SENDER: string;
        }
    }
}
