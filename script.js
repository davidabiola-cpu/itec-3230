const itemData = {
  chicken: {
    name: 'Chicken Shawarma',
    rating: '⭐ 4.9/5',
    price: '$15',
    description: 'Tender grilled chicken with garlic sauce, crisp lettuce, and warm pita.',
    calories: '540 kcal',
    prepTime: '15 min',
    badge: 'Popular',
    imageClass: 'detail-chicken'
  },
  beef: {
    name: 'Beef Shawarma',
    rating: '⭐ 4.8/5',
    price: '$18',
    description: 'Slow-roasted beef with tahini drizzle, onion salad, and soft flatbread.',
    calories: '610 kcal',
    prepTime: '18 min',
    badge: 'Best Seller',
    imageClass: 'detail-beef'
  },
  classic: {
    name: 'Classic Shawarma',
    rating: '⭐ 4.7/5',
    price: '$13',
    description: 'A balanced wrap with house sauce, crunchy vegetables, and extra flavor.',
    calories: '500 kcal',
    prepTime: '14 min',
    badge: 'Combo',
    imageClass: 'detail-classic'
  },
  paneer: {
    name: 'Paneer Shawarma',
    rating: '⭐ 4.8/5',
    price: '$14',
    description: 'Grilled paneer, pickled veggies, fresh herbs, and creamy herb dressing.',
    calories: '470 kcal',
    prepTime: '16 min',
    badge: 'Veg',
    imageClass: 'detail-paneer'
  },
  fish: {
    name: 'Fish Shawarma',
    rating: '⭐ 4.6/5',
    price: '$16',
    description: 'Crispy fish fillet with slaw, lemon sauce, and a light toasted wrap.',
    calories: '520 kcal',
    prepTime: '17 min',
    badge: 'Fresh',
    imageClass: 'detail-fish'
  },
  egg: {
    name: 'Egg Shawarma',
    rating: '⭐ 4.5/5',
    price: '$12',
    description: 'Protein-packed filling with signature spice mix and creamy mayo spread.',
    calories: '430 kcal',
    prepTime: '12 min',
    badge: 'Value',
    imageClass: 'detail-egg'
  }
};

const params = new URLSearchParams(window.location.search);
const selectedKey = params.get('item') || 'chicken';
const selectedItem = itemData[selectedKey] || itemData.chicken;

document.getElementById('itemBadge').textContent = selectedItem.badge;
document.getElementById('itemName').textContent = selectedItem.name;
document.getElementById('itemRating').textContent = selectedItem.rating;
document.getElementById('itemPrice').textContent = selectedItem.price;
document.getElementById('itemDescription').textContent = selectedItem.description;
document.getElementById('itemCalories').textContent = selectedItem.calories;
document.getElementById('itemPrepTime').textContent = selectedItem.prepTime;

const detailImage = document.getElementById('detailImage');
detailImage.className = `image-frame detail-visual ${selectedItem.imageClass}`;
document.title = `ShawarmaGo | ${selectedItem.name}`;
