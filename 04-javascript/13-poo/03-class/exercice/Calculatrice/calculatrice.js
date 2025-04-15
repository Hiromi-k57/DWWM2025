"use strict";

//new Calculatriceされたときに最初に実行される特別な関数
export default class Calculatrice {
    constructor() {
      this.prevEl = document.querySelector(".previous");
      this.currEl = document.querySelector(".current");
      this.buttons = document.querySelectorAll('button');
      this.clear();
      this.addButtonsEvent();
    }
    addButtonsEvent()
    {
        this.buttons.forEach((button)=>{
            button.addEventListener("click", this.pushButton.bind(this));
        })
    }
    pushButton(event)
    {
        switch(event.target.dataset.action)
        {
            case "sym":
                // console.log("ajouter symbole");
                this.addSign(event.target.textContent)
                break;
            case "clear":
                this.clear();
                break;
            case "delete":
                // console.log("delete");
                this.delete();
                break;
            case "equal":
                // console.log("equal");
                this.equal();
                
                break;
            default:
                // console.log(event.target.textContent);
                if(isNaN(event.target.textContent))this.addDot()
                else this.addNumber(event.target.textContent)
                break;
        }
    }
    equal(){
        if(!this.sym)return;
        console.log(typeof this.current);
        
        const current = parseFloat(this.current);
        const previous = parseFloat(this.previous);
        let total;
        switch(this.sym)
        {
            case "+":
                total = previous + current
                break;
            case "-":
                total = previous - current
                break;
            case "*":
                total = previous * current
                break;
            case "/":
                total = previous / current
                break;
        }
        this.previous = previous + ` ${this.sym} ` + current + " =";
        this.current = total;
        this.sym = "=";
        this.update();
    }
    delete()
    {
        if(this.current.length == 1)
        {
            this.current = 0;
        }
        else
        {
            this.current = this.current.slice(0,-1);
        }
        this.update();
    }
    addSign(sym)
    {
        if(this.sym)return;
        this.sym = sym
        this.previous = this.current
        this.current = "0";
        this.update();
    }
    addDot()
    {
        if(this.current.includes("."))return;
        this.current += ".";
        this.update();
    }
    addNumber(number)
    {
        if(this.current === "0")
        {
            this.current = number;
        }
        else
        {
            this.current += number;
        }
        this.update();
    }
    clear() {//リセットの為
      this.current = '0';
      this.previous = '';
      this.sym = null;
      this.update();
    }
    update()
    {        
        if(this.sym == "=")
        {
            this.prevEl.textContent = this.previous
            this.previous = "";
            this.sym = null;
        }
        else
        {
            this.prevEl.textContent = this.previous + (this.sym == null?"":" "+this.sym);
        }
        this.currEl.textContent = this.current;
    }
}