import React, { useRef, useState } from "react"
import Message from "./Message"

const Layout:React.FC = () => {
    const [valueInput, setValueInput] = useState<string>('')
    const [data, setData] = useState<string>('') 
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (): void => {
        setData(valueInput)
        setValueInput('')
        inputRef?.current?.focus()
    }

    return (
        <div className="layout">
            <label>Nhập tên: </label>
            <input 
                type="text" 
                className="input"
                value={valueInput}
                ref={inputRef}
                placeholder='Nhập tên thành viên mới...'
                onChange={(e) => setValueInput(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>Gửi</button>
            <Message data={data} />
        </div>
    )
}

export default Layout