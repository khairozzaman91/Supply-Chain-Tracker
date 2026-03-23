
const Storage = {
  
    save(data) {
        localStorage.setItem('supplyData', JSON.stringify(data));
    },

  
    get() {
        const data = localStorage.getItem('supplyData');
        return data ? JSON.parse(data) : [];
    },

 
    clear() {
        localStorage.removeItem('supplyData');
    }
};


window.InventoryStorage = Storage;