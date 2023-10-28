import { Injectable, signal } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  products = signal<IProduct[]>([])




}
