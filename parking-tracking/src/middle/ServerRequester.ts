export default class ServerRequester {
    async testConnection(){
        //simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: "Connected to server" });
            }, 1000);
        });
    }

    async loginCheck(username: string, password: string){
        // Basic login check - replace with actual API call
        return new Promise((resolve) => {
            setTimeout(() => {
                if (username === "test" && password === "test") {
                    resolve({ success: true, user: { name: "Test User" } });
                } else {
                    resolve({ success: false, error: "Invalid credentials" });
                }
            }, 1000);
        });
    }
}