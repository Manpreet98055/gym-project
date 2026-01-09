'use client'
import React, { useState, useEffect } from 'react';
import { fetchInventory, addInventoryItem, updateInventoryItem, deleteInventoryItem } from '@/components/lib/inventoryApi';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import ConfirmModal from '@/components/ui/ConfirmModal';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInventory = async () => {
      try {
        setLoading(true);
        const data = await fetchInventory();
        setInventory(data);
      } catch (err) {
        setError('Failed to fetch inventory');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getInventory();
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [newItem, setNewItem] = useState({ id: null, name: '', total: '', status: 'Active' });

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const addedItem = await addInventoryItem({ ...newItem, total: parseInt(newItem.total) });
      setInventory(prev => [...prev, addedItem]);
      setShowAddModal(false);
      setNewItem({ name: '', total: '', status: 'Active' });
    } catch (err) {
      setError('Failed to add item');
      console.error(err);
    }
  };

  const handleEditItemChange = (e) => {
    const { name, value } = e.target;
    setEditingItem(prev => ({ ...prev, [name]: value }));
  };

  const handleEditItem = async (e) => {
    e.preventDefault();
    try {
      const updatedItem = await updateInventoryItem({ ...editingItem, total: parseInt(editingItem.total) });
      setInventory(prev =>
        prev.map(item =>
          item.id === updatedItem.id // Assuming items have a unique 'id' now
            ? updatedItem
            : item
        )
      );
      setShowEditModal(false);
      setEditingItem(null);
    } catch (err) {
      setError('Failed to update item');
      console.error(err);
    }
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="container mx-auto p-6 text-center text-xl">Loading inventory...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-6 text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-[#1A1363] mb-6">Inventory Management</h1>

      {/* Search and Add Button */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search inventory..."
          className="p-3 border border-gray-300 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-[#1A1363]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#1A1363] text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-800 transition-colors"
        >
          <FaPlus />
          <span>Add New Item</span>
        </button>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#1A1363] text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.total}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    onClick={() => {
                      setEditingItem(item);
                      setShowEditModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => {
                      setItemToDelete(item);
                      setShowDeleteConfirm(true);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals (placeholders for now) */}
      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-[#1A1363]">Add New Item</h2>
            <form onSubmit={handleAddItem}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                  Item Name
                </label>
                <input
                  type="text"
                  id="itemName"
                  name="name"
                  value={newItem.name}
                  onChange={handleNewItemChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemTotal">
                  Total
                </label>
                <input
                  type="number"
                  id="itemTotal"
                  name="total"
                  value={newItem.total}
                  onChange={handleNewItemChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Status
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setNewItem({ ...newItem, status: 'Active' })}
                    className={`px-4 py-2 rounded-lg ${
                      newItem.status === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewItem({ ...newItem, status: 'Inactive' })}
                    className={`px-4 py-2 rounded-lg ${
                      newItem.status === 'Inactive' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Inactive
                  </button>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setNewItem({ name: '', total: '', status: 'Active' });
                  }}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#1A1363] text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {showEditModal && editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-[#1A1363]">Edit Item</h2>
            <form onSubmit={handleEditItem}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editItemName">
                  Item Name
                </label>
                <input
                  type="text"
                  id="editItemName"
                  name="name"
                  value={editingItem.name}
                  onChange={handleEditItemChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editItemTotal">
                  Total
                </label>
                <input
                  type="number"
                  id="editItemTotal"
                  name="total"
                  value={editingItem.total}
                  onChange={handleEditItemChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Status
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setEditingItem({ ...editingItem, status: 'Active' })}
                    className={`px-4 py-2 rounded-lg ${
                      editingItem.status === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingItem({ ...editingItem, status: 'Inactive' })}
                    className={`px-4 py-2 rounded-lg ${
                      editingItem.status === 'Inactive' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Inactive
                  </button>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingItem(null);
                  }}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#1A1363] text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        open={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={async () => {
          try {
            await deleteInventoryItem(itemToDelete.id);
            setInventory(prev => prev.filter(item => item.id !== itemToDelete.id));
            setShowDeleteConfirm(false);
            setItemToDelete(null);
          } catch (err) {
            setError('Failed to delete item');
            console.error(err);
          }
        }}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${itemToDelete?.name}"? This action cannot be undone.`}
      />
    </div>
  );
};

export default InventoryPage;