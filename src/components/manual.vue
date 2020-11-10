<template>
    <div class="container-box">
        <modal />
        <div class="sidebar">
            <div class="sidebar_search">
                <div class="sidebar_search_input">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
            </div>
            <div class="sidebar_tree">
                <div class="tree_branch-first">
                    <div class="branch-first_title">
                        <i class="fas fa-minus"></i>
                        <i class="far fa-folder"></i>
                        <span>Директория</span>
                    </div>                    
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                            <span>Справочник</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                             <span>Справочник</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                             <span>Справочник</span>
                        </div>
                </div>   
                <div class="tree_branch-first">
                    <div class="branch-first_title">
                        <i class="fas fa-minus"></i>
                        <i class="far fa-folder"></i>
                        <span>Директория</span>
                    </div>                    
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                            <span>Справочник</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                             <span>Справочник</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                             <span>Справочник</span>
                        </div>
                </div>
                <div class="tree_branch-first">
                    <div class="branch-first_title">
                        <i class="fas fa-minus"></i>
                        <i class="far fa-folder"></i>
                        <span>Директория</span>
                    </div>                    
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                            <span>Справочник</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                             <span>Справочник</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="far fa-file-alt"></i>
                             <span>Справочник</span>
                        </div>
                </div>             
            </div>
        </div>
        <div class="worklist">
            <div class="tabs_content_top">
                <button class="bat bat-green" type="button"  data-toggle="modal" data-target="#statusModal">Добавить</button>
                <button class="bat bat-orange" type="button" data-toggle="modal" data-target="#statusModal">Изменить</button>
                <button class="bat bat-red" type="button">Удалить</button>
            </div>
            <div class="tabs_content_container">
                <div class="tabs_content_table-top row">
                    <div class="table-top_cell col-6">Наименование</div>
                    <div class="table-top_cell-end col-6">Код</div>                          
                </div>
                <div class="tabs_content_table-row row">
                    <div class="table-row_cell col-6">Не задано</div>
                    <div class="table-row_cell-end col-6">1231223421345</div>
                </div>                        
            </div>
        </div>
    </div>
</template>

<script>
import modal from '@/components/modal'

export default {
    name: 'manual',
    components:{
        modal
    }
}
</script>