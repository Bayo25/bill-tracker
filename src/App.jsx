import { useEffect, useState } from 'react'
import AddBills from './components/AddBills'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'



function App() {
  const [shouldShowAddCategory, setshouldShowAddCategory] = useState(false)
  const [shouldShowAddBill, setShouldShowAddBill] = useState(true)
  const [categories, setCategories] = useState([])
  const [bills, setBills] = useState([])



  const showAddCategory = () => {
    setshouldShowAddCategory(true)
  }

  const addCategory = category => {

    // create a new array from the categories array and append a new one (category)
    const updatedCatorgories = [...(categories || []), category]
    setCategories(updatedCatorgories)
    // when category is updated the add category form is set to false hence it is not displayed
    setshouldShowAddCategory(false)

    // store your data in in-memory
    localStorage.setItem('categories', JSON.stringify(updatedCatorgories)) 
  }

  const addBills = (amount, category, date) => {
    const bill = { amount, category, date }
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    setShouldShowAddBill(false)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  // retrieve the data stored when application starts
  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(localStorage.getItem('categories'))
    const billsInLocalStorage = JSON.parse(localStorage.getItem('bills'))

    setCategories(categoriesInLocalStorage)
    setBills(billsInLocalStorage)

    // if(categoriesInLocalStorage !== categories) {
    //   setCategories(categoriesInLocalStorage)
    // }

    if(!categoriesInLocalStorage) {
      setshouldShowAddCategory(true)
    }

    if(!billsInLocalStorage) {
      setShouldShowAddBill(true)
    }
  }, [])

  return (
    <>
      <main>
        {
          shouldShowAddCategory ? (
            <AddCategory onSubmit={addCategory}/>
          ) : shouldShowAddBill? (<AddBills onSubmit={addBills} categories={categories}/>): (
            <section>
              <NavBar categories={categories} showAddCategory={showAddCategory}/>
              <section className='container flex'>
                <BillsTable />           
              </section>
            </section>
            )
        }
      </main>
    </>
  )
}

export default App
