import Vue from 'vue'
import Vuex from 'vuex'
import systemConfig from './system'

Vue.use(Vuex);
const store = new Vuex.Store({
	modules:{
		systemConfig
	}
});

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./system'], () => {
    // 获取更新后的模块
    // 加载新模块
    store.hotUpdate({
      modules: {
        systemConfig
      }
    })
  })
}
export default store