type TaskStatus = 'Done' | 'Not Done Yet';

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

type Filter = number | string | TaskStatus;

interface ToDoList {
  getTasks(): Task[];
  addTask(title: string): void;
  filter(element: Filter): Task[];
  delete(id: number): void;
  change(id: number, status: TaskStatus): void;
  searchTasks(query: string): Task[];
}

class ToDoListImpl implements ToDoList {
  private tasks: Task[] = [];
  private nextId: number = 1;
 
  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const newTask: Task = {
      id: this.nextId,
      title,
      status: 'Not Done Yet'
    };
    this.nextId++;
    this.tasks.push(newTask);
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  change(id: number, status: TaskStatus): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.status = status;
    }
  }

  filter(element: Filter): Task[] {
    if (typeof element === 'number') {
      return this.tasks.filter(task => task.id === element);
    } else if (typeof element === 'string') {
      return this.tasks.filter(task => task.title.includes(element) || task.status === element);
    }
    return [];
  }

  searchTasks(query: string): Task[] {
    return this.tasks.filter(task => task.title.includes(query));
  }
}

const myToDoList = new ToDoListImpl();

myToDoList.addTask('Learn TypeScript');
myToDoList.addTask('Study Math');
myToDoList.addTask('Go for a walk');



console.log(myToDoList.change(1, "Done"))
console.log(myToDoList.getTasks())
console.log(myToDoList.delete(1))
console.log(myToDoList.getTasks())
console.log(myToDoList.filter("Study"))
