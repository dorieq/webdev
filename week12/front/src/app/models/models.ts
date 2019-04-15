export interface ITaskList{
    id: number
    name: String
}

export interface ITask{
    id: number
    name: String
    created_at: Date
    due_on: Date
}