import { useEffect, useState } from 'react'
import AddBills from './components/AddBills'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'



function App() {
  const [shouldShowAddCategory, setshouldShowAddCategory] = useState(false)
  const [categories, setCategories] = useState([])


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

  // retrieve the data stored when application starts
  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(localStorage.getItem('categories'))

    if(categoriesInLocalStorage !== categories) {
      setCategories(categoriesInLocalStorage)
    }

    if(!categoriesInLocalStorage) {
      setshouldShowAddCategory(true)
    }
  }, [])

  return (
    <>
      <main>
        {
          shouldShowAddCategory ? (
            <AddCategory onSubmit={addCategory}/>
          ) : (
            <section>
              <NavBar categories={categories} showAddCategory={showAddCategory}/>
              <BillsTable /> 
            </section>
            )
        }
      </main>
    </>
  )
}

export default App
