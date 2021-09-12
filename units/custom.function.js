const phoneNumber = {
    valid: function(phoneNumber){
        if(typeof phoneNumber !== "object") return false

        const { phone, directional } = phoneNumber;
        if(!(/^(\+)[0-9]{2,3}$/).test(directional)) return false
        
        return (/^\d{9,10}$/).test(phone); 
    }
}

module.exports = phoneNumber;