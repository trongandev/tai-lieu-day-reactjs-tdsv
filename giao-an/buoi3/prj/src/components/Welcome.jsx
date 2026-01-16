import React from "react"

export default function Welcome(props) {
    return (
        <h1>
            Xin chào {props.name}, Chức vụ: {props.role}
        </h1>
    )
}
