
        // 自调用函数 --- 游戏对象
        (function () {

            var that = null;

            // 游戏的构造函数
            function Game(map) {
                this.food = new Food(); //食物对象
                this.snake = new Snake(); //小蛇对象
                this.map = map //地图
                that = this;
            }

            // 初始化游戏----可以设置小蛇和食物显示出来
            Game.prototype.init = function () {
                // 初始化游戏
                // 食物初始化
                this.food.init(this.map);
                // 小蛇初始化
                this.snake.init(this.map);

                // 小蛇移动定时器
                //     setInterval(function () {
                //      // // 小蛇移动
                //      that.snake.move(that.food,that.map);
                //     // // 小蛇再初始化
                //     that.snake.init(that.map);

                // }, 150);

                // 调用小蛇自动移动的方法
                this.runSnake(this.food, this.map);
                // 调用蛇左右移动的方法  按键方法
                this.bindKey();
                

            }


            // 添加原型方法  设置小蛇可以自动的跑起来
            Game.prototype.runSnake = function (food, map) {
                // 自动的去移动
             var timeID = setInterval(function () {
                    // 此时的this是window
                    // 移动的小蛇
                    this.snake.move(food, map);
                    // 初始化的小蛇
                    this.snake.init(map);
          // 横坐标的最大值
          var maxX = map.offsetWidth / this.snake.width; //40
                // 纵坐标的最大值
                var maxY = map.offsetHeight / this.snake.height;
                // 小蛇头的坐标
                var headX = this.snake.body[0].x;
                var headY = this.snake.body[0].y;

                // 横坐标
                if (headX < 0 || headX >= maxX) {
                    // 撞墙上了  定时器停止  游戏结束
                    clearInterval(timeID);
                    alert('游戏结束');
                }
                  // 纵坐标
                  if (headY < 0 || headY >= maxY) {
                    // 撞墙上了  定时器停止  游戏结束
                    clearInterval(timeID);
                    alert('游戏结束');
                }

                }.bind(that), 150)
            }

// 添加原型方法---设置用户按键，改变小蛇的移动方向
Game.prototype.bindKey = function(){
    // 获取用户的按键 改变小蛇的方向
    document.addEventListener("keydown",function(e){
        // 这里的this应该是 触发keydown的事件的对象----document
        // 所以 这里的this就是document

        // 获取按键的值
        switch(e.keyCode){
            case 37:case 65:this.snake.direction = "left";break;
            case 38:case 87:this.snake.direction = "top";break;
            case 39:case 68:this.snake.direction = "right";break;
            case 40:case 83:this.snake.direction = "bottom";break;
        }
    }.bind(that),false)
}
            // 暴露给外部  供外部使用
            window.Game = Game;
        })();
