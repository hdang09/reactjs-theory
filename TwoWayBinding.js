import { useState } from "react"


export default function TwoWayBinding() {
    
    // App random gifts for user
        // const gifts = ['Keyboard', 'Mouse', 'Touchpad', 'Core i9']
        // const [gift, setGift] = useState('Don\'t have a gift')

        // const handleChange = () => {
        //     let randomNumber = Math.floor(Math.random() * gifts.length)
        //     setGift(gifts[randomNumber])
        // }

        // return (
        //     <div>
        //         <h1>Gift: {gift}</h1>
        //         <button onClick={handleChange}>Change gift</button>
        //     </div>
        // )


    // Two-way binding with input
        // const [name, setName] = useState('')
        // const [email, setEmail] = useState('')

        // return (
        //     <div>
        //         <input 
        //             onChange={e => setName(e.target.value)}
        //         />
        //         <input 
        //             onChange={e => setEmail(e.target.value)}
        //         />
        //         <button onClick={() => console.log({ name, email })}>Register</button>
        //         <h2>Name: {name}</h2>
        //         <h2>Email: {email}</h2>
        //     </div>
        // )

    
    // Two-way binding with radio input
        // Example response from API
        // const subjects = [
        //     { 
        //         id: 1,
        //         name: 'CSI104'
        //     },
        //     { 
        //         id: 2,
        //         name: 'MAE104'
        //     },
        //     { 
        //         id: 3,
        //         name: 'PRF192'
        //     },
        // ]

        // const [checkedID, setCheckedID] = useState(1)

        // const handleSubmit = () => {
        //     console.log({ 
        //         id: checkedID,
        //         // name: subject.checkedID
        //     })
        // }

        // return (
        //     <div>
        //         {subjects.map(subject => (
        //             <div key={subject.id}>
        //                 <input
        //                     type="radio"
        //                     checked={checkedID === subject.id}
        //                     onChange={() => setCheckedID(subject.id)}
        //                 />
        //                 <span>{subject.name}</span>
        //             </div>
        //         ))}
        //         <button onClick={handleSubmit}>Submit</button>
        //     </div>
        // )


    // Two-way binding with checkbox
        // /Example response from API
        const subjects = [
            { 
                id: 1,
                name: 'CSI104'
            },
            { 
                id: 2,
                name: 'MAE104'
            },
            { 
                id: 3,
                name: 'PRF192'
            },
        ]

        const [checkedIds, setCheckedIds] = useState([])

        const handleSubmit = () => {
            // Call API
            console.log(checkedIds)
        }

        const handleChange = id => {
            setCheckedIds(prev => {
                let isChecked = checkedIds.includes(id)

                if (isChecked) {
                    return checkedIds.filter(checkedId => checkedId !== id)
                } else
                    return [...prev, id]
            })
        }

        return (
            <div>
                {subjects.map(subject => (
                    <div key={subject.id}>
                        <input 
                            type="checkbox"
                            checked={checkedIds.includes(subject.id)}
                            onChange={() => handleChange(subject.id)}
                        />
                        <span>{subject.name}</span>
                    </div>
                ))}
                <button onClick={handleSubmit}>Submit</button>
            </div>
        )
}

/** 
 * ReactJS: One-way binding
 * VueJS: Two-way binding
*/