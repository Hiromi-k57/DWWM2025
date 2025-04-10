"use strict";

const PaintApp = { canvas: null, ctx: null, drawing: false,

painting() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mouseleave', this.stopDrawing.bind(this));
    },
    
    startDrawing : function(event) {
        this.drawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(event.clientX, event.clientY);
    },
    
    draw: function(event) {
        if (!this.drawing) return;
        this.ctx.lineTo(event.clientX, event.clientY);
        this.ctx.stroke();
    },
    
    stopDrawing: function() {
        this.drawing = false;
        this.ctx.closePath();
    }
    
    };

    export{PaintApp};