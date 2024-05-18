import { useState } from 'react'

function Newform() {
    const [countFn, setCountFn] = useState(0);
    const [countLn, setCountLn] = useState(0);
    const [countEm, setCountEm] = useState(0);
    const [countPass, setCountPass] = useState({length:0,value:""});
    const [countPassCon, setCountPassCon] = useState({length:0,value:""});

    const HandleName = (e) => {
        setCountFn(e.target.value.length);
    }
        const HandleLname = (e) => {
        setCountLn(e.target.value.length);
    }
        const HandleEm = (e) => {
        setCountEm(e.target.value.length);
    }
        const HandlePass = (e) => {
        setCountPass({length:e.target.value.length,value:e.target.value});
    }
        const HandlePassCon = (e) => {
        setCountPassCon({length:e.target.value.length,value:e.target.value});
    }


    const CheckPassVal = () => {
        if (countPass.length == 0 && countPassCon.length == 0) {
            return "";
        } else if (countPass.value !== countPassCon.value) {
            return "Passwords do not match!";
        } else {
            return "";
        }
};


return (
    <>
    <form className='container' >
        <div>
            <label htmlFor="">First Name:</label>
            <input type="text" placeholder='First Name' name="" id="" onChange={HandleName} />
        </div>
        <p>{countFn > 0 && countFn <= 2 ? "First Name must be at least 2 characters" : ""}</p>
        <div>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Last Name' name="" id="" onChange={HandleLname} />
        </div>
        <p>{countLn > 0 && countLn <= 2 ? "Last Name must be at least 2 characters" : ""}</p>
        <div>
            <label htmlFor="">Email:</label>
            <input type="email" placeholder='Email' name="" id="" onChange={HandleEm} />
        </div>
        <p>{countEm > 0 && countEm <= 5 ? "Email must be at least 5 characters" : ""}</p>
        <div>
            <label htmlFor="">Password:</label>
            <input type="password" placeholder='Password' name="" id="" onChange={HandlePass} />
        </div>
        <p>{countPass.length > 0 && countPass.length <= 6 ? "Password must be at least 6 characters" : ""}</p>
        
        <div>
            <label htmlFor="">Confirm Password:</label>
            <input type="password" placeholder='Confirm Password' name="" id="" onChange={HandlePassCon} />
        </div>
        <p>{countPassCon.length > 0 && countPassCon.length <= 6 ? "Password must be at least 6 characters" : ""}</p>
        <p>{CheckPassVal()}</p>
        
    </form>

    </>
    )
}


















export default Newform
