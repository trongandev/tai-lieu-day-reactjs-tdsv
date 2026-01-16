function Welcome({ name, role }) {
    return (
        <h1>
            Xin chào {name}, Chức vụ: {role}
        </h1>
    )
}

;<Welcome name="Trọng An" role="Giáo viên" />

function Welcome(props) {
    return (
        <h1>
            Xin chào {props.name}, Chức vụ: {props.role}
        </h1>
    )
}

;<Welcome name="Trọng An" role="Giáo viên" />
