interface AppState {
  type: number,
  transfer: number[],
  company: string,
  limit: number,
  amount: number
}

interface ListItem {
  id: number,
  name: string
}

export {
  AppState,
  ListItem
}