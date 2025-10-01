const NavBar = (props) => {
    return (
        <main>
            <header>
                <ul className="list-reset flex justify-center border-b-4 mb-0">
                    {props.categories ? props.categories.map((value, index) => {
                        return <li 
                                    className="p-4 inline bg-grey-lighter hover:bg-grey-light
                                    uppercase font-black cursor-pointer"
                                    key={index}>{value}
                                </li>
                    }): '<li>No categories</li>' }
                    <li 
                        className="p-4 inline bg-grey-lighter hover:bg-grey-light 
                        uppercase font-black cursor-pointer"
                        onClick={() => props.showAddCategory()}>
                            ➕
                    </li>
                </ul>
            </header>
        </main>
    )
}

export default NavBar