






export  class Settings {
    dbFileName: string;
    redisHost: string;
    redisPort: number;
    redisPassword: string;
    redisUsername: string;
    resendApiKey: string;


    googleClientId: string;
    googleClientSecret: string;


    // apiKey: string;
    // authDomain: string;
    // projectId: string;
    // storageBucket: string;
    // messagingSenderId: string;
    // appId: string;


    jwtSecret: string;

   constructor(){

        this.dbFileName =  this.getValue("DB_FILENAME",'')
       this.redisHost = this.getValue("REDIS_HOST", "localhost");
       this.redisPort = Number(this.getValue("REDIS_PORT", "6379"));
       this.redisPassword = this.getValue("REDIS_PASSWORD", "");
       this.redisUsername = this.getValue("REDIS_USERNAME", "");

       this.resendApiKey = this.getValue("RESEND_API_KEY", "");

       this.googleClientId = this.getValue("GOOGLE_CLIENT_ID", "");
       this.googleClientSecret = this.getValue("GOOGLE_CLIENT_SECRET", "");

      

       


       this.jwtSecret = this.getValue("JWT_SECRET", "");

   }




    private getValue(key: string , defaultValue: string) {
        const value = process.env[key];
        if(value) {
            return value
        }else {
            return defaultValue
        }
    }



}

export const settings = new Settings();


