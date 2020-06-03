import React from "react"

//const myList = [1,2,3,4,5,5]
const myList = [
    {
        id: 1,
        subject: "Math"
    },
    {
        id: 2,
        subject: "Science"
    },
    {
        id: 3,
        subject: "English"
    },        
]

const ListItem = () => {
    const mappedList = myList.map((item) => <li key={item.id}>{item.subject}</li>)
    return (
        <ul>
            {mappedList}
        </ul>
    )
}

export default ListItem