<template>
  <div>
      <p>
          <button @click="getButtonClick">{{text+text2 || "确认"}}</button>
      </p>
  </div>
</template>

<script>
export default {
    name:"father",
    props:["text","text2"],//父组件传给子组件的值
    data(){
        return{
    msgf:"这是父组件的信息"
        }
    },
    methods:{
        getButtonClick() {
            this.$emit("message",this.msgf); //向父组件传值
        }
    }

}
</script>

<style>

</style>