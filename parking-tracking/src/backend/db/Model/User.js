// Making User a class to make it simplier to read.
class User
{
    constructor(name, username, password)
    {
        this.name = name;
        this.username = username;
        this.password = password;
    }
}
module.exports = User;