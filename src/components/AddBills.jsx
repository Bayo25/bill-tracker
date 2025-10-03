import { useState } from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'


const AddBills = (props) => {
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState(props.categories[0])
    const [date, setDate] =useState(new Date())

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

        props.onSubmit(amount, category || props.categories[0], date)
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }

    return (
        <main>
            <form 
                className="h-100 w-full flex items-center justify-center fonts-sans"
                onSubmit={handleSubmit}> 
                <section className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <section mb-4>
                        <h1 className="text-grey-darkest">Enter a new bill</h1>
                        <section className="flex mt-4">
                            <span className="mt-2 mr-1">₦</span>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2
                                px-3 mr-4 text-grey-darker"
                                placeholder="Add Category"
                                value={amount}
                                onChange={handleChangeAmount}
                                type="text" />
                            <select onChange={(e) => setCategory(e.target.value)}>
                                {props.categories? props.categories.map((value, index) => {
                                    return (
                                        <option key={index} value={value}>
                                            {value}
                                        </option>
                                    )
                                }):''}
                            </select>
                            <section className="mt-2 ml-1">
                                <DatePicker selected={date} onChange={handleChangeDate}/>
                            </section>
                            <button
                                className="flex-no-shrink p-2 border-2 rounded bg-teal
                                bg-green-500 text-white border-teal hover:text-white hover:bg-teal"
                            >Add</button>
                        </section>
                    </section>
                </section>
            </form>
        </main>
    )
}

export default AddBills