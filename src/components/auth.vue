<template>
    <div class="login-container">
      <div class="login-box">
            <img src="@/assets/gerb.svg" alt="">
            <div class="login-title">
            Реестр информационных систем 
            <br>
            Курской области
            </div>
            <label for="InputFIO">Логин</label>
            <input type="email" class="form-control" id="InputFIO" value="">
            <label for="InputFIO">Пароль</label>
            <input type="password" class="form-control" id="InputFIO" value="">
            <button class="bat bat-blue" type="button">Вход</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'auth',
}
</script>