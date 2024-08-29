const http = require("http");
// 파일은 외부에서 수정이 불가함 ex) routes.ddd 추가 불가능 !
const routes = require("./S3-routes");

//들어오는 요청을 대변하는 객체를 제공, 해당 요청으로 데이터를 읽고 요청을 보낸사람에게 응답을 보낼수 있는 응답 객체를 제공
const server = http.createServer(routes.handler);
//listen: nodejs가 스크립트를 바로 종료하지 않고 계속 실행하면서 듣도록 함
//실무에서는 포트를 입력하지않고 80
server.listen(3000);
