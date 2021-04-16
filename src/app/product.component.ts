import { fromEventPattern } from "rxjs";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"],
})

export class ProductComponent {

    @Input() product: Product;
<<<<<<< HEAD
    @Output() productClick: EventEmitter<string> = new EventEmitter();
=======
    @Output() productClick: EventEmitter<number> = new EventEmitter();
    today = new Date();
>>>>>>> pipe_branch

    addCart() {
        this.productClick.emit(this.product.id);
    }

}