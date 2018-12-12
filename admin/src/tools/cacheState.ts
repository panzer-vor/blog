import { IState } from '@interface/state';

export const saveState = (state: IState) => {
  localStorage.setItem('admin_state', JSON.stringify(state))
}

export const loadState = (): IState => {
  const adminState: any = localStorage.getItem('admin_state');
  return JSON.parse(adminState)
}