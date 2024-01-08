import { createStore } from 'vuex'


const store = createStore({
    state () {
      return {
        subjects: []
      }
    },
    getters:{
        allSubjects(state){
            return state.subjects;
        }
    },
    mutations: {
      increment (state,subjects) {
        state.subjects = subjects
      }
    },
    actions: {
        increment(context,subjects) {
          context.commit('increment',subjects);
        }
      }
  })


export default store