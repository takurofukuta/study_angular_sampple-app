import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Item[] = [
    {
      id: 1,
      name: 'ポンチョ',
      price: 3000,
      description: '',
    },
    {
      id: 2,
      name: 'セーター',
      price: 5000,
      description: 'ほどよくゆったりとしたシルエットでラフな着用感',
    },
    {
      id: 3,
      name: 'ダウンジャケット',
      price: 6000,
      description: '風を通さず、暖かさをキープ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
