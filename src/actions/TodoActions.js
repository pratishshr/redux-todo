/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/5/16.
 */

// Constants
import actionTypeConstants from '../constants/actionTypeConstants';

// Util
import {httpUtil} from '../utils';

// Libraries
import Toastr from 'toastr';

export function requestTodo() {
  return {
    type: actionTypeConstants.REQUEST_TODO
  }
}

export function responseTodo() {
  return {
    type: actionTypeConstants.RESPONSE_TODO
  }
}

export function listTodos(todos) {
  return {
    type: actionTypeConstants.LIST_TODOS,
    data: todos
  }
}

/**
 *  1. Dispatch a "Request" action to know the async call has started.
 *  2. Dipatch "List" action to list all the todos.
 *  3. Dispatch a "Response" action to know async call has ended.
 *
 * @returns {Function}
 */
export function fetchTodos() {
  return function (dispatch) {
    dispatch(requestTodo());
    return httpUtil.get('todos').then((response) => {
      dispatch(listTodos(response.data.data));
      dispatch(responseTodo());
    }).catch((err) => {
      Toastr.error(err.message)
      dispatch(responseTodo());
    });
  }
}