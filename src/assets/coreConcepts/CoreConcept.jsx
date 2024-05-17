const CoreConcept = ({image, title, description}) => {
    return (
        <>
            <li>
                <ul>
                    <img src={image} alt="" />
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ul>
            </li>
        </>
    )
}

export default CoreConcept;