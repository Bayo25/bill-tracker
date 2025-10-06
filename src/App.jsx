// import { useEffect, useState } from 'react'
// import AddBills from './components/AddBills'
// import AddCategory from './components/AddCategory'
// import BillsTable from './components/BillsTable'
// import NavBar from './components/NavBar'



// function App() {
//   const [shouldShowAddCategory, setshouldShowAddCategory] = useState(false)
//   const [shouldShowAddBill, setShouldShowAddBill] = useState(true)
//   const [categories, setCategories] = useState([])
//   const [bills, setBills] = useState([])
//   const [activeCategory, setActiveCategory] = useState('')


//   // retrieve the data stored when application starts
//   useEffect(() => {
//     const categoriesInLocalStorage = JSON.parse(localStorage.getItem('categories'))
//     const billsInLocalStorage = JSON.parse(localStorage.getItem('bills'))

//     setCategories(categoriesInLocalStorage)
//     setBills(billsInLocalStorage)

//     // if(categoriesInLocalStorage !== categories) {
//     //   setCategories(categoriesInLocalStorage)
//     // }

//     if(!categoriesInLocalStorage) {
//       setshouldShowAddCategory(true)
//     }

//     if(!billsInLocalStorage) {
//       setShouldShowAddBill(true)
//     }
//   }, [])

//   const showAddCategory = () => {
//     setshouldShowAddCategory(true)
//   }

//   const showAddBill = () => {
//     setShouldShowAddBill(true)
//   }

//   const addCategory = (category) => {

//     // create a new array from the categories array and append a new one (category)
//     const updatedCatorgories = [...(categories || []), category]
//     setCategories(updatedCatorgories)

//     // store your data browser in-memory
//     localStorage.setItem('categories', JSON.stringify(updatedCatorgories))

//     // when category is updated the add category form is set to false hence it is not displayed
//     setshouldShowAddCategory(false)
//   }

//   const addBills = (amount, category, date) => {
//     const bill = { amount, category, date }
//     const updatedBills = [...(bills || []), bill]
//     setBills(updatedBills)
//     setShouldShowAddBill(false)
//     localStorage.setItem('bills', JSON.stringify(updatedBills))
//   }

//   const removeBill = (index) => {
//     let updatedBills = [...bills]
//     updatedBills = updatedBills.slice(0, index).concat(updatedBills.slice(index+1, updatedBills.length))
//     setBills(updatedBills)
//     localStorage.setItem('bills', JSON.stringify(updatedBills))
//   }

//   const activeBills = () => {
//     return bills ?.filter(bill => activeCategory ? bill.category === activeCategory : true)
//       .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1: -1))
//   }

//   const setNewActiveCategory = (index) => {
//     setActiveCategory(index)
//   }

//   // return (
//   //     <main className='App'>
//   //       {shouldShowAddCategory ? (
//   //         <AddCategory onSubmit={addCategory}/>
//   //         ) : shouldShowAddBill ? (
//   //           <AddBills onSubmit={addBills} categories={categories}/>
//   //           ) : (
//   //           <section>
//   //             <NavBar 
//   //               categories={categories} 
//   //               showAddCategory={showAddCategory}
//   //               activeCategory={activeCategory}
//   //               setNewActiveCategory={setNewActiveCategory}
//   //             />
//   //               <BillsTable 
//   //                 bills={activeBills()} 
//   //                 showAddBill={showAddBill} 
//   //                 removeBill={removeBill}
//   //               />           
//   //           </section>
//   //           )}
//   //     </main>
//   // )
//   return (
//     <div className='App'>
//       {shouldShowAddCategory ? (
//         <AddCategory onSubmit={addCategory} />
//       ) : shouldShowAddBill ? (
//         <AddBills onSubmit={addBills} categories={categories} />
//       ) : (
//         <div>
//           <NavBar
//             categories={categories}
//             showAddCategory={showAddCategory}
//             activeCategory={activeCategory}
//             setNewActiveCategory={setNewActiveCategory}
//           />
//           <BillsTable
//             bills={activeBills()}
//             showAddBill={showAddBill}
//             removeBill={removeBill}
//           />
//         </div>
//       )}
//     </div>
//   )
// }

// export default App

import { useState, useEffect } from 'react'
import AddBill from './components/AddBills'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false)
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false)
  const [categories, setCategories] = useState([])
  const [bills, setBills] = useState([])
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem('categories')
    )

    const billsInLocalStorage = JSON.parse(localStorage.getItem('bills'))

    setCategories(categoriesInLocalStorage)
    setBills(billsInLocalStorage)

    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true)
    }
    if (!billsInLocalStorage) {
      setShouldShowAddBill(true)
    }
  }, [])

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }
  const showAddBill = () => {
    setShouldShowAddBill(true)
  }

  const addCategory = (category) => {
    const updatedCategories = [...(categories || []), category]
    setCategories(updatedCategories)
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
    setShouldShowAddCategory(false)
  }

  const addBill = (amount, category, date) => {
    const bill = { amount, category, date }
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    setShouldShowAddBill(false)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const removeBill = index => {
    let updatedBills = [...bills]
    updatedBills = updatedBills
      .slice(0, index)
      .concat(updatedBills.slice(index + 1, updatedBills.length))
    setBills(updatedBills)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const activeBills = () => {
    return bills
      ?.filter((bill) =>
        activeCategory ? bill.category === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  }

  const setNewActiveCategory = (index) => {
    setActiveCategory(index)
  }

  return (
    <div className='App'>
      {shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : shouldShowAddBill ? (
        <AddBill onSubmit={addBill} categories={categories} />
      ) : (
        <div>
          <NavBar
            categories={categories}
            showAddCategory={showAddCategory}
            activeCategory={activeCategory}
            setNewActiveCategory={setNewActiveCategory}
          />
          <BillsTable
            bills={activeBills()}
            showAddBill={showAddBill}
            removeBill={removeBill}
          />
        </div>
      )}
    </div>
  )
}

export default App
