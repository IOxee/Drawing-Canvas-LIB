class PhotoDAW {
    constructor(containerId, showCanvasCoords) {
        this._container = document.getElementById(containerId);
        this._showCanvasCoords = showCanvasCoords || false;
        this.loadTemplate();
    }

    loadTemplate() {
        let canvasBoard = document.createElement("section");
        canvasBoard.classList.add("canvas_board");

        let canvas = document.createElement("canvas");
        canvas.id = "canvas";

        let spanWithMouseCoords = document.createElement("span");
        spanWithMouseCoords.id = "mouseCoords";
        spanWithMouseCoords.classList.add("no-select");
        canvasBoard.appendChild(spanWithMouseCoords);
        canvasBoard.appendChild(canvas);


        let toolsBoard = document.createElement("section");
        toolsBoard.classList.add("tools_board");

        // Create the first div with class "row"
        let firstRow = document.createElement("div");
        firstRow.classList.add("row");

        // Create the label with class "title"
        let labelFormes = document.createElement("label");
        labelFormes.classList.add("title");
        labelFormes.textContent = "Formes";
        firstRow.appendChild(labelFormes);

        // Create the unordered list with class "options"
        let ulFormes = document.createElement("ul");
        ulFormes.classList.add("options");

        // Create the list items with class "option tool" and various ids
        let liPoints = document.createElement("li");
        liPoints.classList.add("option", "tool", "activeStyle");
        liPoints.id = "points";
        let iPoints = document.createElement("i");
        iPoints.classList.add("bi", "bi-circle-fill");
        iPoints.textContent = " Punt";
        liPoints.appendChild(iPoints);
        ulFormes.appendChild(liPoints);

        let liCircle = document.createElement("li");
        liCircle.classList.add("option", "tool");
        liCircle.id = "circle";
        let iCircle = document.createElement("i");
        iCircle.classList.add("bi", "bi-circle");
        iCircle.textContent = " Cercle";
        liCircle.appendChild(iCircle);
        ulFormes.appendChild(liCircle);

        let liSquare = document.createElement("li");
        liSquare.classList.add("option", "tool");
        liSquare.id = "square";
        let iSquare = document.createElement("i");
        iSquare.classList.add("bi", "bi-square");
        iSquare.textContent = " Rectangle";
        liSquare.appendChild(iSquare);
        ulFormes.appendChild(liSquare);

        let liLine = document.createElement("li");
        liLine.classList.add("option", "tool");
        liLine.id = "line";
        let iLine = document.createElement("i");
        iLine.classList.add("bi", "bi-dash-lg");
        iLine.textContent = " Linia";
        liLine.appendChild(iLine);
        ulFormes.appendChild(liLine);

        let liArc = document.createElement("li");
        liArc.classList.add("option", "tool");
        liArc.id = "arc";
        let iArc = document.createElement("i");
        iArc.classList.add("bi", "bi-rainbow");
        iArc.textContent = " Arc";
        liArc.appendChild(iArc);
        ulFormes.appendChild(liArc);

        let liTriangle = document.createElement("li");
        liTriangle.classList.add("option", "tool");
        liTriangle.id = "triangle";
        let iTriangle = document.createElement("i");
        iTriangle.classList.add("bi", "bi-triangle");
        iTriangle.textContent = " Triangle";
        liTriangle.appendChild(iTriangle);
        ulFormes.appendChild(liTriangle);

        firstRow.appendChild(ulFormes);
        toolsBoard.appendChild(firstRow);

        let secondRow = document.createElement("div");
        secondRow.classList.add("row");

        let labelOpcions = document.createElement("label");
        labelOpcions.classList.add("title");
        labelOpcions.textContent = "Opcions";
        secondRow.appendChild(labelOpcions);

        let ulOpcions = document.createElement("ul");
        ulOpcions.classList.add("options");

        let liBrush = document.createElement("li");
        liBrush.classList.add("option", "active", "tool");
        liBrush.id = "brush";
        let iBrush = document.createElement("i");
        iBrush.classList.add("bi", "bi-pencil-fill");
        iBrush.textContent = " Pinzell";
        liBrush.appendChild(iBrush);
        ulOpcions.appendChild(liBrush);

        let liEraser = document.createElement("li");
        liEraser.classList.add("option", "tool");
        liEraser.id = "eraser";
        let iEraser = document.createElement("i");
        iEraser.classList.add("bi", "bi-eraser-fill");
        iEraser.textContent = " Goma";
        liEraser.appendChild(iEraser);
        ulOpcions.appendChild(liEraser);

        let liSlider = document.createElement("li");
        liSlider.classList.add("option");
        let inputSlider = document.createElement("input");
        inputSlider.type = "range";
        inputSlider.id = "size_slider";
        inputSlider.min = "1";
        inputSlider.max = "100";
        inputSlider.value = "5";
        inputSlider.oninput = "printValue()";
        liSlider.appendChild(inputSlider);
        ulOpcions.appendChild(liSlider);

        let liSliderValue = document.createElement("li");
        liSliderValue.classList.add("option");
        let spanSliderValue = document.createElement("span");
        spanSliderValue.id = "size_slider_value";
        spanSliderValue.textContent = "5px";
        liSliderValue.appendChild(spanSliderValue);
        ulOpcions.appendChild(liSliderValue);

        secondRow.appendChild(ulOpcions);
        toolsBoard.appendChild(secondRow);

        let thirdRow = document.createElement("div");
        thirdRow.classList.add("row", "colors");

        let labelColors = document.createElement("label");
        labelColors.classList.add("title");
        labelColors.textContent = "Colors";
        thirdRow.appendChild(labelColors);

        let ulColors = document.createElement("ul");
        ulColors.classList.add("options");

        let liWhite = document.createElement("li");
        liWhite.classList.add("option");
        ulColors.appendChild(liWhite);

        let liBlack = document.createElement("li");
        liBlack.classList.add("option", "selected");
        ulColors.appendChild(liBlack);

        let liRed = document.createElement("li");
        liRed.classList.add("option");
        ulColors.appendChild(liRed);

        let liGreen = document.createElement("li");
        liGreen.classList.add("option");
        ulColors.appendChild(liGreen);

        let liColorPicker = document.createElement("li");
        liColorPicker.classList.add("option");
        let inputColorPicker = document.createElement("input");
        inputColorPicker.type = "color";
        inputColorPicker.id = "color-picker";
        inputColorPicker.value = "#000000";
        liColorPicker.appendChild(inputColorPicker);
        ulColors.appendChild(liColorPicker);

        thirdRow.appendChild(ulColors);
        toolsBoard.appendChild(thirdRow);

        let fourthRow = document.createElement("div");
        fourthRow.classList.add("row", "settings");

        let labelSettings = document.createElement("label");
        labelSettings.classList.add("title");
        labelSettings.textContent = "Configuració";
        fourthRow.appendChild(labelSettings);

        let ulSettings = document.createElement("ul");
        ulSettings.classList.add("options");

        let liFillColor = document.createElement("li");
        liFillColor.classList.add("option");
        let inputFillColor = document.createElement("input");
        inputFillColor.type = "checkbox";
        inputFillColor.id = "fill-color";

        let labelFillColor = document.createElement("label");
        labelFillColor.for = "fill-color";
        labelFillColor.textContent = "Emplenar";

        liFillColor.appendChild(inputFillColor);
        liFillColor.appendChild(labelFillColor);
        ulSettings.appendChild(liFillColor);

        fourthRow.appendChild(ulSettings);
        toolsBoard.appendChild(fourthRow);

        let fifthRow = document.createElement("div");
        fifthRow.classList.add("row", "buttons");

        let buttonClearCanvas = document.createElement("button");
        buttonClearCanvas.classList.add("clear-canvas");
        buttonClearCanvas.id = "clear";
        buttonClearCanvas.textContent = "Netejar Canvas";
        fifthRow.appendChild(buttonClearCanvas);

        if (this._canSaveIMG) {
            let buttonSaveCanvas = document.createElement("button");
            buttonSaveCanvas.classList.add("save-img");
            buttonSaveCanvas.id = "save";
            buttonSaveCanvas.textContent = "Guardar Canvas";
            fifthRow.appendChild(buttonSaveCanvas);
        }

        toolsBoard.appendChild(fifthRow);
        this._container.appendChild(canvasBoard);
        this._container.appendChild(toolsBoard);

        this.onLoadAfterTemplate();
    }

    onLoadAfterTemplate() {
        this._canvas = document.getElementById('canvas');
        this._ctx = this._canvas.getContext('2d', { willReadFrequently: true });
        this._toolBtns = document.querySelectorAll(".tool");
        this._fillColor = document.querySelector("#fill-color");
        this._sizeSlider = document.querySelector("#size_slider");
        this._colorBtns = document.querySelectorAll(".colors .option");
        this._colorPicker = document.querySelector("#color-picker");
        this._clearCanvas = document.querySelector(".clear-canvas");
        this._mousePrintCoords = document.getElementById("mouseCoords");
        this._sizeSliderValue = document.getElementById("size_slider_value");
        this._saveBtn = document.getElementById("save");

        this._prevMouseX,
        this._prevMouseY,
        this._snapshot,
        this._isDrawing = false,
        this._selectedTool = "brush",
        this._brushWidth = 5,
        this._selectedColor = "#000";
        this._saveLocations = [];

        this._canvas.width = this._canvas.offsetWidth;
        this._canvas.height = this._canvas.offsetHeight;
        this.setCanvasBackground();

        this.startDraw = this.startDraw.bind(this);
        this.drawing = this.drawing.bind(this);
        this.stopDraw = this.stopDraw.bind(this);

        this.addEventListeners();

        if (this._showCanvasCoords) {
            this._mousePrintCoords.innerHTML = `X: 0 Y: 0`;
        }
    }

    addEventListeners() {
        this._canvas.addEventListener("mousedown", this.startDraw);
        this._canvas.addEventListener("mousemove", this.drawing);
        this._canvas.addEventListener("mouseup", this.stopDraw);
        this._sizeSlider.addEventListener("onchange", this.changeSize);

        this._toolBtns.forEach(btn => {
            btn.addEventListener("click", e => {
                if (e.target.parentElement.classList.contains("option")) {
                    // remover clase active de todos los botones
                    this._toolBtns.forEach(btn => btn.classList.remove("active"));

                    // agregar clase active al boton seleccionado
                    e.target.parentElement.classList.add("active");

                    // asignar la herramienta seleccionada
                    this._selectedTool = e.target.parentElement.id;

                    this._fillColor.disabled = this._selectedTool !== "square" && this._selectedTool !== "points";
                }
            });
        });

        this._clearCanvas.addEventListener("click", () => {
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this.setCanvasBackground();
        });

        this._colorBtns.forEach(btn => {
            btn.addEventListener("click", e => {
                this._colorBtns.forEach(btn => btn.classList.remove("selected"));
                e.target.classList.add("selected");

                this._selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
            });
        });

        this._colorPicker.addEventListener("change", e => {
            e.target.parentElement.style.backgroundColor = e.target.value;
            this._selectedColor = e.target.value;
            e.target.parentElement.click();
        });

        this._sizeSlider.addEventListener("change", e => {
            this._brushWidth = e.target.value;
            this._sizeSliderValue.innerHTML = e.target.value + "px";
        });

    }

    setCanvasBackground() {
        this._ctx.fillStyle = "#fff";
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.fillStyle = this._selectedColor;
    }

    drawing(e) {
        if (this._showCanvasCoords) {
            this._mousePrintCoords.innerHTML = `X: ${e.offsetX} Y: ${e.offsetY}`;
        }
        if (!this._isDrawing) return;


        this._ctx.putImageData(this._saveLocations[this._saveLocations.length - 1], 0, 0);

        if (this._selectedTool === "brush" || this._selectedTool === "eraser") {
            this._ctx.strokeStyle = this._selectedTool === "eraser" ? "#fff" : this._selectedColor;
            this._ctx.lineTo(e.offsetX, e.offsetY);
            this._ctx.stroke();
        } else if (this._selectedTool === "square") {
            this.drawRect(e);
        } else if (this._selectedTool === "circle") {
            this.drawCircle(e);
        } else if (this._selectedTool === "line") {
            this.drawLine(e);
        } else if (this._selectedTool === "arc") {
            this.drawArch(e);
        } else if (this._selectedTool === "triangle") {
            this.drawTriangle(e);
        }
    }

    startDraw = function (e) {
        this._isDrawing = true;
        this._prevMouseX = e.offsetX;
        this._prevMouseY = e.offsetY;

        this._ctx.beginPath();

        this._ctx.lineWidth = this._brushWidth;
        this._ctx.strokeStyle = this._selectedColor;
        this._ctx.fillStyle = this._selectedColor;

        console.log(
            'Herramienta selecionada ' + this._selectedTool,
            'Color seleccionado ' + this._selectedColor,
            'Tamaño del pincel ' + this._brushWidth
        );

        if (this._selectedTool === "points") {
            this.drawPoints(e);
        }



        this._saveLocations.push(this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height));
    }

    stopDraw = function (e) {
        this._isDrawing = false;
    }

    drawRect(e) {
        if (!this._fillColor.checked) {
            return this._ctx.strokeRect(
                e.offsetX,
                e.offsetY,
                this._prevMouseX - e.offsetX,
                this._prevMouseY - e.offsetY
            );
        }

        this._ctx.fillRect(
            e.offsetX,
            e.offsetY,
            this._prevMouseX - e.offsetX,
            this._prevMouseY - e.offsetY
        );
    }

    drawCircle(e) {
        this._ctx.beginPath();

        let radius = Math.sqrt(
            Math.pow(this._prevMouseX - e.offsetX, 2) +
            Math.pow(this._prevMouseY - e.offsetY, 2)
        );

        this._ctx.arc(
            this._prevMouseX,
            this._prevMouseY,
            radius,
            0,
            2 * Math.PI
        );

        this._fillColor.checked ? this._ctx.fill() : this._ctx.stroke();
    }

    drawLine(e) {
        this._ctx.beginPath();
        this._ctx.moveTo(this._prevMouseX, this._prevMouseY);
        this._ctx.lineTo(e.offsetX, e.offsetY);
        this._ctx.stroke();
    }

    drawArch(e) {
        // calcule el radio del semicírculo pero el punto de inicio es el medio de la línea
        let radius = Math.sqrt(
            Math.pow(this._prevMouseX - e.offsetX, 2) +
            Math.pow(this._prevMouseY - e.offsetY, 2)
        );

        // calcular el ángulo del semicírculo
        let angle = Math.atan2(e.offsetY - this._prevMouseY, e.offsetX - this._prevMouseX);

        // calcular el ángulo inicial y final del semicírculo
        let startAngle = angle - Math.PI / 2;
        let endAngle = angle + Math.PI / 2;

        // dibujar el semicírculo
        this._ctx.beginPath();
        this._ctx.arc(this._prevMouseX, this._prevMouseY, radius, startAngle, endAngle);
        this._ctx.stroke();
    }

    drawTriangle(e) {
        this._ctx.beginPath();
        this._ctx.moveTo(this._prevMouseX, this._prevMouseY);
        this._ctx.lineTo(e.offsetX, e.offsetY);
        this._ctx.lineTo(this._prevMouseX * 2 - e.offsetX, e.offsetY);
        this._ctx.closePath();

        this._fillColor.checked ? this._ctx.fill() : this._ctx.stroke();
    }

    drawPoints(e) {
        this._ctx.beginPath();
        this._ctx.arc(e.offsetX, e.offsetY, this._brushWidth, 0, Math.PI * 2);
        this._ctx.fill();
        this._ctx.closePath();
    }
}

function printValue() {
    var size = document.getElementById("size_slider").value + "px";
    document.getElementById("size_slider_value").innerText = size;
}