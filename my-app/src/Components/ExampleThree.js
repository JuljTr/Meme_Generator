import React, { useState } from 'react'

function ExampleThree() {
    // const [messages, setMessages] = useState(["a", "b"])
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true
    });

    
    function handleChange(event) {
        console.log(event)


        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target
            return {
                ...prevFormData,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }

    const styles = {
        margin:"30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
}

return (
    // <div>{
    //     messages.length === 0 ?
    //         <h1>You are all caught up!</h1> :
    //         <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
    // }</div>
    <>
        <form style={styles}>
            <label>
                First Name:
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    onChange={handleChange}
                    // for control
                    value={formData.firstName}
                />
            </label>
            <label>
                Last Name:
                <input
                    type='text'
                    name='lastName'
                    placeholder='First Name'
                    onChange={handleChange}
                    // for control
                    value={formData.lastName}
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    // for control
                    value={formData.email}
                />
            </label>
            <label>
                Comments:
                <textarea
                    type='text'
                    name='comments'
                    placeholder='Comments'
                    onChange={handleChange}
                    // for control
                    value={formData.comments}
                />
            </label>
            <label>
                Are you friendly?
                <input
                    type='checkbox'
                    id="isFriendly"
                    name='isFriendly'
                    onChange={handleChange}
                    // for control
                    value={formData.isFriendly}
                />
            </label>

        </form>
    </>
)
}

export default ExampleThree