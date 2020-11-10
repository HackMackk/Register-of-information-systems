<template>
    <div class="top">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Главная</li>
            </ol>
        </nav>
        <div class="header_management">
            <div class="header_management_name">
                <span>Фомин Д.А.</span>
            </div>
            <div class="header_management_menu" @click="open">
                <i class="fas fa-bars"></i>
            </div>
        </div>  

        <div class="gamburger" :style="{ display: isOpen}">
        <div class="gamburger_header">
            <div class="gamburger_header_close" @click="open">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="gamburger_body">
            <router-link to="/manual">
                <div class="gamburger_body_row">
                    <i class="fas fa-book"></i><span>Справочники</span>
                </div>
            </router-link>       
            <router-link to="/guide">
                <div class="gamburger_body_row">
                    <i class="fas fa-landmark"></i><span>Учреждения</span>
                </div>
            </router-link>
            <router-link to="auth">
                <div class="gamburger_body_row">
                    <i class="far fa-user"></i><span>Пользователи</span>
                </div>
            </router-link>
        </div>
    </div>     
    </div>
</template>

<script>
export default {
    name: "top",
    data: () => ({
        isOpen:'none'
    }),
    methods:{
        open(){
            return this.isOpen = (this.isOpen == 'none') ? 'block' : 'none'
        }
    }
}
</script>