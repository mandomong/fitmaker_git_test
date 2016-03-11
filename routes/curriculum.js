
//curriculum
var express = require('express');
var router = express.Router();


// --- 13. 커리큘럼 가져오기 --- //

router.get('/', function (req, res, next) {

  //큐레이션 유무 확인
  var q1 = req.query.q1;
  var exctype = req.query.exctype;
  if (!q1) {
    // 큐레이션값이 없을 때
    // exctype 유무 확인 : 있으면 해당 exctype과 추천 커리큘럼 출력
    //                    없으면 (9) 전체 커리큘럼 출력
    //var user_id = req.user.id;

            if(!exctype) {
              //exctype 이 존재하지 않을때
              console.log('//exctype 이 존재하지 않을때');

                  res.json({
                    "result": {
                      "message": "전체 커리큘럼 요청에 성공하였습니다",
                      "curriculum": [
                        {
                          "curri_id": 1,
                          "curri_name": "기초체력기르기",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "초급",
                          "curri_info": "기초체력을 길러주는 전신운동 루틴입니다. / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 2,
                          "curri_name": "기초체력기르기",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "중급",
                          "curri_info": "기초체력을 길러주는 전신운동 루틴입니다. / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 3,
                          "curri_name": "타바타 운동법",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "중급",
                          "curri_info": " 10분 내 운동으로 최고의 효율을 내는 인터벌트레이닝 / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 4,
                          "curri_name": "타바타 운동법",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "상급",
                          "curri_info": " 10분 내 운동으로 최고의 효율을 내는 인터벌트레이닝 / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 5,
                          "curri_name": "다이어트 커리큘럼-한달2KG",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                          "curri_type": "초급",
                          "curri_info": "전신의 체지방을 날려버리는 운동루틴 / 유산소 운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 6,
                          "curri_name": "다이어트 커리큘럼-한달3KG",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                          "curri_type": "중급",
                          "curri_info": "전신의 체지방을 날려버리는 운동루틴 / 유산소 운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 7,
                          "curri_name": "다이어트 커리큘럼-한달6KG",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                          "curri_type": "상급",
                          "curri_info": "전신의 체지방을 날려버리는 운동루틴 / 유산소 운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 8,
                          "curri_name": "하루 20분 다이어트 운동 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                          "curri_type": "중급",
                          "curri_info": "바쁜 당신을 위해, 하루 20분 운동으로 체지방 불태우기! / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 9,
                          "curri_name": "하루 20분 다이어트 운동 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                          "curri_type": "상급",
                          "curri_info": "바쁜 당신을 위해, 하루 20분 운동으로 체지방 불태우기! / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 10,
                          "curri_name": "전신근력운동커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                          "curri_type": "초급",
                          "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 11,
                          "curri_name": "전신근력운동커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                          "curri_type": "중급",
                          "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 12,
                          "curri_name": "전신근력운동커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                          "curri_type": "상급",
                          "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동"
                        },
                        {
                          "curri_id": 13,
                          "curri_name": "비키니프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                          "curri_type": "초급",
                          "curri_info": "여름바다! 비키니! 지금부터 준비하자! 비키니에 최적화된 몸매를 만들어주는 운동루틴 . / 유산소운동+전신운동 /"
                        },
                        {
                          "curri_id": 14,
                          "curri_name": "비키니프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                          "curri_type": "중급",
                          "curri_info": "여름바다! 비키니! 지금부터 준비하자! 비키니에 최적화된 몸매를 만들어주는 운동루틴 . / 유산소운동+전신운동 /"
                        },
                        {
                          "curri_id": 15,
                          "curri_name": "비키니프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                          "curri_type": "상급",
                          "curri_info": "여름바다! 비키니! 지금부터 준비하자! 비키니에 최적화된 몸매를 만들어주는 운동루틴 . / 유산소운동+전신운동 /"
                        },
                        {
                          "curri_id": 16,
                          "curri_name": "여름대비몸매라인만들기프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
                          "curri_type": "초급",
                          "curri_info": "체중감량과 몸매라인을 동시에 만들어주는 여름대비 운동루틴 / 유산소운동 + 전신운동"
                        },
                        {
                          "curri_id": 17,
                          "curri_name": "여름대비몸매라인만들기프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
                          "curri_type": "중급",
                          "curri_info": "체중감량과 몸매라인을 동시에 만들어주는 여름대비 운동루틴 / 유산소운동 + 전신운동"
                        },
                        {
                          "curri_id": 18,
                          "curri_name": "여름대비몸매라인만들기프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
                          "curri_type": "상급",
                          "curri_info": "체중감량과 몸매라인을 동시에 만들어주는 여름대비 운동루틴 / 유산소운동 + 전신운동"
                        },
                        {
                          "curri_id": 19,
                          "curri_name": "마일리사일러스 복근운동 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
                          "curri_type": "초급",
                          "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /"
                        },
                        {
                          "curri_id": 20,
                          "curri_name": "마일리사일러스 복근운동 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
                          "curri_type": "중급",
                          "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /"
                        },
                        {
                          "curri_id": 21,
                          "curri_name": "마일리사일러스 복근운동 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
                          "curri_type": "상급",
                          "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /"
                        },
                        {
                          "curri_id": 22,
                          "curri_name": "11자복근프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "초급",
                          "curri_info": "아름다운 허리라인과 복근을 만들어주는 운동루틴 / 유산소운동+복부운동"
                        },
                        {
                          "curri_id": 23,
                          "curri_name": "11자복근프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "중급",
                          "curri_info": "아름다운 허리라인과 복근을 만들어주는 운동루틴 / 유산소운동+복부운동"
                        },
                        {
                          "curri_id": 24,
                          "curri_name": "11자복근프로젝트커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "상급",
                          "curri_info": "아름다운 허리라인과 복근을 만들어주는 운동루틴 / 유산소운동+복부운동"
                        },
                        {
                          "curri_id": 25,
                          "curri_name": "매끄러운어깨라인 만들기커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "초급",
                          "curri_info": "갸냘프고 섹시한 어깨라인만들기 운동루틴 / 어깨+가슴+팔"
                        },
                        {
                          "curri_id": 26,
                          "curri_name": "매끄러운어깨라인 만들기커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "중급",
                          "curri_info": "갸냘프고 섹시한 어깨라인만들기 운동루틴 / 어깨+가슴+팔"
                        },
                        {
                          "curri_id": 27,
                          "curri_name": "매끄러운어깨라인 만들기커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "상급",
                          "curri_info": "갸냘프고 섹시한 어깨라인만들기 운동루틴 / 어깨+가슴+팔"
                        },
                        {
                          "curri_id": 28,
                          "curri_name": "아름다운가슴라인만들기커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "초급",
                          "curri_info": "가슴라인을 이쁘고 탄력있게, 사랑스러운 가슴을 만들어주는 운동루틴 / 가슴+팔"
                        },
                        {
                          "curri_id": 29,
                          "curri_name": "아름다운가슴라인만들기커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "중급",
                          "curri_info": "가슴라인을 이쁘고 탄력있게, 사랑스러운 가슴을 만들어주는 운동루틴 / 가슴+팔"
                        },
                        {
                          "curri_id": 30,
                          "curri_name": "아름다운가슴라인만들기커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "상급",
                          "curri_info": "가슴라인을 이쁘고 탄력있게, 사랑스러운 가슴을 만들어주는 운동루틴 / 가슴+팔"
                        },
                        {
                          "curri_id": 31,
                          "curri_name": "어깨라인만들기-어좁이탈출커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "초급",
                          "curri_info": "머리가 큰게아니다.. 다만 어깨가 좁을뿐이다.....어좁이를 탈출해보자! / 어깨 + 팔"
                        },
                        {
                          "curri_id": 32,
                          "curri_name": "어깨라인만들기-어좁이탈출커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "중급",
                          "curri_info": "머리가 큰게아니다.. 다만 어깨가 좁을뿐이다.....어좁이를 탈출해보자! / 어깨 + 팔"
                        },
                        {
                          "curri_id": 33,
                          "curri_name": "어깨라인만들기-어좁이탈출커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                          "curri_type": "상급",
                          "curri_info": "머리가 큰게아니다.. 다만 어깨가 좁을뿐이다.....어좁이를 탈출해보자! / 어깨 + 팔"
                        },
                        {
                          "curri_id": 34,
                          "curri_name": "애플힙 만들기 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun.jpg",
                          "curri_type": "초급",
                          "curri_info": "허리와 엉덩이 라인을 아름답게 만들어주는 운동루틴 / 허리 + 엉덩이"
                        },
                        {
                          "curri_id": 35,
                          "curri_name": "애플힙 만들기 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun.jpg",
                          "curri_type": "중급",
                          "curri_info": "허리와 엉덩이 라인을 아름답게 만들어주는 운동루틴 / 허리 + 엉덩이"
                        },
                        {
                          "curri_id": 36,
                          "curri_name": "애플힙 만들기 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun.jpg",
                          "curri_type": "상급",
                          "curri_info": "허리와 엉덩이 라인을 아름답게 만들어주는 운동루틴 / 허리 + 엉덩이"
                        },
                        {
                          "curri_id": 37,
                          "curri_name": "식스팩 프로젝트 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun.jpg",
                          "curri_type": "초급",
                          "curri_info": "식스팩 탕탕탕!탕탕탕! 운동루틴 / 유산소운동+복부운동"
                        },
                        {
                          "curri_id": 38,
                          "curri_name": "식스팩 프로젝트 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun2.jpg",
                          "curri_type": "중급",
                          "curri_info": "식스팩 탕탕탕!탕탕탕! 운동루틴 / 유산소운동+복부운동"
                        },
                        {
                          "curri_id": 39,
                          "curri_name": "식스팩 프로젝트 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun2.jpg",
                          "curri_type": "상급",
                          "curri_info": "식스팩 탕탕탕!탕탕탕! 운동루틴 / 유산소운동+복부운동"
                        },
                        {
                          "curri_id": 40,
                          "curri_name": "태평양같은 등만들기 운동루틴 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun2.jpg",
                          "curri_type": "초급",
                          "curri_info": "남자는 등이다 등등등! / 어깨+등"
                        },
                        {
                          "curri_id": 41,
                          "curri_name": "태평양같은 등만들기 운동루틴 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "중급",
                          "curri_info": "남자는 등이다 등등등! / 어깨+등"
                        },
                        {
                          "curri_id": 42,
                          "curri_name": "태평양같은 등만들기 운동루틴 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "상급",
                          "curri_info": "남자는 등이다 등등등! / 어깨+등"
                        },
                        {
                          "curri_id": 44,
                          "curri_name": "마일리사일러스 탄력있는 팔 만들기 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "중급",
                          "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /"
                        },
                        {
                          "curri_id": 45,
                          "curri_name": "마일리 사일러스 다리운동 커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "중급",
                          "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /"
                        }
                      ]
                    }
                  });

            } else {
              //exctype 이 존재
              //해당 exctype과 추천 커리큘럼 출력

              console.log('//해당 exctype과 추천 커리큘럼 출력');
                  res.json({
                    "result": {
                      "message": "운동타입 및 추천커리큘럼 요청에 성공하였습니다",
                      "exctype": {
                        "exctype_id": 5,
                        "exctype_name": "운동선수",
                        "exctype_info": "운동선수타입 입니다.",
                        "exctype_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/exctype_girlfriend.jpg"
                      },
                      "curriculum": [
                        {
                          "curri_id": 1,
                          "curri_name": "기초체력기르기",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
                          "curri_type": "초급",
                          "curri_info": "기초체력을 길러주는 전신운동 루틴입니다. / 유산소운동 + 전신근력운동",
                          "contents": [
                            {
                              "contents_id": 9,
                              "contents_name": "니 푸쉬업",
                              "contents_target": "어깨+가슴",
                              "contents_url": "https://youtu.be/SKCcvxBSQiA?list=PLWK0zibPydjUGl8xGBixK5oyZNH9ocKKF"
                            },
                            {
                              "contents_id": 43,
                              "contents_name": "버피",
                              "contents_target": "유산소+전신",
                              "contents_url": "https://youtu.be/zHMPpb8_H-E"
                            },
                            {
                              "contents_id": 60,
                              "contents_name": "스쿼트",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/63bRzSBNhaI"
                            },
                            {
                              "contents_id": 95,
                              "contents_name": "플랭크",
                              "contents_target": "어깨+복부+허벅지",
                              "contents_url": "https://youtu.be/X0OZKVzVVMw"
                            }
                          ]
                        },
                        {
                          "curri_id": 2,
                          "curri_name": "기초체력기르기",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
                          "curri_type": "중급",
                          "curri_info": "기초체력을 길러주는 전신운동 루틴입니다. / 유산소운동 + 전신근력운동",
                          "contents": [
                            {
                              "contents_id": 27,
                              "contents_name": "런지 (우)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 28,
                              "contents_name": "런지 (좌)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 30,
                              "contents_name": "레그레이즈",
                              "contents_target": "복부",
                              "contents_url": "https://youtu.be/yxV2YHPCmVI"
                            },
                            {
                              "contents_id": 33,
                              "contents_name": "로우 - 덤벨",
                              "contents_target": "등",
                              "contents_url": "https://youtu.be/CiCSy2LKLjc"
                            },
                            {
                              "contents_id": 38,
                              "contents_name": "맨손 데드리프트",
                              "contents_target": "허리+엉덩이+허벅지",
                              "contents_url": "https://youtu.be/SWcFijyoKBc"
                            },
                            {
                              "contents_id": 43,
                              "contents_name": "버피",
                              "contents_target": "유산소+전신",
                              "contents_url": "https://youtu.be/zHMPpb8_H-E"
                            },
                            {
                              "contents_id": 57,
                              "contents_name": "숄더프레스 - 덤벨",
                              "contents_target": "어깨+팔",
                              "contents_url": "https://youtu.be/MdUol6_SZZw"
                            },
                            {
                              "contents_id": 60,
                              "contents_name": "스쿼트",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/63bRzSBNhaI"
                            },
                            {
                              "contents_id": 91,
                              "contents_name": "푸쉬업",
                              "contents_target": "어깨+가슴+팔+복근",
                              "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                            }
                          ]
                        },
                        {
                          "curri_id": 3,
                          "curri_name": "타바타 운동법",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                          "curri_type": "중급",
                          "curri_info": " 10분 내 운동으로 최고의 효율을 내는 인터벌트레이닝 / 유산소운동 + 전신근력운동",
                          "contents": [
                            {
                              "contents_id": 27,
                              "contents_name": "런지 (우)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 28,
                              "contents_name": "런지 (좌)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 30,
                              "contents_name": "레그레이즈",
                              "contents_target": "복부",
                              "contents_url": "https://youtu.be/yxV2YHPCmVI"
                            },
                            {
                              "contents_id": 33,
                              "contents_name": "로우 - 덤벨",
                              "contents_target": "등",
                              "contents_url": "https://youtu.be/CiCSy2LKLjc"
                            },
                            {
                              "contents_id": 38,
                              "contents_name": "맨손 데드리프트",
                              "contents_target": "허리+엉덩이+허벅지",
                              "contents_url": "https://youtu.be/SWcFijyoKBc"
                            },
                            {
                              "contents_id": 43,
                              "contents_name": "버피",
                              "contents_target": "유산소+전신",
                              "contents_url": "https://youtu.be/zHMPpb8_H-E"
                            },
                            {
                              "contents_id": 57,
                              "contents_name": "숄더프레스 - 덤벨",
                              "contents_target": "어깨+팔",
                              "contents_url": "https://youtu.be/MdUol6_SZZw"
                            },
                            {
                              "contents_id": 60,
                              "contents_name": "스쿼트",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/63bRzSBNhaI"
                            },
                            {
                              "contents_id": 91,
                              "contents_name": "푸쉬업",
                              "contents_target": "어깨+가슴+팔+복근",
                              "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                            }
                          ]
                        },
                        {
                          "curri_id": 4,
                          "curri_name": "타바타 운동법",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                          "curri_type": "상급",
                          "curri_info": " 10분 내 운동으로 최고의 효율을 내는 인터벌트레이닝 / 유산소운동 + 전신근력운동",
                          "contents": [
                            {
                              "contents_id": 30,
                              "contents_name": "레그레이즈",
                              "contents_target": "복부",
                              "contents_url": "https://youtu.be/yxV2YHPCmVI"
                            },
                            {
                              "contents_id": 37,
                              "contents_name": "마운틴클라이밍",
                              "contents_target": "유산소+전신",
                              "contents_url": "https://youtu.be/9av88dYFZMI"
                            },
                            {
                              "contents_id": 43,
                              "contents_name": "버피",
                              "contents_target": "유산소+전신",
                              "contents_url": "https://youtu.be/zHMPpb8_H-E"
                            },
                            {
                              "contents_id": 60,
                              "contents_name": "스쿼트",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/63bRzSBNhaI"
                            }
                          ]
                        },
                        {
                          "curri_id": 10,
                          "curri_name": "전신근력운동커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                          "curri_type": "초급",
                          "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동",
                          "contents": [
                            {
                              "contents_id": 27,
                              "contents_name": "런지 (우)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 28,
                              "contents_name": "런지 (좌)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 30,
                              "contents_name": "레그레이즈",
                              "contents_target": "복부",
                              "contents_url": "https://youtu.be/yxV2YHPCmVI"
                            },
                            {
                              "contents_id": 33,
                              "contents_name": "로우 - 덤벨",
                              "contents_target": "등",
                              "contents_url": "https://youtu.be/CiCSy2LKLjc"
                            },
                            {
                              "contents_id": 38,
                              "contents_name": "맨손 데드리프트",
                              "contents_target": "허리+엉덩이+허벅지",
                              "contents_url": "https://youtu.be/SWcFijyoKBc"
                            },
                            {
                              "contents_id": 43,
                              "contents_name": "버피",
                              "contents_target": "유산소+전신",
                              "contents_url": "https://youtu.be/zHMPpb8_H-E"
                            },
                            {
                              "contents_id": 57,
                              "contents_name": "숄더프레스 - 덤벨",
                              "contents_target": "어깨+팔",
                              "contents_url": "https://youtu.be/MdUol6_SZZw"
                            },
                            {
                              "contents_id": 60,
                              "contents_name": "스쿼트",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/63bRzSBNhaI"
                            },
                            {
                              "contents_id": 91,
                              "contents_name": "푸쉬업",
                              "contents_target": "어깨+가슴+팔+복근",
                              "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                            }
                          ]
                        },
                        {
                          "curri_id": 11,
                          "curri_name": "전신근력운동커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "중급",
                          "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동",
                          "contents": [
                            {
                              "contents_id": 27,
                              "contents_name": "런지 (우)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 28,
                              "contents_name": "런지 (좌)",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/9lVB9e1GTTQ"
                            },
                            {
                              "contents_id": 30,
                              "contents_name": "레그레이즈",
                              "contents_target": "복부",
                              "contents_url": "https://youtu.be/yxV2YHPCmVI"
                            },
                            {
                              "contents_id": 33,
                              "contents_name": "로우 - 덤벨",
                              "contents_target": "등",
                              "contents_url": "https://youtu.be/CiCSy2LKLjc"
                            },
                            {
                              "contents_id": 38,
                              "contents_name": "맨손 데드리프트",
                              "contents_target": "허리+엉덩이+허벅지",
                              "contents_url": "https://youtu.be/SWcFijyoKBc"
                            },
                            {
                              "contents_id": 43,
                              "contents_name": "버피",
                              "contents_target": "유산소+전신",
                              "contents_url": "https://youtu.be/zHMPpb8_H-E"
                            },
                            {
                              "contents_id": 57,
                              "contents_name": "숄더프레스 - 덤벨",
                              "contents_target": "어깨+팔",
                              "contents_url": "https://youtu.be/MdUol6_SZZw"
                            },
                            {
                              "contents_id": 60,
                              "contents_name": "스쿼트",
                              "contents_target": "엉덩이+허벅지",
                              "contents_url": "https://youtu.be/63bRzSBNhaI"
                            },
                            {
                              "contents_id": 91,
                              "contents_name": "푸쉬업",
                              "contents_target": "어깨+가슴+팔+복근",
                              "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                            }
                          ]
                        },
                        {
                          "curri_id": 12,
                          "curri_name": "전신근력운동커리큘럼",
                          "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                          "curri_type": "상급",
                          "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동",
                          "contents": [
                            {
                              "contents_id": 18,
                              "contents_name": "덤벨 벤트 오버 로우",
                              "contents_target": "유산소운동",
                              "contents_url": "https://youtu.be/ZpmwIIzvpfI"
                            },
                            {
                              "contents_id": 45,
                              "contents_name": "버피테스트",
                              "contents_target": "유산소+전신근력운동",
                              "contents_url": "https://youtu.be/zHMPpb8_H-E"
                            },
                            {
                              "contents_id": 53,
                              "contents_name": "사이드플랭크 레그리프트",
                              "contents_target": "전신",
                              "contents_url": "https://youtu.be/6LumYq9U_nw"
                            },
                            {
                              "contents_id": 69,
                              "contents_name": "아놀드프레스",
                              "contents_target": "어깨",
                              "contents_url": "https://youtu.be/chxkoXJ4DpI"
                            },
                            {
                              "contents_id": 77,
                              "contents_name": "원레그프쉬업",
                              "contents_target": "복부+엉덩이+허벅지+종아리",
                              "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP45pD"
                            },
                            {
                              "contents_id": 82,
                              "contents_name": "점프스쿼트",
                              "contents_target": "유산소+엉덩이+허벅지",
                              "contents_url": "https://youtu.be/QtPKuWNE56w"
                            },
                            {
                              "contents_id": 83,
                              "contents_name": "점핑런지",
                              "contents_target": "유산소+엉덩이+허벅지",
                              "contents_url": "https://youtu.be/jcXDsFjHWTQ"
                            },
                            {
                              "contents_id": 84,
                              "contents_name": "점핑스위치레그",
                              "contents_target": "유산소+어깨+복근+엉덩이+허벅지",
                              "contents_url": "https://youtu.be/tYSY14SYwMU"
                            }
                          ]
                        }
                      ]
                    }
                  });


            }

  } else {
    // 큐레이션 값이 존재 : 큐레이션 결과와 추천 커리큘럼 출력
    // 자신의 운동 타입이 변경 됨
    console.log('// 큐레이션 값이 존재 : 큐레이션 결과와 추천 커리큘럼 출력');
    res.json({
      "result": {
        "message": "운동타입 및 추천커리큘럼 요청에 성공하였습니다",
        "exctype": {
          "exctype_id": 5,
          "exctype_name": "운동선수",
          "exctype_info": "운동선수타입 입니다.",
          "exctype_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/exctype_girlfriend.jpg"
        },
        "curriculum": [
          {
            "curri_id": 1,
            "curri_name": "기초체력기르기",
            "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
            "curri_type": "초급",
            "curri_info": "기초체력을 길러주는 전신운동 루틴입니다. / 유산소운동 + 전신근력운동",
            "contents": [
              {
                "contents_id": 9,
                "contents_name": "니 푸쉬업",
                "contents_target": "어깨+가슴",
                "contents_url": "https://youtu.be/SKCcvxBSQiA?list=PLWK0zibPydjUGl8xGBixK5oyZNH9ocKKF"
              },
              {
                "contents_id": 43,
                "contents_name": "버피",
                "contents_target": "유산소+전신",
                "contents_url": "https://youtu.be/zHMPpb8_H-E"
              },
              {
                "contents_id": 60,
                "contents_name": "스쿼트",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/63bRzSBNhaI"
              },
              {
                "contents_id": 95,
                "contents_name": "플랭크",
                "contents_target": "어깨+복부+허벅지",
                "contents_url": "https://youtu.be/X0OZKVzVVMw"
              }
            ]
          },
          {
            "curri_id": 2,
            "curri_name": "기초체력기르기",
            "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
            "curri_type": "중급",
            "curri_info": "기초체력을 길러주는 전신운동 루틴입니다. / 유산소운동 + 전신근력운동",
            "contents": [
              {
                "contents_id": 27,
                "contents_name": "런지 (우)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 28,
                "contents_name": "런지 (좌)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 30,
                "contents_name": "레그레이즈",
                "contents_target": "복부",
                "contents_url": "https://youtu.be/yxV2YHPCmVI"
              },
              {
                "contents_id": 33,
                "contents_name": "로우 - 덤벨",
                "contents_target": "등",
                "contents_url": "https://youtu.be/CiCSy2LKLjc"
              },
              {
                "contents_id": 38,
                "contents_name": "맨손 데드리프트",
                "contents_target": "허리+엉덩이+허벅지",
                "contents_url": "https://youtu.be/SWcFijyoKBc"
              },
              {
                "contents_id": 43,
                "contents_name": "버피",
                "contents_target": "유산소+전신",
                "contents_url": "https://youtu.be/zHMPpb8_H-E"
              },
              {
                "contents_id": 57,
                "contents_name": "숄더프레스 - 덤벨",
                "contents_target": "어깨+팔",
                "contents_url": "https://youtu.be/MdUol6_SZZw"
              },
              {
                "contents_id": 60,
                "contents_name": "스쿼트",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/63bRzSBNhaI"
              },
              {
                "contents_id": 91,
                "contents_name": "푸쉬업",
                "contents_target": "어깨+가슴+팔+복근",
                "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
              }
            ]
          },
          {
            "curri_id": 3,
            "curri_name": "타바타 운동법",
            "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
            "curri_type": "중급",
            "curri_info": " 10분 내 운동으로 최고의 효율을 내는 인터벌트레이닝 / 유산소운동 + 전신근력운동",
            "contents": [
              {
                "contents_id": 27,
                "contents_name": "런지 (우)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 28,
                "contents_name": "런지 (좌)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 30,
                "contents_name": "레그레이즈",
                "contents_target": "복부",
                "contents_url": "https://youtu.be/yxV2YHPCmVI"
              },
              {
                "contents_id": 33,
                "contents_name": "로우 - 덤벨",
                "contents_target": "등",
                "contents_url": "https://youtu.be/CiCSy2LKLjc"
              },
              {
                "contents_id": 38,
                "contents_name": "맨손 데드리프트",
                "contents_target": "허리+엉덩이+허벅지",
                "contents_url": "https://youtu.be/SWcFijyoKBc"
              },
              {
                "contents_id": 43,
                "contents_name": "버피",
                "contents_target": "유산소+전신",
                "contents_url": "https://youtu.be/zHMPpb8_H-E"
              },
              {
                "contents_id": 57,
                "contents_name": "숄더프레스 - 덤벨",
                "contents_target": "어깨+팔",
                "contents_url": "https://youtu.be/MdUol6_SZZw"
              },
              {
                "contents_id": 60,
                "contents_name": "스쿼트",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/63bRzSBNhaI"
              },
              {
                "contents_id": 91,
                "contents_name": "푸쉬업",
                "contents_target": "어깨+가슴+팔+복근",
                "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
              }
            ]
          },
          {
            "curri_id": 4,
            "curri_name": "타바타 운동법",
            "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
            "curri_type": "상급",
            "curri_info": " 10분 내 운동으로 최고의 효율을 내는 인터벌트레이닝 / 유산소운동 + 전신근력운동",
            "contents": [
              {
                "contents_id": 30,
                "contents_name": "레그레이즈",
                "contents_target": "복부",
                "contents_url": "https://youtu.be/yxV2YHPCmVI"
              },
              {
                "contents_id": 37,
                "contents_name": "마운틴클라이밍",
                "contents_target": "유산소+전신",
                "contents_url": "https://youtu.be/9av88dYFZMI"
              },
              {
                "contents_id": 43,
                "contents_name": "버피",
                "contents_target": "유산소+전신",
                "contents_url": "https://youtu.be/zHMPpb8_H-E"
              },
              {
                "contents_id": 60,
                "contents_name": "스쿼트",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/63bRzSBNhaI"
              }
            ]
          },
          {
            "curri_id": 10,
            "curri_name": "전신근력운동커리큘럼",
            "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
            "curri_type": "초급",
            "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동",
            "contents": [
              {
                "contents_id": 27,
                "contents_name": "런지 (우)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 28,
                "contents_name": "런지 (좌)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 30,
                "contents_name": "레그레이즈",
                "contents_target": "복부",
                "contents_url": "https://youtu.be/yxV2YHPCmVI"
              },
              {
                "contents_id": 33,
                "contents_name": "로우 - 덤벨",
                "contents_target": "등",
                "contents_url": "https://youtu.be/CiCSy2LKLjc"
              },
              {
                "contents_id": 38,
                "contents_name": "맨손 데드리프트",
                "contents_target": "허리+엉덩이+허벅지",
                "contents_url": "https://youtu.be/SWcFijyoKBc"
              },
              {
                "contents_id": 43,
                "contents_name": "버피",
                "contents_target": "유산소+전신",
                "contents_url": "https://youtu.be/zHMPpb8_H-E"
              },
              {
                "contents_id": 57,
                "contents_name": "숄더프레스 - 덤벨",
                "contents_target": "어깨+팔",
                "contents_url": "https://youtu.be/MdUol6_SZZw"
              },
              {
                "contents_id": 60,
                "contents_name": "스쿼트",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/63bRzSBNhaI"
              },
              {
                "contents_id": 91,
                "contents_name": "푸쉬업",
                "contents_target": "어깨+가슴+팔+복근",
                "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
              }
            ]
          },
          {
            "curri_id": 11,
            "curri_name": "전신근력운동커리큘럼",
            "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
            "curri_type": "중급",
            "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동",
            "contents": [
              {
                "contents_id": 27,
                "contents_name": "런지 (우)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 28,
                "contents_name": "런지 (좌)",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/9lVB9e1GTTQ"
              },
              {
                "contents_id": 30,
                "contents_name": "레그레이즈",
                "contents_target": "복부",
                "contents_url": "https://youtu.be/yxV2YHPCmVI"
              },
              {
                "contents_id": 33,
                "contents_name": "로우 - 덤벨",
                "contents_target": "등",
                "contents_url": "https://youtu.be/CiCSy2LKLjc"
              },
              {
                "contents_id": 38,
                "contents_name": "맨손 데드리프트",
                "contents_target": "허리+엉덩이+허벅지",
                "contents_url": "https://youtu.be/SWcFijyoKBc"
              },
              {
                "contents_id": 43,
                "contents_name": "버피",
                "contents_target": "유산소+전신",
                "contents_url": "https://youtu.be/zHMPpb8_H-E"
              },
              {
                "contents_id": 57,
                "contents_name": "숄더프레스 - 덤벨",
                "contents_target": "어깨+팔",
                "contents_url": "https://youtu.be/MdUol6_SZZw"
              },
              {
                "contents_id": 60,
                "contents_name": "스쿼트",
                "contents_target": "엉덩이+허벅지",
                "contents_url": "https://youtu.be/63bRzSBNhaI"
              },
              {
                "contents_id": 91,
                "contents_name": "푸쉬업",
                "contents_target": "어깨+가슴+팔+복근",
                "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
              }
            ]
          },
          {
            "curri_id": 12,
            "curri_name": "전신근력운동커리큘럼",
            "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
            "curri_type": "상급",
            "curri_info": "마르고 밋밋한 몸매를 멋지고 사랑스럽게 만들어주는 전신운동루틴  / 유산소운동 + 전신근력운동",
            "contents": [
              {
                "contents_id": 18,
                "contents_name": "덤벨 벤트 오버 로우",
                "contents_target": "유산소운동",
                "contents_url": "https://youtu.be/ZpmwIIzvpfI"
              },
              {
                "contents_id": 45,
                "contents_name": "버피테스트",
                "contents_target": "유산소+전신근력운동",
                "contents_url": "https://youtu.be/zHMPpb8_H-E"
              },
              {
                "contents_id": 53,
                "contents_name": "사이드플랭크 레그리프트",
                "contents_target": "전신",
                "contents_url": "https://youtu.be/6LumYq9U_nw"
              },
              {
                "contents_id": 69,
                "contents_name": "아놀드프레스",
                "contents_target": "어깨",
                "contents_url": "https://youtu.be/chxkoXJ4DpI"
              },
              {
                "contents_id": 77,
                "contents_name": "원레그프쉬업",
                "contents_target": "복부+엉덩이+허벅지+종아리",
                "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP45pD"
              },
              {
                "contents_id": 82,
                "contents_name": "점프스쿼트",
                "contents_target": "유산소+엉덩이+허벅지",
                "contents_url": "https://youtu.be/QtPKuWNE56w"
              },
              {
                "contents_id": 83,
                "contents_name": "점핑런지",
                "contents_target": "유산소+엉덩이+허벅지",
                "contents_url": "https://youtu.be/jcXDsFjHWTQ"
              },
              {
                "contents_id": 84,
                "contents_name": "점핑스위치레그",
                "contents_target": "유산소+어깨+복근+엉덩이+허벅지",
                "contents_url": "https://youtu.be/tYSY14SYwMU"
              }
            ]
          }
        ]
      }
    });

  }
});

module.exports = router;