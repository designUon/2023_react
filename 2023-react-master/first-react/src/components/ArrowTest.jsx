const ArrowTest = (props) => {
    const {name, check, children} = props
    return (
        <div>
            { check && <h3>ArrowTest</h3>}
            <h3>{check ? name : ""}</h3>
            <p>{children}</p>
        </div>
    )
}

export default ArrowTest;