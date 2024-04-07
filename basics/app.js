document.addEventListener("alpine:init", () => {

    // dropdown
    Alpine.data("dropdown", () => ({
        open: false,
        toggle(){
            this.open = !this.open;
        },
    }));

    // store or storage
    Alpine.store('users',{
        username: 'Bababooiee',
        email: 'baba@boiee'
    })

});