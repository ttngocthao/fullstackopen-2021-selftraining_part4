const Blog = require('../models/Blog')
const mongoose = require('mongoose')
const openConnection2TestDb =async()=>{
    const url = process.env.TEST_MONGODB_URL
    await mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false, useCreateIndex: true })
}

const closeConnection2TestDb = async()=>{
    await mongoose.connection.close()
}

const initialBlogs =[
    {
        title: "First Post",
		author: "Thao Truong",
		url: "https://firstWebsite.com/",
		likes: 7,
    },
    {
        title: "Second Post",
		author: "Thao Truong",
		url: "https://secondWebsite.com/",
		likes: 7,
    }
]

const newValidPost ={
    title: "This is new post",
    author:"London King",
    url: "https://londonking.com/"
}

const blogsInDb = async()=>{
    const blogs = await Blog.find({})
    return blogs.map(blog=>blog.toJSON())
}

module.exports={
    initialBlogs,newValidPost,blogsInDb,openConnection2TestDb,closeConnection2TestDb
}