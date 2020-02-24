import axios from 'axios';

export default {
    register: newUser => {
        return axios
            .post('users/register', {
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                password: newUser.password
            })
            .then(res => {
                console.log('Registered');
            })
    },

    login: user => {
        return axios
            .post('users/login', {
                email: user.email,
                password: user.password
            })
            .then(res => {
                localStorage.setItem('usertoken', res.data)
                return res.data
            })
            .catch(err => {
                console.log(err)
                console.log('User does not exist!')
            })
    },

    post: newPost => {
        return axios
            .post('/api/v1/posts', {
                title: newPost.title,
                body: newPost.body,
                user_id: newPost.user_id,
                user_name: newPost.user_name,
                like_user_id: newPost.like_user_id,
                likes: newPost.likes
            })
            .then(res => {
                console.log('New Post Made.');
            })

    },

    // getPosts: () => {
    //     return axios.get('/api/v1/allposts')
    //         .then(res => {
    //             const posts = res.data;
    //             console.log(posts)
    //             return posts
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
}