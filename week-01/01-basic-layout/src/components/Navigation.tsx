type NavigationProps = {
    direction: "horizontal" | "vertical";
}

const Navigation = ({ direction }: NavigationProps) => {
    const layout =
    direction === "horizontal"
        ? "flex gap-6"
        : "flex flex-col gap-3";
    
    return (
        <nav>
            <ul className={layout}>
                <li>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a href="#">About</a>
                </li>

                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation