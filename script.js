'use strict'

const input = document.querySelector('.numberInput');
    const main = document.querySelector('div');

    let mathFunc = {
        squared: function(num) {
            return num*num;
        },
        cubed: function(num) {
            return num*num*num
        },
        factorial: function(num) {
            if (num < 0) return undefined;
            if (num === 0) return 1;
            let x = num - 1;
            while (x > 1) {
                num *= x;
                x--;
            }
            return num;
        },
        sqroot: function(num) {
            return num ** (1/2);
        },
        cuberoot: function(num) {
            return num ** (1/3);
        },
        circum: function(num) {
            let pi = 3.14159;
            return 2*pi*num;
        }
    };


    input.addEventListener("change", () => {
        const num = parseFloat(input.value);
        if (isNaN(num)) {
            const para = document.createElement("p");
            let node = document.createTextNode("You need to enter a number!");
            para.appendChild(node);
            main.appendChild(para);
        } else {
            let size = Object.keys(mathFunc).length;
            
            for (let i = 0; i < size; i++) {
                const para = document.createElement("p");
                let node = document.createTextNode("");
                para.classList.add(`para${i}`);
                para.appendChild(node);
                main.appendChild(para);

                let paraClass = document.getElementsByClassName(`para${i}`);
                let giga = paraClass[0];

                switch (i) {
                    case 0: 
                        giga.textContent = `${num} squared is ${mathFunc.squared(num)}. `;
                        break;
                    case 1:
                        giga.textContent += `${num} cubed is ${mathFunc.cubed(num)}. `;
                        break;
                    case 2:
                        giga.textContent += `${num} factorial is ${mathFunc.factorial(num)}. `;
                        break;
                    case 3: 
                        giga.textContent += `${num} square root is ${mathFunc.sqroot(num)}. `;
                        break;
                    case 4: 
                        giga.textContent += `${num} cube root is ${mathFunc.cuberoot(num)}. `;
                        break;                    
                    case 5: 
                        giga.textContent += `The circumference of a circle with radius ${num} is ${mathFunc.circum(num)}. `;
                        break;
                    default: 
                        break;
                }
            }
        }
    });