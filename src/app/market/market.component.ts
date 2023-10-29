import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price:number;
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  categories: Category[] = [
    {
      id: 1,
      name: 'Food',
  products: [
    {
      id: 1,
      name: 'Pizza',
      description: 'A classic Italian dish made with dough, tomato sauce, and cheese.',
      imageUrl: 'https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg',
    price:20},
    {
      id: 2,
      name: 'Sushi',
      description: 'A Japanese dish made with vinegared rice, seafood, and vegetables.',
      imageUrl: 'https://th.bing.com/th/id/OIP.Z1rKZGPpmtPegu6rEMDKAgHaE8?pid=ImgDet&rs=1',
    price:20},
    {
      id: 3,
      name: 'Pad Thai',
      description: 'A Thai dish made with stir-fried rice noodles, shrimp, chicken, or tofu, and vegetables.',
      imageUrl: 'https://th.bing.com/th/id/OIP.Hb8l5cAsfnY-kIvOu_TuTgHaLH?pid=ImgDet&rs=1',
    price:20},
    {
      id: 4,
      name: 'Tacos',
      description: 'A Mexican dish made with small corn tortillas filled with meat, vegetables, and salsa.',
      imageUrl: 'https://townsquare.media/site/437/files/2012/03/TacoBell.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    price:20},
    {
      id: 5,
      name: 'Hamburgers',
      description: 'Ground beef patties cooked and served on buns with lettuce, tomato, and condiments.',
      imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2017/09/exps28800_UG143377D12_18_1b_RMS.jpg',
    price:20},
    {
      id: 6,
      name: 'Ice cream',
      description: 'A frozen dessert made with cream, sugar, and flavorings.',
      imageUrl: 'https://th.bing.com/th/id/R.e60d5c55fb0d5525f8dd2f56912fb0a7?rik=WVwYbuznjLns6w&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f02%2fBest-Ice-Cream-To-Eat-Photo1.jpg&ehk=DGr0iwQSqFSoVGnJwEQK1JpZAZj60Y0sEW7OXl6GJpA%3d&risl=&pid=ImgRaw&r=0',
    price:20},
    {
      id: 7,
      name: 'Chocolate cake',
      description: 'A cake made with chocolate, flour, sugar, eggs, and butter.',
      imageUrl: 'https://th.bing.com/th/id/R.d290d73072329b06e966e183ee0ef386?rik=Dhb%2bysF0%2b6Zlug&riu=http%3a%2f%2fforhimandmyfamily.com%2fwp-content%2fuploads%2f2014%2f08%2fchoc-cake-1.jpg&ehk=maaV3drfyxiNZTTD8NBy8eekame17HgWzSO1DL%2bwn3U%3d&risl=&pid=ImgRaw&r=0',
    price:20},
    {
      id: 8,
      name: 'Apple pie',
      description: 'A pie made with apples, sugar, and spices.',
      imageUrl: 'https://lilluna.com/wp-content/uploads/2018/05/apple-pie-final-resize-17.jpg',
    price:20},
    {
      id: 9,
      name: 'French fries',
      description: 'Deep-fried potato strips.',
      imageUrl: 'https://th.bing.com/th/id/OIP.0v89klF2lKijndeuV2r8XgHaE-?pid=ImgDet&rs=1',
    price:20},
    {
      id: 10,
      name: 'Chicken wings',
      description: 'Chicken wings that have been deep-fried or baked and coated in a sauce.',
      imageUrl: 'https://th.bing.com/th/id/OIP.wPfu4tS0UZ1FVqPXFT8oSQHaGl?pid=ImgDet&rs=1',
    price:20},
  ],
},
{
  id: 2,
  name: 'Electronics',
  products: [
    {
      id: 1,
      name: 'Laptop',
      description: 'A portable computer with a keyboard and screen.',
      imageUrl: 'https://images.idgesg.net/images/article/2020/10/like-this-primary-100860732-orig.jpg',
    price:20},
    {
      id: 2,
      name: 'Smartphone',
      description: 'A mobile phone with a touchscreen display.',
      imageUrl: 'https://th.bing.com/th/id/OIP.IV5HKcRRIcbKXew_wq7fCQHaE8?pid=ImgDet&rs=1g',
    price:20},
    {
      id: 3,
      name: 'Tablet',
      description: 'A portable computer with a touchscreen display.',
      imageUrl: 'https://www.androidheadlines.com/wp-content/uploads/2013/02/original1-e1361270239532.jpg',
    price:20},
    {
      id: 4,
      name: 'Television',
      description: 'An electronic device that receives and displays television signals.',
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/3hDYCkfBjGG6ciwcEhaQnS-1200-80.jpg',
    price:20},
    {
      id: 5,
      name: 'Refrigerator',
      description: 'An appliance that uses refrigeration to keep food cold.',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/th/aplus/samsung/samsung-B00COKDO0M-1-l.jpg',
    price:20},
    {
      id: 6,
      name: 'Washing machine',
      description: 'An appliance that washes clothes.',
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/uzpB94wvS67ufTdGszCphG-970-80.jpg',
    price:20},
    {
      id: 7,
      name: 'Microwave',
      description: 'An appliance that cooks food using microwaves.',
      imageUrl: 'https://th.bing.com/th/id/OIP.K1vlJZ2qEl1n6pEqq_pVzwHaFR?pid=ImgDet&rs=1',
    price:20},
    {
      id: 8,
      name: 'Vacuum cleaner',
      description: 'An appliance that cleans floors and carpets.',
      imageUrl: 'https://th.bing.com/th/id/OIP.urttOkZxy4CyHeLpPaWdlwHaGa?pid=ImgDet&rs=1',
    price:20},
    {
      id: 9,
      name: 'Air conditioner',
      description: 'An appliance that cools and dehumidifies air.',
      imageUrl: 'https://th.bing.com/th/id/OIP.JlE1pfCR7qbBDyr64HqgwAHaEe?pid=ImgDet&rs=1',
    price:20},
    {
      id: 10,
      name: 'Hair dryer',
      description: 'An appliance that dries hair.',
      imageUrl: 'https://th.bing.com/th/id/OIP.myrPtS7DZfckZ8NSOk1iiwHaHa?pid=ImgDet&rs=1',
    price:25}
  ]
},
{
  id: 3,
  name: 'Apparel',
  products: [
    {
      id: 1,
      name: 'T-shirt',
      description: 'A short-sleeved shirt made of cotton or other fabric.',
      imageUrl: 'https://th.bing.com/th/id/OIP.QdjXxk3Z-4hAMCfzYSK23wHaJ5?pid=ImgDet&rs=1',
    price:20},
    {
      id: 2,
      name: 'Jeans',
      description: 'Long pants made of denim.',
      imageUrl: 'https://th.bing.com/th/id/OIP.GT-6wtVZqMpbfg-aFAgDsAHaJo?pid=ImgDet&rs=1',
    price:20},
    {
      id: 3,
      name: 'Shorts',
      description: 'Short pants that typically end above the knee.',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/54ff0211e4b0331c7906899c/1572302390543-0OHGJ0E7FXKAPKPK3JNL/ke17ZwdGBToddI8pDm48kB9JzeSyE7JYugK6JkSteIYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdKPDjL2Obblf8KmUAqqkrZ-AtYGyuSuLIj61fTsn1AC-lyGSgDLobnlFjVQe3auzzk/best-shorts-for-thick-thighs-vera-moda-high-waist-denim.jpg',
    price:20},
    {
      id: 4,
      name: 'Dress',
      description: 'A one-piece garment worn by women.',
      imageUrl: 'https://th.bing.com/th/id/OIP.CaTsQGEkdVyJBk6KYFUjNAHaKU?pid=ImgDet&rs=1',
    price:20},
    {
      id: 5,
      name: 'Skirt',
      description: 'A garment that is worn around the waist and hangs down over the hips and thighs.',
      imageUrl: 'https://th.bing.com/th/id/OIP.hlj-1cEF2Jr1dWCVUWKqbgHaJ4?pid=ImgDet&rs=1',
    price:20},
    {
      id: 6,
      name: 'Blouse',
      description: 'A loose-fitting upper garment worn by women.',
      imageUrl: 'https://th.bing.com/th/id/OIP.lefD0RBbVVB5Hakx-j2zYwHaML?pid=ImgDet&rs=1',
    price:20},
    {
      id: 7,
      name: 'Sweater',
      description: 'A knitted or crocheted garment that covers the torso.',
      imageUrl: 'https://th.bing.com/th/id/OIP.nTFqdUV2GEUjJZlWYI76PQHaIi?pid=ImgDet&rs=1g',
    price:20},
    {
      id: 8,
      name: 'Jacket',
      description: 'A short coat that is typically worn over a shirt or blouse.',
      imageUrl: 'https://th.bing.com/th/id/OIP.SJa_vYs3RFWM9JMQYj7SYQHaMm?pid=ImgDet&rs=1',
    price:20},
    {
      id: 9,
      name: 'Shoes',
      description: 'A covering for the foot.',
      imageUrl: 'https://th.bing.com/th/id/OIP.KtpK7N-aSqT7wYmEu9PSYQHaFu?pid=ImgDet&rs=1',
    price:20},
    {
      id: 10,
      name: 'Boots',
      description: 'A high-cut shoe that covers the ankle or calf.',
      imageUrl: 'https://th.bing.com/th/id/OIP.cizIw7GapKmhxK0LOrwRZgHaFL?pid=ImgDet&rs=1',
      price:30
    }
  ]
}
  ]
  selectedCategory?: Category;

  ngOnInit(): void {
    // Initialize the selected category
    this.selectedCategory = this.categories[0];
  }

  onCategoryClick(category: Category): void {
    this.selectedCategory = category;
  }

  constructor(private cartService: CartService) {}
 
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert('Product has been added to cart!');
  }
  
}