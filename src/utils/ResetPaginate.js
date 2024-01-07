export const deletePaginate = () => {
    if(localStorage.paginate){
        localStorage.removeItem('paginate')
    }
}