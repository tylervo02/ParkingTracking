class Lot
{
    constructor(name, occu, cap)
    {
        this.name = name;
        this.occu = occu;
        this.cap = cap;
    }

    reserve() // Takes up a space if available. ("Returns -1 if inavailable")
    {
                ret = -1;   // -1 by default, changes to current occupancy if success
        if(this.occu <= this.cap)
        {
            this.occu++;        // Add one to the space
            ret = this.occu;    // Add one to the space
        }
        return ret;
    }

    release() // Releases a space ("Returns -1 if unavailable/fails")
    {
        ret = -1;   // -1 by default, changes to current occupancy if success
        if(this.occu > 0)
        {
            this.occu--;
            ret = this.occu;
        }
        return ret;
    }
}

module.exports = Lot;