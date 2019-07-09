function moveDecimalPoint(_data, _num, _boo) {
    let data = _data.toString();
    let number = _num;
    let boo = _boo == "right" ? "right" : "left";
    var x, y;
    if (number < 0) return data;
    x = data.indexOf(".");
    if (x == -1) {
        data = data + ".0";
    }
    x = data.indexOf(".");
    if (boo == "right") {
        if (parseInt(data.length - x - 1) < number) {
            for (var i = data.length - x - 1; i <= number; i++) {
                data = data + "0";
            }
        }
    }
    if (boo == "left") {
        if (x - 1 < number) {
            for (var i = x; i <= number; i++) {
                data = "0" + data;
            }
        }
    }
    x = data.indexOf(".");
    if (boo == "right") {
        if (data.length - x - 1 <= number) {
            data = data.slice(0, x) + data.slice(x + 1);
        } else {
            data = data.slice(0, x) + data.slice(x + 1);
            data = data.slice(0, x + number) + "." + data.slice(x + number);
        }
    }
    if (boo == "left") {
        data = data.slice(0, x) + data.slice(x + 1);
        data = data.slice(0, x - number) + "." + data.slice(x - number);
    }

    if (data > 1) {
        var fir = data.toString().charAt(0);
        while (fir == 0) {
            data = data.toString().slice(1);
            fir = data.toString().charAt(0);
        }
    }
    if (data > 0 && data < 1) {
        var sec = data.toString().charAt(1);
        while (sec == 0) {
            data = data.toString().charAt(0) + data.toString().slice(2);
            sec = data.toString().charAt(1);
        }
    }

    return data;
}

function setScientificNotationToDecimal(_num, _boo) {

    var number = _num.toString(),
        boo = _boo == false ? false : true;
    var isPlus = true;

    if (number.charAt(0) == "-") {
        isPlus = false;
        number = number.slice(1);
    }

    if (boo == true) {
        if (number.indexOf("e") > -1) {
            var n = number.indexOf("e");
            var num = number.slice(0, n);
            var num2 = number.slice(n + 1);

            if (num2 < 0) {
                number = moveDecimalPoint(num, Math.abs(num2), "left");
            } else {
                number = moveDecimalPoint(num, Math.abs(num2), "right");
            }
        }
    } else {}
    if (isPlus) {
        number = number.toString();
    } else {
        number = "-" + number;
    }

    return number;
}

