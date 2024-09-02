import { useEffect, useState } from "react";
import axios from "axios";

const Randomuser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [change, setChange] = useState(false);

    useEffect(() => {
    axios("https://randomuser.me/api/").then((res) => {
        console.log("randomuser res", res);
        setFirstName(res.data.results[0].name.first);
        setLastName(res.data.results[0].name.last);
    });

    // fetch("https://randomuser.me/api/")
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log("randomuser data", data);
    //     setFirstName(data.data.results[0].name.first);
    //     setLastName(data.data.results[0].name.last);
    // })
}, [change]); //when [change] is removed, the user will generate non-stop

return (
    <>
    Random User: {firstName} {lastName}
    <br></br>
    <button onClick={() => setChange(!change)}> Change Random User</button>
    </>
);
};

export default Randomuser;