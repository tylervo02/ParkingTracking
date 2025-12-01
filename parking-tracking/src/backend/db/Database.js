// Database Object we will be using to hold the entire database for the server. This database will use a more grounded strcture so we can focus on design pattern implementation
const User = require("./Model/User");

class Database
{
    constructor()
    {
        this.users = [];
        this.addUser("testname", "test", "test");
    }

    // To ensure we have only 1 database we make it a singleton
    getInstance()
    {
        if(!instance)
        {
            instance = new Database();
        }

        return instance;
    }
    async ping()
    {
        console.log("Server Object Pinged!")
        return true;
    }

    async login(un, pw)
    {
        var ret = false;    // We will return the users information if we find it, otherwise we return false by default
        // First check to ensure passed variables are a proper type of username and password
        console.log(typeof un, typeof pw);
        if (typeof un == 'string' && typeof pw == 'string')
        {
            // Because different usernames can have the same password, and different passwords can have the same username
            // We need to match the index of every username and check its password from there.
            var un_indexs = await this.usernameMatch(un);   // We will use a helper function to get index of occurance of the same username
            var pw_indexs = await this.passwordMatch(pw);   // We will use a helper function to get index of occurance of the same password
            var userindex = this.hasSameIndex(un_indexs, pw_indexs); // Returns the index of the user
            if(userindex != -1) // Not we check if any values are the same
                ret = this.users[userindex].name;
        }
        return ret; // User's username if valid login, False if Invalid Login. 
    }

    addUser(name, un, pw)
    {
        if (typeof name == 'string' && typeof un == 'string' && typeof pw == 'string') // make sure values are strings to keep database pure
            this.users.push(new User(name,un,pw));  // Adds user to database
        console.log("Added user: ", this.users);
    }

    // helperfunctions
    usernameMatch(un)
    {
        var retarr = [] // Start empty
        for(var index = 0; index < this.users.length; index++)
            if(this.users[index].username == un) // If username matches
                retarr.push(index); // Add found index to list
        
        return retarr;
    }
    passwordMatch(pw)
    {
        var retarr = [] // Start empty
        for(var index = 0; index < this.users.length; index++)
            if(this.users[index].password == pw) // If password matches
                retarr.push(index); // Add found index to list
        return retarr;
    }
    hasSameIndex(un_indexs, pw_indexs)
    {
        var sameindex = -1;
        for(var index = 0; index < pw_indexs.length; index++)   // Go through all occruances of one array 
            // Use indexOf to see if any value matches
            if(un_indexs.indexOf(pw_indexs[index]) != -1)
            {
                sameindex = un_indexs.indexOf(pw_indexs[index]); // Assign found index
                index = pw_indexs.length// end loop
            }

        return sameindex;
    }
    instance = this;
}
module.exports = Database;