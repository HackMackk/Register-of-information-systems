<template>
    <div>
        <label>{{ label }}</label>
        <div class="box-for-select" tabindex="-1" 
        @focusin="focusInput"
        @focusout="blurInput" >
            <input type="text" ref="input"             
                @input="keyInput"
                class="form-control">
            <div class="list-for-select" ref="list">
                <ul>
                    <li v-for="option of options" 
                        @click="clickLi"
                        :key="option">{{ option }}</li>
                </ul>
            </div>
        </div>    
    </div>   
</template>

<script>
export default {
    props:['data', 'label'],
    data:() =>({
        options: []
    }),
   async mounted(){
            this.options = await this.$store.dispatch('giveTest', this.data);
        },
    methods:{
        focusInput(){
            this.$refs.list.style.display = 'block'                     
        },
        blurInput(){
            this.$refs.list.style.display = 'none'                 
        },
        keyInput(){
            this.$refs.list.firstChild.childNodes.forEach((el) => {
                (el.textContent.toLowerCase().indexOf(this.$refs.input.value.toLowerCase()) !== 0)
                    ? el.style.display = 'none'
                    : el.style.display = 'block'
            })
        },
        clickLi(ev){
            this.$refs.input.value = ev.target.textContent;
            this.$refs.list.style.display = 'none'                 
        }
    }
}
</script>