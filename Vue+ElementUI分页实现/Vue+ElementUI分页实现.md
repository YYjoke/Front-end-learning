在html页面中引入Vue.js和Element-UI

```
<!-- 列表 -->
<el-table
        ref="user"
        :data="user"
        tooltip-effect="dark"
        style="width: 100%">
    <el-table-column
            prop="id"
            sortable
            label="编号"
            width="80">
    </el-table-column>
    <el-table-column
            prop="username"
            sortable
            label="联系人"
            width="120">
    </el-table-column>
    <el-table-column
            prop="phone"
            sortable
            label="联系电话"
            width="120">
    </el-table-column>
    <el-table-column
            prop="mailbox"
            label="电子邮箱"
            width="150">
    </el-table-column>
    <el-table-column
            prop="postalCode"
            sortable
            label="邮政编码"
            width="120">
    </el-table-column>
    <el-table-column
            prop="date"
            sortable
            label="注册时间"
            width="200">
    </el-table-column>
    <el-table-column
            prop="address"
            label="通讯地址"
            width="200"
            show-overflow-tooltip>
    </el-table-column>
</el-table>

<!-- 分页 -->
<div class="pagination">
    <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageConf.pageCode"
            :page-sizes="pageConf.pageOption"
            :page-size="pageConf.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageConf.totalPage">
    </el-pagination>
</div>
```

通过Vue来绑定数据

1.列表数据：

```
//注意这部分代码是在Vue实例中的data属性中定义的

data() {
	//用户信息
    //element-ui的table需要的参数必须是Array类型的
    user: [{
        username: '',
        phone: '',
        mailbox: '',
        postalCode: '',
        date: '',
        address: ''
    }],
}
```

user对象中的数据必须是Array类型的

2.分页数据：

```
//注意这部分代码是在Vue实例中的data属性中定义的

data() {
	//定义分页Config
	pageConf: {
	    //设置一些初始值(会被覆盖)
	    pageCode: 1, //当前页
	    pageSize: 4, //每页显示的记录数
	    totalPage: 12, //总记录数
	    pageOption: [4, 10, 20], //分页选项
	    handleCurrentChange: function () {
	        console.log("页码改变了");
	    }
	},
}

methods: {
	//pageSize改变时触发的函数
    handleSizeChange(val) {},
    //当前页改变时触发的函数
    handleCurrentChange(val) {},
}
```

<el-pagination>中绑定的数据来自这个对象:pageConf,那么下面你需要关注<el-pagination>中的几个配置参数（方法通过Vue的@绑定，数据通过Vue的：绑定）

- @size-change：表示每页记录的个数发生变化时触发的函数，如：原来是每页/3条，变为每页/6条；handleSizeChange中包含一个参数表示当前事每页显示几条记录。
- @current-change：表示当前页发生变化时触发的函数，如：点击下一页：handleCurrentChange中包含一个参数表示当前时第几页
- ：current-page当前页，即我们命名的pageCode，表示当前页面上展示的第几页
- ：page-size分页选项，即页面提供一个列表让你选择每页显示多少条记录，注意这个参数的第一个值表示当前页是每页/记录 写上即生效
- ：page-size表示每页显示的记录数，即我们命名的pageSize
- ：total 表示总记录数 即我们这个表格中一共要显示多少条数据

注意：

- 表格中的数据来自`:data`这个绑定的**对象数组**中，即我们再Vue实例data中定义的`user: [{}]`，前提是你在每一个`<el-table-column>`中都定义了`prop`并标识了`user:[{}]`中定义的变量，不然element-ui不知道你想在表格的这一行显示什么，当然这已经比我们常用的表格渲染数据方便很多了。
- element-ui自带的分页插件需要提供数据才能正常显示分页信息，这些数据都应该是动态的，所以我们绑定在`pageConf`对象中；因为这些数据应该是后端读取出来的，即通过得到后端传来的分页数据，我们才知道这里的分页信息应该怎样定义。
- 在data中定义的`pageConf`是初始化参数，最后会被覆盖掉，但是要注意`pageOption`这个参数，一定要和初始的`pageSize`配合服用。
- 以上涉及两个函数`handleSizeChange`、`handleCurrentChange`，我们要在其触发时自动改变对应的`pageOption`参数。

问题？

1、`<el-table>`中需要渲染的数据仅需要传入`:data="user"`即可，但是这个数据`user`必须是一个**对象数组**，一定是**数组**

2、想要`<el-table>`正确渲染你`user`中定义的数据，你必须为每个`<el-table-column>`定义`prop`属性，绑定对应你想展示的数据，不然ElementUI不知道你想展示什么。

3、`pageOption`分页选项一定要注意，要配合`pageSize`的默认值，不要乱定义，比如：`pageSize: 2, pageOption: [10,20,30]`，这样你就会发现页码根本不能正确显示，因为你设置`pageSize:2`表示你想每页展示2条数据，但是你又定义`pageOption: [10,20,30]`第一个参数即是默认被选中的，即你又想每页显示10条数据，那么ElementUI就蒙蔽了，不知道你到底想每页显示几条数据。

3、根据上面的参数，以及`handleSizeChange`、`handleCurrentChange`这两个函数的参数你就应该想到分页的实现其实是`pageCode`(当前页)和`pageSize`(每页显示的记录数)和后端进行数据交换的。在前端你需要关心的怎样把`pageSize`和`pageCode`传给后端进行分页查询；在后端你需要关心的是怎样调用`pageHelper`插件将分页的记录数据（包括`totalPage`、`user`数据等）return 给前端。