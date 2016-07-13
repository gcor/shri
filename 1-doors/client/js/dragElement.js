export default class Barrier {
    constructor(el, up) {
        const pointerUpCallback = up;
        let startPositionX = 0;
        let currentPositionX = 0;
        let startPositionY = 0;
        let currentPositionY = 0;

        el.addEventListener('pointerdown', onPointerDown);
        el.addEventListener('pointermove', onPointerMove);
        el.addEventListener('pointerup', onPointerUp);
        el.addEventListener('pointercancel', onPointerUp);
        el.addEventListener('pointerleave', onPointerUp);

        function onPointerDown(e) {
            currentPositionX = startPositionX = e.pageX;
            currentPositionY = startPositionY = e.pageY;
            el.style.transition = 'none';
            el.setPointerCapture(e.pointerId);
        }

        function onPointerMove(e) {
            currentPositionX = e.pageX;
            currentPositionY = e.pageY;
            requestAnimationFrame(() => {
                let diffX = currentPositionX - startPositionX;
                let diffY = currentPositionY - startPositionY;
                el.style.transform = 'translate(' + diffX + 'px, ' + diffY + 'px)';
            });
        }

        function onPointerUp(e) {
            currentPositionX = e.pageX;
            currentPositionY = e.pageY;
            el.releasePointerCapture(e.pointerId);
            pointerUpCallback(el);
        }
    }

}