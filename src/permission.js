import router from './router/index'// 路由
import store from './store/index'
router.beforeEach((to,from,next)=>{
	/*let timer=setInterval(()=>{
		let Progress=store.getters.GetPercent;
		if (Progress>=80) {
			clearInterval(timer);
		}else{
			store.dispatch('Setprogress',Progress+1);
		}
	});
	let userinfo=window.localStorage.getItem('userinfo');
	if (to.path=="/membercenter") {
		if (userinfo) {
  			next();
  		}else{
			next(false)
  		}
	}*/
	next();
});

router.afterEach((to,from)=>{
	/*store.dispatch('Setprogress', 100)
	  setTimeout(() => {
	    store.dispatch('Setprogress', 0)
	  }, 200)*/
})

