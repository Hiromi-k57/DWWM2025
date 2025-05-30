"use strict";

const paint = {
    minSize : 1, 
    maxSize : 100,
    toolList : ["pen", "square", "circle"],
    canvas : document.querySelector('canvas'),
    ctx : null,
    inputColor : document.querySelector(".btn-color"),
    inputSize : document.querySelector(".btn-size"),
    btnUndo : document.querySelector(".btn-undo"),
    btnRedo : document.querySelector(".btn-redo"),
    btnSave : document.querySelector(".btn-save"),
    btnLoad : document.querySelector(".btn-load"),
    btnsTool : document.querySelectorAll(".btn-tool"),
    painting : false, 
    tool : "pen", 
    color : "#000000", 
    size : 10,
    undoList : [], 
    lastAction : [], 
    redoList : [],
    originalShapePos : {}, 
    snapshot: null,
    /**
     * resize Canvas when the page size change
     */
    resize(){
        console.log(this);
        
        const {ctx, canvas} = this;
        
        let snapshot = ctx.getImageData(0,0, canvas.width, canvas.height)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.putImageData(snapshot, 0, 0)
        this.setContext();
    },
    create()
    {
        this.ctx = this.canvas.getContext("2d")
        this.init()
    },
    init(){
        const {inputColor, color, inputSize, size, startPosition, finishedPosition, draw, keyboard, chooseColor, setSize, undo, redo, save, load, changeTool, canvas, btnUndo, btnRedo, btnSave, btnLoad, btnsTool} = this;
        
        inputColor.value = color;
        inputSize.value = size;

        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
        
        // On commence à dessiner quand on enfonce le bouton de la souris
        canvas.addEventListener("mousedown", startPosition);
        // On arrête quand on le relève.
        window.addEventListener("mouseup", finishedPosition);
        // On dessine quand on déplace la souris.
        canvas.addEventListener("mousemove", draw);
        // quand on appui sur une touche du clavier
        document.addEventListener("keypress", keyboard);
        inputColor.addEventListener("change", chooseColor);
        inputSize.addEventListener("change", setSize);
        btnUndo.addEventListener("click", undo);
        btnRedo.addEventListener("click", redo);
        btnSave.addEventListener("click", save);
        btnLoad.addEventListener("click", load);
        btnsTool.forEach(btn => {
            btn.addEventListener("click",changeTool);
        });
    },

    setContext(){
        const {ctx, size, color} = this;
        ctx.lineWidth = size;
        ctx.strokeStyle = color;
    },

    startPosition(e){
        painting = true;
        switch(tool)
        {
            case "pen":
                // pour faire des points au clique
                draw(e);
                break;
            case "circle":
            case "square":
                drawWithShape(e, "start");
                break;    
        }
    },

    finishedPosition(e){
    
        switch(tool)
        {
            case "pen":
                painting = false;
                draw(e);
                break;
            case "circle":
            case "square":
                drawWithShape(e, "end");
                painting = false;
                break;
        }
    
        ctx.beginPath();
    
        if(!lastAction.length)return;
        const undoAction = {
            usedTool: tool,
            actions: lastAction,
            color: color,
            size: size
        }
        undoList.push(undoAction);
        lastAction = [];
        checkDisabled();
    },

    changeTool()
    {
    const selectedTool = this.dataset.tool;
    if(!toolList.includes(selectedTool))return;
    tool = selectedTool;
    canvas.dataset.tool = selectedTool;
    },

    // draw(e){
        // Si on n'est pas en train de dessiner, on arrête la fonction.
        
    //     if(!painting) return;
    //     switch(tool)
    //     {
    //         case "pen":
    //             drawWithPen(e);
    //             break;
    //         case "circle":
    //         case "square":
    //             drawWithShape(e, "selection");
    //             break;            
    //     }
    // },

    drawWithPen(e){
    ctx.lineCap = "round";
    let mouse = getMousePos(e);
    /* On dessine là où se trouve la souris. */
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    // on augmente un peu la fluidité avec ceci: (optionnelle)
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    lastAction.push({
        x: mouse.x,
        y: mouse.y
    })
    },

    drawWithShape(e, state){
    if(!painting)return;
    const lastPos = getMousePos(e);
    if(state === "start")
    {
        console.log("start");
        
        originalShapePos = lastPos;
        snapshot = ctx.getImageData(0,0,canvas.width, canvas.height);
        // shapeSelector.style.display = "block";
        return;
    }
    const shape = getShapeRect(originalShapePos, lastPos);
    ctx.putImageData(snapshot, 0,0);
    if(state === "selection")
    {
        drawShape(shape);
        return;
    }
    
    drawShape(shape);
    lastAction.push(shape) 
    },

    drawShape(shape)
    {
    switch(tool)
    {
        case "square":
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
            break;
        case "circle":
            ctx.beginPath();
            ctx.ellipse(shape.x + shape.width/2, shape.y +shape.height/2, shape.width/2, shape.height/2, 0, 0, Math.PI*2);
            ctx.stroke();
            break;
    }
    },

    getShapeRect(originalPos, lastPos) {
    const shape = {};
    if(originalPos.x < lastPos.x)
    {
        shape.x = originalPos.x;
        shape.width = lastPos.x - originalPos.x;
    }
    else
    {
        shape.x = lastPos.x;
        shape.width = originalPos.x - lastPos.x;
    }
    if(originalPos.y < lastPos.y)
    {
        shape.y = originalPos.y;
        shape.height = lastPos.y - originalPos.y;
    }
    else
    {
        shape.y = lastPos.y;
        shape.height = originalPos.y - lastPos.y;
    }
    return shape;
    },

    getMousePos(evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },

    redraw(tab){
    
        tab.forEach(action =>{
            ctx.strokeStyle = action.color;
            ctx.lineWidth = action.size;
            switch(action.usedTool)
            {
                case "pen":
                    ctx.beginPath();
                    action.actions.forEach(move=>{
                        ctx.lineTo(move.x, move.y);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(move.x, move.y);
                    })
                    break;
                case "square":
                    const move = action.actions[0];
                    ctx.strokeRect(move.x, move.y, move.width, move.height);
                    break;
            }
            
        })
        ctx.beginPath();
    },

    keyboard(e){
        e.preventDefault();
        if(!e.shiftKey)return;
        
        // Selon la touche pressé je lance différente fonctions.
        switch(e.key.toLowerCase()){
            case "s":
                save();
                break;
            case "l":
                load();
                break;
            case "c":
                inputColor.click();
                break;
            case "z":
                undo();
                break;
            case "y":
                redo();
                break;
            case "+":
                inputSize.value++;
                setSize();
                break;
            case "-":
                inputSize.value--;
                setSize();
                break;
            case "1":
            case "2":
            case "3":
                btnsTool[e.key-1].click();
                break;
        }
        /*
            paramètre le contexte une fois que les autres actions l'ont modifié
            (par exemple les modifications apportés par le undo/redo)
        */
        setContext();
    },

    setSize(){
    size = inputSize.value;
    if(size < minSize) size=minSize; 
    else if(size > maxSize) size=maxSize; 
    inputSize.value = size;
    setContext();
    },

    load(){
        // je crée un nouvel element input
        let input = document.createElement("input");
        // je lui donne le type file
        input.setAttribute("type", "file");
        // je le clique
        input.click();
        // Quand je rentre un fichier.
        input.oninput = function(e){
            // Je crée un lecteur de fichier.
            let reader = new FileReader();
            // quand je charge un fichier dans mon lecteur
            reader.onload = function(event){
                //je crée une nouvelle image.
                let img = new Image();
                // quand mon image est chargé:
                img.onload = function(){
                    // je vide mon canvas
                    ctx.clearRect(0,0,canvas.width, canvas.height);
                    //J'ajoute ma nouvelle image
                    ctx.drawImage(img, 0,0);
                }
                /* J'ajoute à la source de mon image ce que me retourne
                mon lecteur */
                img.src = event.target.result;
            }
            // Je donne à mon lecteur, le fichier selectionné.
            reader.readAsDataURL(e.target.files[0]);
        }
    },

    save(){
        /* On change les données du canvas en donnée png sous forme de
        string */
        let png = canvas.toDataURL("image/png");    
        /* On vient remplacer son type mime par un autre plus apte
        au transfère de donnée. */
        png.replace("image/png", "application/octet-stream");
        // Je crée un lien
        let link = document.createElement("a");
        // Je viens lui ajouter l'attribut download avec le nom du fichier.
        link.setAttribute("download", "SauvegardeCanvas.png");
        // On lui ajoute son href avec mon image en valeur.
        link.setAttribute("href", png);
        // et on le clique
        link.click();
    },

   chooseColor(){
        // je donne sa valeur à ma variable color.
        color = inputColor.value;
        setContext();   
    },

    undo(){
        if(!undoList.length)return;
        let redoAction = undoList.pop();
        redoList.push(redoAction);
        ctx.clearRect(0,0,canvas.width, canvas.height);
        redraw(undoList);
        checkDisabled();
    },

    redo(){
        if(!redoList.length)return;
        let redoAction = redoList.pop();
        undoList.push(redoAction);
        redraw([redoAction]);
        checkDisabled();
    },

    checkDisabled(){
    btnUndo.disabled = !undoList.length
    btnRedo.disabled = !redoList.length
    },

};
export default paint;