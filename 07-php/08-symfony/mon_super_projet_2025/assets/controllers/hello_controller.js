import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 ** data-controller="hello" 属性を持つ要素は、このコントローラーを実行します。
 * 
 * this controller to be executed. The name "hello" comes from the filename:
 ** 「hello」という名前は、ファイル名に由来しています。
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    connect() {
        this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
}
