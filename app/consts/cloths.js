/* eslint-disable prettier/prettier */

import common from "../../assets/images"
const cloths = [
    {id: '1', name: 'Suit',         ingredients: 'cotton',    price: '120', image:common.suit,        detail:'Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.'}, 
    {id: '2', name: 'T-shirt',      ingredients: 'thun',      price: '320', image:common.tshirt,      detail:'Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem'},  
    {id: '3', name: 'Jacket',       ingredients: 'da bo',     price: '320', image:common.jacket,      detail:'The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mangos goal is to support the implementation of practices more committed to the environment.'}, 
    {id: '4', name: 'Polo',         ingredients: 'cotton',    price: '320', image:common.polo,        detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'}, 
    {id: '5', name: 'Hoodie',       ingredients: 'ni len',    price: '320', image: common.hoodie,     detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'}, 
    {id: '6', name: 'Scarves',      ingredients: 'cotton',    price: '320', image:common.scarves,      detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'}, 
    {id: '7', name: 'Watch',        ingredients: 'da bo',     price: '320', image:common.watch,       detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'}, 
    {id: '8', name: 'Sunglasses',   ingredients: '100% fake', price: '320', image:common.sunglass,    detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'}, 
    {id: '9', name: 'Flats',        ingredients: 'vai len',   price: '320', image: common.flats,      detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'}, 
    {id: '10',name: 'Casual Shoes', ingredients: 'vai',       price: '320', image:common.casualshoes, detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'}, 
    {id: '11',name: 'Boots',        ingredients: 'da',        price: '320', image: common.boots,      detail:'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world'},
  
    // fetch product zô đây
    //fetch('https://shop-pbl6.herokuapp.com/api/v1/products').then(rs=>rs.json()).then(data=>console.log(data))
  ];
  
  export default cloths;

