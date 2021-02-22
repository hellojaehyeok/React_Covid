# React_Covid
코로나 현황을 표현하고자 만든 프로젝트입니다.

<hr />

## 사용 언어
 - HTML, CSS, PostCSS, JavaScript, React


<hr />


### Access-Control-Allow-Origin
공공데이터 포털 회원가입 후 보건복지부 코로나19 감염 현황 데이터를 받아왔습니다.     
웹사이트상에서 url로 들어가 보면 파일이 제대로 뜨지만 fetch로 타고 들어가      
콘솔 창에 출력하면 아래와 같은 오류가 뜹니다.      
검색을 통해 알아본 결과 이는 서버 쪽에서 응답 헤더에     
Access-Control-Allow-Origin : * 혹은 Access-Control-Allow-Origin: 허용하고자 하는 도메인     
으로 설정하여야 합니다. 설정하지 못하는 상황이라면 리소스 요청하는 서버 사이에 프록시 서버를 하나 거쳐서     
요청, 응답을 주고받으면 됩니다. 하지만 이 방법은 중간단계가 있어 느려질 수 있고     
하고자 하는 프로젝트의 중점은 react이기 때문에 json 파일을 가져와 사용하려고 합니다.     

    from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

공공데이터 포털 링크: <https://www.data.go.kr/index.do>     