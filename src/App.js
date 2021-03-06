import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';
export default class App extends Component{
  render() {    
    return (
      <Provider store ={store}>
        <Main /> 
      </Provider>        
    );
  }
}

const defaultValues = { 
   arrWord: [
    { id: 1, en: 'actions', vn: 'hành động', memorized: true, isShow: false },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
    { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
    { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
    { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
    { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
    { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
    { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
    ],
    fillterStatus: 'SHOW_ALL',
    isAdding: false 
  }
const reducer = (state = defaultValues, action) => { 
  // if(action.type == 'ShowAll'){
  //   return { ...state, fillterStatus = 'SHOW_ALL' }     
  // } 
  //debugger; 
  if(action.type == "showAll"){       
    return { ...state, fillterStatus : 'SHOW_ALL' };
  }
  if(action.type == "showMemorized"){    
    //state = state.arrWord.filter(item => item.memorized)
    return { ...state, fillterStatus : 'SHOW_MEMIRIZED' };
  }
  if(action.type == "ShowNeedPractice"){       
    return { ...state, fillterStatus : 'SHOW_NEED_PRACTICE' };
  }
  if(action.type == "ToggoleMemorized"){       
    return { ...state, arrWord: state.arrWord.map((item ) => {
      if(action.id !== item.id) return item ;
      return {...item, memorized: !item.memorized }
    }) };
  }

  if(action.type == "ToggoleShow"){       
    return { ...state, arrWord: state.arrWord.map((item ) => {
      if(action.id !== item.id) return item ;
      return {...item, isShow: !item.isShow }
    }) };
  }

  if(action.type == "ToggoleIsAdding"){       
    return { ...state, isAdding : !state.isAdding };
  }
  if(action.type == "AddNewWord"){       
    return { ...state, arrWord: [{
      id: state.arrWord.length,
      en: action.en,
      vn: action.vn,
      memorized: false,
      isShow: false
    }].concat(state.arrWord)};
  }
  return state;
}
const store = createStore(reducer);
