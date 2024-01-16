import { useEffect, useState } from "react";

export default function CF() {
    const [CF, setCF] = useState("");
    const [value, setValue] = useState("");

    useEffect(() => {
        let newCF = 
        
        setCF(newCF);
    }, [value]);


return (
    <>

        <input onChange={(e) => setValue(e.target.value)} value={value} />

        {CF}

    </>
);

}