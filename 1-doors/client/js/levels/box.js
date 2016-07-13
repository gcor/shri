import DoorBase from "../doorBase";



class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
export default class Box extends DoorBase {
    constructor(number, onUnlock) {
        super(number, onUnlock);


        const circle = document.querySelector('.circle-lever__circle');
        const element = document.querySelector('.circle-lever__element');
        const startVector = {};
        const currentVector = {};
        let startDistance = 0;
        let currentDistance = 0;
        let startAngle = 0;
        let currentAngle = 0;

        circle.addEventListener('pointerdown', onCirclePointerDown);
        circle.addEventListener('pointermove', onCirclePointerMove);
        circle.addEventListener('pointerup', onCirclePointerUp.bind(this));
        circle.addEventListener('pointercancel', onCirclePointerUp.bind(this));
        circle.addEventListener('pointerleave', onCirclePointerUp.bind(this));

        function onCirclePointerDown(e) {
            // собираем информацию по каждому нажатию и считаем 
            // начальный угол и расстояние между векторами,
            // если в жесте участвуют два пальца
            startVector[e.pointerId] = new Vector(e.clientX, e.clientY);
            circle.setPointerCapture(e.pointerId)
            let vectorArray = Object.keys(startVector);
            if (vectorArray.length === 2) {
                startDistance = detectDistance(startVector[vectorArray[0]], startVector[vectorArray[1]]);
                startAngle = detectAngleDeg(startVector[vectorArray[0]], startVector[vectorArray[1]])
            }
        }

        function onCirclePointerMove(e) {
            // считаем текущий угол и расстояние между векторами,
            // если в жесте участвуют два пальца
            currentVector[e.pointerId] = new Vector(e.clientX, e.clientY)
            let vectorArray = Object.keys(currentVector);
            if (vectorArray.length === 2) {
                // анимируем rotate и scale
                requestAnimationFrame(() =>{
                    currentDistance = detectDistance(currentVector[vectorArray[0]], currentVector[vectorArray[1]]);
                    currentAngle = detectAngleDeg(currentVector[vectorArray[0]], currentVector[vectorArray[1]]) - startAngle || 0;
                    let diffDistance = currentDistance / startDistance;
                    if (diffDistance < 2.5 && diffDistance > 1) {
                        circle.style.transform = `scale(${diffDistance}) rotate(${currentAngle}deg)`;
                    }
                });
            }
        }

        function onCirclePointerUp(e) {
            // если ключ рядом с левым краем экрана — уровень пройден
            let el = element.getBoundingClientRect();
            if (el.left < 5) {
                this.unlock();
                circle.removeEventListener('pointerdown');
                circle.removeEventListener('pointermove');
                circle.removeEventListener('pointerup');
            } else {
                circle.setPointerCapture(e.pointerId)
                resetTransition();
            }
        }

        function detectDistance(p1, p2) {
            return (Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2)));
        }

        function detectAngleDeg(p1, p2) {
            return Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180 / Math.PI;
        }

        function resetPosition() {
            requestAnimationFrame(function() {
                circle.style.transform = '';
            });
        }
    }


    showCongratulations() {
        alert('Поздравляю! Игра пройдена!');
    };
}
