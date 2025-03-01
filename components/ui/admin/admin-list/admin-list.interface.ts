export interface IListItem {
   id: number
   items: string[] 
   editUrl?: string
   viewUrl?: string
}

export interface IAdminListItem {
    listItem: IListItem
    removeHandler?: () => void
}