<template>
    <div class="modal fade" id="statusModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="statusModalLabel">Изменение статуса</h5>
            </div>
            <div class="modal-body">
                <label for="inputPassword5" class="form-label">Текущий статус: <span>Зарегистрировано</span></label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="modal-footer">
            <button type="button" class="bat" data-dismiss="modal">Закрыть</button>
            <button type="button" class="bat bat-orange">Изменить</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal"
}
</script>