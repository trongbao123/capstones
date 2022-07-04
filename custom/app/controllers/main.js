function GetProductList() {
    const promise = axios({
        method: 'get',
        url: 'https://62a443e547e6e400638f209a.mockapi.io/api/v1/',
    })

    promise.then(function (result) {
        // xử lý thành công
        hienthiTable(result.data);
    })

    promise.then(function (error) {
        // xử lý thất bại
        alert('Xử lý thất bại');
        console.log(error);
    })
}