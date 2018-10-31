export default{
  install (Vue, options) {
    Vue.prototype.test = function () {
        console.log("自定义全局函数")
    };
    Vue.prototype.getuserinfo = function () {
    	let userinfo=window.localStorage.getItem('userinfo');
        return JSON.parse(userinfo);
    }
  }
}