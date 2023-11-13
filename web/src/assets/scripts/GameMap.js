import { AcGameobject } from "./AcGameObject"; //引入游戏对象类

export class GameMap extends AcGameobject {
    constructor(ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.img = null;
        this.img_loaded = false;
    }

    start() {

    }

    update() {
        this.render();

    }

    render() {

    }

}