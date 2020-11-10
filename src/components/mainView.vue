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
                        <i class="fas fa-landmark"></i>
                        <span>Комитет государственной службы и кадров Администрации Курской области</span>
                    </div>                    
                        <div class="tree_branch-second">
                            <i class="fas fa-briefcase"></i>
                            <span>Комитет Администрации Курской области по профилактике коррупционных и иных правонарушений</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="fas fa-briefcase"></i>
                                <span>Комитет Администрации Курской области по профилактике коррупционных и иных правонарушений</span>
                        </div>
                        <div class="tree_branch-second">
                            <i class="fas fa-briefcase"></i>
                                <span>Комитет Администрации Курской области по профилактике коррупционных и иных правонарушений</span>
                        </div>
                </div>
                <div class="tree_branch-first">
                    <i class="fas fa-minus"></i>
                    <i class="fas fa-landmark"></i>
                    <span>qweqweqw</span>
                        <div class="tree_branch-second">
                            <i class="fas fa-briefcase"></i>
                                <span>1231231231</span>
                        </div>        
                </div>
                <div class="tree_branch-first">
                    <i class="fas fa-plus"></i>
                    <i class="fas fa-landmark"></i>
                    <span>qweqweqw</span>
                </div>
            </div>
        </div>
        <div class="worklist">
            <div class="worklist_tabs">
                <nav>
                    <div class="worklist_tabs_nav nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="tabs_nav_li nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Общие сведения</a>
                        <a class="tabs_nav_li nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Площадки</a>
                        <a class="tabs_nav_li nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Паспорта</a>
                    </div>
                </nav>
                <div class="worklist_tabs_content tab-content" id="nav-tabContent">
                    <div class="tabs_content_pane tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <form action="">
                        <div class="tabs_content_top">
                            <button class="bat bat-green" type="submit">Сохранить</button>
                        </div>
                        <div class="tabs_content_container">
                            <div class="tabs_content_form-group col-xxl-10">
                                <span class="form-group_label">Основные</span>                                
                                <div class="form-group_input">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <label for="InputGRBS">Код ГРБС</label>
                                            <input type="text" class="form-control" id="InputGRBS" value="">
                                        </div>                             
                                        <div class="col-xl-6">
                                            <label for="InputRnumber">Реестровый номер</label>
                                            <input type="text" class="form-control" id="InputRnumber" value="">
                                        </div>
                                    </div>
                                </div>                                                                
                            </div>
                            <div class="tabs_content_form-group col-xxl-10">
                                <span class="form-group_label">Руководитель</span>
                                <div class="form-group_input">
                                    <label for="InputFIO">ФИО</label>
                                    <div class="col-12">
                                        <input type="text" class="form-control" id="InputFIO" value="">
                                    </div>
                                </div>
                                <div class="form-group_input">
                                    <div class="row">
                                        <div class="col-xl-3 col-6">
                                            <label for="InputPosition">Должность</label>                                    
                                            <input type="text" class="form-control" id="InputPosition" value="">
                                        </div>
                                        <div class="col-xl-3 col-6">
                                            <label for="InputFnumber">Телефон</label>                                    
                                            <input type="text" class="form-control" id="InputFnumber" value="">
                                        </div>
                                        <div class="col-xl-3 col-6">
                                            <label for="InputFax">Факс</label>                                    
                                            <input type="text" class="form-control" id="InputFax" value="">
                                        </div> 
                                        <div class="col-xl-3 col-6">
                                            <label for="InputEmail">E-mail</label>                                    
                                            <input type="email" class="form-control" id="InputEmail" value="">
                                        </div>    
                                    </div>                                                
                                </div>
                            </div>
                            <div class="tabs_content_form-group col-xxl-10">
                                <span class="form-group_label">Ответственное лицо</span>
                                <div class="form-group_input">
                                    <label for="InputFIO">ФИО</label>
                                    <div class="col-12">
                                        <input type="text" class="form-control" id="InputFIO" value="">
                                    </div>
                                </div>
                                <div class="form-group_input">
                                    <div class="row">
                                        <div class="col-xl-3 col-6">
                                            <label for="InputPosition">Должность</label>                                    
                                            <input type="text" class="form-control" id="InputPosition" value="">
                                        </div>
                                        <div class="col-xl-3 col-6">
                                            <label for="InputFnumber">Телефон</label>                                    
                                            <input type="text" class="form-control" id="InputFnumber" value="">
                                        </div>
                                        <div class="col-xl-3 col-6">
                                            <label for="InputFax">Факс</label>                                    
                                            <input type="text" class="form-control" id="InputFax" value="">
                                        </div> 
                                        <div class="col-xl-3 col-6">
                                            <label for="InputEmail">E-mail</label>                                    
                                            <input type="email" class="form-control" id="InputEmail" value="">
                                        </div>    
                                    </div>                                                
                                </div>
                            </div>
                            <div class="tabs_content_form-group col-xxl-10">
                                <span class="form-group_label">Лицо осуществляющее сбор данных</span>
                                <div class="form-group_input">
                                    <label for="InputFIO">ФИО</label>
                                    <div class="col-12">
                                        <input type="text" class="form-control" id="InputFIO" value="">
                                    </div>
                                </div>
                                <div class="form-group_input">
                                    <div class="row">
                                        <div class="col-xl-3 col-6">
                                            <label for="InputPosition">Должность</label>                                    
                                            <input type="text" class="form-control" id="InputPosition" value="">
                                        </div>
                                        <div class="col-xl-3 col-6">
                                            <label for="InputFnumber">Телефон</label>                                    
                                            <input type="text" class="form-control" id="InputFnumber" value="">
                                        </div>
                                        <div class="col-xl-3 col-6">
                                            <label for="InputFax">Факс</label>                                    
                                            <input type="text" class="form-control" id="InputFax" value="">
                                        </div> 
                                        <div class="col-xl-3 col-6">
                                            <label for="InputEmail">E-mail</label>                                    
                                            <input type="email" class="form-control" id="InputEmail" value="">
                                        </div>    
                                    </div>                                                
                                </div>
                            </div>
                            <div class="tabs_content_form-group-wrapper col-xxl-10">
                                <span class="form-group_label-wrapper">Заполняется только учреждениями Департамента образования</span>
                                <div class="tabs_content_form-group">
                                    <span class="form-group_label">Дополнительная информация по учреждениям образования</span>
                                    <div class="form-group form-group_input">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <selectSearch data='test' label="Тип учреждения"></selectSearch>
                                            </div>
                                            <div class="col-xl-6">
                                                <selectMultiple data='test' label="Вид учреждения"></selectMultiple>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="tabs_content_form-group">
                                    <span class="form-group_label">Количество кабинетов учреждения в здании</span>
                                    <div class="form-group_input">
                                        <div class="row">
                                            <div class="col-xl-4 col-6">
                                                <label for="InputOver">Общих</label>                                    
                                                <input type="number" class="form-control" id="InputFax" value="">
                                            </div>
                                            <div class="col-xl-4 col-6">
                                                <label for="InputStudy">Учебных</label>                                    
                                                <input type="number" class="form-control" id="InputFax" value=""> 
                                            </div>
                                            <div class="col-xl-4 col-6">
                                                <label for="InputAdm">Административных</label>                                    
                                                <input type="number" class="form-control" id="InputFax" value=""> 
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div> 
                    <div class="tabs_content_pane tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="tabs_content_top">
                            <button class="bat bat-green" type="button" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Сохранить</button>
                            <button class="bat bat-orange" type="button">Изменить</button>
                            <button class="bat bat-red" type="button">Удалить</button>
                            <button class="bat bat-blue" type="button">Перенести</button>
                        </div>
                        <div class="tabs_content_container">
                            <div class="tabs_content_table-top row">
                                <div class="table-top_cell col-2">Номер</div>
                                <div class="table-top_cell-end col-10">Адрес</div>                          
                            </div>
                            <div class="tabs_content_table-row row">
                                <div class="table-row_cell col-2">1</div>
                                <div class="table-row_cell-end col-10">г. Курск, Красная площадь, д.6, кабинет 4</div>
                            </div>
                            <div class="button-add">
                                <button class="bat-circle">+</button>                            
                            </div>                          
                        </div>
                    </div>
                    <div class="tabs_content_pane tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div class="tabs_content_top">
                            <button class="bat bat-green" type="button">Сохранить</button>
                            <router-link to="/passport"><button class="bat bat-orange" type="button">Изменить</button></router-link>
                            <button class="bat bat-red" type="button">Удалить</button>
                            <button class="bat bat-blue" type="button">Печать</button>
                        </div>
                        <div class="tabs_content_container">
                            <div class="tabs_content_table-top row">
                                <div class="table-top_cell col-3">Статус</div>
                                <div class="table-top_cell col-2">Год</div>
                                <div class="table-top_cell-end col-7">Наименование</div>                              
                            </div>
                            <div class="tabs_content_table-row row">
                                <div class="table-row_cell col-3">Зарегистрирована <i class="fas fa-sync" data-toggle="modal" data-target="#statusModal"></i></div>
                                <div class="table-row_cell col-2">2019</div>
                                <div class="table-row_cell-end col-7">Паспорт ИС ИС "Бухгалтерия"</div>
                            </div>
                            <div class="tabs_content_table-row row">
                                <div class="table-row_cell col-3">Зарегистрирована <i class="fas fa-sync" data-toggle="modal" data-target="#statusModal"></i></div>
                                <div class="table-row_cell col-2">2019</div>
                                <div class="table-row_cell-end col-7">Паспорт ИС ИС "Бухгалтерия"</div>
                            </div> 
                            <div class="tabs_content_table-row row">
                                <div class="table-row_cell col-3">Зарегистрирована <i class="fas fa-sync" data-toggle="modal" data-target="#statusModal"></i></div>
                                <div class="table-row_cell col-2">2019</div>
                                <div class="table-row_cell-end col-7">Паспорт ИС ИС "Бухгалтерия"</div>
                            </div> 
                            <div class="tabs_content_table-row row">
                                <div class="table-row_cell col-3">Зарегистрирована <i class="fas fa-sync" data-toggle="modal" data-target="#statusModal"></i></div>
                                <div class="table-row_cell col-2">2019</div>
                                <div class="table-row_cell-end col-7">Паспорт ИС ИС "Бухгалтерия"</div>
                            </div> 
                            <div class="button-add">
                                <button class="bat-circle">+</button>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>    
</template>

<script>
import modal from '@/components/modal'
import selectSearch from '@/components/selects/select_search'
import selectMultiple from '@/components/selects/select_multiple'

export default {
    name: "mainView",
    components:{
        modal, selectSearch, selectMultiple
    }
}
</script>