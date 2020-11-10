<template>
    <div class="container-box">
        <modal />
        <div class="sidebar">
                    <div class="list-group list_sidebar" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-1" data-toggle="list" href="#panel-1" role="tab" aria-controls="1">1. Идентификационные характеристики</a>
                        <a class="list-group-item list-group-item-action" id="list-2" data-toggle="list" href="#panel-2" role="tab" aria-controls="2">2. Сведения о регистрации</a>
                        <a class="list-group-item list-group-item-action" id="list-3" data-toggle="list" href="#panel-3" role="tab" aria-controls="3">3. Содержательные характеристики</a>
                        <a class="list-group-item list-group-item-action" id="list-4" data-toggle="list" href="#panel-4" role="tab" aria-controls="4">4. Количественные и временные характеристики</a>
                        <a class="list-group-item list-group-item-action" id="list-5" data-toggle="list" href="#panel-5" role="tab" aria-controls="5">5. Программно-технические характеристики баз данных</a>
                        <a class="list-group-item list-group-item-action" id="list-6" data-toggle="list" href="#panel-6" role="tab" aria-controls="6">6. Информационная безопасность</a>
                        <a class="list-group-item list-group-item-action" id="list-7" data-toggle="list" href="#panel-7" role="tab" aria-controls="7">7. Сведения о затратах на создание и развитие ИС</a>
                        <a class="list-group-item list-group-item-action" id="list-8" data-toggle="list" href="#panel-8" role="tab" aria-controls="8">8. Правовые характеристики информации</a>
                    </div>
        </div>
        <div class="worklist">
            <div class="tabs_content_top">
                <button class="bat bat-green" type="submit">Сохранить</button>
            </div>
            <div class="tab-content" id="nav-tabContent">
            <div class="tabs_content_container tab-pane fade show active" id="panel-1" role="tabpanel" aria-labelledby="list-1">
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Наименование информационной системы:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-group-not col-xxl-10">
                    <span class="form-group_label-not">Категория системы</span>
                    <div class="form-group_input-notLabel">
                        <div class="row">
                            <div class="col-xxl-6">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="col-xxl-6">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>                                 
                        </div>                                                
                    </div>
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Контрагент:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Структура информационной системы:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="form-check tabs_content_form-check col">
                    <input type="checkbox" class="form-check-input" id="checkConnect">
                    <label class="form-check-label" for="checkConnect">Наличие подключений к сетям связи общего пользования и (или) сетям международного информационного обмена</label>                        
                </div>
                <div class="form-check tabs_content_form-check col">
                    <input type="checkbox" class="form-check-input" id="checkAccess">
                    <label class="form-check-label" for="checkAccess">Разграничение прав доступа пользователей информационные системы</label>                        
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="textareaIS" class="form-label">Место расположения ИС:</label>
                    <textarea class="form-control" id="textareaIS" rows="3"></textarea>
                </div>
                <div class="tabs_content_form-single col-lg-4 col-6">
                    <label for="InputDateIS" class="form-label">Дата ввода ИС в эксплуатацию:</label>
                    <input type="date" class="form-control" id="InputDateIS" aria-describedby="emailHelp">
                </div>
            </div>
            <div class="tab-pane fade" id="panel-2" role="tabpanel" aria-labelledby="list-2">
                <div class="tabs_content_form-single col-lg-6 col-10">
                    <label for="InputDateIS" class="form-label">Дата подачи заявления:</label>
                    <input type="date" class="form-control" id="InputDateIS" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-lg-6 col-10">
                    <label for="InputISName" class="form-label">Регистрационный номер:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-lg-6 col-10">
                    <label for="InputDateIS" class="form-label">Дата государственной регистрации:</label>
                    <input type="date" class="form-control" id="InputDateIS" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-lg-6 col-10">
                    <label for="InputDateIS" class="form-label">Дата снятия с регистрации:</label>
                    <input type="date" class="form-control" id="InputDateIS" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Уполномоченный специалист:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="tab-pane fade" id="panel-3" role="tabpanel" aria-labelledby="list-3">
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Объекты учета баз данных:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Перечень данных, содержащихся в каждой из баз данных:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Тип объекта:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Классификаторы:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Справочники:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Базовый государственный информационный ресурс, сведения которого получает и использует система:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Тематика ИС</label>
                    <select class="form-select" multiple aria-label="multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Государственные/муниципальные услуги, в предоставлении которых используется система</label>
                    <select class="form-select" multiple aria-label="multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Решаемые задачи</label>
                    <select class="form-select" multiple aria-label="multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="tab-pane fade" id="panel-4" role="tabpanel" aria-labelledby="list-4">
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Число объектов:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Объем данных каждого объекта:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Объем информации:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Ретроспектива:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Период обновления:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Режим обновления:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Число средств вычислительной техники, входящей в состав ИС:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
            </div>
            <div class="tab-pane fade" id="panel-5" role="tabpanel" aria-labelledby="list-5">
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Прикладное ПО:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Конфигурация:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="form-check tabs_content_form-check col">
                    <input type="checkbox" class="form-check-input" id="checkRight">
                    <label class="form-check-label" for="checkRight">Имеется удаленный доступ:</label>                        
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Характеристики канала связи:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Условия доступа:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Операционные системы</label>
                    <select class="form-select" multiple aria-label="multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">СУБД</label>
                    <select class="form-select" multiple aria-label="multiple select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="tab-pane fade" id="panel-6" role="tabpanel" aria-labelledby="list-6">
                <div class="tabs_content_form-group-not col-xl-6">
                    <span class="form-group_label-not">Вид доступа к содержащейся в ИС информации</span>
                    <div class="form-group_input-notLabel">
                        <div class="row">
                            <div class="col">
                                <div class="form-check tabs_content_form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        ИС с общедоступной информацией
                                    </label>
                                    </div>
                                    <div class="form-check tabs_content_form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        ИС с информацией ограниченного доступа
                                    </label>
                                </div>
                            </div>                                                                    
                        </div>                                                
                    </div>
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Класс защищенности информации (также указываются реквизиты акта классификации) или требования по обеспечению безопасности информации:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Сведения о проведении аттестации и (или) сертификации ИС:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Мероприятия по  защите информации:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div> 
            </div>
            <div class="tab-pane fade" id="panel-7" role="tabpanel" aria-labelledby="list-7">
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="textareaIS" class="form-label">Общие затраты на создание и развитие ИС:</label>
                    <textarea class="form-control" id="textareaIS" rows="6"></textarea>
                </div>
            </div>
            <div class="tab-pane fade" id="panel-8" role="tabpanel" aria-labelledby="list-8">
                <div class="tabs_content_form-single col-xxl-8">
                    <label for="InputISName" class="form-label">Обладатель информации:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Документы, устанавливающие право собственности:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="tabs_content_form-single col-xxl-10">
                    <label for="InputISName" class="form-label">Ограничение прав:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import modal from '@/components/modal'

export default {
    name: "passport",
    components:{
        modal
    }
}
</script>