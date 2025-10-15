import React, { useState, useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { AuthContext } from '../Context/AuthContext'

const AdminProduct = () => {
  const { products, setProducts } = useContext(ProductContext)
  const { currentUser } = useContext(AuthContext)

  // Protect admin route
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">Access Denied</h1>
      </div>
    )
  }

  // States
  const [selectedCat, setSelectedCat] = useState('all')
  const [product, setProduct] = useState({
    name: '',
    price: '',
    imageUrl: '',
    description: '',
    category: 'keyboard',
  })
  const [editId, setEditId] = useState(null)

  // Filtered products
  const filtered =
    selectedCat === 'all'
      ? products
      : products.filter((p) => p.category === selectedCat)

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!product.name || !product.price || !product.imageUrl) {
      alert('Please fill in all fields!')
      return
    }

    let updatedArray

    if (editId) {
      // Edit mode
      updatedArray = products.map((p) =>
        p.id === editId ? { ...product, id: editId } : p
      )
      setEditId(null)
      alert('Product Updated Successfully!')
    } else {
      // Add mode
      updatedArray = [...products, { ...product, id: Date.now() }]
      alert('Product Added Successfully!')
    }

    setProducts(updatedArray)
    localStorage.setItem('products', JSON.stringify(updatedArray))

    // Reset form
    setProduct({
      name: '',
      price: '',
      imageUrl: '',
      description: '',
      category: 'keyboard',
    })
  }

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  // Handle delete
  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return

    const updated = products.filter((p) => p.id !== id)
    setProducts(updated)
    localStorage.setItem('products', JSON.stringify(updated))
    alert('Product Deleted Successfully!')
  }

  // Handle edit
  const handleEdit = (item) => {
    setEditId(item.id)
    setProduct(item)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">
         {editId ? 'Edit Product' : 'Add New Product'}
      </h1>

      {/* Product Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 flex flex-col gap-5 border border-gray-100 mb-10"
      >
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={product.name}
          placeholder="Enter Product Name"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={product.price}
          placeholder="Enter Product Price"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <input
          type="text"
          name="imageUrl"
          onChange={handleChange}
          value={product.imageUrl}
          placeholder="Enter Image URL"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <textarea
          name="description"
          onChange={handleChange}
          value={product.description}
          placeholder="Enter Product Description"
          rows="4"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        ></textarea>

        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        >
          <option value="keyboard">Keyboard</option>
          <option value="mouse">Mouse</option>
          <option value="audio">Audio</option>
          <option value="chair">Chair</option>
          <option value="lighting">Lighting</option>
        </select>

        <button
          type="submit"
          className={`${
            editId ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'
          } text-white py-3 rounded-lg font-semibold transition-colors duration-300`}
        >
          {editId ? 'Update Product' : 'Add Product'}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null)
              setProduct({
                name: '',
                price: '',
                imageUrl: '',
                description: '',
                category: 'keyboard',
              })
            }}
            className="bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-300"
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* Product Display */}
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
          <select
            onChange={(e) => setSelectedCat(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Products</option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="audio">Audio</option>
            <option value="chair">Chair</option>
            <option value="lighting">Lighting</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <div
                key={p.id}
                className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300"
              >
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg text-gray-800 truncate">
                  {p.name}
                </h3>
                <p className="text-purple-600 font-bold">${p.price}</p>
                <p className="text-sm text-gray-500 capitalize">
                  Category: {p.category}
                </p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminProduct
