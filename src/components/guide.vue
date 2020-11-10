<template>
    <div class="container-box">
        <modal />
        <div class="worklist-full">
            <div class="directory-tabs_content_top">
                <div class="directory-tabs_button">
                    <button class="bat bat-green" type="button"  data-toggle="modal" data-target="#addModal">Добавить</button>
                    <button class="bat bat-orange" type="button" data-toggle="modal" data-target="#addModal">Изменить</button>
                    <button class="bat bat-red" type="button">Удалить</button> 
                </div>
                <div class="directory-tabs_search">
                    <input class="form-control" type="text" placeholder="Фильтр">
                </div>                
            </div>
            <div class="sidebar_tree">
                <div class="directory-tree_branch-first">
                    <div class="directory-branch-first_title">
                        <i class="fas fa-minus"></i>
                        <i class="fas fa-landmark"></i>
                        <span>Комитет государственной службы и кадров Администрации Курской области</span>
                    </div>                    
                    <div class="directory-tree_branch-second">
                        <i class="fas fa-briefcase"></i>
                        <span>Комитет Администрации Курской области по профилактике коррупционных и иных правонарушений</span>
                    </div>
                    <div class="directory-tree_branch-second">
                        <i class="fas fa-briefcase"></i>
                            <span>Комитет Администрации Курской области по профилактике коррупционных и иных правонарушений</span>
                    </div>
                    <div class="directory-tree_branch-second">
                        <i class="fas fa-briefcase"></i>
                            <span>Комитет Администрации Курской области по профилактике коррупционных и иных правонарушений</span>
                    </div>
                </div>
                <div class="directory-tree_branch-first">
                    <div class="directory-branch-first_title">
                        <i class="fas fa-minus"></i>
                        <i class="fas fa-landmark"></i>
                        <span>Комитет государственной службы и кадров Администрации Курской области</span>
                    </div>
                </div>            
            </div>
        </div>
    </div>
</template>

<script>
import modal from '@/components/modal'

export default {
    name: 'guide',
    components:{
        modal
    }    
}
</script>