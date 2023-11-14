import { AcGameobject } from "./AcGameObject"; //引入游戏对象类
import { Wall } from "./Wall"; //引入墙类

export class GameMap extends AcGameobject {
    constructor(ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
        this.row = 13;
        this.cols = 13;

        this.walls = [];
        this.inner_walls_count = Math.random() * 10; //内部墙数量
    }

    check_connectivity(g, sx, sy, tx, ty) { //检查连通性, dfs算法
        if (sx == tx && sy == ty) return true; //起点终点相同
        g[sx][sy] = true; //标记起点

        let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]; //四个方向
        for (let i = 0; i < 4; i++) {
            let x = sx + dx[i], y = sy + dy[i];
            if (!g[x][y]) {
                if (this.check_connectivity(g, x, y, tx, ty)) return true;
            }
        }
        return false;
    }


    create_walls() {
        const g = [];
        for (let i = 0; i < this.cols; i++) {
            g[i] = [];
            for (let j = 0; j < this.row; j++) {
                g[i][j] = false;
            }
        } //初始化格子

        for (let i = 0; i < this.cols; i++) {
            g[i][0] = true;
            g[i][this.row - 1] = true;
        } 

        for (let i = 0; i < this.row; i++) {
            g[0][i] = true;
            g[this.cols - 1][i] = true;

        }

        for (let m = 0; m < this.inner_walls_count; m++) {
            for (let n = 0; n < 1000; n ++){
                let i = parseInt(Math.random() * this.cols);
                let j = parseInt(Math.random() * this.row);
                if (g[i][j] || g[j][i]) {
                    continue;
                }
                if (i == this.cols - 2 && j == 1 || j == this.row - 2 && i == 1) {
                    continue;
                }

                g[i][j]= g[j][i] = true;
                break;

            }
        } //随机生成内部墙
        const copy_g = JSON.parse(JSON.stringify(g));
        if (!this.check_connectivity(copy_g, this.row - 2, 1, 1, this.cols - 2)) return false;

        for (let j = 0; j < this.row; j++) {
            for (let i = 0; i < this.cols; i++) {
                if (g[i][j]) {
                    this.walls.push(new Wall(i, j, this));
                }
            }
        } 
        return true;
    }

    start() {

            for(let i = 0; i < 1000; i ++)    
                if (this.create_walls()) break;

            }

            update_size() {
                this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.row));
                this.ctx.canvas.width = this.L * this.cols;
                this.ctx.canvas.height = this.L * this.row;
            }

            update() {
                this.update_size();
                this.render();

            }

            render() {
                const color_even = "#AAD751"; //偶数格子颜色
                const color_odd = "#A2D149"; //奇数格子颜色
                for (let i = 0; i < this.cols; i++) {
                    for (let j = 0; j < this.row; j++) {
                        this.ctx.fillStyle = (i + j) % 2 == 0 ? color_even : color_odd; // 奇偶数格子颜色不同
                        this.ctx.fillRect(i * this.L, j * this.L, this.L, this.L); //绘制格子
                    }
                }   
            }
        }

