export const endpoints = {
    url: 'https://api.unsplash.com/search/photos',
    method: 'GET',
    queries: {
        limit: {
            name: 'per_page',
            value: 5,
        },
        category: {
            name: 'query',
            value: 'love',
        },
        access: {
            name: 'client_id',
            value: '425760667aaa959e061579be965d5bf110d5b1aba9097d5fe6d01864ce27966b',
        },
    }
}