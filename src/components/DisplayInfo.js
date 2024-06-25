import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg"

// class DisplayInfo extends React.Component {
//     render() {
//         console.log("Call me render")
//         const { listUser } = this.props
//         //console.log(listUser)
//         //console.table(listUser)
//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <>
//                         {listUser.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props;
    const [isShowHideListUse, setShowHideListUser] = useState(true)
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUse)
    }
    useEffect(() => {
        setTimeout(() => {
            document.title = "Luu Nhat Linh"
        }, 3000)
    }, [listUser]
    )
    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUse === true ? "Hide list users" : "Show list users"}</span>
            </div>
            {isShowHideListUse &&
                <>
                    {listUser.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )

}

export default DisplayInfo;