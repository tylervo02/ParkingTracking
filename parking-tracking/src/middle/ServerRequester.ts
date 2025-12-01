class ServerRequester    // A class in the client that handles server requests.
{
    // The connecting server must be changed if turning into public, right now it is local as it is not hosted through any network
    static #hostfetcher = "http://localhost:5000" // When we move to online servers we need to change the beginning string to fit the database sender.
    static #instance: ServerRequester;  // Singleton instance
    private constructor()
    {
    }
        // Singletons in typescript require a special static method 
       public static getInstance(): ServerRequester 
       {
            if (!ServerRequester.#instance) 
                ServerRequester.#instance = new ServerRequester();
        

        return ServerRequester.#instance;
        }

        async ping()
    {
        var fetchstring = ServerRequester.#hostfetcher;
        fetchstring += "/ping/";
        const response = await fetch(fetchstring);
        const data = await response.json();
        if (!response.ok)   // If invalid response/server down
        {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        }
        return data;
    }

        async login(un:string, pw:string)
    {
        var fetchstring = ServerRequester.#hostfetcher;
        fetchstring += "/login/" + un.toString() + "-" + pw.toString();
        const response = await fetch(fetchstring);
        const data = await response.json();
        if (!response.ok)   // If invalid response/server down
        {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        }
        window.alert("Returned: " + data);
        return data;
    }

    instance = this;
}

export default ServerRequester;