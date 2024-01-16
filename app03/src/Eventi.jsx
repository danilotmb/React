import { useEffect, useState } from "react"

export default function Eventi() {

    const [n, setN] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        function handleMouse(e) {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        }

        document.body.addEventListener("mousemove", handleMouse);

        return () => document.body.removeEventListener("mousemove", handleMouse);
    }, [n]);
    return (
        <>
            X:{mouseX}
            <br></br>
            Y:{mouseY}
            <br></br>
            <button onClick={() => setN(n + 1)}>?</button>
        </>
    )
}