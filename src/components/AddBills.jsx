import { useState } from "react"

const AddBills = (props) => {

    const [amount, setAmount] = useState(0)

    const handleChangeAmount = (e) => {
        let newAmount = parseInt(e.target.value)
        if(isNaN(newAmount)) newAmount = ''
        setAmount(newAmount)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        if (!amount) {
            alert('Please enter an amount')
        }

        props.onSubmit(amount)
    }

    
    return (
        <main>
            <form>
                
            </form>
        </main>
    )
}

export default AddBills