import React from "react"

interface Prop {
    data: string
}

const Message: React.FC<Prop> = ({data}) => {
    return (
        <div className="message">
            <p>Chào mừng <span className="span">{data}</span> đã gia nhập công ty Executionlab !</p>
        </div>
    )
}

export default Message