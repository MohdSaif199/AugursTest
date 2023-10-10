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
                    <th className='list--head'>UserId</th>
                    <th className='list--head'>Name</th>
                    <th className='list--head'>Email</th>
                    <th className='list--head'>City</th>
                </tr>
                {list.map((item: ListI) => <tr key={item.userId}>
                    <td className='list--column'>{item.userId}</td>
                    <td className='list--column'>{item.name}</td>
                    <td className='list--column'>{item.email}</td>
                    <td className='list--column'>{item.city}</td>
                </tr>)}
            </table>
        </div>
    )
}

export default UserList