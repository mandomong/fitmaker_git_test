
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
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_lovelyz.jpg",
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
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
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
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_moon.jpg",
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
                    "curri_id": 5,
                    "curri_name": "다이어트 커리큘럼-한달2KG",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                    "curri_type": "초급",
                    "curri_info": "전신의 체지방을 날려버리는 운동루틴 / 유산소 운동 + 전신근력운동",
                    "contents": [
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 51,
                        "contents_name": "사이드런지 점프",
                        "contents_target": "유산소+엉덩이+허벅지",
                        "contents_url": "https://youtu.be/vEohIsXT1_4"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
                      },
                      {
                        "contents_id": 91,
                        "contents_name": "푸쉬업",
                        "contents_target": "어깨+가슴+팔+복근",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 92,
                        "contents_name": "푸쉬업 후 플랭점프",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/36kv2PeSDe4"
                      }
                    ]
                  },
                  {
                    "curri_id": 6,
                    "curri_name": "다이어트 커리큘럼-한달3KG",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                    "curri_type": "중급",
                    "curri_info": "전신의 체지방을 날려버리는 운동루틴 / 유산소 운동 + 전신근력운동",
                    "contents": [
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 51,
                        "contents_name": "사이드런지 점프",
                        "contents_target": "유산소+엉덩이+허벅지",
                        "contents_url": "https://youtu.be/vEohIsXT1_4"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
                      },
                      {
                        "contents_id": 91,
                        "contents_name": "푸쉬업",
                        "contents_target": "어깨+가슴+팔+복근",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 92,
                        "contents_name": "푸쉬업 후 플랭점프",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/36kv2PeSDe4"
                      }
                    ]
                  },
                  {
                    "curri_id": 7,
                    "curri_name": "다이어트 커리큘럼-한달6KG",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_park.jpg",
                    "curri_type": "상급",
                    "curri_info": "전신의 체지방을 날려버리는 운동루틴 / 유산소 운동 + 전신근력운동",
                    "contents": [
                      {
                        "contents_id": 22,
                        "contents_name": "덩키킥",
                        "contents_target": "엉덩이",
                        "contents_url": "https://youtu.be/OurhngL19XU"
                      },
                      {
                        "contents_id": 40,
                        "contents_name": "바이시클 크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/B_B5C8gSP0U"
                      },
                      {
                        "contents_id": 44,
                        "contents_name": "버피점프",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/CMHV_LbFnjw"
                      },
                      {
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
                      },
                      {
                        "contents_id": 91,
                        "contents_name": "푸쉬업",
                        "contents_target": "어깨+가슴+팔+복근",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
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
                    "curri_id": 8,
                    "curri_name": "하루 20분 다이어트 운동 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                    "curri_type": "중급",
                    "curri_info": "바쁜 당신을 위해, 하루 20분 운동으로 체지방 불태우기! / 유산소운동 + 전신근력운동",
                    "contents": [
                      {
                        "contents_id": 44,
                        "contents_name": "버피점프",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/CMHV_LbFnjw"
                      },
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
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
                    "curri_id": 9,
                    "curri_name": "하루 20분 다이어트 운동 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
                    "curri_type": "상급",
                    "curri_info": "바쁜 당신을 위해, 하루 20분 운동으로 체지방 불태우기! / 유산소운동 + 전신근력운동",
                    "contents": [
                      {
                        "contents_id": 44,
                        "contents_name": "버피점프",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/CMHV_LbFnjw"
                      },
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
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
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
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
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_ronaldo.jpg",
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
                  },
                  {
                    "curri_id": 13,
                    "curri_name": "비키니프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                    "curri_type": "초급",
                    "curri_info": "여름바다! 비키니! 지금부터 준비하자! 비키니에 최적화된 몸매를 만들어주는 운동루틴 . / 유산소운동+전신운동 /",
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
                    "curri_id": 14,
                    "curri_name": "비키니프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                    "curri_type": "중급",
                    "curri_info": "여름바다! 비키니! 지금부터 준비하자! 비키니에 최적화된 몸매를 만들어주는 운동루틴 . / 유산소운동+전신운동 /",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 42,
                        "contents_name": "백익스텐션(슈퍼맨)",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/wUtt1J5oRec"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 57,
                        "contents_name": "숄더프레스 - 덤벨",
                        "contents_target": "어깨+팔",
                        "contents_url": "https://youtu.be/MdUol6_SZZw"
                      },
                      {
                        "contents_id": 63,
                        "contents_name": "스탠딩 힙 어브덕션",
                        "contents_target": "엉덩이",
                        "contents_url": "https://youtu.be/3O44tJAOI9o"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 15,
                    "curri_name": "비키니프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                    "curri_type": "상급",
                    "curri_info": "여름바다! 비키니! 지금부터 준비하자! 비키니에 최적화된 몸매를 만들어주는 운동루틴 . / 유산소운동+전신운동 /",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 42,
                        "contents_name": "백익스텐션(슈퍼맨)",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/wUtt1J5oRec"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 57,
                        "contents_name": "숄더프레스 - 덤벨",
                        "contents_target": "어깨+팔",
                        "contents_url": "https://youtu.be/MdUol6_SZZw"
                      },
                      {
                        "contents_id": 63,
                        "contents_name": "스탠딩 힙 어브덕션",
                        "contents_target": "엉덩이",
                        "contents_url": "https://youtu.be/3O44tJAOI9o"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 16,
                    "curri_name": "여름대비몸매라인만들기프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                    "curri_type": "초급",
                    "curri_info": "체중감량과 몸매라인을 동시에 만들어주는 여름대비 운동루틴 / 유산소운동 + 전신운동",
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
                    "curri_id": 17,
                    "curri_name": "여름대비몸매라인만들기프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                    "curri_type": "중급",
                    "curri_info": "체중감량과 몸매라인을 동시에 만들어주는 여름대비 운동루틴 / 유산소운동 + 전신운동",
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
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
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
                    "curri_id": 18,
                    "curri_name": "여름대비몸매라인만들기프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_snsd.jpg",
                    "curri_type": "상급",
                    "curri_info": "체중감량과 몸매라인을 동시에 만들어주는 여름대비 운동루틴 / 유산소운동 + 전신운동",
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
                        "contents_id": 85,
                        "contents_name": "점핑잭",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/nsHlZeSZljg"
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
                    "curri_id": 20,
                    "curri_name": "마일리 사일러스 복근운동 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun2.jpg",
                    "curri_type": "중급",
                    "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /",
                    "contents": [
                      {
                        "contents_id": 14,
                        "contents_name": "더롤",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 16,
                        "contents_name": "더블레그사이클",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 25,
                        "contents_name": "러시안트위스트",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 37,
                        "contents_name": "마운틴클라이밍",
                        "contents_target": "유산소+전신",
                        "contents_url": "https://youtu.be/9av88dYFZMI"
                      },
                      {
                        "contents_id": 62,
                        "contents_name": "스타피쉬크런치",
                        "contents_target": "복근+허벅지",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 64,
                        "contents_name": "스파이더맨플랭크(우)",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 65,
                        "contents_name": "스파이더맨플랭크(좌)",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 68,
                        "contents_name": "싱글레그드랍",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 78,
                        "contents_name": "윈드밀",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 96,
                        "contents_name": "플루터킥",
                        "contents_target": "복근",
                        "contents_url": "https://youtu.be/s0H6XqRH3no?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      }
                    ]
                  },
                  {
                    "curri_id": 22,
                    "curri_name": "11자복근프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun2.jpg",
                    "curri_type": "초급",
                    "curri_info": "아름다운 허리라인과 복근을 만들어주는 운동루틴 / 유산소운동+복부운동",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 49,
                        "contents_name": "브이업",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/t3OnX1pqsfw"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 23,
                    "curri_name": "11자복근프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jun2.jpg",
                    "curri_type": "중급",
                    "curri_info": "아름다운 허리라인과 복근을 만들어주는 운동루틴 / 유산소운동+복부운동",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 49,
                        "contents_name": "브이업",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/t3OnX1pqsfw"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 24,
                    "curri_name": "11자복근프로젝트커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                    "curri_type": "상급",
                    "curri_info": "아름다운 허리라인과 복근을 만들어주는 운동루틴 / 유산소운동+복부운동",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 49,
                        "contents_name": "브이업",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/t3OnX1pqsfw"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 25,
                    "curri_name": "매끄러운어깨라인 만들기커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                    "curri_type": "초급",
                    "curri_info": "갸냘프고 섹시한 어깨라인만들기 운동루틴 / 어깨+가슴+팔",
                    "contents": [
                      {
                        "contents_id": 9,
                        "contents_name": "니 푸쉬업",
                        "contents_target": "어깨+가슴",
                        "contents_url": "https://youtu.be/SKCcvxBSQiA?list=PLWK0zibPydjUGl8xGBixK5oyZNH9ocKKF"
                      },
                      {
                        "contents_id": 19,
                        "contents_name": "덤벨숄더 스피닝",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      },
                      {
                        "contents_id": 45,
                        "contents_name": "버피테스트",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/zHMPpb8_H-E"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 52,
                        "contents_name": "사이드레터럴 레이즈",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/7yGhzXqRGKE"
                      }
                    ]
                  },
                  {
                    "curri_id": 26,
                    "curri_name": "매끄러운어깨라인 만들기커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                    "curri_type": "중급",
                    "curri_info": "갸냘프고 섹시한 어깨라인만들기 운동루틴 / 어깨+가슴+팔",
                    "contents": [
                      {
                        "contents_id": 9,
                        "contents_name": "니 푸쉬업",
                        "contents_target": "어깨+가슴",
                        "contents_url": "https://youtu.be/SKCcvxBSQiA?list=PLWK0zibPydjUGl8xGBixK5oyZNH9ocKKF"
                      },
                      {
                        "contents_id": 19,
                        "contents_name": "덤벨숄더 스피닝",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      },
                      {
                        "contents_id": 45,
                        "contents_name": "버피테스트",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/zHMPpb8_H-E"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 52,
                        "contents_name": "사이드레터럴 레이즈",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/7yGhzXqRGKE"
                      }
                    ]
                  },
                  {
                    "curri_id": 27,
                    "curri_name": "매끄러운어깨라인 만들기커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                    "curri_type": "상급",
                    "curri_info": "갸냘프고 섹시한 어깨라인만들기 운동루틴 / 어깨+가슴+팔",
                    "contents": [
                      {
                        "contents_id": 9,
                        "contents_name": "니 푸쉬업",
                        "contents_target": "어깨+가슴",
                        "contents_url": "https://youtu.be/SKCcvxBSQiA?list=PLWK0zibPydjUGl8xGBixK5oyZNH9ocKKF"
                      },
                      {
                        "contents_id": 19,
                        "contents_name": "덤벨숄더 스피닝",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      },
                      {
                        "contents_id": 45,
                        "contents_name": "버피테스트",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/zHMPpb8_H-E"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 52,
                        "contents_name": "사이드레터럴 레이즈",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/7yGhzXqRGKE"
                      }
                    ]
                  },
                  {
                    "curri_id": 28,
                    "curri_name": "아름다운가슴라인만들기커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                    "curri_type": "초급",
                    "curri_info": "가슴라인을 이쁘고 탄력있게, 사랑스러운 가슴을 만들어주는 운동루틴 / 가슴+팔",
                    "contents": [
                      {
                        "contents_id": 7,
                        "contents_name": "내로우푸쉬업",
                        "contents_target": "가슴+팔",
                        "contents_url": "https://youtu.be/XpxHaprl5rk"
                      },
                      {
                        "contents_id": 17,
                        "contents_name": "덤베플라이",
                        "contents_target": "가슴",
                        "contents_url": "https://youtu.be/eJ45oh8947w"
                      },
                      {
                        "contents_id": 21,
                        "contents_name": "덤벨프레스",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/sFB0M-6SpRQ"
                      },
                      {
                        "contents_id": 23,
                        "contents_name": "디클라인 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/BtHeff1ioI8"
                      },
                      {
                        "contents_id": 39,
                        "contents_name": "무릎대고 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/RdKsRx9m6OI"
                      },
                      {
                        "contents_id": 81,
                        "contents_name": "인클라인 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      }
                    ]
                  },
                  {
                    "curri_id": 29,
                    "curri_name": "아름다운가슴라인만들기커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                    "curri_type": "중급",
                    "curri_info": "가슴라인을 이쁘고 탄력있게, 사랑스러운 가슴을 만들어주는 운동루틴 / 가슴+팔",
                    "contents": [
                      {
                        "contents_id": 7,
                        "contents_name": "내로우푸쉬업",
                        "contents_target": "가슴+팔",
                        "contents_url": "https://youtu.be/XpxHaprl5rk"
                      },
                      {
                        "contents_id": 17,
                        "contents_name": "덤베플라이",
                        "contents_target": "가슴",
                        "contents_url": "https://youtu.be/eJ45oh8947w"
                      },
                      {
                        "contents_id": 21,
                        "contents_name": "덤벨프레스",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/sFB0M-6SpRQ"
                      },
                      {
                        "contents_id": 23,
                        "contents_name": "디클라인 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/BtHeff1ioI8"
                      },
                      {
                        "contents_id": 39,
                        "contents_name": "무릎대고 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/RdKsRx9m6OI"
                      },
                      {
                        "contents_id": 81,
                        "contents_name": "인클라인 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      }
                    ]
                  },
                  {
                    "curri_id": 30,
                    "curri_name": "아름다운가슴라인만들기커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/curri_jae.jpg",
                    "curri_type": "상급",
                    "curri_info": "가슴라인을 이쁘고 탄력있게, 사랑스러운 가슴을 만들어주는 운동루틴 / 가슴+팔",
                    "contents": [
                      {
                        "contents_id": 7,
                        "contents_name": "내로우푸쉬업",
                        "contents_target": "가슴+팔",
                        "contents_url": "https://youtu.be/XpxHaprl5rk"
                      },
                      {
                        "contents_id": 17,
                        "contents_name": "덤베플라이",
                        "contents_target": "가슴",
                        "contents_url": "https://youtu.be/eJ45oh8947w"
                      },
                      {
                        "contents_id": 21,
                        "contents_name": "덤벨프레스",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/sFB0M-6SpRQ"
                      },
                      {
                        "contents_id": 23,
                        "contents_name": "디클라인 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/BtHeff1ioI8"
                      },
                      {
                        "contents_id": 39,
                        "contents_name": "무릎대고 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/RdKsRx9m6OI"
                      },
                      {
                        "contents_id": 81,
                        "contents_name": "인클라인 푸쉬업",
                        "contents_target": "어깨+가슴+팔",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      }
                    ]
                  },
                  {
                    "curri_id": 31,
                    "curri_name": "어깨라인만들기-어좁이탈출커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_suzy.jpg",
                    "curri_type": "초급",
                    "curri_info": "머리가 큰게아니다.. 다만 어깨가 좁을뿐이다.....어좁이를 탈출해보자! / 어깨 + 팔",
                    "contents": [
                      {
                        "contents_id": 19,
                        "contents_name": "덤벨숄더 스피닝",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      },
                      {
                        "contents_id": 45,
                        "contents_name": "버피테스트",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/zHMPpb8_H-E"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 52,
                        "contents_name": "사이드레터럴 레이즈",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/7yGhzXqRGKE"
                      },
                      {
                        "contents_id": 55,
                        "contents_name": "숄더푸쉬업",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/lvpHlFmUFVc"
                      }
                    ]
                  },
                  {
                    "curri_id": 32,
                    "curri_name": "어깨라인만들기-어좁이탈출커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_suzy.jpg",
                    "curri_type": "중급",
                    "curri_info": "머리가 큰게아니다.. 다만 어깨가 좁을뿐이다.....어좁이를 탈출해보자! / 어깨 + 팔",
                    "contents": [
                      {
                        "contents_id": 19,
                        "contents_name": "덤벨숄더 스피닝",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      },
                      {
                        "contents_id": 45,
                        "contents_name": "버피테스트",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/zHMPpb8_H-E"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 52,
                        "contents_name": "사이드레터럴 레이즈",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/7yGhzXqRGKE"
                      },
                      {
                        "contents_id": 55,
                        "contents_name": "숄더푸쉬업",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/lvpHlFmUFVc"
                      }
                    ]
                  },
                  {
                    "curri_id": 33,
                    "curri_name": "어깨라인만들기-어좁이탈출커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_suzy.jpg",
                    "curri_type": "상급",
                    "curri_info": "머리가 큰게아니다.. 다만 어깨가 좁을뿐이다.....어좁이를 탈출해보자! / 어깨 + 팔",
                    "contents": [
                      {
                        "contents_id": 19,
                        "contents_name": "덤벨숄더 스피닝",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/d6Lwiu8WwDE"
                      },
                      {
                        "contents_id": 45,
                        "contents_name": "버피테스트",
                        "contents_target": "유산소+전신근력운동",
                        "contents_url": "https://youtu.be/zHMPpb8_H-E"
                      },
                      {
                        "contents_id": 46,
                        "contents_name": "벤치 딥스",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/uqAWTRZJ608"
                      },
                      {
                        "contents_id": 52,
                        "contents_name": "사이드레터럴 레이즈",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/7yGhzXqRGKE"
                      },
                      {
                        "contents_id": 55,
                        "contents_name": "숄더푸쉬업",
                        "contents_target": "어깨",
                        "contents_url": "https://youtu.be/lvpHlFmUFVc"
                      }
                    ]
                  },
                  {
                    "curri_id": 34,
                    "curri_name": "애플힙 만들기 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul2.jpg",
                    "curri_type": "초급",
                    "curri_info": "허리와 엉덩이 라인을 아름답게 만들어주는 운동루틴 / 허리 + 엉덩이",
                    "contents": [
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 53,
                        "contents_name": "사이드플랭크 레그리프트",
                        "contents_target": "전신",
                        "contents_url": "https://youtu.be/6LumYq9U_nw"
                      },
                      {
                        "contents_id": 60,
                        "contents_name": "스쿼트",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/63bRzSBNhaI"
                      },
                      {
                        "contents_id": 93,
                        "contents_name": "프런트런지",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/eggRFfC5dWQ"
                      }
                    ]
                  },
                  {
                    "curri_id": 35,
                    "curri_name": "애플힙 만들기 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul2.jpg",
                    "curri_type": "중급",
                    "curri_info": "허리와 엉덩이 라인을 아름답게 만들어주는 운동루틴 / 허리 + 엉덩이",
                    "contents": [
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 53,
                        "contents_name": "사이드플랭크 레그리프트",
                        "contents_target": "전신",
                        "contents_url": "https://youtu.be/6LumYq9U_nw"
                      },
                      {
                        "contents_id": 60,
                        "contents_name": "스쿼트",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/63bRzSBNhaI"
                      },
                      {
                        "contents_id": 93,
                        "contents_name": "프런트런지",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/eggRFfC5dWQ"
                      }
                    ]
                  },
                  {
                    "curri_id": 36,
                    "curri_name": "애플힙 만들기 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul2.jpg",
                    "curri_type": "상급",
                    "curri_info": "허리와 엉덩이 라인을 아름답게 만들어주는 운동루틴 / 허리 + 엉덩이",
                    "contents": [
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 53,
                        "contents_name": "사이드플랭크 레그리프트",
                        "contents_target": "전신",
                        "contents_url": "https://youtu.be/6LumYq9U_nw"
                      },
                      {
                        "contents_id": 60,
                        "contents_name": "스쿼트",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/63bRzSBNhaI"
                      },
                      {
                        "contents_id": 93,
                        "contents_name": "프런트런지",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/eggRFfC5dWQ"
                      }
                    ]
                  },
                  {
                    "curri_id": 37,
                    "curri_name": "식스팩 프로젝트 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "초급",
                    "curri_info": "식스팩 탕탕탕!탕탕탕! 운동루틴 / 유산소운동+복부운동",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 49,
                        "contents_name": "브이업",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/t3OnX1pqsfw"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 38,
                    "curri_name": "식스팩 프로젝트 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "중급",
                    "curri_info": "식스팩 탕탕탕!탕탕탕! 운동루틴 / 유산소운동+복부운동",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 49,
                        "contents_name": "브이업",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/t3OnX1pqsfw"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 39,
                    "curri_name": "식스팩 프로젝트 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "상급",
                    "curri_info": "식스팩 탕탕탕!탕탕탕! 운동루틴 / 유산소운동+복부운동",
                    "contents": [
                      {
                        "contents_id": 30,
                        "contents_name": "레그레이즈",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/yxV2YHPCmVI"
                      },
                      {
                        "contents_id": 49,
                        "contents_name": "브이업",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/t3OnX1pqsfw"
                      },
                      {
                        "contents_id": 70,
                        "contents_name": "암워킹",
                        "contents_target": "전신운동",
                        "contents_url": "https://youtu.be/4XqR4hbYzRk"
                      },
                      {
                        "contents_id": 87,
                        "contents_name": "크런치",
                        "contents_target": "복부",
                        "contents_url": "https://youtu.be/mPWh29PAMEs"
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
                    "curri_id": 40,
                    "curri_name": "태평양같은 등만들기 운동루틴 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "초급",
                    "curri_info": "남자는 등이다 등등등! / 어깨+등",
                    "contents": [
                      {
                        "contents_id": 18,
                        "contents_name": "덤벨 벤트 오버 로우",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/ZpmwIIzvpfI"
                      },
                      {
                        "contents_id": 33,
                        "contents_name": "로우 - 덤벨",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/CiCSy2LKLjc"
                      },
                      {
                        "contents_id": 42,
                        "contents_name": "백익스텐션(슈퍼맨)",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/wUtt1J5oRec"
                      },
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 59,
                        "contents_name": "스위밍",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/VU5IHE5soWI"
                      }
                    ]
                  },
                  {
                    "curri_id": 41,
                    "curri_name": "태평양같은 등만들기 운동루틴 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "중급",
                    "curri_info": "남자는 등이다 등등등! / 어깨+등",
                    "contents": [
                      {
                        "contents_id": 18,
                        "contents_name": "덤벨 벤트 오버 로우",
                        "contents_target": "유산소운동",
                        "contents_url": "https://youtu.be/ZpmwIIzvpfI"
                      },
                      {
                        "contents_id": 33,
                        "contents_name": "로우 - 덤벨",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/CiCSy2LKLjc"
                      },
                      {
                        "contents_id": 42,
                        "contents_name": "백익스텐션(슈퍼맨)",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/wUtt1J5oRec"
                      },
                      {
                        "contents_id": 47,
                        "contents_name": "브릿지",
                        "contents_target": "등+엉덩이+허리",
                        "contents_url": "https://youtu.be/Pjb2QdiYSAs"
                      },
                      {
                        "contents_id": 59,
                        "contents_name": "스위밍",
                        "contents_target": "등",
                        "contents_url": "https://youtu.be/VU5IHE5soWI"
                      }
                    ]
                  },
                  {
                    "curri_id": 42,
                    "curri_name": "태평양같은 등만들기 운동루틴 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "상급",
                    "curri_info": "남자는 등이다 등등등! / 어깨+등",
                    "contents": [
                      {
                        "contents_id": 4,
                        "contents_name": "V레이즈",
                        "contents_target": "어깨+팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      }
                    ]
                  },
                  {
                    "curri_id": 44,
                    "curri_name": "마일리 사일러스 탄력있는 팔 만들기 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "중급",
                    "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /",
                    "contents": [
                      {
                        "contents_id": 20,
                        "contents_name": "덤벨킥백",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 24,
                        "contents_name": "딥스",
                        "contents_target": "어깨+팔_복근",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 34,
                        "contents_name": "리버스컬",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 36,
                        "contents_name": "리버스플라이",
                        "contents_target": "어깨+팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 56,
                        "contents_name": "숄더프레스",
                        "contents_target": "어깨+팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 79,
                        "contents_name": "인사이드컬",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 80,
                        "contents_name": "인앤아웃컬",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 86,
                        "contents_name": "컬 홀드",
                        "contents_target": "팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 89,
                        "contents_name": "트라이셉익스텐션(TRICEP EXTENSIONS)",
                        "contents_target": "어깨+팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 91,
                        "contents_name": "푸쉬업",
                        "contents_target": "어깨+가슴+팔+복근",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      },
                      {
                        "contents_id": 101,
                        "contents_name": "헤빅레이즈",
                        "contents_target": "어깨+팔",
                        "contents_url": "https://youtu.be/hAGfBjvIRFI?list=PLPLaJMBWOkLqw5C0mQfb6rzZBcAyHm7Qv"
                      }
                    ]
                  },
                  {
                    "curri_id": 45,
                    "curri_name": "마일리 사일러스 다리운동 커리큘럼",
                    "curri_photourl": "https://s3.ap-northeast-2.amazonaws.com/fitmakerbucket/test/user_me_sul1.jpg",
                    "curri_type": "중급",
                    "curri_info": "짧은시간안에 강력한 효과를주는 마일리사일러스의 복근운동 루틴 /  복근 /",
                    "contents": [
                      {
                        "contents_id": 2,
                        "contents_name": "FIRE HYDRANTS(우)",
                        "contents_target": "복부+엉덩이허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP48pD"
                      },
                      {
                        "contents_id": 3,
                        "contents_name": "FIRE HYDRANTS(좌)",
                        "contents_target": "복부+엉덩이허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP47pD"
                      },
                      {
                        "contents_id": 5,
                        "contents_name": "교차런지",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 10,
                        "contents_name": "닐링 레그 리프트(우)",
                        "contents_target": "복부+엉덩이허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP49pD"
                      },
                      {
                        "contents_id": 11,
                        "contents_name": "닐링 레그 리프트(좌)",
                        "contents_target": "복부+엉덩이허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP50pD"
                      },
                      {
                        "contents_id": 12,
                        "contents_name": "닐링 힐 프레스(우)",
                        "contents_target": "복부+엉덩이허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP50pD"
                      },
                      {
                        "contents_id": 13,
                        "contents_name": "닐링 힐 프레스(좌)",
                        "contents_target": "복부+엉덩이허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP50pD"
                      },
                      {
                        "contents_id": 31,
                        "contents_name": "레터럴레그리프트(우)",
                        "contents_target": "엉덩이+허벅지+종아리",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP44pD"
                      },
                      {
                        "contents_id": 32,
                        "contents_name": "레터럴레그리프트(좌)",
                        "contents_target": "엉덩이+허벅지+종아리",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP43pD"
                      },
                      {
                        "contents_id": 50,
                        "contents_name": "사이드런지",
                        "contents_target": "엉덩이+허벅지+종아리",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP42pD"
                      },
                      {
                        "contents_id": 76,
                        "contents_name": "원 레그드 칼프레이즈(우)",
                        "contents_target": "복부+엉덩이+허벅지+종아리",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP46pD"
                      },
                      {
                        "contents_id": 97,
                        "contents_name": "플리에스쿼트",
                        "contents_target": "엉덩이+허벅지",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP41pD"
                      },
                      {
                        "contents_id": 102,
                        "contents_name": "원 레그드 칼프레이즈(좌)",
                        "contents_target": "복부+엉덩이+허벅지+종아리",
                        "contents_url": "https://youtu.be/xpzMr3nSOIE?list=PLqHv3iU2gbEtMDAeGTx_uMUm_OJuP46pD"
                      }
                    ]
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