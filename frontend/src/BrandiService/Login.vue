<template>
  <section class="main">
    <main class="article">
      <h1 class="title">오늘 사면 내일 도착!</h1>
      <h2 class="subTitle">무료배송으로 내일 받는 브랜디 LOGIN</h2>
      <div class="loginContainer">
        <input class="loginInput" placeholder="아이디 입력" />
        <input class="loginInput" placeholder="비밀번호 입력" />
        <a class="loginBtn">로그인</a>
        <a class="JoinBtn">회원가입</a>
        <div class="loginFind">
          <span class="findId">아이디 찾기</span>
          <span class="border" />
          <span class="findPw">비밀번호 찾기</span>
        </div>
        <div></div>
        <h3 class="socialTitle">간편 로그인 / 가입</h3>
        <GoogleLogin
          class="googleLogin"
          :params="params"
          :onSuccess="onSuccess"
        >
          <div class="imgContainer">
            <img src="/Images/google-logo.png" />
          </div>
          Google 계정으로 계속하기
        </GoogleLogin>
      </div>
    </main>
  </section>
</template>

<script>
import { ClientId } from "../../../config.js";
import { GoogleLogin } from "vue-google-login";
import { ip } from "../../../config.js";
import axios from "axios";

export default {
  data() {
    return {
      //구글 로그인 하기
      params: {
        client_id: ClientId,
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    onSuccess(googleUser) {
      //body에 빈 객체를 넣어야 post에서 headers의 정보를 보내기가 가능하다.
      const data = {};
      const headers = {
        headers: { Authorization: googleUser.wc.id_token },
      };

      axios.post(`${ip}/user/google-signin`, data, headers).then((res) => {
        console.log(res.data);
        // if (res.data.access_token) {
        //   this.$router.push("/main");
        // }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;

  .article {
    height: 100%;
    width: 1300px;
    margin: 200px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 34px;
      font-weight: bold;
      color: #ff204b;
      font-family: "Spoqa Han Sans", Sans-serif;
    }

    .subTitle {
      margin-top: 20px;
      font-size: 32px;
      font-weight: 100;
      font-family: "Spoqa Han Sans", Sans-serif;
    }

    .loginContainer {
      width: 600px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .loginInput {
        height: 50px;
        border: 1px solid lightgray;
        border-radius: 3px;
        margin-top: 10px;
        padding: 10px;
        outline: none;
        font-size: 14px;
        font-weight: 500;
        color: #333333;
      }

      .loginBtn {
        height: 50px;
        line-height: 50px;
        margin-top: 14px;
        font-size: 13px;
        text-align: center;
        border-radius: 4px;
        background-color: black;
        color: white;
        cursor: pointer;
      }

      .joinBtn {
        height: 50px;
        line-height: 50px;
        margin-top: 4px;
        font-size: 13px;
        text-align: center;
        border: 1px solid black;
        border-radius: 4px;
        cursor: pointer;
      }

      .loginFind {
        text-align: right;
        padding: 17px 0;
        font-size: 13px;
        color: #666;
        border-bottom: 1px solid #ccc;

        .findId,
        .findPw {
          cursor: pointer;
        }

        .border {
          margin: 0 10px;
          border-right: 1px solid #ccc;
        }
      }

      .socialTitle {
        margin: 35px 0 15px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
      }

      .googleLogin {
        width: 278px;
        height: 50px;
        background-color: white;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        margin: 0 auto 50px;
        font-weight: 500;
        color: #666;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          color: white;
          background-color: black;
        }

        .imgContainer {
          width: 28px;
          height: 28px;
          margin-right: 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
