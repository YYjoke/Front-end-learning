
        // 自调用函数  小蛇的创建
        (function () {
            // 存放小蛇的每个身体部分
            var elements = [];
            // 小蛇的构造函数
            function Snake(width, height, direction) {
                // 小蛇的每个部分的宽
                this.width = width || 20;
                this.height = height || 20;

                // 小蛇的身体
                this.body = [{
                        x: 3,
                        y: 2,
                        color: "red"
                    },
                    {
                        x: 2,
                        y: 2,
                        color: "yellow"
                    },
                    {
                        x: 1,
                        y: 2,
                        color: "yellow"
                    },
                ]


                // 小蛇的方向
                this.direction = direction || "right"
            }

            // 为原型添加方法----小蛇初始化的方法
            Snake.prototype.init = function (map) {
                //先把上一条小蛇删掉 在初始化一条新的
                remove();

                //循环遍历创建div
                for (var i = 0; i < this.body.length; i++) {
                    // 数组中的每个元素都是一个对象
                    var obj = this.body[i];

                    //创建div
                    var div = document.createElement("div");
                    // 把div加入到map地图中
                    map.appendChild(div);
                    //设置div的样式
                    div.style.position = "absolute";
                    div.style.width = this.width + "px";
                    div.style.height = this.height + "px";
                    // 横纵坐标
                    div.style.left = obj.x * this.width + "px";
                    div.style.top = obj.y * this.height + "px";
                    // 背景颜色
                    div.style.backgroundColor = obj.color;


                    // 方向

                    //把div加入到element数组中-------目的是为了删除
                    elements.push(div);

                }
            }


            // 为原型添加方法----让小蛇动起来
            Snake.prototype.move = function (food, map) {
                //改变小蛇的身体坐标位置
                var i = this.body.length - 1; //最后一块身体部分
                for (; i > 0; i--) {
                    this.body[i].x = this.body[i - 1].x;
                    this.body[i].y = this.body[i - 1].y;
                }

                // 判断方向 -- 改变小蛇头的坐标位置
                switch (this.direction) {
                    case "right":
                        this.body[0].x += 1;
                        break;
                    case "left":
                        this.body[0].x -= 1;
                        break;
                    case "top":
                        this.body[0].y -= 1;
                        break;
                    case "bottom":
                        this.body[0].y += 1;
                        break;
                }
            
                // 判断有没有吃到食物
                // 小蛇的头坐标和食物的坐标一致
                var headX = this.body[0].x*this.width;
                var headY = this.body[0].y*this.height;

                // 判断小蛇的头的坐标和食物的坐标是否相同
                if(headX == food.x&&headY == food.y){
                    
                    // 获取小蛇最后的尾巴
                    var last = this.body[this.body.length - 1];

                    // 把小蛇最后的尾巴复制一个，重新加到小蛇的body中去
                    this.body.push({
                        x:last.x,
                        y:last.y,
                        color:last.color,
                    });

                    // 把食物删掉  重新初始化食物
                    food.init(map);
                }
            }


            //删除小蛇的私有函数
            function remove() {
                //获取数组
                var i = elements.length - 1;
                for (; i >= 0; i--) {
                    //先从当前的子元素中找到该子元素的父级元素，然后再删除这个子元素

                    var ele = elements[i];

                    // 从map地图上删除这个子元素
                    ele.parentNode.removeChild(ele);

                    elements.splice(i, 1);
                }
            }
            //把Snake暴露给window  外部可以访问
            window.Snake = Snake;

        })();
