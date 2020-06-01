import React, {useState} from 'react';

const FormRegister =({add})=> {
    const [nama,setNama] = useState("")
    const [surel, setSurel] = useState("")
    const [sandi, setSandi] = useState("")

    const submit = e => {
        e.persist()
        e.preventDefault();
        add(nama,surel,sandi)
    }
        return (
            <form onSubmit={submit}>
                <input type="text"
                placeholder="Name"
                value={nama}
                onChange={e=> setNama(e.target.value)}
                />
                <input type="text"
                placeholder="Email"
                value={surel}
                onChange={e=> setSurel(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={sandi}
                onChange={e=> setSandi(e.target.value)}
                />
                <button type="submit" onClick={submit}>SIGN UP</button>
            </form>
        )
}
export default FormRegister;
