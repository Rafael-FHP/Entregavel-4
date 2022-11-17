function QuickSort(Array){
  if(Array.length <= 1){
    return Array;
  }

  const pivot = Array[Array.length - 1];
  const Array_esquerdo = [];
  const Array_direito = [];

  for(let i=0; i < Array.length-1;i++){
    Array[i] < pivot ? Array_esquerdo.push(Array[i]) :  Array_direito.push(Array[i])
  }

  return [...QuickSort(Array_esquerdo) ,pivot,...QuickSort(Array_direito)];

}
module.exports = QuickSort;
