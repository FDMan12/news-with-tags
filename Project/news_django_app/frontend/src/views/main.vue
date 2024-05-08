<template>
  <div class="page">
    <div class="search-bar">
      <input type="text" placeholder="Поиск..." class="search-input">
    </div>

    <div class="news-for-you">
      <span style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #3d3d3d;">
        Новости для вас
        </span>
    </div>

    <div class="my-magazines-button">
      <span style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #3d3d3d;">
        Мои журналы
        </span>
    </div>

    <div class="todays">
      <span style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #3d3d3d;">
        Сегодняшнее
        </span>
    </div>

    <div class="mynews">
      <span style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; color: #3d3d3d;">
          Мои новости
        </span>
    </div>

    <div class="chosentag">
      <span style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; color: #3d3d3d;">
          Избранные теги
        </span>
    </div>

    <div class="chosentags">
      <span style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: black;">
          Спорт<br>Музыка<br>Кино<br>Наука
        </span>
    </div>

    <div class="local-new">
      <span style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; color: #3d3d3d;">
          Местные новости
        </span>
    </div>

    <div class="local-news">
      <span style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: black;">
          Москва<br>Липецк<br>Воронеж<br>Пермь
        </span>
    </div>

    <div class="my-magazine">
      <span style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; color: #3d3d3d;">
          Мои журналы
        </span>
    </div>

    <div class="my-magazines">
      <span style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: black;">
          New York Times<br>Биографии<br>Esquire<br>Elle
        </span>
    </div>

    <div class="left-menu">
      <div class="news-link" @click="goToNewsPage" style="margin-left: 250px;">
        <span style="font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; color: white;">
          Мои<br>Новости
        </span>
      </div>
    </div>

    <div class="top-block">
      <div class="account-info" @click="goToAccountPage">
        <div class="circle"></div>
        <div class="account-text">
          Мой<br>Аккаунт
        </div>
      </div>
    </div>

    <div class="news1" @click="goToAccountPage">
        <div class="square1"></div>
        <div class="text1">
          New York Times<br><br>Лучшие кофейни в Нью-Йорке по версии Шакиры
        </div>
      </div>
      <div class="news2" @click="goToAccountPage">
        <div class="square2"></div>
        <div class="text2">
          New York Times<br><br>Лучшие кофейни в Нью-Йорке по версии Шакиры
        </div>
      </div>
      <div class="news3" @click="goToAccountPage">
        <div class="square3"></div>
        <div class="text3">
          New York Times<br><br>Лучшие кофейни в Нью-Йорке по версии Шакиры
        </div>
      </div>

    <div class="right-block"></div>
    <div class="bottom-block">
      <div class="footer-links">
        <div class="footer-link" @click="goToAboutPage">О нас</div>
        <div class="footer-link" @click="goToHelpPage">Помощь</div>
        <div class="footer-link" @click="goToContactsPage">Контакты</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToNewsPage() {
      // Реализуйте переход на страницу новостей
    },
    goToAccountPage() {
      // Реализуйте переход на страницу аккаунта
    },
    goToAboutPage() {
      // Реализуйте переход на страницу "О нас"
    },
    goToHelpPage() {
      // Реализуйте переход на страницу "Помощь"
    },
    goToContactsPage() {
      // Реализуйте переход на страницу "Контакты"
    }
  }
};
</script>

<style>
.page {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 200vh;
  position: relative;
}

.top-block {
  height: 157px;
  background-color: #628348;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.account-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.circle {
  position: absolute;
  top: 10px;
  left: 1800px;
  width: 70px;
  height: 70px;
  background-color: #777777;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
}

.account-text {
  position: absolute;
  top: 90px;
  left: 1825px;
  color: white;
  font-size: 16px;
  font-family: Arial, sans-serif;
  cursor: pointer;
  text-align: center;
  margin-left: -20px;
}

.square1 {
  position: absolute;
  top: 200px;
  left: 300px;
  width: 400px;
  height: 400px;
  background-color: #628348;
  margin-right: 20px;
  cursor: pointer;
}

.text1 {
  position: absolute;
  top: 620px;
  left: 300px;
  width: 400px;
  height: 400px;
  color: Black;
  font-size: 20px;
  font-family: Arial, sans-serif;
  cursor: pointer;
  text-align: left;
  margin-left: 0px;
}

.square2 {
  position: absolute;
  top: 200px;
  left: 875px;
  width: 400px;
  height: 400px;
  background-color: #628348;
  margin-right: 20px;
  cursor: pointer;
}

.text2 {
  position: absolute;
  top: 620px;
  left: 875px;
  width: 400px;
  height: 400px;
  color: Black;
  font-size: 20px;
  font-family: Arial, sans-serif;
  cursor: pointer;
  text-align: left;
  margin-left: 0px;
}

.square3 {
  position: absolute;
  top: 200px;
  left: 1450px;
  width: 400px;
  height: 400px;
  background-color: #628348;
  margin-right: 20px;
  cursor: pointer;
}

.text3 {
  position: absolute;
  top: 620px;
  left: 1450px;
  width: 400px;
  height: 400px;
  color: Black;
  font-size: 20px;
  font-family: Arial, sans-serif;
  cursor: pointer;
  text-align: left;
  margin-left: 0px;
}

.left-menu {
  width: 250px;
  min-height: 0;
  height: calc(600vh - 157px);
  background-color: #AAA58C;
  position: relative;
  z-index: 2;
}

.news-link {
  padding: 20px;
  cursor: pointer;
}

.right-block {
  flex-grow: 1;
  background-color: #ffffff;
}

.bottom-block {
  height: 250px;
  background-color: #252424;
  width: 100%;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 40px 381px;
}

.footer-link {
  color: white;
  font-family: Arial, sans-serif;
  font-size: 20px;
  cursor: pointer;
}

.search-bar {
  position: absolute;
  top: 100px;
  left: 20px;
  width: 200px;
  height: 25px;
  background-color: white;
  border-radius: 5px;
  padding: 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.news-for-you {
  position: absolute;
  top: 100px;
  left: 500px;
  width: 200px;
  height: 25px;
  background-color: white;
  border-radius: 7px;
  padding: 7px 5px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.my-magazines-button {
  position: absolute;
  top: 98px;
  left: 925px;
  width: 200px;
  height: 25px;
  background-color: white;
  border-radius: 5px;
  padding: 7px 5px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.todays {
  position: absolute;
  top: 98px;
  left: 1350px;
  width: 200px;
  height: 25px;
  background-color: white;
  border-radius: 5px;
  padding: 7px 5px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.search-input {
  width: 100%; /* Ширина поля ввода равна ширине родительского элемента */
  height: 100%; /* Высота поля ввода равна высоте родительского элемента */
  border: none;
  outline: none;
  font-size: 16px;
}

.mynews{
  position: absolute;
  top: 170px;
  left: 10px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 999;
}

.chosentag{
  position: absolute;
  top: 300px;
  left: 10px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 999;
}

.chosentags{
  position: absolute;
  top: 330px;
  left: 60px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 999;
}

.local-new{
  position: absolute;
  top: 450px;
  left: 10px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 999;
}

.local-news{
  position: absolute;
  top: 480px;
  left: 60px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 999;
}

.my-magazine{
  position: absolute;
  top: 600px;
  left: 10px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 999;
}

.my-magazines{
  position: absolute;
  top: 630px;
  left: 60px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  z-index: 999;
}

</style>

