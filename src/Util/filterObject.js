export default function filterUser(users, text) {
    var filteredArray =[];
    users.forEach(function(user) {
        for(var prop in user) {
            if(prop == 'items') {
                user[prop].every(function(item){
                    if(item.toLowerCase().indexOf(text.toLowerCase())>=0){
                        filteredArray.push(user);
                        user.match = user[prop];
                        return false;
                    }
                });
                break;     
            } else if(prop !== 'match'){
                if(user[prop].toLowerCase().indexOf(text.toLowerCase()) >=0){
                    filteredArray.push(user);
                    user.match = user[prop];
                    break;
                }
            }
        }
    });
    return filteredArray;
}
