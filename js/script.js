function getC(a) {
    x=document.getElementById('result').value;
    x=x.replace("NaN","");
    if(a=='.') {
      if(x=='')x='0';
      var dot=true;
      for (var i = 0; i < x.length; i++) {
        if(x[i]=='.'){dot=false; break;}
      }
      if(dot) document.getElementById('result').value=x+a;
     }
     else if(a=='0'||a=='00') {
       if(x=='0'||x.length==0) document.getElementById('result').value=0;
       else document.getElementById('result').value=(x+a);
     }
     else if(x==0||x=="undefined"||x=="NaN") {
       document.getElementById('result').value=a;
     }
    else document.getElementById('result').value=(x+a);
  }
  function clearC() {
    document.getElementById('result').value="";
  }
  function clC() {
    x=document.getElementById('result').value;
    if(x=="NaN"||x=="Infinity"||x=="undefined")x="";
    else x=x.slice(0, -1);;
    document.getElementById('result').value=x;
  }
  function amalC(a) {
    x=document.getElementById('result').value;
    if(a=='*'||a=='+'||a=='/'){
        if(Number(x[x.length-1])>=0&&Number(x[x.length-1])<=9)
          document.getElementById('result').value=x+a;
    }
    else if (a=='-') {
      if(Number(x[x.length-1])>=0&&Number(x[x.length-1])<=9||x[x.length-1]=='+'||x.length==0)
        document.getElementById('result').value=x+a;
    }
  }
  function calC(n) {
    resC();
    x=document.getElementById('result').value;
    switch (n) {
      case '%':
        document.getElementById('result').value=x/100;
        break;
      case '1/x':
        document.getElementById('result').value=1/x;
        break;
      case 'x2':
        document.getElementById('result').value=x*x;
        break;
      case '//':
        document.getElementById('result').value=Math.sqrt(x);
        break;
      case '+-':
        document.getElementById('result').value=-x;
        break;
    }
  }
  function resC() {
    x=document.getElementById('result').value;
    if(x.length==0) x=0;
    document.getElementById('result').value=eval(x);
  }
