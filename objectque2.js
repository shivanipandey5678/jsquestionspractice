//1
function operationOnNumbers(N){
    let no=(N*10)+2;
     no=no-11;
    console.log(no)
    
    
}

//2
function checkGreater(A, B, C, D) {
  if(A>B && C>D){
    console.log("true")
}else{
     console.log("false")
}
}
//3
function maximumOfThree(a, b, c) {
    if(a>b && a>c){
        console.log(a)
    }
    if(b>a && b>c){
        console.log(b)
    }
    if(c>b && c>a){
        console.log(c)
    }
  }
  //4
  function rightTriangle(a, b, c) {
    if((a**2)+(b**2)===(c**2)){
        console.log("Yes");
    }else{
        console.log("No");
    }
  }
  //5
  function worldTestChampion(IndPoints, AusPoints, IndMatches, AusMatches) {
    if(IndPoints> AusPoints){
        console.log("India");
    }else if(IndPoints< AusPoints){
        console.log("Australia");
        
    }else if(IndPoints === AusPoints){
        if(IndMatches> AusMatches){
            console.log("Australia")
        }else if(IndMatches< AusMatches){
            console.log("India")
        }else if(IndMatches === AusMatches){
            console.log("Play another game!")
        }
    }
  
  }
  //6
  function sumOfSquare(k) {
    for (let a = 0; a * a <= k; a++) {
         const bSquared = k - a * a;
         const b = Math.sqrt(bSquared);
         
         if (b === Math.floor(b)) {
             console.log("true");
             return 0;
         }
     }
     console.log("false");
 
     
 }
 //7
 function sumOfProducts(A, N) {
    let sum=0;
  for (let i=1;i<=N;i++){
      sum+=(A[i-1]*i);
      
      
      
  }
  console.log(sum)
  
}
//8
function halfPalindrome(N, s) {
    let part1="";
    let part2="";
 for(let i=0;i<N;i++){
     if (i<N/2){
         part1=part1.concat(s[i])
     }else{
         part2=part2.concat(s[i])
     }
 }let reversedString1 = part1.split('').reverse().join('')
 let reversedString2 = part2.split('').reverse().join('')
 if(part1===reversedString1 && part2===reversedString2){
     console.log("yes")
 }else{
     console.log("no")
 }
}
//9
function smartConsumer(N, X, Y, arr) {
    let totalsum=0;
    let newarr=[];
    let newsum=0;
    for(let i=0;i<arr.length;i++){
        totalsum+=Number(arr[i]);
        if(arr[i]>=Y){
           newarr=newarr.concat( Number(arr[i])-Y);
        }else{
            newarr=newarr.concat(0);
        }
        newsum=0;
        for(let j=0;j<newarr.length;j++){
            newsum+=Number(newarr[j]);
         //   console.log(newsum)
        }
    }
 //   console.log()
 //   console.log(newsum+X)
    if((newsum+X)>=totalsum){
        console.log("NO")
    }else{
        console.log("YES")
    }
 }
 //10
 function decompressString(string) {
    let res="";
    for(let i=0;i<string.length;i++){
        if(i%2!==0){
            for(let j=0;j<Number(string[i]);j++){
                res+=string[i-1]
            }
        }
    }
    console.log(res)
  }
  //11
  function playOf4and6(N) {
    if(N%4===0 && N%6===0 ) {
        console.log("Awesome!")
    }else if(N%4===0){
        console.log("Four!")
    }else if(N%6===0){
        console.log("Six!")
    }else{
        console.log("Dark!")
    }
     
     
     
     
     
     
     
     
     
 }

 //12
 function solve(N,arr){
    let E=0;
    let P=0;
    for(let i=0;i<N;i++){
        if(arr[i]%2===0){
            E+=arr[i];
        }else{
            P+=arr[i];
        }
    }
    console.log(2*E+3*P)
}
//13
function vowelsPriority(str){
    let  V="";
    let  C="";
    for(let  i=0;i<str.length;i++){
        if(str[i]==="a" || str[i]==="e"|| str[i]==="i" || str[i]==="o"|| str[i]=="u"){
            V+=str[i];
        }else{
            C+=str[i];
        }
    }
    console.log(V.concat(C))
}
//14
function strongPassword(N,str){
    let no=0;
    let arr=[];
   for(let i=0;i<str.length;i++){
       no=0;
       for(let j=0;j<str[i].length;j++){
           if(str[i][j]==="@" || str[i][j]==="*" || str[i][j]==="$" || str[i][j]==="#"  ){
               
              no+=1;
              break;
       }
      
       }
       if(no!=0){
           arr=arr.concat("strong")
       }else{
            arr=arr.concat("weak")
       }
   }
   console.log(arr.join(' '))

}
//15
function rightAngleTriangle(N) {
    let pattern="";
    for(let i=1;i<=N;i++){
        pattern="";
        for(let j=1;j<=i;j++){
            pattern+=i+" ";
           
            
        }
         console.log(pattern)
    }
     
}

//16
function patternPrinting(N) {
    let arr=[];
      for(let i=0;i<N;i++){
          arr=[];
          for(let j=0;j<N;j++){
              if(i===N-1||j===0||j===N-1||i===0 ||i===j ||i+j==N-1){
                  arr=arr.concat("*");
              }else{
                    arr=arr.concat(" "); 
              }
          }
          let no=arr.join(' ');
          console.log(no)
      }  
  }

  //17
  function solve(N, arr) {
    let E=0;
    let O =0;
    for(let i=0;i<N;i++){
        if (arr[i]%2===0){
            E+=Number(arr[i]);
        }else{
            O+=Number(arr[i]);
        }
    }
    console.log(((E-O)))
 }
 //18
 function solve(A,B,C) {
    let score=A+B+C;
    let missed=450-score;
    console.log(missed)
 }
  Overview
  Announcements
  Problems
  Submissions
  Rankings
 