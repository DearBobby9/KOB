import { AcGameobject } from "./AcGameObject";

export class Wall extends AcGameobject {
    constructor(i, j, gamemap) {
        super();

        this.i = i;
        this.j = j;
        this.gamemap = gamemap;
        this.color = "#5b7db4";

    }

    update() {

        this.render();
    }

    render() {
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.i * L, this.j * L, L, L);
    }
}