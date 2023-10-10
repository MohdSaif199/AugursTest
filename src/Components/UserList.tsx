import React, { useEffect, useState } from 'react'

interface ListI {
    userId: string,
    name: string,
    email: string,
    city: string
}
const UserList = () => {
    const [list, setList] = useState<ListI[]>([])

    // fetching data 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json()).then(resp => {
            let tempArray: ListI[] = []
            resp.forEach((item: any) => {
                let obj: ListI = {
                    userId: item.id,
                    name: item.name,
                    email: item.email,
                    city: item.address.city
                }
                tempArray.push(obj)
            })
            setList(tempArray)
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2>Task 2 Fetch The list of the Users </h2>
            <table style={{ margin: "auto" }}>
                <tr>
                    <th>UserId</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
                {list.map((item: ListI) => <tr key={item.userId}>
                    <td>{item.userId}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.city}</td>
                </tr>)}
            </table>
        </div>
    )
}

export default UserList