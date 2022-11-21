# 11월 21일 수업

## 1. JavaScript를 활용하여 화면 출력하기 

### html 코드 

<script defer src="rfile.js"></script>
  <input type='file' accept='image/*'
 onchange='openFile(event)'><br>
  <img id='imageUpload'>

    
### js 코드 

var openFile = function(file) {
  var input = file.target;
  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    var imageUpload = document.getElementById('imageUpload');
    imageUpload.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

c드라이브 폴더에 html 파일과 js 파일을 만들어서 브라우저에서 사진을 입력받는 실습을 하였습니다. 

## 2. Node.js를 활용하여 서버를 만들어 브라우저에서 얼굴인식 프로그램 실행하기. 

### 얼굴인식 프로그램
앞서 과제로 제출하였던 어벤저스 얼굴인식 프로그램을 활용하였습니다. 

### Node.js 
Node.js를 활용하여 Node.js cmd 창에서 얼굴인식 프로그램 html,js파일이 들어있는 폴더로 
디렉터리를 변경한 다음 http-server 명령어를 사용하여 서버를 구동하였습니다. 그리고 그 서버를 
활용하여 얼굴인식 프로그램을 브라우저에서 구동하였습니다. 
