export const crabby = () => {
    console.log('I am grumpy so leave me alone!');
}


// a recursive function
export const fibbonacci = ( count ) => {
    if ( count <= 1 ) return 1;

    return fibbonacci(count - 1) + fibbonacci(count - 2);
}

// a while loop 

export const fibonacciWhile = ( count ) => {
    let a = 1; 
    let b = 0;
    let temp;
  
    while ( count >= 0){
      temp = a;
      a = a + b;
      b = temp;
      count--;
    }
  
    return b;
  }





// Time's function
  export const fibonacciSeries = ( count ) => {
    let i = 0;
    const series = [];
    for (; i !== count; i++ ){
    //caching the iterator by removing redundancy of visiting "0"
    series[i] = fibonacci(i)
    }
    return series
    }



    export const fibonacciSeriesWhile = ( count ) => {
        let i = 0;
        const series = [];
        for (; i !== count; i++ ){
        //caching the iterator by removing redundancy of visiting "0"
        series[i] = fibonacciWhile(i)
        }
        return series
        }