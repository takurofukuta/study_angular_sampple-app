import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  cart: Item[] = [];
  count: object;
  items: Item[] = [
    {
      id: 1,
      name: 'ポンチョ',
      price: 3000,
      description: '',
      image: 'https://picsum.photos/id/758/400/300',
    },
    {
      id: 2,
      name: 'セーター',
      price: 5000,
      description: 'ほどよくゆったりとしたシルエットでラフな着用感',
      image: 'https://picsum.photos/id/91/400/300',
    },
    {
      id: 3,
      name: 'ダウンジャケット',
      price: 6000,
      description: '風を通さず、暖かさをキープ',
      image: 'https://picsum.photos/id/883/400/300',
    },
  ];

  constructor() {}

  addCart(item: Item) {
    return this.cart.push(item);
  }

  cartList(cart: Item[]): Item[] {
    return Array.from(new Set(cart));
  }

  countItem(cart: Item[]) {
    this.count = {};
    cart.forEach((i) => {
      return (this.count[i.name] = (this.count[i.name] || 0) + 1);
    });
  }

  ngOnInit(): void {}
}
