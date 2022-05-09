var app= new Vue({
    el: '#app',
    data: {
        arrayAlbum:[]
    },
    created(){
        axios.get('http://localhost/php-ajax-dischi/api/integers.php')
        .then((res)=>{
            console.log(res.data.response);
            this.arrayAlbum=res.data.response
        })
    }
    
})