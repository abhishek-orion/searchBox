import React, {Component} from 'react';
import ListCard from './ListCard';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {users,handleKeyDown,handleHover,input,selectedItem} = this.props;
        if(users!=undefined && users.length!=0){
        return(
            <div className="list">
            {users.map(function(user, index) {
                return (<ListCard
                 key={user.index}
                 user={user}
                 index={index}
                 handleKeyDown={handleKeyDown}
                 handleHover={handleHover}
                 input={input}
                 selectedItem={selectedItem}/>);
            })}
            </div>
        )}
        else if(users.length == 0){
            return (
                <div className="noUsers">
                <span style={{verlicalAlign: "center"}}>No Users Found</span>
                </div>
            )
        }
    }
}