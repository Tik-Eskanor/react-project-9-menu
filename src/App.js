import React from "react"
import items from "./data"
import Category from "./Components/Category"
import Menu from "./Components/Menu"


export default function App()
{
  let allCategories = items.map((item)=>{
    return item.category
  })
  let categories = new Set(allCategories)

  let [menus, setMenus] = React.useState(items)
  let [category, setCategory] = React.useState(["all",...categories])

  function filterCategory(category)
  {
     if(category == "all")
     {
       setMenus(items)
       return
     }

     let newItems = items.filter((item)=>{
      return item.category == category
     })
     setMenus(newItems)
  }

  let categoriesComponents = category.map((item)=>{
    return (<Category key={item.id} name={item} filter={filterCategory}/>)
  })

  let menuComponents = menus.map((item)=>{
    return (<Menu key={item.id} props={item}/>)
  })
  return (
    <main>
      <div className="container">
        <h1>Our <span>menus</span></h1>
          <div className="category-container">
          {categoriesComponents}
          </div>
         <div className="menu-container">
          {menuComponents}
         </div>
      </div>
    </main>
  )
}