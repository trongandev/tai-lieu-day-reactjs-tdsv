// Default Function
const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted!")
}

return (
    <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
    </form>
)

// Arrow Function
const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted!")
}

return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">Submit</button>
    </form>
)