function add(_num1, _num2) {
    var num1 = _num1.toString(),
        num2 = _num2.toString();
    var fruitData = 0;
    num1 = num1.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num1, true) : num1;
    num2 = num2.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num2, true) : num2;
    var pointLen1 = this.getPointLength(num1),
        pointLen2 = this.getPointLength(num2);
    var maxPointLen = pointLen1 > pointLen2 ? pointLen1 : pointLen2;
    if (pointLen1 > 0 || pointLen2 > 0) {
        fruitData = parseFloat(num1) + parseFloat(num2);
        fruitData = fruitData.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(fruitData, true) : fruitData;
        var fruitPointLength = this.getPointLength(fruitData);
        fruitData = fruitPointLength > maxPointLen ? this.toFixed(fruitData, maxPointLen) : fruitData;
    } else {
        fruitData = parseInt(num1) + parseInt(num2);
    }
    fruitData = Number(fruitData);
    return fruitData;
}
function sub(_num1, _num2) {
    var num1 = _num1.toString(),
        num2 = _num2.toString();
    var fruitData = 0;
    num1 = num1.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num1, true) : num1;
    num2 = num2.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num2, true) : num2;
    var pointLen1 = this.getPointLength(num1),
        pointLen2 = this.getPointLength(num2);
    var maxPointLen = pointLen1 > pointLen2 ? pointLen1 : pointLen2;
    if (pointLen1 > 0 || pointLen2 > 0) {
        var fruitData = parseFloat(num1) - parseFloat(num2);
        fruitData = fruitData.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(fruitData, true) : fruitData;
        var fruitPointLength = this.getPointLength(fruitData);
        fruitData = fruitPointLength > maxPointLen ? this.toFixed(fruitData, maxPointLen) : fruitData;
    } else {
        fruitData = parseInt(num1) - parseInt(num2);
    }
    fruitData = Number(fruitData);
    return fruitData;
}
function mul(_num1, _num2) {
    var num1 = _num1.toString(),
        num2 = _num2.toString();
    var fruitData = 0;
    num1 = num1.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num1, true) : num1;
    num2 = num2.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num2, true) : num2;
    var pointLen1 = this.getPointLength(num1),
        pointLen2 = this.getPointLength(num2);
    var maxPointLen = pointLen1 > pointLen2 ? pointLen1 : pointLen2;

    if (pointLen1 > 0 || pointLen2 > 0) {
        var fruitData = parseFloat(num1) * parseFloat(num2);
        fruitData = fruitData.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(fruitData, true) : fruitData;
        var fruitPointLength = this.getPointLength(fruitData);
        fruitData = fruitPointLength > maxPointLen ? this.toFixed(fruitData, maxPointLen) : fruitData;
    } else {
        fruitData = parseInt(num1) * parseInt(num2);
    }
    fruitData = fruitData.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(fruitData, true) : fruitData;
    fruitData = Number(fruitData);
    return fruitData;
}
function div(_num1, _num2) {
    var num1 = _num1.toString(),
        num2 = _num2.toString();
    var de1 = 0,
        de2 = 0,
        int1,
        int2;
    var returnData = 0;
    var n1Status = false,
        n2Status = false;
    num1 = num1.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num1, true) : num1;
    num2 = num2.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num2, true) : num2;
    if (num1.charAt(0) == "-") {
        n1Status = true;
        num1 = num1.slice(1);
    }
    if (num2.charAt(0) == "-") {
        n2Status = true;
        num2 = num2.slice(1);
    }
    de1 = this.getPointLength(num1);
    de2 = this.getPointLength(num2);
    int1 = Number(num1.toString().replace(".", ""));
    int2 = Number(num2.toString().replace(".", ""));
    returnData = int1 / int2;
    returnData = returnData.toString().indexOf("e") > -1 ? setScientificNotationToDecimal(returnData, true) : returnData;
    if (Math.abs(de2 - de1) > 0) {
        returnData = de1 > de2 ? moveDecimalPoint(returnData, Math.abs(de1 - de2), "left") : moveDecimalPoint(returnData, Math.abs(de1 - de2), "right");
    }

    returnData = returnData.toString().indexOf("e") > -1 ? setScientificNotationToDecimal(returnData, true) : returnData;

    if (n1Status && !n2Status || !n1Status && n2Status) {
        returnData = "-" + returnData;
    }
    returnData = Number(returnData);
    return returnData;
}
function red(_num1, _num2) {
    var num1 = _num1.toString(),
        num2 = _num2.toString();
    var ret = { num1: 0, num2: 0 },
        numStatus = { numStatus1: true, numStatus2: true },
        minNumber = 1;
    num1 = num1.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num1, true) : num1;
    num2 = num2.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num2, true) : num2;
    if (this.getPointLength(num1) > 0 || this.getPointLength(num2) > 0) {
        return ret;
    }
    if (parseFloat(num1) < 0) {
        numStatus.numStatus1 = false;
        num1 = Math.abs(num1);
    }
    if (parseFloat(num2) < 0) {
        numStatus.numStatus2 = false;
        num2 = Math.abs(num2);
    }
    minNumber = this.getMaxApp(num1, num2);
    ret.num1 = this.div(num1, minNumber);
    ret.num2 = this.div(num2, minNumber);

    if (numStatus.numStatus1 == false && numStatus.numStatus1 != numStatus.numStatus2) {
        ret.num1 = numStatus.numStatus1 ? ret.num1 : "-" + ret.num1;
        ret.num2 = numStatus.numStatus2 ? ret.num2 : "-" + ret.num2;
    }
    return ret;
}
function toFixed(_data, _len) {
    var data = _data.toString(),
        maxLength = _len;
    var pointLength = this.getPointLength(data);
    if (pointLength > maxLength) {
        if (data.indexOf(".") > -1) {
            data = Math.round(data * Math.pow(10, maxLength)) / Math.pow(10, maxLength).toString();
        }
    }
    return data;
}
function getMaxApp(_num1, _num2) {
    var num1 = _num1.toString(),
        num2 = _num2.toString();
    var returnData = 0;
    num1 = num1.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num1, true) : num1;
    num2 = num2.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num2, true) : num2;

    if (num1.toString().indexOf(".") == -1 && !isNaN(num1) || num2.toString().indexOf(".") == -1 && !isNaN(num2)) {
        if (num1 % num2 == 0) {
            returnData = num2;
        } else {
            returnData = arguments.callee(num2, num1 % num2);
        }
    }
    returnData = returnData.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(returnData, true) : returnData;
    return returnData;
}
function getMinApp(_num1, _num2) {
    var num1 = _num1,
        num2 = _num2;
    var returnData = 0,
        maxApp = 1;
    var x, y;
    num1 = num1.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num1, true) : num1;
    num2 = num2.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(num2, true) : num2;

    if (num1.toString().indexOf(".") == -1 && !isNaN(num1) || num2.toString().indexOf(".") == -1 && !isNaN(num2)) {
        maxApp = this.getMaxApp(num1, num2);

        x = this.div(num1, maxApp);
        y = this.div(num1, maxApp);
        returnData = this.mul(this.mul(x, y), maxApp);
    }
    returnData = returnData.toString().indexOf("e") > -1 ? this.setScientificNotationToDecimal(returnData, true) : returnData;
    return returnData;
}
function getPointLength(_data) {
    var data = _data.toString();
    var len = data.length - data.indexOf(".") - 1 == data.length ? 0 : data.length - data.indexOf(".") - 1;
    return len;
}

export default mather = {
    moveDecimalPoint,
    setScientificNotationToDecimal,
    add,
    sub,
    mul,
    div,
    red,
    toFixed,
    getMaxApp,
    getMinApp,
    getPointLength
};