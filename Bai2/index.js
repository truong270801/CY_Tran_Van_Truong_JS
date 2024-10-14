function graduallyIncrease(array) {
    let size = array.length;
    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - i - 1; j++) { 
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  function graduallyDecrease(array) {
    let size = array.length;
    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - i - 1; j++) { 
        if (array[j] < array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  const arr = [10, 2, 3, 2, 5];
  graduallyIncrease(arr);
  console.log("Sắp xếp tăng dần" ,arr);
  graduallyDecrease(arr);
  console.log("Sắp xếp giảm dần" ,arr);

