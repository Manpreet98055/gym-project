
const BASE_URL = '/api/inventory'; // Placeholder API endpoint

export const fetchInventory = async () => {
  // In a real application, you would make an API call here.
  // For now, simulate an API call with a delay and return mock data.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: '1', name: "Treadmill", total: 1, status: "Active" },
        { id: '2', name: "10 lbs Dumbbell", total: 3, status: "Inactive" },
        { id: '3', name: "20 lbs Dumbbell", total: 12, status: "Active" },
      ]);
    }, 500);
  });
};

export const addInventoryItem = async (item) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('API: Adding item', item);
      resolve({ ...item, id: Date.now() }); // Simulate adding with an ID
    }, 500);
  });
};

export const updateInventoryItem = async (item) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('API: Updating item', item);
      resolve(item);
    }, 500);
  });
};

export const deleteInventoryItem = async (itemId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('API: Deleting item with ID', itemId);
      resolve({ success: true, id: itemId });
    }, 500);
  });
};
