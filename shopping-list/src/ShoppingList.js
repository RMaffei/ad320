import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

const ShoppingList = () => {
    const [shoppingList, updateShoppingList] = useImmer(() => {
        const storedList = localStorage.getItem('shoppingList');
        return storedList ? JSON.parse(storedList) : [];
    });

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemCategory, setItemCategory] = useState('');
    const [itemNotes, setItemNotes] = useState('');

    const categories = [
        "Fruits",
        "Vegetables",
        "Meat/Seafood",
        "Dairy & Eggs",
        "Grains",
        "Breads & Bakery",
        "Drinks",
        "Snacks",
        "Desserts",
        "Frozen Foods",
        "Canned Goods",
        "Other"
    ];

    // save list to storage when updated
    useEffect(() => {
        console.log('Saving to localStorage:', shoppingList);
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }, [shoppingList]);

    const addItem = () => {
        updateShoppingList(draft => {
            draft.push({
                id: new Date().getTime(),
                name: itemName,
                quantity: itemQuantity,
                details: { category: itemCategory, notes: itemNotes }
            });
        });
        setItemName('');
        setItemQuantity(1);
        setItemCategory('');
        setItemNotes('');
    };

    const removeItem = (id) => {
        updateShoppingList(draft => {
            const index = draft.findIndex(item => item.id === id);
            if (index !== -1) {
                draft.splice(index, 1);
            }
        });
    };

    return (
        <div className="App">
            <h1>My Shopping List</h1>
            <h2>Items</h2>
            <ul>
                {shoppingList.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} ({item.details.category}): {item.details.notes}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="divider"></div>
            <form onSubmit={(e) => { e.preventDefault(); addItem(); }}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={itemQuantity}
                    onChange={(e) => setItemQuantity(parseInt(e.target.value))}
                    required
                    min="1"
                />
                <select
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)}
                    required
                >
                    <option value="" disabled>Select Category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Notes"
                    value={itemNotes}
                    onChange={(e) => setItemNotes(e.target.value)}
                />
                <button type="submit">Add to List</button>
            </form>
        </div>
    );
};

export default ShoppingList;