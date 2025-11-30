class ServerRequester    // A class in the client that handles server requests.
{
    // The connecting server must be changed if turning into public, right now it is local as it is not hosted through any network
    static #hostfetcher = "http://localhost:5000" // When we move to online servers we need to change the beginning string to fit the database sender.
    constructor()
    {
    }

        async testConnection()
    {
        var fetchstring = ServerRequester.#hostfetcher;
        fetchstring += "/ping/";
        const response = await fetch(fetchstring);
        if (!response.ok)   // If invalid response/server down
        {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);

        return response;
        }
    }

    async loginCheck(username, password){

    }

    async getParkingData() {
        
    }
}

export default ServerRequester;