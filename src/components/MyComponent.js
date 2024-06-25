import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, name: "Dai", age: 26 },
//             { id: 2, name: "Linh", age: 24 }
//         ]
//     }
//     handleAddNewUser = (UserObj) => {
//         let listUserClone = [...this.state.listUser]
//         this.setState({
//             listUser: [UserObj, ...this.state.listUser]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUser
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUserClone
//         })
//     }
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfo
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br></br>
//                     <DisplayInfo
//                         listUser={this.state.listUser}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUser, setListUser] = useState(
        [
            { id: 1, name: "Dai", age: 26 },
            { id: 2, name: "Linh", age: 24 }
        ]
    )

    const handleAddNewUser = (UserObj) => {
        setListUser([UserObj, ...listUser])
        // this.setState({
        //     listUser: [UserObj, ...this.state.listUser]
        // })
    }
    const handleDeleteUser = (userId) => {
        let listUserClone = listUser
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone)
        // this.setState({
        //     listUser: listUserClone
        // })
    }
    return (
        <>
            <div className="a">
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser}
                />
                <br></br>
                <DisplayInfo
                    listUser={listUser}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
        </>
    );
}

export default MyComponent;