const BASE_URL = 'https://jsonplaceholder.typicode.com/todos?userId=5';

const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    let dataArray = []
    const todoItems = response.data;

    todoItems.forEach(e => {
      if(e.completed === false){
        dataArray.push(e)
      }
    });
    console.log(dataArray)

    return dataArray
    
  } catch (error) {
    console.error(error);
  }
};

