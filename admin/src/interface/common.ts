export interface IRouter {
  history: any
  location: any
  match: any
  staticContext: any
}

export interface IForm extends IRouter {
  form: any
}