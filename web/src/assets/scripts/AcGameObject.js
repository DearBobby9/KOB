const AC_GAME_OBJECT = [];

export class AcGameobject {
    constructor() {
        AC_GAME_OBJECT.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() { //只执行一次
    } 

    update() { //每帧执行
    }

    on_destory() { //销毁时执行
    }

    destroy() { //销毁
        this.on_destory();

        for (let i in AC_GAME_OBJECT) {
            if (AC_GAME_OBJECT[i] === this) {
                AC_GAME_OBJECT.splice(i, 1);
                break;
            }
        }
    }
}
let last_timestamp; //上一帧的时间戳
const step = timestamp => {
    for (let i in AC_GAME_OBJECT) {
        if (!AC_GAME_OBJECT[i].has_called_start) {
            AC_GAME_OBJECT[i].start();
            AC_GAME_OBJECT[i].has_called_start = true;
        } else {
            AC_GAME_OBJECT[i].timedelta = timestamp - last_timestamp;
            AC_GAME_OBJECT[i].update();
        }
    }
    requestAnimationFrame(step);
}

requestAnimationFrame(step);