import React, { useEffect, useState } from 'react'

interface DataObjI {
    userId: number,
    title: string,
    completed: boolean
}

interface StateI {
    loading: boolean,
    error: boolean,
    data: DataObjI[]
}
const DataFetcher = () => {
    const [state, setState] = useState<StateI>({
        loading: false,
        error: false,
        data: []
    })
    useEffect(() => {
        setState({
            ...state,
            loading: true
        })
        fetch("https://jsonplaceholder.typicode.com/todo").then(resp => resp.json()).then(resp => {
            let tempArr: DataObjI[] = []
            resp.splice(0,50).forEach((item: any) => {
                let obj: DataObjI = {
                    completed: item.completed,
                    title: item.title,
                    userId: item.userId
                }
                tempArr.push(obj)
            })
            setState({
                data: tempArr,
                loading: false,
                error: false
            })
        }).catch(err => {
            console.log(err)
            setState({
                data: [],
                error: true,
                loading: false
            })
        })
    }, [])
    const { data, error, loading } = state
    return (
        <div>
            <h2>Task 4 Make Data Fetcher</h2>
            <div>
                {loading ? <><h4>Loading....</h4></> : <>
                    {data.length !== 0 && !error ? <>
                        {data.map((item: DataObjI) => <div key={item.userId} style={{
                            border: "1px solid green", width: "50%",
                            margin: "auto", padding: "10px", marginBottom: "10px",
                        }}>
                            <strong>Todo : {item.title}</strong>
                            <br />
                            <strong>Status : {item.completed ? "Completed" : "Not Completed"}</strong>
                        </div>)}
                    </> : <>
                        <h4>Oops</h4>
                        <p>Failed to fetch data.
                            Please try again later.</p>
                    </>}
                </>}
            </div>
        </div>
    )
}

export default DataFetcher